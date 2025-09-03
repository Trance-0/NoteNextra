#!/usr/bin/env python3
"""
Script to generate markdown files from _meta.js entries.
For each entry in _meta.js, creates a markdown file with the key as filename and value as H1.
"""

import os
import re
import json
from pathlib import Path

def parse_meta_js(file_path):
    """Parse the _meta.js file and extract entries."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove export default and clean up
    content = content.replace('export default', '').strip()
    content = content.replace('{', '').replace('}', '').strip()
    
    entries = {}
    lines = content.split('\n')
    
    for line in lines:
        line = line.strip()
        if not line or line.startswith('//') or line.startswith('"---"'):
            continue
            
        # Match key: "value" pattern
        match = re.match(r'(\w+):\s*"([^"]+)"', line)
        if match:
            key = match.group(1)
            value = match.group(2)
            entries[key] = value
    
    return entries

def get_user_confirmation(action, file_path, title):
    """Get user confirmation for file operations."""
    print(f"\n{action}: {file_path}")
    print(f"Title: {title}")
    
    while True:
        response = input("Proceed? (y/n/a for all/q to quit): ").lower().strip()
        if response in ['y', 'yes']:
            return True
        elif response in ['n', 'no']:
            return False
        elif response in ['a', 'all']:
            return 'all'
        elif response in ['q', 'quit']:
            return 'quit'
        else:
            print("Please enter 'y' (yes), 'n' (no), 'a' (all), or 'q' (quit)")

def create_or_update_markdown_file(file_path, title, auto_confirm=False):
    """Create a new markdown file or update existing one with correct H1."""
    file_path = Path(file_path)
    
    # Create directory if it doesn't exist
    file_path.parent.mkdir(parents=True, exist_ok=True)
    
    if file_path.exists():
        # Read existing file to check current H1
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        lines = content.split('\n')
        current_h1 = None
        for line in lines:
            if line.startswith('# '):
                current_h1 = line[2:].strip()
                break
        
        # Check if H1 needs updating
        if current_h1 == title:
            print(f"Skipped: {file_path} (H1 already correct)")
            return True
        
        if not auto_confirm:
            action = f"Update existing file"
            if current_h1:
                action += f" (current H1: '{current_h1}')"
            else:
                action += " (no H1 found)"
            
            confirmation = get_user_confirmation(action, file_path, title)
            if confirmation == 'quit':
                return 'quit'
            elif confirmation == 'all':
                auto_confirm = True
            elif not confirmation:
                print(f"Skipped: {file_path}")
                return True
        
        # Update the file
        updated_lines = []
        h1_updated = False
        
        for line in lines:
            # Check if this is an H1 line (starts with #)
            if line.startswith('# ') and not h1_updated:
                updated_lines.append(f"# {title}")
                h1_updated = True
            else:
                updated_lines.append(line)
        
        # If no H1 was found, add it at the beginning
        if not h1_updated:
            updated_lines.insert(0, f"# {title}")
            updated_lines.insert(1, "")  # Add empty line after H1
        
        # Write updated content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(updated_lines))
        
        print(f"Updated: {file_path}")
    else:
        if not auto_confirm:
            confirmation = get_user_confirmation("Create new file", file_path, title)
            if confirmation == 'quit':
                return 'quit'
            elif confirmation == 'all':
                auto_confirm = True
            elif not confirmation:
                print(f"Skipped: {file_path}")
                return True
        
        # Create new file
        content = f"# {title}\n\n"
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Created: {file_path}")
    
    return True

def main():
    # Get current working directory
    cwd = Path.cwd()
    print(f"Current working directory: {cwd}")
    
    # Path to the _meta.js file (relative to current working directory)
    meta_file = cwd / "content/CSE5519/_meta.js"
    
    if not meta_file.exists():
        print(f"Error: {meta_file} not found!")
        return
    
    # Parse the _meta.js file
    entries = parse_meta_js(meta_file)
    
    if not entries:
        print("No entries found in _meta.js")
        return
    
    # Output directory for markdown files (relative to current working directory)
    output_dir = cwd / "content/CSE5519"
    
    # Filter out separators and special entries
    valid_entries = {k: v for k, v in entries.items() if k != "index" and not k.startswith("---")}
    
    print(f"Found {len(valid_entries)} entries to process from {meta_file}")
    print("Options: y=yes, n=no, a=all (auto-confirm remaining), q=quit")
    print("-" * 50)
    
    auto_confirm = False
    processed = 0
    skipped = 0
    
    # Generate markdown files
    for key, title in valid_entries.items():
        # Create markdown file path (relative to current working directory)
        md_file = output_dir / f"{key}.md"
        
        # Create or update the markdown file
        result = create_or_update_markdown_file(md_file, title, auto_confirm)
        
        if result == 'quit':
            print("\nOperation cancelled by user.")
            break
        elif result:
            processed += 1
        else:
            skipped += 1
    
    print("-" * 50)
    print(f"Completed: {processed} files processed, {skipped} files skipped")

if __name__ == "__main__":
    main()
