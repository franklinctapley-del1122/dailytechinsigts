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
