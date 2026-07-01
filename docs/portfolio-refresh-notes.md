# Portfolio Refresh Notes

This document summarizes the major portfolio updates made during the 2026 refresh work. It is intended to make the design/content decisions easy to review later without digging through every pull request.

## Positioning

The portfolio is now aimed at technical analyst, IBM mainframe, mainframe storage, Python automation, web development, and support-engineering opportunities.

Primary positioning used across the site:

- Mainframe Storage Analyst
- Software & AI Developer
- IBM z/OS / mainframe learning and experience
- Python automation
- React / web development
- Technical analysis and documentation

## Resume page changes

The resume page was reorganized to reduce redundancy and remove age-related signals.

Changes made:

- Removed visible dates from the resume page.
- Removed dated skill-progress bars.
- Replaced percentage bars with grouped skill chips.
- Moved the page toward a cleaner web-resume layout.
- Updated title/positioning to emphasize mainframe storage, software, and AI development.
- Simplified the IBM z/OS Mainframe Apprenticeship Program entry.
- Tightened credential labels so they read like concise resume entries.
- Standardized resume item spacing so the section reads more evenly.

Current resume structure:

- Profile summary
- Credentials
- Training & Education
- Experience
- Core Skills

## Credentials and profile links

The site now separates the full Credly profile from the individual CompTIA A+ verification link.

Current profile links:

- GitHub: https://github.com/cbw29512
- LinkedIn: https://www.linkedin.com/in/divclass01/
- Credly Badges: https://www.credly.com/users/christopherwilson/badges
- Verify A+: https://www.youracclaim.com/badges/ceb64850-822b-4477-9a6b-d5254d29d10f/public_url

## Accessibility and SEO basics

Baseline accessibility and SEO improvements were added.

Accessibility work:

- Added a skip-to-main-content link.
- Added a real main content landmark.
- Added visible keyboard focus styling.
- Improved mobile tap targets and spacing.
- Improved responsive behavior for contact cards, projects, skill chips, and resume spacing.

SEO work:

- Improved page title.
- Improved meta description.
- Added robots tag.
- Added canonical URL.
- Added Open Graph title/description.

This is an improvement, but not a full accessibility certification. A final pass should still include Lighthouse, axe DevTools, keyboard testing, color contrast review, and mobile testing.

## Service worker / cache fix

The old Create React App service worker caused stale GitHub Pages builds to persist in Chrome even after deployment.

Changes made:

- Removed service worker registration.
- Added logic to unregister existing service workers when the app loads.
- This should make future GitHub Pages deploys easier to verify without fighting old cached bundles.

## Projects page changes

The projects page was reorganized into three stronger groups.

### Featured

Best current examples of technical direction and portfolio strength.

Included projects:

- Wilson Lab
- DungeonMaps
- OpenClawOps
- Resume Portfolio Refresh

### Case Studies

Professional work framed safely as capabilities and workflows without exposing employer-owned code or sensitive system details.

Included case studies:

- IBM z/OS Storage Administration
- Mainframe Production Support
- Technical Analyst Workflow Documentation
- Python Automation for Operations

### Labs

Hands-on experiments and prototypes that show range across local AI, network appliances, ecommerce-ready web work, and automation ideas.

Included labs:

- WatchPi Network Appliance
- Local AI Workstation Gear
- HeavyClaw Avatar
- Magic & Mystery Mercantile Prototypes
- Revenue Recovery Workflow Prototype

## Mobile optimization work

Mobile improvements added in the current React/CSS version:

- More readable small-screen project cards.
- Single-column project layout on mobile.
- Improved project card spacing and action areas.
- Better resume spacing on small screens.
- Skill chips resize and wrap more cleanly.
- Contact cards stack into a single column on phones.
- Hero buttons become easier to tap on mobile.

The site is now more phone-friendly, but should still be tested on a real phone before finalizing.

## Card sizing standardization

A follow-up CSS pass standardizes card-like elements across the site.

Current rules:

- Project cards share a common minimum height and stretch evenly in the grid.
- Project card body content flexes so action buttons stay aligned.
- Contact cards share a compact minimum height and stretch evenly in the contact grid.
- Resume credential/training entries have more consistent spacing.
- Skill groups use consistent card radius and spacing.
- Mobile views keep cards readable while preserving consistent spacing.

## Deployment checklist

After merging future PRs:

```powershell
cd $env:USERPROFILE\Desktop\react-portfolio

git fetch origin
git switch master
git reset --hard origin/master

npm run build
npm run deploy
```

Then test with cache-busting URLs such as:

- https://cbw29512.github.io/react-portfolio/?fresh=999
- https://cbw29512.github.io/react-portfolio/resume?fresh=999
- https://cbw29512.github.io/react-portfolio/projects?fresh=999
- https://cbw29512.github.io/react-portfolio/contact?fresh=999

## Future improvement ideas

Recommended next passes:

- Visual polish for the resume left column.
- More recruiter-style project case-study wording.
- Lighthouse and axe accessibility audit.
- Real phone testing.
- Consider Astro or another static-first framework later, once the current React version is stable and fully reviewed.
