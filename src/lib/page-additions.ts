import type {EditorialSection} from "@/lib/site";

export const subSectionAdditions:Record<string,EditorialSection[]> = {
 iphone:[
 {heading:"Check these details before changing iPhone settings",body:"Record the iPhone model, iOS version, available storage, and the exact setting or alert involved. If a problem began after an update, app install, or account change, include that timing in your notes. This helps separate an iOS-wide issue from an app-specific problem and makes Apple Support conversations more useful.",points:["Find the iOS version in Settings > General > About","Check available storage before installing updates or downloading large files","Back up important data before resets, restores, or major repairs"]}
 ],
 android:[
 {heading:"Identify the Android version and phone maker first",body:"Android menus can differ between Pixel, Samsung Galaxy, and other devices. Check the model and Android version before following a menu path, and use the phone maker's instructions when a setting is manufacturer-specific. If a work profile or device-management policy is present, ask the administrator before removing it.",points:["Check Settings > About phone for model and software details","Install app updates through Google Play or the manufacturer's supported store","Review permissions for the specific app involved, not every app indiscriminately"]}
 ],
 "phone-performance":[
 {heading:"Separate a battery problem from a performance problem",body:"Battery drain, overheating, slow response, and weak connectivity can overlap, but they are not interchangeable symptoms. Note whether the issue appears while charging, gaming, using navigation, or when the phone is idle. Compare battery usage and temperature patterns before installing cleaner apps or changing background restrictions.",points:["Check battery usage by app over the same time window","Test signal strength and Wi-Fi separately from mobile data","Stop charging and seek service if the battery is swollen or the phone becomes dangerously hot"]}
 ],
 chatgpt:[
 {heading:"Make ChatGPT answers easier to verify",body:"Give the assistant the task, audience, constraints, and required output format. For factual work, ask for sources and dates, then open the cited material yourself. ChatGPT can make mistakes or present uncertain information confidently, so do not treat a generated answer as the final authority for legal, financial, medical, or safety decisions.",points:["Separate facts you supplied from facts the assistant needs to research","Ask it to flag assumptions, missing information, and uncertainty","Check important claims against the original source, not only a summary"]}
 ],
 "ai-tools":[
 {heading:"Run a small, realistic tool evaluation",body:"Compare AI tools using the same representative task rather than relying on product demos. Score output accuracy, editing time, privacy controls, export formats, collaboration, accessibility, and total cost. A free trial is useful only if you test the workflow you expect to use after subscribing.",points:["Use a real but non-confidential sample task","Record how much human correction each result needs","Check data retention, training controls, cancellation terms, and export options"]}
 ],
 "ai-image-privacy":[
 {heading:"Review an AI image before publishing it",body:"Generated images can contain inaccurate text, distorted details, or visual elements that imply something untrue. Check faces, hands, logos, product details, signs, and background context at full size. Confirm that you have permission to use uploaded reference images and that the tool's terms allow your intended commercial use.",points:["Check likeness, consent, copyright, and brand-use concerns","Do not present synthetic events or evidence as authentic photography","Keep a record of source assets, permissions, and material edits"]}
 ],
 "operating-systems":[
 {heading:"Choose the least disruptive Windows or macOS fix",body:"Before using recovery tools, identify whether the issue affects one app, one user account, or the whole computer. Note the exact error message and recent changes. Prefer built-in settings and official update channels; create a current backup before resets, reinstallations, disk repairs, or firmware changes.",points:["Record the operating-system version and device model","Test another app or user account when appropriate","Avoid registry edits, terminal commands, and third-party driver sites unless a trusted support procedure calls for them"]}
 ],
 productivity:[
 {heading:"Choose a file format based on what must survive conversion",body:"A PDF is usually better for preserving a final layout, while an editable document or spreadsheet is better when recipients need to revise content. Conversion can change fonts, page breaks, formulas, image placement, or accessibility structure. Open the converted file and compare it with the original before sharing it.",points:["Check tables, page breaks, fonts, links, and image placement","Keep an editable original and a separate final copy","Use approved services for confidential or regulated documents"]}
 ],
 "browsers-cloud":[
 {heading:"Find out whether a browser or cloud sync is responsible",body:"If a page fails in one browser, test a private window or a second browser before clearing all data. If a cloud file is missing, confirm the account, sync status, storage quota, and sharing permissions. Deleting a synced file can remove it from other devices too, so check the service's recovery options first.",points:["Test another browser or a private window to isolate extensions","Confirm the exact account and folder before moving or deleting files","Check service status and storage limits before reinstalling sync software"]}
 ],
 "account-security":[
 {heading:"Secure recovery methods as carefully as passwords",body:"An account can remain vulnerable if an attacker controls its recovery email, phone number, or active session. Review recovery details after changing a password, remove sessions and connected apps you do not recognize, and store backup codes somewhere separate from the device they protect.",points:["Use a unique password and a supported passkey or multi-factor method","Review recent sign-ins and active sessions from the service's official site","Never share a one-time verification code with someone who contacts you"]}
 ],
 "phone-security":[
 {heading:"Review app access without breaking essential features",body:"Location, camera, microphone, contacts, photos, and Bluetooth permissions should match what an app actually needs. Revoke access that is unnecessary, but expect some features to stop working until permission is restored. Lost-device tools also depend on account access and device settings being configured before the phone goes missing.",points:["Review permissions in the operating system's privacy settings","Use a strong screen lock and keep device software current","Confirm lost-device and account-recovery options while you still have the phone"]}
 ],
 "scams-privacy":[
 {heading:"Verify suspicious messages through a separate channel",body:"A familiar logo, caller ID, or sender display name does not prove a message is genuine. Do not use the phone number or link inside an unexpected message to verify it. Open the organization's official app or type its known website address yourself, and report suspected fraud through the official channel.",points:["Do not share passwords, payment details, or verification codes","Pause when a message creates urgency or threatens immediate consequences","Save the message and report it to the relevant platform or authority"]}
 ],
 "internet-wifi":[
 {heading:"Use the connection pattern to choose the right fix",body:"A single-device failure points toward that device's saved network, software, or VPN settings. A whole-home outage points toward the router, modem, line, or internet provider. A problem limited to one room suggests signal coverage or interference. Record which pattern you observe before changing DNS, router channels, or security settings.",points:["Compare at least two devices on the same network","Test near the router and, if possible, over a wired connection","Record outage times and router status lights before contacting the provider"]}
 ],
 "device-fixes":[
 {heading:"Know when a device problem needs repair, not software tweaks",body:"A swollen battery, burning smell, liquid exposure, damaged power connector, or repeated unexpected shutdown can indicate a hardware or electrical fault. Stop using or charging a device when it appears unsafe. For software-only symptoms, record error messages and recent changes before running diagnostics or reinstalling an operating system.",points:["Use the manufacturer's diagnostic tools for the exact model","Do not open power adapters or puncture, bend, or press a battery","Back up accessible data before repair or recovery work"]}
 ],
 "apps-accounts":[
 {heading:"Troubleshoot sign-in and verification errors safely",body:"Check that you are using the correct account, official app, and current recovery method. Confirm the device date and time are correct if codes fail, and check spam or blocked-message settings when an email or text does not arrive. Never pay a third party or share a one-time code to recover an account.",points:["Open the service directly rather than following an unexpected recovery link","Check account recovery email, phone number, spam folder, and service status","Use the provider's official recovery flow and secure the account after access is restored"]}
 ]
};
