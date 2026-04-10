# NoteNextra-Repository Issues Report

Generated: 2026-04-08
Target Repo: https://git.trance-0.com/Trance-0/NoteNextra-origin

## Summary of Findings

### 1. Naming Inconsistencies Across Courses

| Course | Current Naming Pattern | Expected Pattern | Issue |
|--------|----------------------|------------------|-------|
| **Math3200** | `Lecture_*.mdx` | `CourseName_L#.md` | Inconsistent with all other courses |
| **CSE5519** | `_A#`, `_B#` suffixes | `_L#` (Lecture) or `_E#` (Exam) | Unclear categorization |
| **Math401/4111/4121/416/4201/4202/4302** | Have `Exam_reviews` directories | Other courses don't | Inconsistent structure |
| **Swap folder** | Mixed course content (CSE361S, Math4351, Music1260, Math4501) | Should be organized by course | Content mixing without clear purpose |

### 2. Missing Files (Definition Gaps)

#### 2.1 Math401 - Freiwald_summer
- **Issue**: Folder `content/Math401/Freiwald_summer/` exists with 8 content files
- **Missing**: `index.md` (overview/introduction file)
- **Missing**: `_meta.js` entry for proper navigation (files exist but no parent index)
- **Impact**: Navigation broken, no introduction to the research project notes

#### 2.2 Extending_thesis - Incomplete Overview
- **Issue**: `Extending_thesis/_meta.js` references `"index": "Math 401, Fall 2025: Overview of thesis"`
- **Missing**: Actual overview content in `index.md` (file exists but may be empty or minimal)
- **Impact**: Users clicking "Overview of thesis" get no contextual information

### 3. Branch Inconsistencies (Local vs Gitea Remote)

| Branch | Local Status | Gitea Status | Issue |
|--------|--------------|--------------|-------|
| **main** | Has content | Has different content | Missing files: L18 (CSE4303), L29-L31 (Math4202), L30 (Math4302), public images |
| **distribute** | ❌ Not present | ✅ Exists on Gitea | Branch not fetched/checked out locally |
| **dev-test** | ✅ Present on both | ✅ Present | OK |
| **nesbitt-mcp-worker-test-bootstrap** | ✅ Local only | ❌ Not on Gitea | Stale local branch |

### 4. Missing Definitions/Incomplete Proofs

Based on sampling of Math4302 content:
- Files contain definitions and examples but may lack:
  - **Cross-references** between related concepts
  - **Theorem-proof structure** consistency
  - **Summary sections** at end of lectures

### 5. Configuration Issues

#### 5.1 Main _meta.js
- **Issue**: `Swap` entry has `display: 'hidden'` but contains active content from multiple courses
- **Question**: Should Swap be visible? If not, should content be migrated to proper course folders?

#### 5.2 README Deployment Links
- **Issue**: README references `Notechondria` repo URL instead of `NoteNextra` in deployment buttons
- **Location**: Lines 12, 17, 22 (Deploy with Vercel, Cloudflare, Docker)
- **Impact**: Forking/deployment points to wrong repo

---

## Recommended Actions (Prioritized)

### High Priority

1. **Create Issue: Missing index.md for Freiwald_summer**
   - Title: "Missing overview file for Math401/Freiwald_summer research notes"
   - Description: The `Freiwald_summer` folder contains 8 detailed research notes but lacks an `index.md` introduction file. Navigation via `_meta.js` points to a non-existent overview.

2. **Create Issue: Branch synchronization - missing files on local main**
   - Title: "Local main branch missing files present on Gitea trance-0/main"
   - Description: Local main branch is missing: CSE4303_L18.md, Math4202_L29-31.md, Math4302_L30.md, and public images. Gitea main has these files. Sync required.

3. **Create Issue: Branch 'distribute' not present locally**
   - Title: "Branch 'distribute' exists on Gitea but not in local clone"
   - Description: The `distribute` branch exists on Gitea (`trance-0/distribute`) but is not present in local repository. Needs to be fetched and reviewed.

### Medium Priority

4. **Create Issue: Naming standardization across courses**
   - Title: "Standardize lecture file naming convention across all courses"
   - Description: Math3200 uses `Lecture_*.mdx` while all other courses use `Course_L#.md`. CSE5519 uses `_A#/_B#` suffixes. Need unified naming standard.

5. **Create Issue: Swap folder content organization**
   - Title: "Decide on Swap folder purpose and reorganize content"
   - Description: Swap folder contains mixed content from CSE361S, Math4351, Music1260, Math4501. Currently hidden but unclear if this is intentional. Options:
     - Move content to proper course folders
     - Add index.md explaining purpose
     - Remove if obsolete

6. **Create Issue: Fix README deployment links**
   - Title: "README deployment buttons reference wrong repo URL"
   - Description: Deployment buttons point to `Notechondria` instead of `NoteNextra`.

### Low Priority

7. **Create Issue: Enhance theorem-proof structure consistency**
   - Title: "Standardize theorem-proof structure across lecture notes"
   - Description: Review content for consistent proof formatting, cross-references, and summary sections.

8. **Create Issue: Add missing _meta.js entries**
   - Title: "Ensure all content folders have proper _meta.js navigation entries"
   - Description: Verify all subdirectories have `_meta.js` files for proper navigation (especially Math401 subdirectories).

---

## Files Requiring Immediate Attention

| File | Issue | Severity |
|------|-------|----------|
| `content/Math401/Freiwald_summer/index.md` | Missing | High |
| `content/Math401/Extending_thesis/index.md` | May be incomplete | Medium |
| `_meta.js` (root) | Swap folder visibility unclear | Medium |
| `README.md` | Wrong repo URLs in deployment links | Medium |
| Local `main` branch | Missing files from Gitea main | High |
| Local branches | Missing `distribute` branch | Medium |

---

## Next Steps

1. **Sync branches**: Fetch and merge missing files from Gitea main
2. **Create missing files**: Add `index.md` for Freiwald_summer
3. **Standardize naming**: Decide on naming convention and create migration script
4. **Organize Swap**: Decide on Swap folder fate (migrate, document, or remove)
5. **Fix README**: Correct deployment links

---

*Report generated by automated repository analysis*
