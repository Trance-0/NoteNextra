#!/usr/bin/env python3
"""
This code is generate by ChatGPT 5.1, as test automatic script to generate _meta.js file

Generate ./docker/_meta.js with Math/CSE link entries and labeled sections
from ./content/_meta.js.

This script is intended to be run directly (no arguments) from anywhere.
"""

from pathlib import Path
import re

# --------------------------------------------------------------------
# Configuration
# --------------------------------------------------------------------

SCRIPT_DIR = Path(__file__).resolve().parent
SRC_META = SCRIPT_DIR.parent / "content" / "_meta.js"
DST_META = SCRIPT_DIR / "_meta.js"

COMMENT_BLOCK = [
    "  /**\n",
    '   * Do not remove the labels "Math Courses Start"\n',
    '   * and "Math Courses End" and "CSE Courses Start" and "CSE Courses End"\n',
    "   * or the separated builds will not work.\n",
    "   * \n",
    "   * WE USE THESE LABELS TO BUILD THE SEPARATED WEBSITES FOR MATH AND CSE COURSES.\n",
    "   */\n",
]

PROP_RE = re.compile(r"^ {4}(\w+)\s*:")


def parse_properties(lines):
    """
    Parse top-level properties (indented 4 spaces) of the export default object.

    Returns:
        header_lines: lines up to and including 'export default {'
        footer_lines: closing '}' (and anything after)
        props: dict name -> list of lines for that property
        order: order of property names as they appeared
    """
    export_idx = None
    for i, line in enumerate(lines):
        if "export default" in line:
            export_idx = i
            break
    if export_idx is None:
        raise ValueError("No 'export default' found in source meta file.")

    # find closing brace of the object (typically last non-empty '}' line)
    closing_idx = None
    for i in range(len(lines) - 1, -1, -1):
        if lines[i].strip().startswith("}"):
            closing_idx = i
            break
    if closing_idx is None or closing_idx <= export_idx:
        raise ValueError("Could not locate closing '}' of export default object.")

    header = lines[: export_idx + 1]
    footer = lines[closing_idx:]
    body = lines[export_idx + 1 : closing_idx]

    props = {}
    order = []

    i = 0
    n = len(body)
    while i < n:
        line = body[i]
        m = PROP_RE.match(line)
        if not m:
            i += 1
            continue

        key = m.group(1)
        start = i

        brace_count = line.count("{") - line.count("}")
        j = i + 1
        while j < n and brace_count > 0:
            brace_count += body[j].count("{") - body[j].count("}")
            j += 1

        block = body[start:j]
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
    other_keys = [
        k for k in order
        if k not in math_keys + cse_keys + ["menu"]
    ]

    if "menu" not in props:
        raise ValueError("Expected a top-level 'menu' property in source meta.")

    out = []

    # header (includes "export default {")
    out.extend(header)
    # comment block
    out.extend(COMMENT_BLOCK)
    # original menu block
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


# --------------------------------------------------------------------
# Script execution (no CLI args, no main())
# --------------------------------------------------------------------

if not SRC_META.exists():
    raise SystemExit(f"Source meta file not found: {SRC_META}")

src_lines = SRC_META.read_text(encoding="utf-8").splitlines(keepends=True)
new_lines = generate_new_meta(src_lines)
DST_META.write_text("".join(new_lines), encoding="utf-8")

print(f"Generated meta file: {DST_META}")
