# Daily Tech Insights — Current Site Structure & User-Flow Audit

**Audit date:** 2026-11-11  
**Repository:** franklinctapley-del1122/dailytechinsigts  
**Production domain:** https://dailytechinsights.com (non-www canonical)  
**Audit basis:** Project Governance & Roadmap, SOP Register, detailed SOP principles retrieved from the dedicated SOP workspace, current `main` source tree, and live homepage.  
**Status:** Read-only audit and proposed alignment plan. No production code, routes, sitemap, or indexing settings changed.

## 1. Executive finding

The current production experience is a clean but very thin publication shell. The code and live homepage agree on five top-level hubs: Phones, AI, Software, Cybersecurity, and How-to & Fixes. Each hub has three sub-hubs (15 total). The URL hierarchy is sensible as a starting taxonomy, but the content and navigation flow stops at the sub-hub level: sub-hub pages contain a “Guides coming to this hub” placeholder and do not list actual guides, related resources, or next steps.

The immediate problem is not that the five hubs need replacing. The problem is that the current page system has no article/content model, no hub-to-article discovery layer, no related-content flow, and no complete editorial trust/contact layer. The correct action is to preserve the approved five hubs and 15 sub-hubs, then build the missing semantic and publishing layers around them after Phase 1 URL/SCN approval.

## 2. What exists today (source-confirmed)

### Current URL hierarchy

- `/` — homepage
- `/phones/`, `/ai/`, `/software/`, `/cybersecurity/`, `/how-to/` — five hubs
- Three sub-hubs under each hub (15 total), defined in `src/lib/site.ts`
- `/about/`, `/contact/`, `/editorial-policy/`, `/privacy-policy/`
- `/sitemap.xml`, `/sitemap-pages.xml`, `/sitemap-posts.xml`, `/robots.txt`

The page sitemap source defines 25 entries: homepage + four information pages + five hubs + 15 sub-hubs. The post sitemap returns an empty set because there is no published article library.

### Current implementation

- One Next.js optional catch-all route (`src/app/[[...slug]]/page.tsx`) renders homepage, hub, and sub-hub pages.
- Hub and sub-hub metadata are generated from the static `hubs` data in `src/lib/site.ts`.
- The header exposes only the five hubs; the footer repeats hub links and informational pages.
- Hub pages link to their three sub-hubs.
- Sub-hub pages show breadcrumbs back to Home and the parent hub, but no child article links or sibling links.
- Homepage shows the five hubs and one generic “Explore how-to guides” CTA.
- No article template, article content source, author profile, review attribution, publication/update dates, related articles component, tag/entity model, or hub article listing exists in the repository tree.
- No article breadcrumbs/schema or article-specific metadata generation exists.
- Sub-hub pages output CollectionPage schema, which is directionally appropriate for a future topic listing, but the visible page currently contains no actual collection items.
- The sitewide footer and layout have no author/editorial team directory or contact channel.
- About, Contact, Editorial Policy and Privacy Policy are pre-launch/incomplete. The contact page has no monitored contact method; privacy policy explicitly warns not to enable analytics/newsletter/ads until it is complete.

## 3. Current user journey diagnosis

| Journey step | Current behavior | Gap |
|---|---|---|
| Discover site | Homepage explains general consumer tech promise and shows five hubs | Good starting point, but no featured useful guide or clear paths for common reader tasks |
| Choose topic | User opens one of five hubs | Hub explains category and presents three sub-hubs |
| Narrow topic | User opens a sub-hub | Placeholder only; reader cannot continue to a specific answer |
| Solve a problem / learn | No article library or article route exists | Critical missing layer |
| Continue reading | No related articles, sibling links, or contextual bridges | No semantic circulation / onward journey |
| Assess trust | About and Editorial Policy are brief launch placeholders | No accountable real author/reviewer, methodology, corrections or update records |
| Contact / feedback | Contact page says monitored email will be added | No working feedback or corrections route |

## 4. SOP alignment assessment

The following are assessed against the project rulebook and SOP principles; detailed SOP documents remain in the dedicated SOP workspace and are not being rewritten here.

### Passes / foundations to preserve

- Five approved hubs and 15 sub-hub families exist in source.
- Hub taxonomy broadly covers the approved consumer technology mission.
- Non-www HTTPS canonical host is defined centrally.
- Header and footer provide consistent top-level navigation.
- Hub pages link down to their sub-hubs.
- Sub-hub breadcrumb links back up to its parent.
- Main content is rendered server-side through Next.js routes.
- The current placeholder explicitly avoids claiming that articles already exist.

### Fails / incomplete gates

1. **QDP/SCN is not implemented in the live content experience.** No approved article inventory exists and no page/section/block/sentence decisions are wired to real content.
2. **Sub-hubs are dead ends.** There are no article collections, child-page navigation, or contextual sibling bridges.
3. **No article publishing model.** No source-of-truth data model for title, slug, intent, hub, parent, role, entities, author, dates, sources, canonical, schema, or related links.
4. **No contextual linking system.** The minimum upward/lateral/downward link requirements cannot be met while articles and sibling resources are absent.
5. **No content discovery/search layer.** No on-site search, topic filters, or useful “start here” routing exists. These are not all mandatory, but should be considered after the real article inventory is known.
6. **Editorial accountability is incomplete.** Real author/editor identity, review responsibility, corrections process, and update records are not visible.
7. **Contact/privacy launch gates are incomplete.** No monitored contact path; privacy page is a placeholder. No analytics, newsletter, or advertising collection should be enabled yet.
8. **Responsive navigation is source-reviewed only.** At <=800px the nav becomes horizontally scrollable; this needs actual touch, keyboard and visual testing before approval.
9. **404 metadata needs review.** Phase 0 audit found a 404 response with noindex but homepage title/canonical metadata in the response.
10. **Sitemap has only the 25 structural pages.** This is expected before article publication; do not add placeholder article URLs or force sitemap entries.

## 5. Recommended target architecture (preserve current taxonomy)

Do not rename hubs or change existing slugs at this stage. Use the existing levels as follows:

```
Home
├── Phones
│   ├── iPhone & iOS
│   │   ├── Core / Supporting / Transitional articles (only approved QDP URLs)
│   │   └── Related phone/security/how-to guides
│   ├── Android Phones
│   └── Battery, Performance & Connectivity
├── AI
│   ├── ChatGPT & AI Assistants
│   ├── AI Tools & Productivity
│   └── AI Images, Privacy & Safety
├── Software
│   ├── Windows & macOS
│   ├── Productivity Software
│   └── Browsers, Email & Cloud Tools
├── Cybersecurity
│   ├── Account Security
│   ├── Phone Security & Privacy
│   └── Scams, Phishing & Privacy
└── How-to & Fixes
    ├── Internet, Wi-Fi & Networking
    ├── Computer & Device Fixes
    └── Apps, Accounts & Everyday Tech Fixes
```

Recommended article URL convention (illustrative only; final slugs must follow validated QDP/SCN inventory): `/{hub}/{subhub}/{descriptive-article-slug}/`. Do not create the route or publish URLs until the page inventory is approved. Keep article content data separate from the catch-all presentation route.

## 6. Recommended page-by-page flow

### Homepage
1. Clear promise and one primary action: browse guides / solve a problem.
2. Five hub cards with concise descriptions.
3. A “Start with a common task” section only when the corresponding Core guides exist.
4. A small “Recently updated” or “Featured guides” section only from real, reviewed content.
5. Editorial trust links (About, Editorial Policy, contact) without invented authorship.
6. Avoid empty cards, fake popularity, “latest articles” placeholders, or links to unpublished URLs.

### Hub page
1. Breadcrumb: Home → Hub.
2. Unique hub introduction defining its entity boundary and reader tasks.
3. Three sub-hub cards.
4. Featured Core guides grouped by the actual sub-hub / reader task.
5. Related cross-hub guides only where a meaningful contextual bridge exists.
6. No generic keyword lists or repeated boilerplate.

### Sub-hub page
1. Breadcrumb: Home → Hub → Sub-hub.
2. Clear scope: what belongs here and what belongs elsewhere.
3. Core guide first, then supporting and transitional resources in meaningful groups.
4. Short task/intent labels, not just keyword-stuffed titles.
5. Relevant sibling links and contextual cross-hub links.
6. If there are not enough approved articles, retain a truthful editorial state but provide useful parent/related navigation; never fabricate article cards.

### Article page (future Phase 2/3)
1. Breadcrumb: Home → Hub → Sub-hub → Article.
2. One clear H1 and concise answer-first opening.
3. Author/reviewer and published/updated dates only when real and maintained.
4. Main content in crawlable HTML, correct semantic H2/H3 order and stable section IDs.
5. Source attribution close to claims; distinguish official facts, reporting, analysis, and actual testing.
6. Contextual bridges: upward parent/Core link, at least two relevant lateral links when siblings exist, and downward child links where applicable.
7. Related resources based on SCN, not generic/random recommendations.
8. Suitable schema that matches visible content; no invented Review/Product ratings or author credentials.

## 7. Navigation and taxonomy refinements

- Keep five hubs in the primary navigation; do not expose all 15 sub-hubs in the top nav.
- Improve mobile navigation usability: test horizontal-scroll discoverability, focus states, touch targets and screen-reader labels. Only add a hamburger if testing shows the current compact navigation is inadequate.
- Add a “Browse all topics” path from homepage and footer.
- Ensure every sub-hub is reachable from its parent hub and has a working breadcrumb.
- Use consistent title case and naming. The primary nav label “How-to” can remain short while page H1 is “How-to & Fixes”.
- Add cross-hub links only where reader task and entity relationship justify them; avoid linking every page to every hub.
- Do not create separate tag archives or faceted URLs until there is enough content and a clear search/user need.

## 8. Implementation order and dependencies

**Gate 0 — Preserve and verify:** Keep existing URLs, canonical host, sitemap split and current hub taxonomy. Complete Phase 0 outstanding checks (mobile visual QA, 404 metadata, informational pages, authorized GSC/Bing baseline where appropriate).

**Gate 1 — Finish Phase 1:** Validate candidate queries and SERP overlap; apply QDP; approve final URL inventory with hub, sub-hub, Core/Supporting/Transitional role, intent, audience, entity, parent, SCN position and link targets. Build the actual graph before coding article routes.

**Gate 2 — Phase 2 publishing system:** Implement a typed article content model and reusable templates. Build hub/sub-hub listing components from the approved inventory. Generate metadata, canonicals, breadcrumbs, suitable schema and post sitemap from the same source of truth. Add author/reviewer/date/source fields only with real verified values.

**Gate 3 — Phase 3 content:** Complete seven-part semantic briefs, then Core pages, then supporting coverage. Populate hub/sub-hub pages only with reviewed content. Human editorial QA and evidence log required.

**Gate 4 — Acceptance QA:** Type-check/build, route tests, canonical/robots/schema checks, internal-link/orphan/cannibalization checks, mobile/desktop visual and keyboard QA, then deploy and verify. Publishing/indexing remain separate owner-approved actions.

## 9. Change-control decisions

- **Preserve:** all five hubs, all 15 current sub-hub slugs, non-www canonical, four informational route paths, sitemap split, server-rendered page content.
- **Do not do yet:** rename hubs, change URL hierarchy, add empty category/tag pages, publish placeholder articles, add unvalidated article URLs, expand to unrelated niches, enable tracking/ads/newsletter, request indexing.
- **Build next:** final topical map + SCN; article content model; hub/sub-hub article listing flow; article template; contextual related links; editorial identity/contact/privacy readiness.
- **Review before production code:** exact route design, article schema, migration/redirect impacts, data model and acceptance tests.

## 10. Audit conclusion

The current structure is a good navigation skeleton, not yet a complete content architecture. Do not rebuild the site from scratch. Preserve the five-hub/15-sub-hub foundation and complete the missing middle and lower layers: approved QDP inventory → SCN graph → article content model → hub/sub-hub listings → article pages → contextual related-content flow → editorial/technical QA.

**Current status:** Audit documented; no production changes made. Phase 1 remains a draft and is not approved for publishing or indexing.
