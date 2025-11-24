#!/usr/bin/env python3
"""
This code is generate by ChatGPT 5.1, as test automatic script to generate _meta.js file

Generate _meta.js with Math/CSE link entries and labeled sections
from the original _meta.js.

Usage:
    python generate_meta.py [path/to/_meta.js]

If no path is given, it assumes _meta.js is next to this script.
"""

import sys
from pathlib import Path
import re


COMMENT_BLOCK = [
    "  /**\n",
    '   * Do not remove the labels "Math Courses Start"\n',
    '   * and "Math Courses End" and "CSE Courses Start" and "CSE Courses End"\n',
    "   * or the separated builds will not work.\n",
    "   * \n",
    "   * WE USE THESE LABELS TO BUILD THE SEPARATED WEBSITES FOR MATH AND CSE COURSES.\n",
    "   */\n",
]


def parse_properties(lines):
    """
    Parse top-level properties (indented 4 spaces) of the export default object.
    Returns:
        header_lines: lines up to and including 'export default {'
        footer_lines: closing '}' (and anything after)
        props: dict name -> list of lines for that property
        order: order of property names as they appeared
    """
    # find 'export default {' line
    export_idx = None
    for i, line in enumerate(lines):
        if "export default" in line:
            export_idx = i
            break
    if export_idx is None:
        raise ValueError("No 'export default' found in file.")

    header = lines[: export_idx + 1]
    body = lines[export_idx + 1 :]

    # last non-empty line is closing brace of the object
    last_non_empty = len(lines) - 1
    while last_non_empty >= 0 and lines[last_non_empty].strip() == "":
        last_non_empty -= 1
    footer = lines[last_non_empty:]

    body_until_footer = body[: len(body) - len(footer) + 1]  # include blank before footer if any

    prop_re = re.compile(r"^ {4}(\w+)\s*:")
    props = {}
    order = []

    i = 0
    n = len(body_until_footer)
    while i < n:
        line = body_until_footer[i]
        m = prop_re.match(line)
        if not m:
            i += 1
            continue
        key = m.group(1)
        start = i
        brace_count = line.count("{") - line.count("}")
        j = i + 1
        while j < n and brace_count > 0:
            brace_count += body_until_footer[j].count("{") - body_until_footer[j].count("}")
            j += 1
        block = body_until_footer[start:j]
        props[key] = block
        order.append(key)
        i = j

    return header, footer, props, order


def build_links_block(keys):
    """Generate *_link blocks for given course keys (Math* or CSE*)."""
    out = []
    for k in keys:
        out.append(f"    {k}_link: {{\n")
        out.append(f"      title: '{k}',\n")
        out.append("      type: 'page',\n")
        out.append(f"      href: '/{k}'\n")
        out.append("    },\n")
    return out


def generate_new_meta(lines):
    header, footer, props, order = parse_properties(lines)

    math_keys = [k for k in order if k.startswith("Math")]
    cse_keys = [k for k in order if k.startswith("CSE")]
    other_keys = [k for k in order if k not in math_keys + cse_keys + ["menu"]]

    if "menu" not in props:
        raise ValueError("Expected a top-level 'menu' property.")

    out = []

    # header (includes "export default {")
    out.extend(header)
    # comment block
    out.extend(COMMENT_BLOCK)
    # menu
    out.extend(props["menu"])

    # Math links
    out.extend(build_links_block(math_keys))

    # Math Courses section
    out.append("    /* Math Courses Start */\n")
    for k in math_keys:
        out.extend(props[k])
    out.append("    /* Math Courses End */\n")

    # CSE links
    out.extend(build_links_block(cse_keys))

    # CSE Courses section
    out.append("    /* CSE Courses Start */\n")
    for k in cse_keys:
        out.extend(props[k])
    out.append("    /* CSE Courses End */\n")

    # other properties (Swap, index, about, contact, etc.) in original order
    for k in other_keys:
        out.extend(props[k])

    # footer (closing brace, etc.)
    out.extend(footer)

    return out


def main():
    if len(sys.argv) > 1:
        meta_path = Path(sys.argv[1]).resolve()
    else:
        meta_path = Path(__file__).with_name("_meta.js")

    if not meta_path.exists():
        raise SystemExit(f"Meta file not found: {meta_path}")

    lines = meta_path.read_text(encoding="utf-8").splitlines(keepends=True)
    new_lines = generate_new_meta(lines)
    meta_path.write_text("".join(new_lines), encoding="utf-8")
    print(f"Rewrote meta file at {meta_path}")


if __name__ == "__main__":
    main()
