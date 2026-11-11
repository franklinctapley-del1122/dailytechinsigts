# Daily Tech Insights — Site Architecture & Reader-Flow Implementation Blueprint

**Date:** 2026-11-11  
**Branch:** phase-1/topical-map-draft  
**Status:** Proposed architecture only. No production code, routes, sitemap entries, or indexing settings changed.  
**Depends on:** Project Governance & Roadmap, SOP Register, Phase 0 Baseline Audit, Site Structure & Flow Audit.

## 1. Decision

Preserve the current five hubs and 15 sub-hubs. The live homepage now confirms the same consumer-tech structure present in the current repository `main` source. Older SaaS-focused pages still appear in search results, so their URL inventory and legacy value must be audited before any deletion, redirect, or migration. Do not infer that old URLs are safe to remove just because the current homepage no longer links to them.

The next architecture layer is: approved topical inventory → content registry → article routes → hub/sub-hub listings → contextual links → editorial metadata → generated sitemap. Implement only after Phase 1 URL/SCN approval.

## 2. Canonical information architecture

### Level 0 — Homepage
Purpose: orient readers to the publication and route them to a topic or a high-value guide.
Components:
- Publication promise and concise intro.
- Five hub cards.
- Common reader tasks / featured guides only when those guides are approved and published.
- Recently updated items only when real update dates exist.
- Editorial transparency links.

### Level 1 — Five topic hubs
Existing paths must remain unchanged:
- `/phones/`
- `/ai/`
- `/software/`
- `/cybersecurity/`
- `/how-to/`

Purpose: explain the hub entity boundary, show its sub-hubs, and surface approved Core resources and relevant cross-hub pathways.

### Level 2 — Fifteen sub-hubs
Existing slugs from `src/lib/site.ts` must remain unchanged unless a documented QDP/URL impact review approves a change:
- Phones: `iphone`, `android`, `phone-performance`
- AI: `chatgpt`, `ai-tools`, `ai-image-privacy`
- Software: `operating-systems`, `productivity`, `browsers-cloud`
- Cybersecurity: `account-security`, `phone-security`, `scams-privacy`
- How-to: `internet-wifi`, `device-fixes`, `apps-accounts`

Purpose: group a coherent set of approved URLs by one subtopic and make the reader's next step obvious.

### Level 3 — Article pages
Illustrative route convention only:
`/{hub}/{sub-hub}/{article-slug}/`

Examples must not be treated as approved URLs until Phase 1 QDP and SERP review is complete. Avoid one-keyword-one-page. A page exists only when the entity, intent, audience need, and answer materially justify it.

## 3. Article content registry — required fields

Use one typed source of truth for all article presentation, metadata, breadcrumbs, related links, and sitemap generation. Each article record must contain:

| Field | Requirement |
|---|---|
| id | Stable unique content ID |
| slug | Approved URL slug |
| title | Reader-facing title |
| description | Accurate summary/meta description |
| h1 | One clear page heading |
| hub | One of the five approved hubs |
| subHub | One approved sub-hub |
| parentUrl | Parent sub-hub URL |
| role | Core / Supporting / Transitional |
| intent | Primary search/task intent |
| audience | Specific reader and need |
| primaryEntity | Central entity/topic |
| queryCluster | Approved grouped queries, not raw keyword dump |
| ppr | Prominence, Relevance, Popularity values plus rationale |
| briefStatus | Not started / drafted / approved |
| contentStatus | Planned / drafted / fact-checked / approved / published |
| author | Real accountable author only |
| reviewer | Real reviewer only, if review occurred |
| publishedAt | Actual first publication date |
| updatedAt | Actual material update date |
| sources | Traceable primary/secondary sources and checked dates |
| internalLinks | Explicit target URL, descriptive anchor, placement and direction |
| relatedContent | Approved SCN-linked article IDs only |
| schemaType | Appropriate schema matching visible content |
| indexable | Explicit publication decision, not a substitute for approval |

Do not add fictional author names, fake hands-on testing, unsupported ratings, or invented dates. Keep unapproved/planned content out of public listings and sitemaps.

## 4. Reusable page templates and component responsibilities

### Homepage template
- `HomeHero`: concise promise + browse action.
- `HubGrid`: five hub cards from `src/lib/site.ts`.
- `FeaturedGuides`: optional, populated only from approved published records.
- `CommonTasks`: optional, only if each destination exists and solves a distinct task.
- `EditorialTrustLinks`: About, Editorial Policy, contact.

### Hub template
- `Breadcrumbs`: Home → Hub.
- `HubIntro`: unique entity scope and reader needs.
- `SubHubGrid`: current three sub-hubs.
- `CoreGuideList`: approved published Core resources.
- `RelatedHubLinks`: only evidence-backed contextual connections.

### Sub-hub template
- `Breadcrumbs`: Home → Hub → Sub-hub.
- `SubHubIntro`: unique inclusion/exclusion boundary.
- `CoreGuideFeature`: one central guide where available.
- `SupportingGuideList`: approved supporting resources.
- `TaskGroups`: organize guides by reader task, not keyword variants.
- `SiblingLinks`: contextual links to relevant sibling sub-hubs/articles.
- `RelatedResources`: only SCN-approved cross-hub bridges.
- If there are no approved articles, show a truthful empty state and parent/related navigation. Never generate fake guide cards.

### Article template
- `Breadcrumbs`: Home → Hub → Sub-hub → Article.
- `ArticleHeader`: H1, concise deck, real author/reviewer/date data.
- `TableOfContents`: only where useful and generated from actual headings.
- `ArticleBody`: semantic HTML, answer-first sections, source citations close to claims.
- `ContextualLinks`: parent/Core, relevant lateral siblings, child resources.
- `SourcesAndUpdates`: source list and real update notes where appropriate.
- `RelatedGuides`: only approved SCN connections.
- `CorrectionContact`: real monitored route before launch.

## 5. SCN linking rules to enforce

For each article:
1. Upward link to its parent sub-hub and, where useful, its Core page.
2. At least two lateral links to relevant siblings when those siblings exist and are published.
3. Downward links to approved child pages when applicable.
4. Cross-hub links only when the contextual relationship is meaningful to the reader.
5. Store target URL, exact descriptive anchor, placement and rationale in the article registry/brief.
6. Build validation should detect missing targets, broken links, orphan pages and duplicate intent candidates.

Hub and sub-hub listing pages must link down to all approved children in their scope. Do not force two lateral links if no relevant sibling exists; record the exception rather than inventing links.

## 6. Navigation rules

- Desktop primary navigation: five hubs only.
- Mobile: retain current links until real-device and keyboard QA; evaluate scroll affordance and focus visibility before considering a hamburger.
- Breadcrumbs: present on hub, sub-hub and article pages.
- Footer: hub links + About + Contact + Editorial Policy + Privacy Policy; add Editorial Team / Review Method only after those pages contain real, verified information.
- Do not add tag archives, filters, or on-site search before the content inventory demonstrates a useful need.
- All navigation must use crawlable links and descriptive labels.

## 7. Technical implementation constraints

- Keep `SITE_URL=https://dailytechinsights.com` and current non-www canonical host.
- Preserve existing hub and sub-hub paths.
- Do not implement article routes until the approved URL inventory is complete.
- Replace catch-all-only content handling with a clearly typed content registry or equivalent maintainable model when Phase 2 begins.
- Metadata, canonical, breadcrumbs, schema, related links and sitemap must derive from the same article record to avoid drift.
- Article sitemap must include only published, canonical, indexable article URLs.
- Keep page sitemap focused on real structural pages.
- Add structured data only when it accurately represents visible page content.
- Ensure 404 pages do not emit the homepage canonical; confirm via deployed response after any fix.
- No analytics, newsletter or ad tracking until privacy policy accurately describes actual data handling.
- Build/type check and route tests must pass; mobile/desktop visual QA required before deployment.

## 8. Legacy URL / migration safeguard

Search results still expose legacy SaaS URLs and old SaaS positioning even though the current homepage and current source code represent a consumer-tech publication. Before any legacy cleanup:
- Crawl/export all known old URLs and their current HTTP status.
- Identify indexed URLs, backlinks, traffic, internal links, and sitemap presence where authorized data is available.
- Classify each URL as retain, update, consolidate, redirect to a genuinely equivalent destination, or retire with a proper status.
- Do not redirect unrelated SaaS pages to the homepage or an unrelated consumer-tech hub.
- Do not remove a URL until the replacement relevance and impact are documented.
- Record each redirect decision and test it after deployment.

## 9. Implementation gates

| Gate | Required evidence | Status |
|---|---|---|
| Phase 0 baseline | Deployment, routes, canonicals, sitemap, mobile QA, 404, legal readiness | Partially complete; open items remain |
| Phase 1 topical map | QDP decisions, URL inventory, roles, intent, SERP evidence, SCN graph | Draft; not approved |
| Phase 2 content model | Typed registry, templates, listing and metadata generation | Not started |
| Phase 3 content | Seven-part briefs, Core/supporting content, source logs, human QA | Not started |
| Release QA | Build, routes, internal links, schema, mobile/desktop, deployment checks | Not started |
| Discoverability | Owner-approved GSC/Bing and indexing steps after content readiness | Explicitly deferred |

## 10. Definition of done for this blueprint

- Five hubs and 15 sub-hubs remain stable.
- Every proposed article has an approved QDP/SCN record.
- Every published article has a complete content record and seven-part brief.
- Hub/sub-hub pages list only published, reviewed resources.
- Every internal link has a relevant destination and descriptive anchor.
- Metadata, canonical, schema and sitemap are generated consistently.
- Editorial, privacy and contact requirements are met.
- Build, route, link and mobile/desktop QA pass.
- No index request is sent until the user explicitly moves the project to the indexing stage.

**Current decision:** This blueprint is a proposed Phase 2 implementation specification, not approval to code or publish. Phase 1 URL inventory and SCN graph are the next prerequisite.
