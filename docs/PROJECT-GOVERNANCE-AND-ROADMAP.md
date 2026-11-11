# Daily Tech Insights — Project Governance & Roadmap

Status: Project baseline v1.0  
Repository: franklinctapley-del1122/dailytechinsigts  
Production domain: https://dailytechinsights.com  
Governance branch: project-governance

## 1. Mission and scope

Daily Tech Insights is an English-language consumer technology publication. Its approved primary hubs are Phones, AI, Software, Cybersecurity, and How-to & Fixes. The site helps readers understand, choose, use, secure, and troubleshoot consumer technology. Do not expand into unrelated niches based only on keyword volume.

## 2. Master operating principle

Research queries → Group by intent → Apply QDP → Map entities → Build the Semantic Content Network (SCN) → Write semantically → Link contextually → Verify facts → Publish → Measure → Improve.

QDP determines whether a subject deserves a page, section, block, or sentence. Every page needs a defined entity, intent, parent hub, content role, SCN position, internal-link plan, information-gain contribution, and evidence base. Never turn every keyword into a separate article.

## 3. Content architecture

Classify each planned URL as:
- Core: central pages that define and comprehensively cover an important subject.
- Supporting: pages answering narrower questions and strengthening a Core topic.
- Transitional: pages connecting related topics, explaining a decision, or moving readers between stages.

Every proposal must identify its hub, parent page, role, intent, audience need, and intended links before drafting.

Build topical maps from source context, central entities, audience needs, query networks, and competitor coverage. Merge keywords when they share intent and substantially the same SERP competitors. Split pages only when intent, entity, audience need, or required answer materially differs. Define Core and supporting coverage, URL hierarchy, publication order, and internal-link flow before scaling. Avoid thin, duplicate, doorway-style, or near-identical pages.

## 4. Mandatory semantic content brief

No article or substantial hub page enters drafting without all seven components:

1. Page identity: title tag, URL slug, H1, meta description, intent, Core/Outer role, audience, funnel stage, and priority.
2. Query network: primary and secondary clusters, PAA, long-tail modifiers, and competitor queries.
3. Attribute filtration: Prominence, Relevance, and Popularity (PPR) scoring.
4. Contextual vector: query-led H1/H2/H3 outline in logical dependency order.
5. Contextual structure: exact format and section-level word guidance for each section.
6. Contextual bridges: target URL, exact descriptive anchor, and placement for every internal link.
7. Uniqueness additions: 1–3 useful angles, evidence points, or questions missing from leading competing pages.

PPR formula: Score = (Prominence × 0.40) + (Relevance × 0.40) + (Popularity × 0.20). Popularity must never rescue an attribute irrelevant to the page entity, audience, or intent.

## 5. Writing standards

- Lead with a direct, accurate answer, then add context, evidence, examples, caveats, and a useful transition.
- Make every section independently understandable when extracted or quoted.
- Use the format that best answers the question: definition, paragraph, steps, bullets, comparison table, specification table, or FAQ.
- Use US English unless a source, product UI, or quotation requires otherwise.
- Write for clarity and task completion, not a target word count. Set section-level targets; do not pad.
- Keep article introductions concise, normally 50–80 words.
- FAQs must come from real query patterns and reader questions. Each answer starts with a direct answer.
- Place a relevant CTA before the FAQ when appropriate. Do not force sales CTAs into informational pages.
- Avoid filler, generic conclusions, keyword stuffing, and repetitive paraphrases.
- Brief instructions must not use em dashes or vague directions such as “write an engaging introduction”.
- Two H3s under an H2 is a planning default from the supplied blueprint, not a reason to invent artificial headings.

## 6. Evidence, accuracy, and trust

- Never invent first-hand testing, credentials, experience, specifications, prices, statistics, quotes, review counts, customer stories, or screenshots.
- Distinguish tested facts, official-source facts, third-party reporting, analysis, and opinion.
- Prefer primary sources: official product documentation, manufacturer support, standards bodies, security advisories, and original research.
- For time-sensitive features, pricing, compatibility, security, and policy claims, record the source and verification date.
- Attribute claims close to where they appear. Add version context where information can change.
- Explain uncertainty. Do not turn one case study or correlation into a universal ranking rule.
- Add authors, reviewers, and credentials only when real and verifiable.
- Do not publish unsupported superlatives such as “best”, “#1”, “fastest”, or “most secure”.
- AI assistance is allowed; unverified AI-generated facts are not. Human editorial QA is mandatory.

## 7. Internal linking and SCN

Every page should connect to the wider Semantic Content Network:
- Upward link to its parent hub or Core page.
- At least two lateral links to relevant sibling pages when they exist.
- Downward links to child pages where applicable.
- Exact, descriptive anchors identifying the destination entity and attribute.
- Links placed where they help the reader, not inserted mechanically.
- No orphan pages, broken internal links, irrelevant cross-links, or competing pages targeting the same intent.

## 8. Technical SEO and discoverability

- Canonical host: https://dailytechinsights.com (non-www, HTTPS).
- Maintain one intended canonical URL per indexable page.
- Keep robots directives, sitemap entries, canonical tags, and internal links consistent.
- Keep sitemap index at /sitemap.xml, with separate page and post sitemaps. Add article URLs to the post sitemap only after publication.
- Verify Google Search Console and Bing Webmaster Tools; inspect indexing and crawl reports. Sitemap submission does not guarantee indexing.
- Review robots.txt and hosting/CDN rules so legitimate crawlers can access public content. OAI-SearchBot access and GPTBot training controls are separate.
- Consider IndexNow for eligible URL change notifications; submission does not guarantee indexing.
- Important facts must be visible in crawlable HTML, not only images, inaccessible scripts, or embedded media.
- Structured data must be appropriate, valid, and match visible content. Do not add LocalBusiness markup to a non-local publisher.
- Maintain mobile usability, navigation, forms, metadata, image optimization, HTTPS, redirects, and Core Web Vitals.
- Every material code change must pass type checking/build validation and be checked on mobile and desktop before production deployment.

## 9. Search Everywhere Optimization and AI visibility

Treat Google, Bing, ChatGPT Search, and other discovery surfaces as complementary channels, not interchangeable ranking systems.

- Make pages discoverable, understandable, specific, current, and easy to quote.
- Use precise factual answers, clear entity names, specifications, comparisons, and dated evidence where appropriate.
- For software/product content, include real differentiators, compatibility, verified pricing context, limitations, use cases, and decision criteria.
- Test generic prompts and detailed prompts reflecting actual reader needs.
- Record discovery, brand mention/recommendation, and citation as separate outcomes.
- Record the exact cited URL and the facts used.
- Prompt tests are directional observations. Results vary by date, location, model, settings, and prompt. No placement is guaranteed.
- Track AI referral traffic where measurable. Do not assume every untagged visit came from an AI assistant.
- Local-business tactics apply only when the site genuinely represents an eligible real local business. Never create fake profiles, addresses, or reviews.

## 10. Measurement

Technical: valid routes, crawl/index status, sitemap health, canonical consistency, broken links, mobile usability, and performance.

Search/content: impressions, clicks, query coverage, page-level performance, indexing, Bing visibility, freshness, and internal-link coverage.

Audience/business: engaged visits, useful tool interactions, outbound clicks, contact actions, and measurable conversions where configured.

Monthly review: identify pages gaining/losing visibility; separate indexing problems from ranking/content problems; review query intent and competitors; review AI discovery, mentions, and citations separately; identify unanswered reader questions; prioritize by reader value, evidence, relevance, and effort.

## 11. Publishing acceptance gate

A page is ready only when:
- Its topical-map position, intent, and role are approved.
- The seven-part brief is complete.
- Important facts and claims have traceable evidence.
- The page answers the main query promptly without padding.
- Headings, tables, lists, and FAQs match the brief.
- Internal links and anchors are implemented and verified.
- Title, description, H1, canonical, robots, and URL are correct.
- Schema is appropriate, valid, and consistent with visible content.
- Images have appropriate rights, useful alt text, and optimized formats.
- The page works on mobile and desktop; links and interactive elements work.
- It is included in the correct sitemap and checked after deployment.

## 12. Change control

- Do not redesign, migrate frameworks, change canonical domain, rename hubs, or alter URL architecture without a documented reason and impact review.
- Preserve working code and content. Make focused, reversible changes.
- Use a separate branch for substantial work; review diffs before merging to main.
- Never delete or redirect a URL without checking backlinks, traffic, internal links, canonical signals, and replacement relevance.
- Record material changes, affected files, validation, and deployment outcome.
- Never claim a change is live or indexed until verified.

## 13. Repository baseline and immediate gap

The current repository uses Next.js 15, React 19, TypeScript, and Tailwind. It contains five hubs and 15 sub-hubs, plus basic About, Contact, Editorial Policy, and Privacy Policy routes. The catch-all route currently renders the homepage, hubs, and sub-hubs. Sub-hub pages explicitly state that articles are being prepared; the post sitemap is empty.

Immediate priority is not publishing placeholder articles. Complete the topical map and content model, implement the article publishing architecture, then publish researched Core pages with supporting coverage.

## 14. Implementation roadmap

### Phase 0 — Baseline and safeguards
Confirm production deployment, hosting, DNS, redirects, and canonical host. Capture routes, metadata, sitemap and robots output, mobile screenshots, build/type checks, live crawl, and baseline Search Console/Bing/analytics data.

### Phase 1 — Strategy and topical architecture
Confirm audience, geographic scope, and editorial promise. Validate the five hubs; map entities, query clusters, and intents; classify Core/Supporting/Transitional pages; identify cannibalization and coverage gaps; approve URL architecture and internal-link graph.

### Phase 2 — Publishing system
Implement article content model and templates. Add author/reviewer, publication/update dates, source references, related content, and breadcrumbs where appropriate. Generate metadata, canonicals, suitable schema, and post sitemap from one source of truth. Add hub article listings.

### Phase 3 — Priority content
Create briefs before drafts. Build Core pages first, then the supporting cluster needed to strengthen each Core topic. Prioritize by intent, reader need, evidence, topical dependency, and feasibility. Do not scale until editorial and technical QA gates work.

### Phase 4 — Discoverability and authority
Verify Google and Bing properties, submit sitemaps, review indexing, implement eligible IndexNow notifications, improve author transparency and evidence, and earn legitimate references through useful resources. Do not fabricate trust signals.

### Phase 5 — Measurement and iteration
Run monthly Search Console, Bing, analytics, and AI prompt reviews. Track query coverage, page outcomes, referrals, and conversions. Refresh content when product facts or reader needs change. Expand the topical map without duplicating intent.

## 15. Governance note

This is the project-wide rulebook. Detailed operational SOP documents remain in the dedicated Daily Tech Insights SOP workspace, consistent with the previously established project workflow. The SOP register lists required procedures and sequence; it is not a substitute for the full procedures.
