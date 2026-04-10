#!/bin/bash
# Script to create issues on Gitea NoteNextra repository
# Requires GITEA_TOKEN environment variable

set -e

GITEA_TOKEN="${GITEA_TOKEN:-}"
GITEA_URL="https://git.trance-0.com"
REPO="Trance-0/NoteNextra-origin"

if [ -z "$GITEA_TOKEN" ]; then
    echo "Error: GITEA_TOKEN environment variable is not set"
    echo "Please set it and run again:"
    echo "  export GITEA_TOKEN='your_token_here'"
    exit 1
fi

API_BASE="$GITEA_URL/api/v1"

create_issue() {
    local title="$1"
    local body="$2"
    
    local response=$(curl -s -X POST "$API_BASE/repos/$REPO/issues" \
        -H "Content-Type: application/json" \
        -H "Authorization: token $GITEA_TOKEN" \
        -d "{\"title\":\"$title\",\"body\":\"$body\"}")
    
    # Extract issue number without jq
    echo "$response" | grep -o '"number":[0-9]*' | cut -d: -f2
}

echo "Creating issues on $REPO..."

# Issue 1: Missing index.md for Freiwald_summer
issue1=$(create_issue \
    "Missing overview file for Math401/Freiwald_summer research notes" \
    "The \`Freiwald_summer\` folder contains 8 detailed research notes (Math401_P*.md, Math401_T*.md) but lacks an \`index.md\` introduction file.\n\n**Current state:**\n- Folder: \`content/Math401/Freiwald_summer/\`\n- Files present: 8 content files\n- Missing: \`index.md\`, proper overview\n\n**Impact:**\n- Navigation via \`_meta.js\` points to non-existent overview\n- Users cannot understand the context of the research notes\n\n**Action required:**\n- Create \`index.md\` with overview of Freiwald summer research project\n- Add context for the P*.md (problem?) and T*.md (thesis?) files")
echo "Created issue #$issue1: Missing overview file for Freiwald_summer"

# Issue 2: Branch synchronization
issue2=$(create_issue \
    "Local main branch missing files present on Gitea trance-0/main" \
    "Local \`main\` branch is missing files that exist on Gitea's \`trance-0/main\` branch.\n\n**Missing files:**\n- \`content/CSE4303/CSE4303_L18.md\`\n- \`content/Math4202/Math4202_L29.md\`\n- \`content/Math4202/Math4202_L30.md\`\n- \`content/Math4202/Math4202_L31.md\`\n- \`content/Math4302/Math4302_L30.md\`\n- \`public/Math4202/Seifert-Van-Kampen-Theorem.png\`\n- \`public/Math4202/universal-covering-of-figure-8.png\`\n\n**Action required:**\n- Fetch from Gitea remote\n- Merge or cherry-pick missing files\n- Ensure local main is in sync with Gitea main")
echo "Created issue #$issue2: Branch synchronization - missing files"

# Issue 3: Missing distribute branch
issue3=$(create_issue \
    "Branch 'distribute' exists on Gitea but not in local clone" \
    "The \`distribute\` branch exists on Gitea (\`trance-0/distribute\`) but is not present in local repository.\n\n**Current state:**\n- Gitea branches: main, dev-test, distribute\n- Local branches: main, dev-test, nesbitt-mcp-worker-test-bootstrap\n- Missing: distribute branch\n\n**Action required:**\n- Fetch and checkout distribute branch\n- Review contents and purpose\n- Merge if applicable")
echo "Created issue #$issue3: Missing distribute branch locally"

# Issue 4: Naming standardization
issue4=$(create_issue \
    "Standardize lecture file naming convention across all courses" \
    "Multiple naming conventions exist across course folders, creating inconsistency and maintenance overhead.\n\n**Current inconsistencies:**\n\n| Course | Current Pattern | Expected Pattern |\n|--------|-----------------|------------------|\n| Math3200 | \`Lecture_*.mdx\` | \`CourseName_L#.md\` |\n| CSE5519 | \`_A#`, `_B#\` suffixes | \`_L#\` (Lecture) or \`_E#\` (Exam) |\n| Math401/4111/4121/etc | Have \`Exam_reviews\` directories | Other courses don't |\n| Swap | Mixed content | Should be organized by course |\n\n**Proposed standard:**\n- Lectures: \`CourseName_L##.md\`\n- Exams: \`CourseName_E##.md\`\n- Assignments: \`CourseName_A##.md\`\n- Notes: \`CourseName_N##.md\`\n- Subsections: \`CourseName_L##_##.md\`\n\n**Action required:**\n- Decide on naming standard\n- Create migration script\n- Update all affected files\n- Update _meta.js references")
echo "Created issue #$issue4: Naming standardization needed"

# Issue 5: Swap folder organization
issue5=$(create_issue \
    "Decide on Swap folder purpose and reorganize content" \
    "The \`Swap\` folder contains mixed content from multiple courses but is currently hidden in navigation.\n\n**Current contents:**\n- \`CSE361S_L2.md\`, \`CSE361S_W1.md\`\n- \`Math4351_L1.md\`\n- \`Math4501/\` (subdirectory)\n- \`Music1260_M2.md\`\n\n**Issues:**\n- No \`_meta.js\` file\n- No \`index.md\` explaining purpose\n- Mixed content from 4+ different courses\n- Currently hidden from navigation\n\n**Questions to resolve:**\n1. What is the purpose of Swap folder?\n2. Should content be migrated to proper course folders?\n3. Should folder be removed if obsolete?\n4. If kept, needs proper documentation\n\n**Action required:**\n- Decide on Swap folder fate\n- Migrate content if needed\n- Add documentation or remove")
echo "Created issue #$issue5: Swap folder organization needed"

# Issue 6: README deployment links
issue6=$(create_issue \
    "README deployment buttons reference wrong repo URL" \
    "Deployment buttons in README.md point to \`Notechondria\` repo instead of \`NoteNextra\`.\n\n**Affected lines:**\n- Deploy with Vercel button (references Notechondria)\n- Deploy to Cloudflare button (references Notechondria)\n- Docker deployment reference (references Notechondria)\n\n**Impact:**\n- Users clicking deployment buttons fork wrong repo\n- Confusion about which repo to deploy\n\n**Action required:**\n- Update all deployment links to point to NoteNextra repo\n- Verify all references are correct")
echo "Created issue #$issue6: Fix README deployment links"

# Issue 7: Missing index.md for Extending_thesis
issue7=$(create_issue \
    "Math401/Extending_thesis index.md may be incomplete or empty" \
    "The \`Extending_thesis\` folder has an \`index.md\` file, but the \`_meta.js\` references it as 'Overview of thesis' which may lack sufficient content.\n\n**Current state:**\n- \`content/Math401/Extending_thesis/index.md\` exists\n- \`_meta.js\` entry: \"Math 401, Fall 2025: Overview of thesis\"\n- Content files: R*.md, S*.md\n\n**Action required:**\n- Review index.md content\n- Ensure it provides adequate overview of thesis work\n- Add context for R*.md and S*.md files")
echo "Created issue #$issue7: Review Extending_thesis overview"

echo ""
echo "All issues created successfully!"
echo "Total issues created: 7"
