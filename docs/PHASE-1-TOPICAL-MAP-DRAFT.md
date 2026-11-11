# Daily Tech Insights — Phase 1 Topical Map (Draft v0.1)

**Status:** Working draft; not approved for publishing  
**Audience:** United States  
**Editorial language:** US English  
**Canonical host:** https://dailytechinsights.com  
**Purpose:** Define the initial entity and intent architecture before keyword validation, briefs, or article production.

## 1. Strategy guardrails

The approved publication promise is practical consumer technology guidance: help readers understand, choose, use, secure, and troubleshoot technology. Keep the five approved hubs: Phones, AI, Software, Cybersecurity, and How-to & Fixes.

This map is an architecture hypothesis based on the existing repository taxonomy and preliminary audience research. It is **not** a verified keyword-volume report or final SERP-cluster map. Do not treat suggested titles or queries as approved article targets until US SERPs, query intent, competitor overlap, and demand are checked.

No indexing requests or article publication are part of this phase.

## 2. Audience and entity model

Primary audience: US consumers and everyday technology users who need clear explanations and practical steps, including non-expert users.

Core reader jobs:
- Understand a device, feature, setting, or digital service.
- Complete a task using an app, operating system, or AI assistant.
- Diagnose and fix a specific technology problem.
- Protect accounts, devices, and personal information.
- Compare options using accurate, current criteria.

Primary entities: smartphones; iPhone/iOS; Android; ChatGPT and other AI assistants; AI productivity/image tools; Windows and macOS; productivity applications; browsers, email and cloud services; online accounts; passwords and authentication; phishing/scams; home internet and Wi-Fi; computers and connected devices.

## 3. Hub architecture and proposed topic families

Existing URL slugs are retained as the current architecture. Proposed families below are planning clusters, not a commitment to create one URL per bullet.

### A. Phones — /phones/

**Hub role:** Device-specific guidance for smartphone owners.

1. **iPhone & iOS** — /phones/iphone/
   - Core candidate: iPhone settings and essential setup guide (scope to be validated)
   - Supporting candidates: iOS update preparation and troubleshooting; iPhone storage management; iPhone privacy permissions; battery health and charging settings; iCloud backup and restore.
   - Entity boundary: Apple iPhone hardware and iOS features. Do not duplicate general account-security or generic app tutorials.

2. **Android Phones** — /phones/android/
   - Core candidate: Android settings and everyday-use guide (scope to be validated)
   - Supporting candidates: Android storage cleanup; app permissions; Google Play app/update problems; Android backup and restore; Android performance and battery settings.
   - Entity boundary: Android OS and Android handset behavior. Brand-specific differences must be sourced and clearly labeled.

3. **Battery, Performance & Connectivity** — /phones/phone-performance/
   - Core candidate: Diagnose common smartphone battery, heat, speed, and connection problems.
   - Supporting candidates: phone battery draining quickly; phone overheating; slow phone troubleshooting; mobile data not working; phone Wi-Fi connection problems.
   - Entity boundary: smartphone symptom-led troubleshooting across platforms. Split iPhone/Android only when steps or causes materially differ.

### B. AI — /ai/

**Hub role:** Practical AI assistant and tool usage, with honest limitations and privacy context.

1. **ChatGPT & AI Assistants** — /ai/chatgpt/
   - Core candidate: ChatGPT practical user guide (features, settings, limitations, and account basics)
   - Supporting candidates: ChatGPT file/image/voice workflows where current; account and settings help; prompt-writing for everyday tasks; troubleshooting common ChatGPT errors; compare assistant capabilities for a defined task.
   - Entity boundary: ChatGPT and assistant-specific behavior. Verify feature availability, plan limits, and UI against official documentation and date-stamp volatile details.

2. **AI Tools & Productivity** — /ai/ai-tools/
   - Core candidate: Choose AI tools by task and workflow, not generic “best AI tools” claims.
   - Supporting candidates: AI writing/editing workflows; AI meeting notes and transcription; AI research and summarization; AI presentation/productivity tools; privacy and data-handling comparison.
   - Entity boundary: tools evaluated by a concrete user job, audience, platform, and verified capabilities. Commercial comparisons require transparent criteria and current pricing evidence.

3. **AI Images, Privacy & Safety** — /ai/ai-image-privacy/
   - Core candidate: Practical guide to creating and using AI-generated images responsibly.
   - Supporting candidates: AI image generation workflows; editing or transforming images; copyright and usage-rights basics; disclosure and provenance; privacy risks when uploading personal images.
   - Entity boundary: generative image workflows and related rights/privacy questions. Legal topics need jurisdiction and date context; do not present legal conclusions as individualized advice.

### C. Software — /software/

**Hub role:** Software and operating-system task guidance, not symptom-led device repair.

1. **Windows & macOS** — /software/operating-systems/
   - Core candidate: Everyday Windows and macOS settings and maintenance guide (separate platform pages only where intent differs)
   - Supporting candidates: Windows update problems; macOS update and settings help; startup apps; storage and file management; backup and restore basics.
   - Entity boundary: operating-system features and settings. Avoid duplicating device hardware troubleshooting.

2. **Productivity Software** — /software/productivity/
   - Core candidate: Productivity software workflows for documents, spreadsheets, PDFs, and collaboration.
   - Supporting candidates: Word/PDF conversion workflows; document formatting; spreadsheet basics; collaboration and file sharing; choosing a document workflow.
   - Entity boundary: task- and application-specific software use. Tool pages/calculators need a validated user problem and tested outputs, not thin SEO wrappers.

3. **Browsers, Email & Cloud Tools** — /software/browsers-cloud/
   - Core candidate: Browser, email, and cloud-storage setup and usage guide (likely split by distinct intent)
   - Supporting candidates: browser privacy/settings; browser cache/cookie management; Gmail settings and organization; cloud file sync; sharing and recovering cloud files.
   - Entity boundary: browser/email/cloud application behavior. Security incidents belong in Cybersecurity when the main intent is protection or recovery after compromise.

### D. Cybersecurity — /cybersecurity/

**Hub role:** Prevention, risk recognition, and response for consumer accounts and devices.

1. **Account Security** — /cybersecurity/account-security/
   - Core candidate: Protect online accounts with strong authentication and recovery practices.
   - Supporting candidates: password manager basics; passkeys and multi-factor authentication; secure account recovery; suspicious sign-in alerts; securing email accounts.
   - Entity boundary: account protection and authentication. Platform-specific recovery instructions require official sources.

2. **Phone Security & Privacy** — /cybersecurity/phone-security/
   - Core candidate: Smartphone security and privacy checklist.
   - Supporting candidates: app permissions and tracking; lost or stolen phone response; signs of suspicious app behavior; device updates and security settings; location-sharing controls.
   - Entity boundary: security/privacy risk on mobile devices. General phone settings remain in Phones unless the dominant reader need is risk reduction.

3. **Scams, Phishing & Privacy** — /cybersecurity/scams-privacy/
   - Core candidate: Recognize, verify, and respond to common digital scams and phishing.
   - Supporting candidates: suspicious email/text identification; fake delivery and payment messages; impersonation scams; what to do after clicking a suspicious link; personal-data exposure basics.
   - Entity boundary: threat recognition and response. Include clear “what to do now” steps and link to official US reporting/support resources where relevant.

### E. How-to & Fixes — /how-to/

**Hub role:** Cross-platform, symptom-first solutions where the reader starts with a problem rather than a particular product category.

1. **Internet, Wi-Fi & Networking** — /how-to/internet-wifi/
   - Core candidate: Troubleshoot common home internet and Wi-Fi problems.
   - Supporting candidates: connected to Wi-Fi but no internet; slow home Wi-Fi; router restart/reset distinction; device cannot connect to Wi-Fi; internet outage vs home-network issue.
   - Entity boundary: network-level symptoms across device types. Router model-specific instructions require exact model/source evidence.

2. **Computer & Device Fixes** — /how-to/device-fixes/
   - Core candidate: Diagnose common computer and peripheral problems.
   - Supporting candidates: laptop not charging; computer running slowly; computer will not start; external display not detected; storage running out.
   - Entity boundary: cross-platform hardware/peripheral symptoms. OS-specific software settings may link to Software rather than duplicate.

3. **Apps, Accounts & Everyday Tech Fixes** — /how-to/apps-accounts/
   - Core candidate: Troubleshoot common app and account access problems.
   - Supporting candidates: app not opening; verification code not received; app update/download failure; account sign-in loop; notifications not working.
   - Entity boundary: symptom-led troubleshooting. If the intent is specifically account compromise, route to Cybersecurity.

## 4. Cross-hub routing rules

| Reader's starting point | Primary hub | Cross-link when |
|---|---|---|
| “My iPhone/Android setting or feature…” | Phones | Security risk becomes the main question |
| “How do I use ChatGPT/AI tool…” | AI | OS/browser setup is a necessary step |
| “How do I use Windows, Word, browser, email…” | Software | A specific fault needs symptom-led troubleshooting |
| “Is this safe? Was I scammed? Is my account compromised?” | Cybersecurity | Device-specific protection steps are needed |
| “This stopped working; how do I fix it?” | How-to & Fixes | The solution depends on a particular platform or product |

Do not create two pages for the same intent merely because a query contains different words. Merge when the SERP competitors, dominant task, and required answer substantially overlap. Split only when the entity, intent, audience need, or required solution materially differs.

## 5. Initial priority hypotheses

These are sequencing hypotheses based on reader usefulness and the ability to produce accurate, distinctive help. They are not search-volume rankings.

1. **Troubleshooting utility:** Wi-Fi/internet, phone battery/overheating, laptop charging/startup, app/account access.
2. **High-frequency platform tasks:** iPhone/Android settings, Windows/macOS basics, Gmail/browser/cloud tasks.
3. **Security essentials:** phishing/scam response, account security, MFA/passkeys, phone privacy.
4. **AI assistant utility:** ChatGPT practical workflows, feature limitations, AI privacy, task-based tool selection.
5. **Commercial comparisons and tool roundups:** only after criteria, alternatives, pricing, evidence, and differentiation can be verified.

## 6. Validation required before approving any URL

For each candidate topic:
1. Collect US query variants, modifiers, and questions from a keyword source and live Google/Bing SERPs.
2. Record the date, location, device context, and source of each observation.
3. Review at least the leading organic results for page type, intent, entities, subtopics, freshness, and evidence quality.
4. Compare SERP overlap between candidate queries. Cluster by shared intent and competing URLs, not lexical similarity alone.
5. Identify PAA/question patterns and meaningful long-tail variants.
6. Record competitors, missing reader answers, weak evidence, and a specific information-gain angle.
7. Score attributes using the project PPR formula: (Prominence × 0.40) + (Relevance × 0.40) + (Popularity × 0.20). Relevance is a gate; high popularity cannot rescue an irrelevant attribute.
8. Assign Core, Supporting, or Transitional role; parent; intended internal links; and a proposed URL.
9. Decide: one page, section on another page, sentence/block, merge, defer, or reject.

Required validation record fields: candidate query; cluster; intent; SERP overlap; leading competitor URLs; PAA/questions; entities/attributes; PPR scores; role; parent; proposed URL; internal-link bridges; freshness risk; primary evidence sources; information gain; decision; validation date.

## 7. Preliminary audience evidence

Pew Research Center's 2026 survey of US adults reports that 49% use AI chatbots; 44% report using ChatGPT, 24% Gemini, 17% Copilot, and 14% Meta AI. Information search (42% of chatbot users) and work tasks (38% of employed adults) are common uses. This supports retaining a practical AI-assistant hub, but it does not prove SEO demand or the viability of individual article keywords.

Source: https://www.pewresearch.org/internet/2026/06/17/americans-and-ai-2026-chatbots-smart-devices-and-views-on-impact/

A third-party AI-tool keyword analysis published in October 2026 reports very concentrated branded search demand. Treat its estimates as directional only; verify terms in a primary keyword tool before prioritizing. Source: https://aiproductivity.ai/research/ai-tool-demand-2026/

## 8. Explicit exclusions and cautions

- No “best” rankings without transparent comparison criteria and current evidence.
- No generic AI-generated listicles with interchangeable tool descriptions.
- No one-keyword-one-page publishing.
- No fake hands-on testing or claims of device testing without actual testing records.
- No legal, medical, or financial advice beyond carefully sourced general information and clear limits.
- No thin calculator/tool pages without validated formulas, sources, test cases, and a genuine reader task.
- No location pages or local-business schema for this US-focused national publisher.
- No article drafting, publishing, indexing requests, or sitemap URL additions as part of this draft.

## 9. Phase 1 deliverables and acceptance gate

- [x] Preserve the approved five hubs and current 15 sub-hub URL families.
- [x] Define audience, reader jobs, and core entity boundaries.
- [x] Draft initial topic families and cross-hub routing rules.
- [ ] Validate US keyword clusters and SERP overlap.
- [ ] Identify and resolve cannibalization risks against live competitors.
- [ ] Approve Core/Supporting/Transitional page inventory and publication order.
- [ ] Produce the final SCN/internal-link graph.
- [ ] Owner approval before Phase 2 publishing-system implementation.

**Current decision:** Draft v0.1 only. Continue with research and validation; do not treat this document as publishing authorization.



## 10. First-pass public SERP and query validation — 2026-11-11

**Research scope:** Initial public-web discovery for the US audience. This is qualitative reconnaissance, not a complete Google/Bing SERP capture and not a keyword-volume study. Search snippets and indexed official support pages help confirm that concrete troubleshooting questions and platform-specific task intents exist; they do not establish monthly search volume, difficulty, ranking potential, or exact SERP overlap. OpenSEO keyword data is not yet connected.

### Evidence observed

| Topic candidate | Public evidence observed | Preliminary intent / architecture implication |
|---|---|---|
| iPhone slow / performance | Apple Support has a focused troubleshooting page covering network conditions, unresponsive apps, storage, temperature, Low Power Mode, and battery health. | Strong symptom-led informational intent. One comprehensive iPhone performance page may satisfy several near-synonymous symptoms; validate whether battery drain and overheating SERPs are distinct before splitting. |
| Android battery life / heat | Android Help has a dedicated battery-life guidance page and explicitly notes heat can increase battery drain. | Battery-care intent exists independently of generic Android setup. Compare battery drain vs overheating SERPs before deciding one combined page or separate symptom pages. |
| ChatGPT errors / troubleshooting | OpenAI Help Center has a dedicated error-message troubleshooting page, with issue-specific sections for network errors, suspicious activity, slow/frozen behavior, and other failures. | Clear branded troubleshooting intent. Group error variants by shared solution set; avoid multiple thin pages for near-identical error phrasings. |
| ChatGPT files / audio | OpenAI Help Center maintains a separate upload guide covering supported file types, availability, limits, and troubleshooting. | Distinct task intent from general ChatGPT errors. A file-upload help page is a plausible supporting page, with plan/availability caveats and dated official sourcing. |
| Wi-Fi connected / no internet | Microsoft Support has a dedicated Wi-Fi troubleshooting resource and a distinct section for connected-to-Wi-Fi/no-internet symptoms, including device-vs-router diagnosis and reset steps. | Potentially broad cross-device intent. Need compare generic query SERPs with Windows-specific SERPs; keep Windows-only instructions in Software and network-level troubleshooting in How-to & Fixes. |
| Laptop not charging | HP has a dedicated troubleshooting guide that distinguishes user-checkable causes from charger, port, battery, and board-level repair issues. | Clear device troubleshooting intent. Generic laptop charging query may have manufacturer-specific SERPs; likely one general diagnostic guide with brand-specific caveats unless SERP overlap supports separate brand pages. |
| Phishing / clicked link | FTC consumer guidance covers recognition, reporting, and response after sharing information or opening a suspicious attachment/link. | Strong public-interest/security intent. Separate “recognize phishing” from “what to do after clicking” only if live SERPs and task differences justify it; link to official US reporting channels. |
| Account MFA / 2-Step Verification | Google Account Help has a dedicated 2-Step Verification setup guide, including passkey interactions. | Platform-specific setup intent belongs in supporting content; general account-security Core should explain concepts and route to platform-specific official instructions. |

### First-pass source register

- Apple Support, “If your iPhone or iPad is running slow”: https://support.apple.com/en-gb/102598
- Android Help, “Get the most life from your Android device's battery”: https://support.google.com/android/answer/7664692
- OpenAI Help Center, “Troubleshooting ChatGPT Error Messages”: https://help.openai.com/en/articles/7996703-troubleshooting-chatgpt-error-messages
- OpenAI Help Center, “Uploading files and audio to ChatGPT”: https://help.openai.com/en/articles/8555545-uploading-files-and-audio-to-chatgpt
- Microsoft Support, “Fix Wi-Fi connection issues in Windows”: https://support.microsoft.com/en-us/windows/experience/connectivity-networking/fix-wi-fi-connection-issues-in-windows
- HP Tech Takes, “Laptop Not Charging? How to Fix It”: https://www.hp.com/us-en/tech-takes/laptops/troubleshooting/how-to-fix-laptop-that-wont-charge.html
- FTC Consumer Advice, “How To Recognize and Avoid Phishing Scams”: https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams
- Google Account Help, “Turn on 2-Step Verification”: https://support.google.com/accounts/answer/185839

### Preliminary SERP clustering decisions (provisional)

1. **Keep symptom-led and platform-led pages distinct only where the answer changes.** “Wi-Fi connected but no internet” should not automatically become separate Windows, Android, iPhone, and router articles. Compare the actual result sets and steps first.
2. **ChatGPT error troubleshooting and file-upload help are likely separate intents.** Official support material already treats them as distinct task families; validate with live query SERPs before approving final URLs.
3. **Avoid thin symptom permutations.** “iPhone running slow,” “iPhone lagging,” and “iPhone performance issues” may belong in one page if their SERPs and required solutions overlap. Same rule applies to battery drain / poor battery life and related phrasings.
4. **Keep security response separate from general how-to troubleshooting.** “Clicked a phishing link” is a security incident-response task, not a generic app issue.
5. **Treat vendor support pages as evidence of user problems and authoritative fact sources, not proof of search demand or competitors to beat.** Competitor analysis must include actual ranking publisher pages for the target query.

### Priority for the next validation pass

| Priority | Candidate cluster | Why it is next |
|---|---|---|
| P1 | Wi-Fi connected but no internet / slow Wi-Fi | Broad multi-device reader problem; must resolve hub routing and likely query overlap early. |
| P1 | iPhone slow / battery draining / overheating | High practical value; test whether symptoms share SERPs or deserve separate pages. |
| P1 | Laptop not charging / computer won't start / running slow | Strong actionable troubleshooting tasks; verify generic vs manufacturer/OS-specific intent. |
| P1 | ChatGPT not working / error messages / file upload failure | Branded task families with official documentation; volatile product details require frequent verification. |
| P1 | Phishing recognition / clicked suspicious link / account security | Distinct prevention vs incident-response tasks; high trust and source requirements. |
| P2 | Android battery / app permissions / storage | Validate demand and OEM fragmentation before committing URLs. |
| P2 | Windows/macOS settings and productivity software | Broad topics need narrower query-led clusters and SERP comparison before URL decisions. |
| P2 | AI tool comparisons and AI image copyright/privacy | Commercial/legal freshness risk; defer until clear task-specific demand and evidence differentiation are established. |

### What is not yet validated

- No verified monthly US search volumes, keyword difficulty, CPC, or trend series.
- No complete top-10 Google/Bing result snapshots captured for a fixed US location/device.
- No quantified SERP overlap matrix between close query variants.
- No verified People Also Ask extraction or autocomplete dataset.
- No final Core/Supporting/Transitional assignment for individual article URLs.
- No keyword-level cannibalization audit against existing Daily Tech Insights articles; there are currently no published article URLs in the post sitemap.

**Next gate:** Connect a keyword research source (OpenSEO or an equivalent trusted dataset), then capture fixed-location US SERPs for the P1 clusters and record competing URLs. Do not approve article URLs, write articles, publish, or request indexing until this evidence and the final SCN are reviewed.

## 11. OpenSEO US keyword metrics and SERP competitor validation — 2026-11-11

**Market:** United States (DataForSEO location code 2840), English, Google desktop SERPs.
**Method:** Five seed keyword research calls (up to 150 related terms each), five sampled Google SERPs (depth 10), and cross-keyword competitor aggregation. Metrics are third-party estimates, not Search Console impressions or guaranteed traffic. SERPs are merged repeated reads and can vary.

### A. Measured head-term snapshot

| Candidate | US monthly search volume estimate | Keyword difficulty | Intent | Initial decision |
|---|---:|---:|---|---|
| wifi connected but no internet | 4,400 for main phrase/close variants | 1–2 | Informational | Prioritize one cross-device troubleshooting page. Close variants share volume; do not sum. |
| iPhone battery draining fast | 8,100 | 7 | Informational | Prioritize one iPhone battery-drain page; consolidate synonym variants. |
| laptop not charging | 2,900 | 0 | Informational | Prioritize one diagnostic guide; OEM child pages only if separate intent is proven. |
| ChatGPT not working | 6,600 | 29 | Informational | Prioritize a narrow troubleshooting guide with official status references. |
| what to do if clicked on a phishing link | 590 | 0–3 | Informational | Prioritize as a distinct incident-response guide. |

### B. Long-tail opportunities

| Cluster | Keyword | US volume | KD | Initial treatment |
|---|---|---:|---:|---|
| Wi-Fi | wifi shows connected but no internet | 4,400 | 0 | Same close-variant cluster; merge |
| Wi-Fi | connected but no internet access wifi | 4,400 | 2 | Same close-variant cluster; merge |
| Wi-Fi | wifi keeps disconnecting | 2,400 | 6 | Separate symptom; SERP check before URL |
| iPhone battery | iphone battery draining fast after update | 720 | 14 | Section first; separate URL only if SERP differs |
| iPhone battery | my iphone battery draining fast | 1,600 | 9 | Same intent; merge |
| Laptop | laptop is plugged in not charging | 1,300 | 0 | Supporting section/variant |
| Laptop | acer laptop battery is not charging | 1,300 | 0 | OEM modifier; official-source section first |
| ChatGPT | chatgpt not working today | 720 | 29 | Time-sensitive outage wording; distinguish status from device-side fixes |
| ChatGPT | chatgpt voice not working | 480 | 2 | Feature-specific candidate; SERP validation needed |
| ChatGPT | is chatgpt down | 110,000 | 39 | Distinct live-status intent, highly volatile |
| Phishing | what to do if you click on a phishing link | 590 | 1 | Same post-click incident-response cluster |
| Phishing | check if link is safe | 1,900 | 35 | Distinct pre-click verification intent |
| Phishing | virustotal url check | 3,600 | 10 | Branded tool intent; requires differentiated useful coverage |

Keyword tools returned irrelevant noise too: Wi-Fi queries included unrelated terms; iPhone battery included case/color terms; laptop included 'won't turn on'; phishing included DDoS terms. Filter by entity, intent, and SERP before scoring. Shared-volume variants must not be added together.

### C. SERP composition observations

**Wi-Fi connected but no internet:** Microsoft and TP-Link support resources appeared with forums/community pages. SERP features included AI Overview, People Also Ask, video and discussions. Related queries have MacBook, iPhone, Android, Windows, laptop and TV modifiers. Decision: one cross-device network-level diagnostic page in How-to & Fixes; platform sections only where steps differ. Validate 'can't connect to Wi-Fi' and 'Wi-Fi keeps disconnecting' separately.

**iPhone battery draining fast:** Estimated volume about 8.1k/month, KD 7. Main phrase and 'phone battery draining fast iPhone' have matching metrics, supporting consolidation. Decision: one Phones > iPhone page; update-related causes as a section unless its SERP proves separate intent. Do not mix Android instructions.

**Laptop not charging:** Generic head-term volume about 2.9k; 'plugged in, not charging' is a relevant variant. Sample SERP included HP and Dell manufacturer resources and community results. Decision: one generic diagnostic guide with safe checks and escalation; OEM pages only if intent and instructions are materially distinct.

**ChatGPT not working:** Observed domains included OpenAI Help Center, OpenAI Status, community discussions, troubleshooting publishers and outage-status services. AI Overview, PAA, video and discussion features appeared. Head term volume about 6.6k, KD 29; 'is ChatGPT down' has separate estimated volume around 110k and KD 39. Decision: distinguish service status from user-side troubleshooting (browser/network/account/session). Link to official status; do not imply live status without a live source. 'ChatGPT voice not working' (480, KD 2) is a feature-specific candidate requiring its own SERP validation.

**Clicked a phishing link:** Sample SERP was incident-response focused with security vendors, community posts and security/consumer publishers; PAA, AI Overview, discussions and video features appeared. Post-click variants share around 590 estimated monthly searches and low KD (0–3). 'Check if link is safe' and VirusTotal have separate pre-click/tool intent. Decision: one post-click response guide; pre-click URL-safety checks are a separate candidate if they can be differentiated.

### D. Cross-keyword competitor landscape

Across the five sampled queries: Reddit appeared across four of five; Microsoft Learn appeared for Wi-Fi and laptop troubleshooting; HP and Dell for laptop charging; TP-Link for Wi-Fi; OpenAI Help Center and status.openai.com for ChatGPT; Norton and other security vendors for phishing. NordVPN, Quora, YouTube and Facebook also appeared across query sets/features.

This is a sample, not a market-share ranking. Competitor aggregation is limited to the five selected keywords and sampled SERP reads.

### E. Provisional page decisions and hub ownership

| Proposed topic | Hub | Role | Decision |
|---|---|---|---|
| Wi-Fi connected but no internet: cross-device diagnosis | /how-to/internet-wifi/ | Core candidate | One page with device/router/ISP diagnosis and platform sections |
| Wi-Fi keeps disconnecting | /how-to/internet-wifi/ | Supporting candidate | Validate separate SERP; section initially |
| iPhone battery draining fast | /phones/iphone/ | Supporting/Core candidate | One URL; consolidate synonyms |
| Android battery draining fast | /phones/android/ | Supporting candidate | Separate platform research required |
| Laptop not charging | /how-to/device-fixes/ | Core candidate | One general diagnostic page; source OEM steps |
| Laptop won't turn on | /how-to/device-fixes/ | Supporting candidate | Separate symptom; validate its own query family |
| ChatGPT not working: user-side troubleshooting | /ai/chatgpt/ | Supporting candidate | Keep distinct from live outage intent |
| Is ChatGPT down? | /ai/chatgpt/ | Transitional candidate | High volume but volatile; needs official live source |
| ChatGPT voice not working | /ai/chatgpt/ | Supporting candidate | Validate feature-specific SERP first |
| What to do after clicking a phishing link | /cybersecurity/scams-privacy/ | Core candidate | Distinct incident-response intent |
| Check if a link is safe | /cybersecurity/scams-privacy/ | Supporting candidate | Distinct pre-click intent; review tools carefully |

### F. Evidence limitations and next gate

- Metrics are US/English OpenSEO/DataForSEO estimates, five seeds, maximum 150 related rows per seed.
- Google SERPs sampled at US location code 2840, desktop, depth 10; results may vary between reads.
- No clickstream refinement was enabled. Close variants may share reported volumes.
- Merged SERP `rank` is not a stable single-page Google position; bestPosition is the best observed position across reads.
- No Search Console or GA4 data was used.
- No article URLs currently exist in the post sitemap, so an existing article cannibalization audit is not possible yet.
- No keyword rank tracker, AI visibility tracker, recurring checks, article publishing, sitemap article additions, or indexing requests were configured.

**Next gate:** Research Android battery, Windows slow/startup/update, Gmail issues, account security/MFA, and app-not-opening/verification-code. Compare similar queries' SERPs before approving the complete Core/Supporting/Transitional inventory and SCN graph. Do not draft or publish articles or request indexing yet.
## 12. Second-pass US keyword and SERP review — 2026-11-11

**Scope:** Android battery, Windows 11 performance, Gmail delivery, passkeys, Android app launch troubleshooting. Five seed keyword requests were attempted; Android battery and passkeys returned keyword metrics, while Windows, Gmail, and app-not-opening metric calls returned errors. Google desktop SERPs returned usable result sets for all five themes. Competitor aggregation across these five terms returned no competitor rows; treat that as an unavailable result, not evidence that no competitors exist.

### A. Metrics that returned successfully

| Keyword | US monthly volume estimate | KD | Intent | Interpretation |
|---|---:|---:|---|---|
| android battery draining fast | 720 | 15 | Informational | Real but materially smaller estimated demand than iPhone battery-drain query; still relevant platform coverage. |
| why is my battery draining so fast android | 320 | 14 | Informational | Supporting variant; likely same Android troubleshooting page. |
| passkeys vs passwords | 6,600 | 5 | Informational | Strong opportunity for an explanatory comparison guide under Cybersecurity. |
| best password manager | 14,800 | 46 | Commercial | Separate product-selection intent; do not combine with passkeys explainer. |

Windows 11 slow, Gmail not receiving emails, and app not opening metric calls failed in the keyword provider response; no search-volume or KD values are assigned to those topics.

### B. SERP intent observations and page decisions

**Android battery draining fast**
- SERP included Google Pixel Help, Android.com, Avast, Asurion and iFixit, as well as videos and community content.
- Google Pixel support result is specifically titled around fixing battery drain and offers device diagnostics; Android platform support and vendor/handset instructions are visible.
- Decision: one Android battery-drain guide in Phones > Android. Add a Samsung/Pixel-specific branch or section only when the steps differ and official documentation is available. Do not assume this has the same demand as the iPhone battery query.

**Windows 11 running slow**
- Microsoft Learn/Tech Community, community threads, videos and troubleshooting publishers appeared.
- Sampled result types suggest hands-on diagnostic intent: startup/background apps, system resources, updates, storage and performance settings.
- Decision: one Windows 11 slow-performance troubleshooting page under Software > Windows & macOS. Keep laptop hardware issues (not charging / won't power on) in How-to & Fixes. Do not write a generic Windows 11 mega-guide that mixes setup and symptom diagnosis.

**Gmail not receiving emails**
- SERP included Google Workspace Admin Help, Google support community, Reddit and troubleshooting publishers.
- Result snippets suggest multiple causes: storage quota, spam/trash, filters, forwarding, sync, account/domain configuration, and sender-side delivery. Some results are Gmail consumer troubleshooting, while Workspace Admin guidance addresses domain-level mail delivery/MX records.
- Decision: one consumer Gmail troubleshooting guide; a separate Google Workspace admin/MX guide only if validated as a distinct audience and intent. Do not put Workspace administration steps into consumer instructions without clear separation.

**Passkeys vs passwords**
- SERP included Microsoft Learn, Google Safety, Dashlane, GlobalSign and security publishers, alongside discussion/video features.
- Query is a comparison/explainer intent, while “best password manager” is commercial selection intent and should be a separate page.
- Decision: Core candidate under Cybersecurity > Account Security explaining passkey behavior, device/platform sync and recovery limitations with official sources. Cover password managers in a separate buying/selection cluster only after comparison criteria and current product evidence are established.

**App not opening on Android**
- SERP included Google's official Android app troubleshooting page, Sony support, Asurion, community discussions and video results.
- Snippets show practical troubleshooting steps such as restart/update, force stop, cache/data and app/system checks. Device and OS-version differences must be explicit.
- Decision: one Android app-not-opening diagnostic guide under How-to & Fixes > Apps, Accounts & Everyday Tech Fixes. If app-specific (e.g. one named app) searches dominate, create separate pages only with evidence and genuinely distinct fixes.

### C. Cross-topic routing and cannibalization controls

| Query family | Primary hub | Keep separate from |
|---|---|---|
| Android battery drain | Phones > Android | iPhone battery guide; general battery science |
| Windows 11 slow | Software > Windows & macOS | Laptop not charging / hardware power fault |
| Gmail not receiving emails | Software > Browsers, Email & Cloud Tools | Phishing/compromised account response; Workspace admin MX troubleshooting |
| Passkeys vs passwords | Cybersecurity > Account Security | Best password manager buying guide |
| Android app not opening | How-to & Fixes > Apps & Accounts | Named app-specific errors unless query intent is distinct |

### D. Updated early priority signals

- Passkeys vs passwords has the strongest returned demand/difficulty combination in this batch: 6.6k volume estimate, KD 5. Worth advancing to an evidence-rich Core brief after validating PAA and exact SERP overlap with “what is a passkey” and “how do passkeys work.”
- Android battery drain has lower estimated demand (720) and KD 15 compared with iPhone battery drain (8.1k, KD 7); keep it in cluster coverage, but sequence after the stronger iPhone query unless strategic completeness says otherwise.
- Windows 11 and Gmail topics have recognizable, task-led SERPs, but lack returned keyword metrics in this run. Don't assign priority using guessed volumes.
- Android app troubleshooting is a useful long-tail/supporting topic, but current provider data has no reliable volume estimate. Validate more synonyms and Android-version modifiers before deciding a stand-alone URL.

### E. Source/metric limits

- Google SERP sample: US (2840), English, desktop, depth 10; returned merged reads rather than one stable result page.
- Android battery and passkeys metric data returned from five-seed keyword research. Other three keyword metric calls failed.
- The competitor aggregation tool returned an empty competitor array for this five-query set; individual SERP items were still returned and are recorded qualitatively. Competitor aggregation therefore remains incomplete.
- No GSC/GA4 data is connected to the OpenSEO project; no first-party metrics were available.
- 22 candidate terms across the two research batches were saved in OpenSEO for future reference. No rank tracking, scheduled tracking, or paid recurring monitoring was configured.

**Next gate:** Retry failed seed metrics with simpler variants, then inspect more query variants for Gmail, Windows, and Android app fixes. Confirm whether passkeys explainer and password-manager selection have different SERPs. Once the remaining hub families have evidence, assemble final topic inventory and SCN graph. No articles, sitemap content, or indexing actions until approval.