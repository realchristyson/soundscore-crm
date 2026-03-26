import { useState, useRef, useEffect } from "react";
const FONT = `@import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap');`;
const C = {
  bg:"#070810", surface:"#0c0d1a", card:"#101122", border:"#181930",
  accent:"#4f46e5", accentLt:"#6366f1", gold:"#f59e0b",
  green:"#10b981", red:"#ef4444", yellow:"#eab308", cyan:"#06b6d4",
  text:"#eef0ff", muted:"#525470",
};
const API = "https://soundscore-backend-production.up.railway.app";
const IIQ_LINK = "https://member.identityiq.com/sc-securepreferred.aspx?offercode=4312714G";
const SC_LINK = "https://www.smartcredit.com/join/?pid=17448";
/* ─── PERSISTENT TOKEN STORE ─────────────────────────────────────────────── */
let _token = localStorage.getItem("ss_token") || null;
const setToken = (t) => { _token = t; if(t) localStorage.setItem("ss_token", t); else localStorage.removeItem("ss_token"); };
const getToken = () => _token;
/* ─── API HELPER ─────────────────────────────────────────────────────────── */
const api = async (path, opts = {}) => {
  const token = getToken();
  const headers = { ...(opts.headers || {}) };
  if (token) headers["Authorization"] = `Bearer ${token}`;
  if (!(opts.body instanceof FormData)) headers["Content-Type"] = "application/json";
  const res = await fetch(`${API}${path}`, { ...opts, headers });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `API error ${res.status}`);
  return data;
};
/* ─── MAP API → FRONTEND SHAPE ───────────────────────────────────────────── */
const mapClient = (c) => ({
  id: c.id,
  firstName: c.first_name || "",
  lastName: c.last_name || "",
  name: c.name || `${c.first_name || ""} ${c.last_name || ""}`.trim(),
  email: c.email,
  dob: c.dob || "",
  currentAddress: c.current_address || "",
  status: c.status || "new",
  round: c.current_round || 1,
  approved: c.approved || false,
  reportUploaded: c.report_uploaded || false,
  reportPath: c.report_path || null,
  onboardStep: c.onboard_step || "new",
  submittedAt: c.created_at ? new Date(c.created_at).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}) : "",
  scores: {
    transunion: c.score_transunion || null,
    experian: c.score_experian || null,
    equifax: c.score_equifax || null,
  },
  currentAddresses: (c.addresses || []).filter(a => a.type !== 'previous').map(a => a.address),
  previousAddresses: (c.addresses || []).filter(a => a.type === 'previous').map(a => a.address),
  nameVariants: (c.name_variants || []).map(n => n.name),
  accounts: (c.accounts || []).map(a => ({
    id: a.id, creditor: a.creditor || "", balance: a.balance || 0,
    limit: a.credit_limit || 0, bureau: a.bureau || "All 3",
    status: a.payment_status || "Current", type: a.account_type || "Credit Card",
    negative: a.is_negative || false,
  })),
  latePayments: (c.late_payments || []).map(lp => ({
    id: lp.id, creditor: lp.creditor || "", days: lp.days_late || "30",
    bureau: lp.bureau || "", date: lp.reported_date || "",
  })),
  inquiries: (c.inquiries || []).map(inq => ({
    id: inq.id, name: inq.company || "", date: inq.inquiry_date || "", bureau: inq.bureau || "",
  })),
  rounds: (c.rounds || []).map(r => ({
    id: r.id, num: r.round_num,
    status: r.status === "completed" ? "complete" : r.status,
    sentAt: r.sent_at ? new Date(r.sent_at).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}) : null,
    notes: r.notes || "",
  })),
  updates: (c.updates || []).map(u => ({
    id: u.id, text: u.text,
    date: u.created_at ? new Date(u.created_at).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}) : "",
    type: u.type || "info",
  })),
  roundUpdates: (() => {
    const map = {};
    (c.updates || []).forEach(u => {
      if(u.type === "round_update") {
        try { const d = JSON.parse(u.text); if(d.round) map[d.round] = {...d, agentFilled: true}; } catch(e){}
      }
      if(u.type === "client_report_updated") {
        try { const d = JSON.parse(u.text); if(d.round) { if(!map[d.round]) map[d.round]={}; map[d.round].clientConfirmed = true; } } catch(e){}
      }
    });
    return map;
  })(),
});
const mapClientList = (c) => ({
  id: c.id,
  firstName: c.first_name || "",
  lastName: c.last_name || "",
  name: c.name || `${c.first_name || ""} ${c.last_name || ""}`.trim(),
  email: c.email,
  status: c.status || "new",
  round: c.current_round || 1,
  approved: c.approved || false,
  reportUploaded: c.report_uploaded || false,
  onboardStep: c.onboard_step || "new",
  submittedAt: c.created_at ? new Date(c.created_at).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}) : "",
  scores: {
    transunion: c.score_transunion || null,
    experian: c.score_experian || null,
    equifax: c.score_equifax || null,
  },
});
/* ─── LETTER GENERATORS ─────────────────────────────────────────────────── */
const todayStr = () => new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});
const BUREAU_ADDR = {
  Equifax:"Equifax Information Services LLC\nP.O. Box 740256\nAtlanta, GA 30374-0256",
  TransUnion:"TransUnion LLC\nConsumer Dispute Center\nP.O. Box 2000\nChester, PA 19016",
  Experian:"Experian\nP.O. Box 4500\nAllen, TX 75013",
};
const genR1 = (c, bureau) => {
  const aliases = (c.nameVariants||[]).filter(n => n.trim().toLowerCase() !== (c.name||'').trim().toLowerCase());
  const addrsToRemove = (c.previousAddresses||[]);
  const aliasLines = aliases.length ? aliases.map(n=>`   \u2022 ${n}`).join("\n") : "   [None listed]";
  const addrLines = addrsToRemove.length ? addrsToRemove.map(a=>`   \u2022 ${a}`).join("\n") : "   [None listed]";
  return `${c.name}\n${c.currentAddress||"[Current Address]"}\nDOB: ${c.dob||"[Date of Birth]"}\nSSN: XXX-XX-[Last 4]\n\nDate: ${todayStr()}\n\nTo: ${bureau}\n${BUREAU_ADDR[bureau]}\n\nRe: Request to Reinvestigate and Delete Inaccurate Personal Information\n\nDear Consumer Reporting Agency,\n\nI am writing to dispute inaccurate and/or obsolete personal information appearing in my consumer file. Pursuant to the Fair Credit Reporting Act, I request that you conduct a reasonable reinvestigation of the disputed identifiers below and delete any information that is inaccurate, incomplete, obsolete, or cannot be verified.\n\nUnder 15 U.S.C. \u00a7 1681i(a)(1)(A), you must reinvestigate disputed information in my file. Under 15 U.S.C. \u00a7 1681e(b), you must maintain reasonable procedures to assure maximum possible accuracy. Under 15 U.S.C. \u00a7 1681g(a), I also request disclosure of the source of each item of personal information you continue to report.\n\nDISPUTED PERSONAL INFORMATION\n\nPlease investigate and remove the following items from my file:\n\nNames / Aliases to Remove:\n${aliasLines}\n\nAddresses to Remove:\n${addrLines}\n\nEmployers to Remove:\n   [None listed]\n\nPhone Numbers / Other Identifiers to Remove:\n   [None listed]\n\nThese items are not current, not accurate, obsolete, duplicated, or do not belong to me. Please retain only my correct current identifying information:\n\nCorrect Name: ${c.name}\nCorrect Current Address: ${c.currentAddress||"[Current Address]"}\nCorrect Employer: None Reported\n\nPlease complete your reinvestigation and send me an updated copy of my file reflecting deletion of the disputed personal information. If you continue reporting any disputed identifier, then please provide:\n\n   1. The source of that information,\n   2. The date you obtained it, and\n   3. The description of the procedures used to verify its accuracy.\n\nIf you cannot verify the above personal identifiers as accurate, complete, and current, please delete them from my consumer file and send me an updated report.\n\nI have enclosed copies of my identification and proof of current address to support this request.\n\nSincerely,\n\n${c.name}\n\nEnclosures: Government-issued ID \u00b7 Proof of current address`;
};
const gen605B = (c, bureau) => {
  const negAccts = (c.accounts||[]).filter(a=>a.negative);
  const acctList = negAccts.length ? negAccts.map((a,i)=>`   ${i+1}. ${a.creditor} — $${a.balance} (${a.bureau})`).join("\n") : "   [No accounts listed]";
  return `${todayStr()}\n\n${c.name}\n${c.currentAddress||"[Current Address]"}\n\n${BUREAU_ADDR[bureau]}\n\nRe: FCRA Section 605B — Block Accounts Linked to Removed Addresses\n\nTo Whom It May Concern,\n\nPursuant to Section 605B of the Fair Credit Reporting Act, I am\nformally requesting the removal of the following accounts from\nmy credit file. These accounts were associated with addresses\nthat have been confirmed as inaccurate and removed from my\ncredit file. Under Section 605B, any account linked to removed\nidentifying information must be blocked.\n\nACCOUNTS TO BE BLOCKED / REMOVED:\n${acctList}\n\nPlease block all listed accounts and provide written\nconfirmation of the block within 30 days as required.\n\nSincerely,\n\n${c.name}\nDOB: ${c.dob||"[DOB]"}\n\nEnclosures: ID · Prior bureau response confirming address removal`;
};
const genFactual = (c, bureau) => {
  const negAccts = (c.accounts||[]).filter(a=>a.negative);
  const acctList = negAccts.length ? negAccts.map((a,i)=>`   ${i+1}. ${a.creditor} — Balance: $${a.balance}, Status: ${a.status}`).join("\n") : "   [No accounts listed]";
  const latePayments = (c.latePayments||[]).filter(lp=>!bureau||lp.bureau===bureau||lp.bureau==="All 3"||!lp.bureau);
  const lpList = latePayments.length ? latePayments.map((lp,i)=>`   ${i+1}. ${lp.creditor} — ${lp.days} days late${lp.date?` (${lp.date})`:""}`).join("\n") : "   [None listed]";
  const inquiries = (c.inquiries||[]).filter(inq=>!bureau||inq.bureau===bureau||inq.bureau==="All 3"||!inq.bureau);
  const inqList = inquiries.length ? inquiries.map((inq,i)=>`   ${i+1}. ${inq.name}${inq.date?` — ${inq.date}`:""}`).join("\n") : "   [None listed]";
  const lpSection = latePayments.length ? `\nLATE PAYMENTS TO DISPUTE:\n${lpList}\n` : "";
  const inqSection = inquiries.length ? `\nHARD INQUIRIES TO REMOVE:\n${inqList}\n` : "";
  return `${todayStr()}\n\n${c.name}\n${c.currentAddress||"[Current Address]"}\n\n${BUREAU_ADDR[bureau]}\n\nRe: Factual Dispute — Inaccurate Account Information\n    FCRA Section 611\n\nTo Whom It May Concern,\n\nI am formally disputing the accuracy of the following accounts\nappearing on my ${bureau} credit report. The information\nreported is factually inaccurate and cannot be verified.\n\nACCOUNTS BEING DISPUTED:\n${acctList}\n${lpSection}${inqSection}\nUnder FCRA Section 611, I request that you:\n1. Investigate all reported information for accuracy\n2. Provide the method of verification used\n3. Remove or correct all inaccurate data within 30 days\n4. Delete any account that cannot be fully verified\n5. Remove all unauthorized or unrecognized hard inquiries\n\nSincerely,\n\n${c.name}\nDOB: ${c.dob||"[DOB]"}\n\nEnclosures: Government-issued ID · Supporting documentation`;
};
const genAdvanced = (c, bureau) => {
  const negAccts = (c.accounts||[]).filter(a=>a.negative);
  const acctList = negAccts.length ? negAccts.map((a,i)=>`   ${i+1}. ${a.creditor} — $${a.balance}`).join("\n") : "   [No accounts listed]";
  return `${todayStr()}\n\n${c.name}\n${c.currentAddress||"[Current Address]"}\n\nATTN: Legal Compliance Department\n${BUREAU_ADDR[bureau]}\n\nRe: Advanced Factual Dispute & Method of Verification Demand\n    FCRA Sections 611, 612, 623\n\nTo Whom It May Concern,\n\nThis is my formal escalation dispute regarding the following\naccounts which remain on my credit report despite previous\ndispute submissions. I am now invoking my full rights under\nFCRA Sections 611, 612, and 623.\n\nACCOUNTS STILL DISPUTED:\n${acctList}\n\nI am demanding:\n1. Complete method of verification for each account\n2. Name and contact of the verifying party\n3. All documentation used to verify these accounts\n4. Immediate deletion if verification cannot be provided\n\nFailure to comply may result in a formal complaint filed\nwith the CFPB and legal action under the FCRA.\n\nSincerely,\n\n${c.name}\nDOB: ${c.dob||"[DOB]"}\n\nEnclosures: All prior dispute correspondence · Government ID`;
};
/* ─── CSS ────────────────────────────────────────────────────────────────── */
const css = `
${FONT}
*{box-sizing:border-box;margin:0;padding:0;}
html,body{background:${C.bg};color:${C.text};font-family:'Outfit',sans-serif;min-height:100vh;}
::-webkit-scrollbar{width:4px;}::-webkit-scrollbar-track{background:${C.surface};}::-webkit-scrollbar-thumb{background:${C.accent};border-radius:2px;}
@keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes wave{0%,100%{transform:scaleY(.35)}50%{transform:scaleY(1)}}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.45}}
@keyframes countdown{from{width:100%}to{width:0%}}
.fu{animation:fadeUp .45s ease both;}
.fu1{animation:fadeUp .45s .08s ease both;}
.fu2{animation:fadeUp .45s .16s ease both;}
.fu3{animation:fadeUp .45s .24s ease both;}
.app{min-height:100vh;position:relative;overflow-x:hidden;}
.app::before{content:'';position:fixed;inset:0;pointer-events:none;z-index:0;
  background:radial-gradient(ellipse 90% 55% at 50% -8%,${C.accent}14,transparent 55%),
             radial-gradient(ellipse 40% 30% at 90% 90%,${C.gold}08,transparent 60%);}
.auth-page{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px;position:relative;z-index:1;}
.auth-card{width:100%;max-width:440px;background:${C.card};border:1px solid ${C.border};
  border-radius:24px;padding:40px;position:relative;overflow:hidden;}
.auth-card::before{content:'';position:absolute;top:-80px;right:-80px;width:240px;height:240px;
  border-radius:50%;background:radial-gradient(${C.accent}18,transparent 70%);pointer-events:none;}
.auth-logo{display:flex;align-items:center;gap:10px;margin-bottom:32px;}
.auth-lmark{width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,${C.accent},${C.gold});
  display:flex;align-items:center;justify-content:center;}
.sww{display:flex;align-items:center;gap:2px;height:15px;}
.swb{width:3px;background:white;border-radius:2px;transform-origin:bottom;}
.swb:nth-child(1){animation:wave .8s 0s ease-in-out infinite;}
.swb:nth-child(2){animation:wave .8s .15s ease-in-out infinite;}
.swb:nth-child(3){animation:wave .8s .3s ease-in-out infinite;}
.swb:nth-child(4){animation:wave .8s .15s ease-in-out infinite;}
.swb:nth-child(5){animation:wave .8s 0s ease-in-out infinite;}
.auth-brand{font-family:'Clash Display',sans-serif;font-size:20px;font-weight:700;letter-spacing:-.4px;}
.auth-brand span{color:${C.gold};}
.auth-title{font-family:'Clash Display',sans-serif;font-size:26px;font-weight:700;letter-spacing:-.5px;margin-bottom:6px;}
.auth-sub{font-size:13px;color:${C.muted};margin-bottom:28px;line-height:1.6;}
.auth-tabs{display:flex;gap:4px;background:${C.surface};border-radius:12px;padding:4px;margin-bottom:24px;}
.auth-tab{flex:1;padding:9px;border:none;border-radius:9px;cursor:pointer;font-family:'Outfit',sans-serif;
  font-size:13px;font-weight:600;transition:all .2s;background:transparent;color:${C.muted};}
.auth-tab.active{background:${C.accent};color:white;box-shadow:0 4px 12px ${C.accent}44;}
.nav{position:sticky;top:0;z-index:200;display:flex;align-items:center;justify-content:space-between;
  padding:0 28px;height:64px;background:${C.bg}ee;backdrop-filter:blur(24px);border-bottom:1px solid ${C.border};}
.logo{display:flex;align-items:center;gap:10px;}
.lmark{width:34px;height:34px;border-radius:9px;background:linear-gradient(135deg,${C.accent},${C.gold});display:flex;align-items:center;justify-content:center;}
.lname{font-family:'Clash Display',sans-serif;font-size:18px;font-weight:700;letter-spacing:-.4px;}
.lname span{color:${C.gold};}
.main{max-width:1080px;margin:0 auto;padding:32px 24px;position:relative;z-index:1;}
.onboard-step{min-height:calc(100vh - 64px);display:flex;align-items:center;justify-content:center;padding:32px 24px;position:relative;z-index:1;}
.onboard-card{width:100%;max-width:560px;background:${C.card};border:1px solid ${C.border};border-radius:24px;padding:40px;}
.fg{margin-bottom:16px;}
.fl{display:block;font-size:11px;font-weight:600;color:${C.muted};text-transform:uppercase;letter-spacing:1px;margin-bottom:7px;}
.fi,.fsel{width:100%;background:${C.surface};border:1px solid ${C.border};border-radius:12px;
  padding:12px 16px;color:${C.text};font-family:'Outfit',sans-serif;font-size:14px;outline:none;transition:all .2s;}
.fi:focus,.fsel:focus{border-color:${C.accent};box-shadow:0 0 0 3px ${C.accent}18;}
.fsel option{background:${C.card};}
.fg-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
.fg-row3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:11px 22px;
  border-radius:12px;border:none;cursor:pointer;font-family:'Outfit',sans-serif;font-size:13px;font-weight:700;transition:all .2s;}
.btn-p{background:${C.accent};color:white;box-shadow:0 4px 14px ${C.accent}44;}
.btn-p:hover{background:${C.accentLt};transform:translateY(-1px);}
.btn-p:disabled{opacity:.45;cursor:not-allowed;transform:none;}
.btn-gold{background:linear-gradient(135deg,${C.gold},#d97706);color:white;box-shadow:0 4px 14px ${C.gold}33;}
.btn-gold:hover{transform:translateY(-1px);}
.btn-g{background:transparent;color:${C.muted};border:1px solid ${C.border};}
.btn-g:hover{color:${C.text};border-color:${C.muted};}
.btn-red{background:${C.red}18;color:${C.red};border:1px solid ${C.red}33;}
.btn-green{background:${C.green};color:white;box-shadow:0 4px 14px ${C.green}33;}
.btn-green:hover{transform:translateY(-1px);}
.btn-sm{padding:7px 14px;font-size:12px;border-radius:9px;}
.btn-full{width:100%;}
.btn-iiq{background:linear-gradient(135deg,#1a56db,#1e40af);color:white;padding:16px 28px;
  font-size:15px;border-radius:14px;border:none;cursor:pointer;font-family:'Outfit',sans-serif;
  font-weight:700;transition:all .2s;display:flex;align-items:center;gap:12px;width:100%;justify-content:center;
  box-shadow:0 6px 20px #1a56db44;}
.btn-iiq:hover{transform:translateY(-2px);box-shadow:0 10px 28px #1a56db55;}
.card{background:${C.card};border:1px solid ${C.border};border-radius:20px;padding:24px;margin-bottom:18px;}
.ct{font-family:'Clash Display',sans-serif;font-size:17px;font-weight:600;letter-spacing:-.3px;margin-bottom:4px;}
.cs{font-size:12px;color:${C.muted};margin-bottom:18px;line-height:1.6;}
.badge{display:inline-flex;align-items:center;gap:4px;padding:3px 10px;border-radius:20px;font-size:10px;font-weight:700;}
.b-green{background:${C.green}18;color:${C.green};border:1px solid ${C.green}33;}
.b-red{background:${C.red}18;color:${C.red};border:1px solid ${C.red}33;}
.b-yellow{background:${C.yellow}18;color:${C.yellow};border:1px solid ${C.yellow}33;}
.b-blue{background:${C.accent}18;color:${C.accentLt};border:1px solid ${C.accent}33;}
.b-gold{background:${C.gold}18;color:${C.gold};border:1px solid ${C.gold}33;}
.b-gray{background:${C.border};color:${C.muted};}
.b-cyan{background:${C.cyan}18;color:${C.cyan};border:1px solid ${C.cyan}33;}
.tw{overflow-x:auto;}
table{width:100%;border-collapse:collapse;font-size:13px;}
thead th{text-align:left;padding:10px 14px;font-size:10px;text-transform:uppercase;
  letter-spacing:1.5px;color:${C.muted};border-bottom:1px solid ${C.border};font-weight:600;}
tbody tr{border-bottom:1px solid ${C.border}22;transition:background .15s;}
tbody tr:hover{background:${C.surface}66;}
tbody td{padding:12px 14px;vertical-align:middle;}
.g4{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:20px;}
.g3{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;}
.stat{background:${C.surface};border:1px solid ${C.border};border-radius:14px;padding:18px;}
.sv{font-family:'Clash Display',sans-serif;font-size:26px;font-weight:700;letter-spacing:-1px;margin-bottom:4px;}
.sn{font-size:10px;color:${C.muted};text-transform:uppercase;letter-spacing:1px;font-weight:600;}
.client-card{background:${C.card};border:1px solid ${C.border};border-radius:16px;padding:20px;
  cursor:pointer;transition:all .2s;margin-bottom:12px;display:flex;align-items:center;gap:16px;}
.client-card:hover{border-color:${C.accent}44;transform:translateY(-1px);}
.avatar{width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,${C.accent},${C.gold});
  display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;color:white;flex-shrink:0;}
.tabrow{display:flex;gap:4px;background:${C.surface};border:1px solid ${C.border};border-radius:14px;padding:4px;margin-bottom:18px;flex-wrap:wrap;}
.tabbtn{flex:1;min-width:70px;padding:8px 6px;border:none;border-radius:10px;cursor:pointer;
  font-family:'Outfit',sans-serif;font-size:12px;font-weight:600;transition:all .2s;background:transparent;color:${C.muted};}
.tabbtn.active{background:${C.accent};color:white;box-shadow:0 4px 12px ${C.accent}44;}
.letter-box{background:${C.surface};border:1px solid ${C.border};border-radius:14px;padding:22px;
  font-size:12px;line-height:2;color:${C.text};white-space:pre-wrap;max-height:420px;overflow-y:auto;font-family:'Outfit',monospace;}
.upz{border:2px dashed ${C.border};border-radius:16px;padding:48px 32px;text-align:center;cursor:pointer;transition:all .3s;}
.upz:hover,.upz.drag{border-color:${C.accent};background:${C.accent}07;}
.round-track{display:flex;flex-direction:column;gap:0;}
.round-item{display:flex;gap:0;}
.round-left{display:flex;flex-direction:column;align-items:center;width:52px;flex-shrink:0;}
.round-node{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;
  font-size:18px;border:2px solid ${C.border};background:${C.surface};transition:all .4s;flex-shrink:0;z-index:1;}
.round-node.complete{background:${C.green};border-color:${C.green};box-shadow:0 0 16px ${C.green}44;}
.round-node.active{background:${C.accent};border-color:${C.accentLt};box-shadow:0 0 20px ${C.accent}55;}
.round-connector{width:2px;flex:1;min-height:16px;background:${C.border};transition:background .4s;}
.round-connector.complete{background:${C.green};}
.round-body{flex:1;padding:0 0 24px 18px;}
.timer-wrap{background:${C.surface};border:1px solid ${C.border};border-radius:12px;padding:16px;margin-top:10px;}
.timer-bar{height:6px;background:${C.border};border-radius:3px;overflow:hidden;margin:8px 0;}
.timer-fill{height:100%;border-radius:3px;background:linear-gradient(90deg,${C.accent},${C.gold});transition:width .3s;}
.item-row{background:${C.surface};border:1px solid ${C.border};border-radius:12px;
  padding:12px 16px;margin-bottom:8px;display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:13px;}
.tl{display:flex;flex-direction:column;gap:14px;}
.tl-item{display:flex;gap:12px;align-items:flex-start;}
.tl-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0;margin-top:4px;}
.tl-text{font-size:13px;font-weight:500;margin-bottom:2px;}
.tl-date{font-size:11px;color:${C.muted};}
.info{background:${C.accent}0c;border:1px solid ${C.accent}33;border-radius:12px;
  padding:14px 16px;font-size:12px;color:${C.muted};display:flex;gap:10px;line-height:1.7;}
.divider{height:1px;background:${C.border};margin:20px 0;}
.update-gate{background:${C.yellow}09;border:1px solid ${C.yellow}33;border-radius:14px;padding:18px;margin-top:12px;}
.update-gate-header{display:flex;align-items:center;gap:10px;margin-bottom:14px;}
.lock-block{background:${C.red}08;border:1px dashed ${C.red}30;border-radius:14px;padding:16px;display:flex;align-items:center;gap:12px;margin-top:10px;}
.update-done{background:${C.green}09;border:1px solid ${C.green}33;border-radius:14px;padding:16px;margin-top:12px;}
.score-row{display:flex;gap:10px;margin:10px 0;}
.score-box{flex:1;background:${C.surface};border:1px solid ${C.border};border-radius:10px;padding:10px;text-align:center;}
.score-delta-pos{color:${C.green};font-size:12px;font-weight:700;}
.score-delta-neg{color:${C.red};font-size:12px;font-weight:700;}
.score-delta-zero{color:${C.muted};font-size:12px;}
.removed-list{display:flex;flex-direction:column;gap:6px;max-height:200px;overflow-y:auto;margin:10px 0;}
.removed-item{display:flex;align-items:center;gap:8px;background:${C.surface};border:1px solid ${C.border};border-radius:8px;padding:8px 12px;cursor:pointer;transition:all .15s;}
.removed-item:hover{border-color:${C.accent}66;}
.removed-item.checked{background:${C.green}0a;border-color:${C.green}44;}
.client-action-card{background:${C.gold}09;border:1px solid ${C.gold}33;border-radius:16px;padding:20px;margin-bottom:16px;}
.toast{position:fixed;bottom:28px;right:28px;z-index:9999;background:${C.green};color:white;
  padding:12px 22px;border-radius:12px;font-weight:700;font-size:14px;
  box-shadow:0 8px 28px ${C.green}44;animation:fadeUp .3s ease;}
.pending-screen{min-height:calc(100vh - 64px);display:flex;align-items:center;justify-content:center;padding:32px;position:relative;z-index:1;}
@media(max-width:768px){
  .g4,.g3,.fg-row,.fg-row3{grid-template-columns:1fr 1fr;}
  .main{padding:20px 14px;}
}
`;
/* ─── SPINNERS ───────────────────────────────────────────────────────────── */
const Spin = () => <span style={{width:14,height:14,border:"2px solid white",borderTopColor:"transparent",borderRadius:"50%",animation:"spin .7s linear infinite",display:"inline-block"}}/>;
const Logo = () => (
  <div className="auth-logo">
    <div className="auth-lmark"><div className="sww">{[10,14,18,14,10].map((h,i)=><div key={i} className="swb" style={{height:h}}/>)}</div></div>
    <div className="auth-brand">Sound<span>Score</span></div>
  </div>
);
/* ─── AUTH PAGE (LIVE API) ──────────────────────────────────────────────── */
function AuthPage({ mode, onAuth }) {
  const [tab, setTab] = useState("login");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({firstName:"",lastName:"",email:"",phone:"",password:""});
  const [error, setError] = useState("");
  const up = (k,v) => setForm(f=>({...f,[k]:v}));
  const isAdmin = mode === "admin";
  const handleSubmit = async () => {
    setError("");
    if(!form.email || !form.password) { setError("Please fill in all fields."); return; }
    if(tab==="signup" && !isAdmin && (!form.firstName || !form.lastName || !form.phone)) { setError("Please fill in all fields."); return; }
    setLoading(true);
    try {
      if(tab==="login") {
        const endpoint = isAdmin ? "/api/auth/admin/login" : "/api/auth/client/login";
        const data = await api(endpoint, {
          method: "POST",
          body: JSON.stringify({ email: form.email, password: form.password }),
        });
        setToken(data.token);
        onAuth({ ...data.user, token: data.token });
      } else {
        if(isAdmin) {
          setError("Admin accounts must be created by an existing admin. Contact Chris.");
          setLoading(false);
          return;
        }
        // Client registration
        const data = await api("/api/auth/client/register", {
          method: "POST",
          body: JSON.stringify({
            first_name: form.firstName,
            last_name: form.lastName,
            email: form.email,
            phone: form.phone,
            password: form.password,
          }),
        });
        // Auto-login after registration
        const loginData = await api("/api/auth/client/login", {
          method: "POST",
          body: JSON.stringify({ email: form.email, password: form.password }),
        });
        setToken(loginData.token);
        onAuth({ ...loginData.user, token: loginData.token });
      }
    } catch(err) {
      setError(err.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="auth-page">
      <div className="auth-card fu">
        <Logo/>
        <div className="auth-title">{isAdmin ? "Admin Access" : tab==="login" ? "Welcome back" : "Create your account"}</div>
        <div className="auth-sub">
          {isAdmin ? "Music Funding Academy credit team portal" : tab==="login" ? "Log in to check your dispute progress." : "Get started — it only takes a minute."}
        </div>
        <div className="auth-tabs">
          <button className={`auth-tab ${tab==="login"?"active":""}`} onClick={()=>{setTab("login");setError("");}}>Log In</button>
          <button className={`auth-tab ${tab==="signup"?"active":""}`} onClick={()=>{setTab("signup");setError("");}}>{isAdmin?"Request Access":"Create Account"}</button>
        </div>
        {tab==="signup" && !isAdmin && (
          <div className="fg-row">
            <div className="fg"><label className="fl">First Name</label>
              <input className="fi" placeholder="Marcus" value={form.firstName} onChange={e=>up("firstName",e.target.value)}/></div>
            <div className="fg"><label className="fl">Last Name</label>
              <input className="fi" placeholder="Johnson" value={form.lastName} onChange={e=>up("lastName",e.target.value)}/></div>
          </div>
        )}
        {tab==="signup" && !isAdmin && (
          <div className="fg"><label className="fl">Phone Number</label>
            <input className="fi" type="tel" placeholder="(555) 867-5309" value={form.phone} onChange={e=>up("phone",e.target.value)}/></div>
        )}
        <div className="fg"><label className="fl">Email Address</label>
          <input className="fi" type="email" placeholder="you@email.com" value={form.email} onChange={e=>up("email",e.target.value)}
            onKeyDown={e=>e.key==="Enter"&&handleSubmit()}/></div>
        <div className="fg"><label className="fl">Password</label>
          <input className="fi" type="password" placeholder="••••••••" value={form.password} onChange={e=>up("password",e.target.value)}
            onKeyDown={e=>e.key==="Enter"&&handleSubmit()}/></div>
        {error && <div style={{background:C.red+"12",border:`1px solid ${C.red}33`,borderRadius:10,padding:"10px 14px",fontSize:13,color:C.red,marginBottom:14}}>{error}</div>}
        <button className="btn btn-p btn-full" onClick={handleSubmit} disabled={loading}>
          {loading ? <><Spin/> {tab==="login"?"Logging in...":"Creating account..."}</> : tab==="login" ? "Log In →" : isAdmin ? "Request Access →" : "Create Account →"}
        </button>
      </div>
    </div>
  );
}
/* ─── CLIENT ONBOARDING (LIVE API UPLOAD) ───────────────────────────────── */
function ClientOnboarding({ client, onComplete }) {
  const [step, setStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [drag, setDrag] = useState(false);
  const fileRef = useRef();
  const selectedFile = useRef(null);
  const handleFile = (file) => {
    if(!file || file.type !== "application/pdf") {
      setUploadError("Please upload a PDF file.");
      return;
    }
    selectedFile.current = file;
    setUploaded({ name: file.name });
    setUploadError("");
  };
  const handleSubmit = async () => {
    if(!selectedFile.current) return;
    setUploading(true);
    setUploadError("");
    try {
      const formData = new FormData();
      formData.append("report", selectedFile.current);
      await api(`/api/uploads/${client.id}/report`, {
        method: "POST",
        body: formData,
      });
      onComplete();
    } catch(err) {
      setUploadError(err.message || "Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };
  return (
    <div className="onboard-step">
      <div className="onboard-card fu">
        <div style={{display:"flex",gap:8,marginBottom:28}}>
          {[1,2].map(s=>(
            <div key={s} style={{flex:1,height:4,borderRadius:2,
              background:step>=s?C.accent:C.border,transition:"background .4s"}}/>
          ))}
        </div>
        {step===1 && (
          <>
            <div style={{fontSize:28,marginBottom:16}}>👋</div>
            <div style={{fontFamily:"'Clash Display',sans-serif",fontSize:22,fontWeight:700,letterSpacing:"-.5px",marginBottom:8}}>
              Hi {client.firstName || client.name?.split(" ")[0]}! One quick step.
            </div>
            <div style={{fontSize:14,color:C.muted,lineHeight:1.8,marginBottom:28}}>
              Before your credit team can start working on your disputes, you need a credit monitoring account. We use <strong style={{color:C.text}}>IdentityIQ</strong> — it gives you access to all 3 bureau reports so we can see everything on your file.
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:12}}>
              <button className="btn-iiq" onClick={()=>window.open(IIQ_LINK,"_blank")}>
                <span style={{fontSize:20}}>🔒</span>
                <div style={{textAlign:"left"}}>
                  <div style={{fontWeight:700,fontSize:15}}>Create Your IdentityIQ Account</div>
                  <div style={{fontSize:12,opacity:.8,fontWeight:400}}>$1 trial · Tri-bureau report · Takes 2 minutes</div>
                </div>
                <span style={{marginLeft:"auto",fontSize:18}}>→</span>
              </button>
              <button
                onClick={()=>window.open(SC_LINK,"_blank")}
                style={{
                  background:"linear-gradient(135deg,#059669,#047857)",
                  color:"white",padding:"16px 28px",fontSize:15,borderRadius:14,
                  border:"none",cursor:"pointer",fontFamily:"'Outfit',sans-serif",
                  fontWeight:700,transition:"all .2s",display:"flex",alignItems:"center",
                  gap:12,width:"100%",justifyContent:"center",
                  boxShadow:"0 6px 20px #05966944",
                }}>
                <span style={{fontSize:20}}>📊</span>
                <div style={{textAlign:"left"}}>
                  <div style={{fontWeight:700,fontSize:15}}>Create Your Smart Credit Account</div>
                  <div style={{fontSize:12,opacity:.8,fontWeight:400}}>Alternative option · Full credit monitoring</div>
                </div>
                <span style={{marginLeft:"auto",fontSize:18}}>→</span>
              </button>
            </div>
            <div style={{marginTop:16,display:"flex",alignItems:"center",gap:12}}>
              <input type="checkbox" id="confirmed" checked={confirmed} onChange={e=>setConfirmed(e.target.checked)}
                style={{width:18,height:18,accentColor:C.accent,cursor:"pointer"}}/>
              <label htmlFor="confirmed" style={{fontSize:13,color:C.muted,cursor:"pointer",lineHeight:1.5}}>
                I've created my IdentityIQ account and I'm ready to upload my report
              </label>
            </div>
            <button className="btn btn-p btn-full" style={{marginTop:20}} disabled={!confirmed} onClick={()=>setStep(2)}>
              Continue to Upload →
            </button>
            <div className="info" style={{marginTop:16}}>
              <span>💡</span>
              <span>After creating your account, log in to IdentityIQ and click <strong style={{color:C.text}}>"Download this report"</strong> to get your PDF.</span>
            </div>
          </>
        )}
        {step===2 && (
          <>
            <div style={{fontSize:28,marginBottom:16}}>📄</div>
            <div style={{fontFamily:"'Clash Display',sans-serif",fontSize:22,fontWeight:700,letterSpacing:"-.5px",marginBottom:8}}>
              Upload Your Report
            </div>
            <div style={{fontSize:14,color:C.muted,lineHeight:1.8,marginBottom:24}}>
              Log into IdentityIQ, go to your Credit Report, and click <strong style={{color:C.text}}>"Download this report"</strong>. Then upload that PDF here.
            </div>
            <input ref={fileRef} type="file" accept=".pdf" style={{display:"none"}}
              onChange={e=>handleFile(e.target.files[0])}/>
            <div className={`upz ${drag?"drag":""}`}
              onDragOver={e=>{e.preventDefault();setDrag(true);}} onDragLeave={()=>setDrag(false)}
              onDrop={e=>{e.preventDefault();setDrag(false);handleFile(e.dataTransfer.files[0]);}}
              onClick={()=>fileRef.current.click()}>
              {uploaded
                ? <div style={{color:C.green}}>
                    <div style={{fontSize:40,marginBottom:10}}>✅</div>
                    <div style={{fontWeight:700,fontSize:15,marginBottom:4}}>{uploaded.name}</div>
                    <div style={{fontSize:12,color:C.muted}}>Ready to submit to your credit team</div>
                  </div>
                : <>
                    <div style={{fontSize:40,marginBottom:12}}>📄</div>
                    <div style={{fontWeight:700,fontSize:16,marginBottom:6}}>Drop your IdentityIQ PDF here</div>
                    <div style={{fontSize:13,color:C.muted}}>or click to browse</div>
                  </>}
            </div>
            {uploadError && <div style={{background:C.red+"12",border:`1px solid ${C.red}33`,borderRadius:10,padding:"10px 14px",fontSize:13,color:C.red,marginTop:12}}>{uploadError}</div>}
            <div style={{display:"flex",gap:10,marginTop:20}}>
              <button className="btn btn-g" onClick={()=>setStep(1)}>← Back</button>
              <button className="btn btn-p" style={{flex:1}} disabled={!uploaded||uploading}
                onClick={handleSubmit}>
                {uploading ? <><Spin/> Uploading...</> : "Submit to Credit Team →"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
/* ─── CLIENT PORTAL ──────────────────────────────────────────────────────── */
function ClientPortal({ client }) {
  const [reportConfirming, setReportConfirming] = useState(false);
  const confirmReportPulled = async () => {
    setReportConfirming(true);
    try {
      await api(`/api/updates/${client.id}`, {
        method: "POST",
        body: JSON.stringify({ text: JSON.stringify({round: client.round}), type: "client_report_updated" }),
      });
      window.location.reload();
    } catch(err) { setReportConfirming(false); }
  };
  const sc = s=>!s?C.muted:s<580?C.red:s<670?C.yellow:s<740?C.accentLt:C.gold;
  const ROUND_INFO = [
    {r:1,l:"Address & Name Removal",i:"📍",d:"Removing all outdated addresses and name aliases from your credit file."},
    {r:2,l:"605B Compliance Attack",i:"⚖️",d:"Using FCRA Section 605B to target accounts linked to removed addresses."},
    {r:3,l:"Factual Dispute",i:"🔍",d:"Disputing specific inaccurate data fields on remaining negative accounts."},
    {r:4,l:"Advanced Factual",i:"🎯",d:"Final escalation — method of verification demands on any remaining items."},
  ];
  if(!client.approved && client.status!=="active") {
    return (
      <div style={{textAlign:"center",padding:"60px 24px"}}>
        <div style={{fontSize:56,marginBottom:20}}>⏳</div>
        <div style={{fontFamily:"'Clash Display',sans-serif",fontSize:24,fontWeight:700,marginBottom:10}}>
          You're in the queue, {client.firstName||client.name?.split(" ")[0]}
        </div>
        <div style={{fontSize:14,color:C.muted,lineHeight:1.8,maxWidth:420,margin:"0 auto 24px"}}>
          Your report has been received. Your credit team is reviewing everything and will start your dispute process shortly. You'll get a text and email when Round 1 begins.
        </div>
        <span className="badge b-yellow" style={{padding:"10px 20px",fontSize:13}}>⏳ Pending Team Review</span>
      </div>
    );
  }
  return (
    <div>
      <div style={{background:`linear-gradient(135deg,${C.accent}18,${C.gold}0a)`,border:`1px solid ${C.accent}33`,
        borderRadius:20,padding:"24px 28px",marginBottom:20,display:"flex",alignItems:"center",gap:20,flexWrap:"wrap"}}
        className="fu">
        <div style={{flex:1}}>
          <div style={{fontFamily:"'Clash Display',sans-serif",fontSize:22,fontWeight:700,letterSpacing:"-.5px",marginBottom:6}}>
            Hey {client.firstName||client.name?.split(" ")[0]} 👋
          </div>
          <div style={{fontSize:13,color:C.muted,lineHeight:1.7,maxWidth:460}}>
            Your team is actively working Round {client.round} of your dispute process. You'll receive a text and email with every update.
          </div>
        </div>
        <div className="g3" style={{margin:0,gap:10}}>
          {[{l:"TransUnion",k:"transunion"},{l:"Experian",k:"experian"},{l:"Equifax",k:"equifax"}].map(b=>(
            <div key={b.k} style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:14,padding:"14px 18px",textAlign:"center"}}>
              <div style={{fontFamily:"'Clash Display',sans-serif",fontSize:26,fontWeight:700,color:sc(client.scores?.[b.k])}}>
                {client.scores?.[b.k]||"—"}
              </div>
              <div style={{fontSize:10,color:C.muted,textTransform:"uppercase",letterSpacing:"1.5px",marginTop:4}}>{b.l}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Action required: pull updated credit report */}
      {(()=>{
        const currRound=(client.rounds||[]).find(r=>r.num===client.round)||{};
        const roundUpdate=client.roundUpdates?.[client.round]||{};
        const needsUpdate=currRound.sentAt&&!roundUpdate.agentFilled;
        const clientAlreadyConfirmed=roundUpdate.clientConfirmed;
        if(!needsUpdate||clientAlreadyConfirmed) return null;
        return(
          <div className="client-action-card fu" style={{marginBottom:20}}>
            <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:14}}>
              <span style={{fontSize:28}}>📊</span>
              <div>
                <div style={{fontFamily:"'Clash Display',sans-serif",fontSize:16,fontWeight:700}}>Action Required — Pull Your Updated Report</div>
                <div style={{fontSize:13,color:C.muted}}>Round {client.round} letters were sent on {currRound.sentAt}. It's time to pull a fresh credit report so your team can review what changed.</div>
              </div>
            </div>
            <div style={{fontSize:13,color:C.muted,marginBottom:14,lineHeight:1.7}}>
              1. Log into <strong style={{color:C.text}}>IdentityIQ</strong> or <strong style={{color:C.text}}>Smart Credit</strong><br/>
              2. Pull your updated 3-bureau credit report<br/>
              3. Click the button below to notify your team
            </div>
            <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
              <a href={IIQ_LINK} target="_blank" rel="noreferrer" className="btn btn-iiq" style={{flex:1,minWidth:160}}>
                🔗 Open IdentityIQ
              </a>
              <button className="btn btn-gold" style={{flex:1,minWidth:160}} disabled={reportConfirming} onClick={confirmReportPulled}>
                {reportConfirming?"Notifying...":"✅ I've Pulled My Report"}
              </button>
            </div>
          </div>
        );
      })()}
      {/* Show round update results to client */}
      {(()=>{
        const roundUpdate=client.roundUpdates?.[client.round-1];
        if(!roundUpdate?.agentFilled||client.round<=1) return null;
        return(
          <div style={{background:C.green+"0a",border:`1px solid ${C.green}33`,borderRadius:16,padding:"18px 20px",marginBottom:20}} className="fu">
            <div style={{fontFamily:"'Clash Display',sans-serif",fontSize:15,fontWeight:700,marginBottom:12}}>🎉 Round {client.round-1} Results</div>
            <div style={{display:"flex",gap:10,marginBottom:12}}>
              {[{l:"TransUnion",k:"newTU",orig:client.scores?.transunion},{l:"Experian",k:"newEX",orig:client.scores?.experian},{l:"Equifax",k:"newEQ",orig:client.scores?.equifax}].map(b=>{
                const newS=parseInt(roundUpdate[b.k]);
                const delta=newS&&b.orig?newS-b.orig:null;
                return(
                  <div key={b.k} style={{flex:1,background:C.card,border:`1px solid ${C.border}`,borderRadius:12,padding:"12px",textAlign:"center"}}>
                    <div style={{fontSize:10,color:C.muted,textTransform:"uppercase",letterSpacing:"1px",marginBottom:4}}>{b.l}</div>
                    <div style={{fontFamily:"'Clash Display',sans-serif",fontSize:24,fontWeight:700,color:delta>0?C.green:delta<0?C.red:C.text}}>{roundUpdate[b.k]||"—"}</div>
                    {delta!==null&&<div style={{fontSize:12,fontWeight:700,color:delta>0?C.green:delta<0?C.red:C.muted}}>{delta>0?"+":""}{delta} pts</div>}
                  </div>
                );
              })}
            </div>
            {(roundUpdate.removedAccounts||[]).length>0&&(
              <div>
                <div style={{fontSize:11,color:C.muted,fontWeight:600,marginBottom:8}}>ACCOUNTS REMOVED</div>
                <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                  {roundUpdate.removedAccounts.map((a,i)=>(
                    <span key={i} className="badge b-green">✓ {a}</span>
                  ))}
                </div>
              </div>
            )}
            {roundUpdate.notes&&<div style={{fontSize:13,color:C.muted,marginTop:10,fontStyle:"italic"}}>{roundUpdate.notes}</div>}
          </div>
        );
      })()}
      <div className="card fu1">
        <div className="ct">🗺️ Your Dispute Journey</div>
        <div className="cs">4 rounds — your team works each one until your report is clean</div>
        <div className="round-track">
          {ROUND_INFO.map((item,i)=>{
            const rData = (client.rounds||[]).find(r=>r.num===item.r)||{status:"pending"};
            const done = rData.status==="complete";
            const act  = rData.status==="active" || rData.status==="pending" && item.r===client.round;
            return (
              <div className="round-item" key={item.r}>
                <div className="round-left">
                  <div className={`round-node ${done?"complete":act?"active":""}`}>
                    {done?"✓":item.i}
                  </div>
                  {i<3&&<div className={`round-connector ${done?"complete":""}`}/>}
                </div>
                <div className="round-body">
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:5}}>
                    <div style={{fontFamily:"'Clash Display',sans-serif",fontSize:14,fontWeight:600}}>
                      Round {item.r} — {item.l}
                    </div>
                    <span className={`badge ${done?"b-green":act?"b-blue":"b-gray"}`}>
                      {done?"Complete":act?"In Progress":"Pending"}
                    </span>
                  </div>
                  <div style={{fontSize:12,color:C.muted,lineHeight:1.6}}>{item.d}</div>
                  {act && rData.sentAt && (
                    <div style={{marginTop:8,background:C.accent+"0f",border:`1px solid ${C.accent}33`,
                      borderRadius:10,padding:"10px 14px",fontSize:12,color:C.muted}}>
                      ⏳ Letters sent {rData.sentAt} · Awaiting bureau response (30–45 days)
                    </div>
                  )}
                  {done && rData.notes && (
                    <div style={{marginTop:8,background:C.green+"0a",border:`1px solid ${C.green}22`,
                      borderRadius:10,padding:"10px 14px",fontSize:12,color:C.green}}>
                      ✓ {rData.notes}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="card fu2">
        <div className="ct">🔔 Updates</div>
        <div className="cs">Everything your team has done on your account</div>
        <div className="tl">
          {(client.updates||[]).map((u,i)=>(
            <div className="tl-item" key={i}>
              <div className="tl-dot" style={{background:u.type==="sent"?C.accentLt:u.type==="removed"?C.green:C.muted}}/>
              <div>
                <div className="tl-text">{u.text}</div>
                <div className="tl-date">{u.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
/* ─── PDF VIEWER (SIGNED URL FROM SUPABASE) ──────────────────────────────── */
function PdfViewer({ clientId, reportUploaded }) {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const canvasRef = useRef(null);
  const pdfRef = useRef(null);
  const loadPdfJs = () => new Promise((resolve, reject) => {
    if (window.pdfjsLib) { resolve(window.pdfjsLib); return; }
    const s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
    s.onload = () => {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
      resolve(window.pdfjsLib);
    };
    s.onerror = reject;
    document.head.appendChild(s);
  });
  const renderPage = async (pdf, pageNum) => {
    if (!canvasRef.current) return;
    const page = await pdf.getPage(pageNum);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const viewport = page.getViewport({ scale: 1.4 });
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    await page.render({ canvasContext: ctx, viewport }).promise;
  };
  // Fetch signed URL from API
  useEffect(() => {
    if (!clientId || !reportUploaded) return;
    setLoading(true);
    setError("");
    api(`/api/uploads/${clientId}/report`)
      .then(data => {
        if (data.url) {
          setPdfUrl(data.url);
        } else {
          setError("No report URL available.");
          setLoading(false);
        }
      })
      .catch(err => {
        setError(err.message || "Failed to load report.");
        setLoading(false);
      });
  }, [clientId, reportUploaded]);
  // Render PDF when URL is available
  useEffect(() => {
    if (!pdfUrl) return;
    setLoading(true);
    loadPdfJs().then(async (pdfjsLib) => {
      try {
        const pdf = await pdfjsLib.getDocument({ url: pdfUrl }).promise;
        pdfRef.current = pdf;
        setNumPages(pdf.numPages);
        setCurrentPage(1);
        await renderPage(pdf, 1);
        setLoading(false);
      } catch(e) {
        setError("Could not render PDF: " + e.message);
        setLoading(false);
      }
    }).catch(() => { setError("Could not load PDF engine"); setLoading(false); });
  }, [pdfUrl]);
  useEffect(() => {
    if (pdfRef.current && currentPage) {
      renderPage(pdfRef.current, currentPage);
    }
  }, [currentPage]);
  return (
    <div style={{
      background:C.card, border:`1px solid ${C.border}`, borderRadius:20,
      overflow:"hidden", position:"sticky", top:80,
      maxHeight:"calc(100vh - 100px)", display:"flex", flexDirection:"column",
    }}>
      <div style={{
        padding:"14px 18px", borderBottom:`1px solid ${C.border}`,
        display:"flex", alignItems:"center", justifyContent:"space-between", flexShrink:0,
      }}>
        <div style={{fontWeight:700, fontSize:13, display:"flex", alignItems:"center", gap:8}}>
          <span>📄</span> Client Report
        </div>
        <div style={{display:"flex", gap:8, alignItems:"center"}}>
          {reportUploaded
            ? <span className="badge b-green">✓ Uploaded</span>
            : <span className="badge b-yellow">⚠ Not Uploaded</span>}
        </div>
      </div>
      <div style={{flex:1, overflowY:"auto", minHeight:0}}>
        {!reportUploaded && (
          <div style={{padding:"40px 24px", textAlign:"center", color:C.muted}}>
            <div style={{fontSize:44, marginBottom:12, opacity:.3}}>📄</div>
            <div style={{fontSize:13, fontWeight:600, marginBottom:8}}>No Report Yet</div>
            <div style={{fontSize:12, lineHeight:1.7}}>Client hasn't uploaded their report yet.</div>
          </div>
        )}
        {reportUploaded && loading && (
          <div style={{padding:"40px 24px", textAlign:"center", color:C.muted}}>
            <div style={{width:32, height:32, border:`3px solid ${C.accent}`, borderTopColor:"transparent",
              borderRadius:"50%", animation:"spin .8s linear infinite", margin:"0 auto 16px"}}/>
            <div style={{fontSize:13}}>Loading report from storage...</div>
          </div>
        )}
        {error && (
          <div style={{padding:"24px", fontSize:12, color:C.red, textAlign:"center"}}>{error}</div>
        )}
        {pdfUrl && !loading && !error && (
          <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            {numPages > 1 && (
              <div style={{
                display:"flex", alignItems:"center", gap:12, padding:"10px 16px",
                borderBottom:`1px solid ${C.border}`, width:"100%", justifyContent:"center",
                background:C.surface, flexShrink:0,
              }}>
                <button className="btn btn-g btn-sm"
                  disabled={currentPage<=1}
                  onClick={()=>setCurrentPage(p=>Math.max(1,p-1))}
                  style={{opacity:currentPage<=1?.4:1}}>← Prev</button>
                <span style={{fontSize:13, color:C.muted, fontFamily:"monospace"}}>
                  Page {currentPage} of {numPages}
                </span>
                <button className="btn btn-g btn-sm"
                  disabled={currentPage>=numPages}
                  onClick={()=>setCurrentPage(p=>Math.min(numPages,p+1))}
                  style={{opacity:currentPage>=numPages?.4:1}}>Next →</button>
              </div>
            )}
            <canvas ref={canvasRef} style={{width:"100%", height:"auto", display:"block"}}/>
          </div>
        )}
      </div>
    </div>
  );
}
/* ─── ADMIN DASHBOARD (LIVE API) ────────────────────────────────────────── */
function AdminDash({ admin, onLogout }) {
  const [clients, setClients] = useState([]);
  const [sel, setSel] = useState(null);
  const [selDetail, setSelDetail] = useState(null);
  const [tab, setTab] = useState("overview");
  const [bureau, setBureau] = useState("Equifax");
  const [lRound, setLRound] = useState(1);
  const [ec, setEc] = useState(null);
  const [copied, setCopied] = useState("");
  const [toast, setToast] = useState("");
  const [stats, setStats] = useState({total_clients:0,pending_approval:0,active_rounds:0,avg_credit_score:null});
  const [loadingList, setLoadingList] = useState(true);
  const [saving, setSaving] = useState(false);
  const [acctTab, setAcctTab] = useState("negative");
  const [roundUpdateDraft, setRoundUpdateDraft] = useState({newTU:"",newEX:"",newEQ:"",removedAccounts:[],notes:""});
  const toast_ = m => { setToast(m); setTimeout(()=>setToast(""),3000); };
  // Fetch clients list
  const fetchClients = async () => {
    try {
      const data = await api("/api/clients");
      setClients(data.map(mapClientList));
    } catch(err) { console.error("Fetch clients:", err); }
    setLoadingList(false);
  };
  // Fetch dashboard stats
  const fetchStats = async () => {
    try {
      const data = await api("/api/admin/dashboard");
      setStats(data);
    } catch(err) { console.error("Fetch stats:", err); }
  };
  useEffect(() => { fetchClients(); fetchStats(); }, []);
  // Fetch full client detail
  const openClient = async (c) => {
    setSel(c);
    setTab("overview");
    try {
      const data = await api(`/api/clients/${c.id}`);
      const mapped = mapClient(data);
      setSelDetail(mapped);
      setEc(JSON.parse(JSON.stringify(mapped)));
    } catch(err) {
      console.error("Fetch client detail:", err);
      toast_("Failed to load client details");
    }
  };
  const copy = (txt,lbl) => {
    navigator.clipboard.writeText(txt);
    setCopied(lbl); setTimeout(()=>setCopied(""),2500);
    toast_("✓ Letter copied to clipboard");
  };
  const downloadLetter = async (txt, round, bureau, clientName) => {
    const safeName = (clientName||"client").toLowerCase().replace(/\s+/g,"-");
    const fileName = `Round${round}_${bureau}_${safeName}.pdf`;
    try {
      // Dynamically load jsPDF from CDN if not already loaded
      if (!window.jspdf) {
        await new Promise((resolve, reject) => {
          const s = document.createElement("script");
          s.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
          s.onload = resolve; s.onerror = reject;
          document.head.appendChild(s);
        });
      }
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({ unit:"pt", format:"letter" });
      const margin = 60;
      const pageW = doc.internal.pageSize.getWidth();
      const pageH = doc.internal.pageSize.getHeight();
      const maxW = pageW - margin * 2;
      doc.setFont("Courier", "normal");
      doc.setFontSize(10);
      const lines = doc.splitTextToSize(txt, maxW);
      let y = margin;
      lines.forEach(line => {
        if (y + 14 > pageH - margin) { doc.addPage(); y = margin; }
        doc.text(line, margin, y);
        y += 14;
      });
      doc.save(fileName);
      toast_(`⬇️ Downloading ${fileName}`);
    } catch(err) {
      // Fallback to txt if PDF fails
      const blob = new Blob([txt], { type:"text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = fileName.replace(".pdf",".txt"); a.click();
      URL.revokeObjectURL(url);
      toast_(`⬇️ Downloading letter`);
    }
  };
  // Save client data to API
  const save = async () => {
    if(!ec || !selDetail) return;
    setSaving(true);
    try {
      // Update client basic info + scores
      await api(`/api/clients/${ec.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          name: ec.name,
          dob: ec.dob,
          current_address: ec.currentAddress,
          score_transunion: ec.scores?.transunion || null,
          score_experian: ec.scores?.experian || null,
          score_equifax: ec.scores?.equifax || null,
        }),
      });
      // Sync accounts — add new ones, update existing
      for (const acct of (ec.accounts || [])) {
        if (typeof acct.id === "number" && acct.id > 1000000000) {
          // New account (temp ID from Date.now())
          await api(`/api/accounts/${ec.id}`, {
            method: "POST",
            body: JSON.stringify({
              creditor: acct.creditor,
              balance: parseFloat(acct.balance) || 0,
              credit_limit: parseFloat(acct.limit) || 0,
              account_type: acct.type,
              payment_status: acct.status,
              bureau: acct.bureau,
              is_negative: acct.negative,
            }),
          });
        } else if (acct.id) {
          await api(`/api/accounts/item/${acct.id}`, {
            method: "PATCH",
            body: JSON.stringify({
              creditor: acct.creditor,
              balance: parseFloat(acct.balance) || 0,
              credit_limit: parseFloat(acct.limit) || 0,
              account_type: acct.type,
              payment_status: acct.status,
              bureau: acct.bureau,
              is_negative: acct.negative,
            }),
          });
        }
      }
      // Sync addresses (current + previous)
      await api(`/api/addresses/${ec.id}`, {
        method: "PUT",
        body: JSON.stringify({
          current: ec.currentAddresses || [],
          previous: ec.previousAddresses || [],
        }),
      });
      // Sync name variants
      await api(`/api/names/${ec.id}`, {
        method: "PUT",
        body: JSON.stringify({
          variants: ec.nameVariants || [],
        }),
      });
      // Sync late payments (graceful — new route)
      try {
        await api(`/api/late-payments/${ec.id}`, {
          method: "PUT",
          body: JSON.stringify({
            latePayments: (ec.latePayments || []).map(lp => ({
              creditor: lp.creditor || "",
              days_late: String(parseInt(lp.days) || 30),
              bureau: lp.bureau || "",
              date: lp.date || null,
            })),
          }),
        });
      } catch(e) { console.warn("late-payments save:", e.message); }
      // Sync inquiries (graceful — new route)
      try {
        await api(`/api/inquiries/${ec.id}`, {
          method: "PUT",
          body: JSON.stringify({
            inquiries: (ec.inquiries || []).map(inq => ({
              company: inq.name || "",
              inquiry_date: inq.date || "",
              bureau: inq.bureau || "",
            })),
          }),
        });
      } catch(e) { console.warn("inquiries save:", e.message); }
      // Refresh detail
      const data = await api(`/api/clients/${ec.id}`);
      const mapped = mapClient(data);
      setSelDetail(mapped);
      setEc(JSON.parse(JSON.stringify(mapped)));
      fetchClients();
      toast_("✓ Client data saved");
    } catch(err) {
      toast_("Save failed: " + err.message);
    } finally {
      setSaving(false);
    }
  };
  // Mark round sent
  const markRoundSent = async () => {
    if(!selDetail) return;
    try {
      let activeRound = (selDetail.rounds||[]).find(r=>r.num===selDetail.round);
      if(!activeRound?.id) {
        // Create the round first, then refresh to get the new ID
        await api(`/api/rounds/${selDetail.id}`, { method: "POST", body: JSON.stringify({}) });
        const refreshed = await api(`/api/clients/${selDetail.id}`);
        const refreshedMapped = mapClient(refreshed);
        activeRound = (refreshedMapped.rounds||[]).find(r=>r.num===selDetail.round);
      }
      if(!activeRound?.id) { toast_("Failed: could not create round"); return; }
      await api(`/api/rounds/item/${activeRound.id}`, {
        method: "PATCH",
        body: JSON.stringify({ status: "sent" }),
      });
      await api(`/api/updates/${selDetail.id}`, {
        method: "POST",
        body: JSON.stringify({ text: `Round ${selDetail.round} letters sent to all 3 bureaus`, type: "sent" }),
      });
      // Refresh UI
      const data = await api(`/api/clients/${selDetail.id}`);
      const mapped = mapClient(data);
      setSelDetail(mapped);
      setEc(JSON.parse(JSON.stringify(mapped)));
      fetchClients();
      toast_(`✓ Round ${selDetail.round} marked as sent`);
    } catch(err) {
      toast_("Failed: " + err.message);
    }
  };
  // Complete round
  const completeRound = async () => {
    if(!selDetail) return;
    const r = selDetail.round;
    const roundData = (selDetail.rounds||[]).find(rd=>rd.num===r);
    if(!roundData?.id) return;
    try {
      // Mark current round completed
      await api(`/api/rounds/item/${roundData.id}`, {
        method: "PATCH",
        body: JSON.stringify({ status: "completed" }),
      });
      // Create next round
      const nextR = Math.min(r+1, 4);
      if(nextR > r) {
        await api(`/api/rounds/${selDetail.id}`, {
          method: "POST",
          body: JSON.stringify({ round_num: nextR }),
        });
      }
      // Update client round
      await api(`/api/clients/${selDetail.id}`, {
        method: "PATCH",
        body: JSON.stringify({ current_round: nextR }),
      });
      // Add update
      await api(`/api/updates/${selDetail.id}`, {
        method: "POST",
        body: JSON.stringify({ text: `Round ${r} complete — advancing to Round ${nextR}`, type: "sent" }),
      });
      // Refresh
      const data = await api(`/api/clients/${selDetail.id}`);
      const mapped = mapClient(data);
      setSelDetail(mapped);
      setEc(JSON.parse(JSON.stringify(mapped)));
      fetchClients();
      toast_(`✓ Advanced to Round ${nextR}`);
    } catch(err) {
      toast_("Failed: " + err.message);
    }
  };
  // Save round credit report update
  const saveRoundUpdate = async () => {
    if(!selDetail) return;
    const r = selDetail.round;
    const payload = { ...roundUpdateDraft, round: r };
    try {
      await api(`/api/updates/${selDetail.id}`, {
        method: "POST",
        body: JSON.stringify({ text: JSON.stringify(payload), type: "round_update" }),
      });
      const data = await api(`/api/clients/${selDetail.id}`);
      const mapped = mapClient(data);
      setSelDetail(mapped);
      setEc(JSON.parse(JSON.stringify(mapped)));
      setRoundUpdateDraft({newTU:"",newEX:"",newEQ:"",removedAccounts:[],notes:""});
      toast_("✓ Round update saved — next round unlocked");
    } catch(err) { toast_("Failed: " + err.message); }
  };
  // Approve client
  const approveClient = async () => {
    if(!selDetail) return;
    try {
      await api(`/api/admin/approve/${selDetail.id}`, { method: "PATCH" });
      // Create round 1
      await api(`/api/rounds/${selDetail.id}`, {
        method: "POST",
        body: JSON.stringify({ round_num: 1 }),
      });
      // Add update
      await api(`/api/updates/${selDetail.id}`, {
        method: "POST",
        body: JSON.stringify({ text: "Credit team approved your file — Round 1 starting", type: "sent" }),
      });
      // Refresh
      const data = await api(`/api/clients/${selDetail.id}`);
      const mapped = mapClient(data);
      setSelDetail(mapped);
      setEc(JSON.parse(JSON.stringify(mapped)));
      fetchClients();
      fetchStats();
      toast_(`✓ ${selDetail.name} approved`);
    } catch(err) {
      toast_("Approve failed: " + err.message);
    }
  };
  const getLetter = () => {
    const c = selDetail;
    if(!c) return "";
    if(lRound===1) return genR1(c,bureau);
    if(lRound===2) return gen605B(c,bureau);
    if(lRound===3) return genFactual(c,bureau);
    return genAdvanced(c,bureau);
  };
  const addItem = (field,blank) => setEc(x=>({...x,[field]:[...(x[field]||[]),blank]}));
  const delItem = (field,i) => setEc(x=>({...x,[field]:(x[field]||[]).filter((_,xi)=>xi!==i)}));
  const updArr = (field,i,v) => setEc(x=>({...x,[field]:(x[field]||[]).map((item,xi)=>xi===i?v:item)}));
  const updAcct = (i,k,v) => setEc(x=>({...x,accounts:x.accounts.map((a,xi)=>xi===i?{...a,[k]:v}:a)}));
  const pending = clients.filter(c=>!c.approved&&c.reportUploaded);
  const active = clients.filter(c=>c.approved);
  // ── CLIENT LIST VIEW ──
  if(!sel) return (
    <div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:24}}>
        <div>
          <div style={{fontFamily:"'Clash Display',sans-serif",fontSize:24,fontWeight:700,letterSpacing:"-.5px",marginBottom:4}}>Admin Dashboard</div>
          <div style={{fontSize:13,color:C.muted}}>Welcome back, {admin.name} · Music Funding Academy</div>
        </div>
        <button className="btn btn-g btn-sm" onClick={onLogout}>Log Out</button>
      </div>
      <div className="g4 fu">
        <div className="stat"><div className="sv" style={{color:C.accentLt}}>{stats.total_clients}</div><div className="sn">Total Clients</div></div>
        <div className="stat"><div className="sv" style={{color:C.yellow}}>{stats.pending_approval}</div><div className="sn">Needs Review</div></div>
        <div className="stat"><div className="sv" style={{color:C.green}}>{active.length}</div><div className="sn">Active Clients</div></div>
        <div className="stat"><div className="sv" style={{color:C.gold}}>{stats.avg_credit_score||"—"}</div><div className="sn">Avg Score</div></div>
      </div>
      {loadingList && (
        <div style={{textAlign:"center",padding:40,color:C.muted}}>
          <div style={{width:32,height:32,border:`3px solid ${C.accent}`,borderTopColor:"transparent",borderRadius:"50%",animation:"spin .8s linear infinite",margin:"0 auto 16px"}}/>
          Loading clients...
        </div>
      )}
      {!loadingList && pending.length>0&&(
        <div className="fu1">
          <div style={{fontSize:13,fontWeight:700,color:C.yellow,marginBottom:10,display:"flex",gap:8,alignItems:"center"}}>
            <span style={{width:8,height:8,borderRadius:"50%",background:C.yellow,display:"inline-block",animation:"pulse 1.2s ease-in-out infinite"}}/>
            Needs Review ({pending.length})
          </div>
          {pending.map(c=>(
            <div className="client-card" key={c.id} onClick={()=>openClient(c)}>
              <div className="avatar">{(c.name||c.firstName||"?")[0]}</div>
              <div style={{flex:1}}>
                <div style={{fontWeight:700,fontSize:15,marginBottom:3}}>{c.name}</div>
                <div style={{fontSize:12,color:C.muted}}>{c.email} · Submitted {c.submittedAt}</div>
              </div>
              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:6}}>
                <span className="badge b-yellow">⏳ New Submission</span>
                <div style={{fontSize:11,color:C.green}}>📄 Report uploaded</div>
              </div>
            </div>
          ))}
        </div>
      )}
      {!loadingList && active.length>0&&(
        <div className="fu2">
          <div style={{fontSize:13,fontWeight:700,color:C.green,marginBottom:10}}>Active Clients ({active.length})</div>
          {active.map(c=>(
            <div className="client-card" key={c.id} onClick={()=>openClient(c)}>
              <div className="avatar">{(c.name||"?")[0]}</div>
              <div style={{flex:1}}>
                <div style={{fontWeight:700,fontSize:15,marginBottom:3}}>{c.name}</div>
                <div style={{fontSize:12,color:C.muted}}>{c.email}</div>
              </div>
              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:6}}>
                <span className="badge b-blue">Round {c.round}</span>
                <div style={{fontSize:11,color:C.muted}}>
                  TU {c.scores?.transunion||"—"} / EX {c.scores?.experian||"—"} / EQ {c.scores?.equifax||"—"}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {!loadingList && clients.length===0&&(
        <div style={{textAlign:"center",padding:"60px",color:C.muted}}>
          <div style={{fontSize:48,opacity:.3,marginBottom:16}}>👥</div>
          <div>No client submissions yet</div>
        </div>
      )}
      {toast&&<div className="toast">{toast}</div>}
    </div>
  );
  // ── CLIENT DETAIL VIEW ──
  const d = selDetail; // detailed client data
  if(!d) return (
    <div style={{textAlign:"center",padding:60}}>
      <div style={{width:32,height:32,border:`3px solid ${C.accent}`,borderTopColor:"transparent",borderRadius:"50%",animation:"spin .8s linear infinite",margin:"0 auto 16px"}}/>
      <div style={{color:C.muted,fontSize:13}}>Loading client details...</div>
    </div>
  );
  const neg = (d.accounts||[]).filter(a=>a.negative);
  const pos = (d.accounts||[]).filter(a=>!a.negative);
  const currRound = (d.rounds||[]).find(r=>r.num===d.round)||{status:"pending"};
  return (
    <div>
      <div className="fu" style={{display:"flex",alignItems:"center",gap:12,marginBottom:20,flexWrap:"wrap"}}>
        <button className="btn btn-g btn-sm" onClick={()=>{setSel(null);setSelDetail(null);}}>← All Clients</button>
        <div style={{flex:1}}>
          <div style={{fontFamily:"'Clash Display',sans-serif",fontSize:20,fontWeight:700}}>{d.name}</div>
          <div style={{fontSize:12,color:C.muted}}>{d.email} · Submitted {d.submittedAt}</div>
        </div>
        <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
          {!d.approved&&<button className="btn btn-green btn-sm" onClick={approveClient}>✓ Approve Client</button>}
          {d.approved&&(currRound.status==="active"||currRound.status==="pending")&&!currRound.sentAt&&(
            <button className="btn btn-p btn-sm" onClick={markRoundSent}>📨 Mark Round {d.round} Sent</button>
          )}
          {d.approved&&currRound.sentAt&&d.round<4&&(
            <button className="btn btn-gold btn-sm" onClick={completeRound}>→ Complete Round {d.round}</button>
          )}
          {d.approved
            ? <span className="badge b-blue" style={{padding:"8px 14px",fontSize:12}}>Round {d.round}</span>
            : <span className="badge b-yellow" style={{padding:"8px 14px",fontSize:12}}>Pending</span>}
        </div>
      </div>
      <div className="tabrow fu1">
        {[
          {id:"overview",l:"📋 Overview"},
          {id:"data",l:"✏️ Enter Data"},
          {id:"accounts",l:"💳 Accounts"},
          {id:"letters",l:"📨 Letters"},
          {id:"rounds",l:"🗓️ Rounds"},
        ].map(t=>(
          <button key={t.id} className={`tabbtn ${tab===t.id?"active":""}`} onClick={()=>setTab(t.id)}>{t.l}</button>
        ))}
      </div>
      {/* OVERVIEW */}
      {tab==="overview"&&(
        <div className="fu">
          <div className="card">
            <div className="ct">📊 Credit Scores</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:14}}>
              {[{l:"TransUnion",k:"transunion"},{l:"Experian",k:"experian"},{l:"Equifax",k:"equifax"}].map(b=>{
                const s=d.scores?.[b.k];
                const col=!s?C.muted:s<580?C.red:s<670?C.yellow:s<740?C.accentLt:C.gold;
                return(
                  <div key={b.k} style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:14,padding:18,textAlign:"center"}}>
                    <div style={{fontFamily:"'Clash Display',sans-serif",fontSize:30,fontWeight:700,color:col}}>{s||"—"}</div>
                    <div style={{fontSize:11,color:C.muted,textTransform:"uppercase",letterSpacing:"1.5px",marginTop:4}}>{b.l}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="card">
            <div className="ct">📋 Client Summary</div>
            <div style={{display:"flex",flexDirection:"column",gap:12}}>
              {[
                {l:"Report uploaded",v:d.reportUploaded?"✓ Yes":"⚠ No",c:d.reportUploaded?C.green:C.yellow},
                {l:"Negative accounts",v:`${neg.length} accounts`,c:neg.length>0?C.red:C.green},
                {l:"Previous addresses",v:`${(d.previousAddresses||[]).length} to remove`,c:(d.previousAddresses||[]).length>0?C.yellow:C.muted},
                {l:"Late payments",v:`${(d.latePayments||[]).length} found`,c:(d.latePayments||[]).length>0?C.yellow:C.muted},
                {l:"Inquiries",v:`${(d.inquiries||[]).length} on file`,c:C.muted},
              ].map((row,i)=>(
                <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"10px 0",borderBottom:`1px solid ${C.border}`,fontSize:13}}>
                  <span style={{color:C.muted}}>{row.l}</span>
                  <span style={{fontWeight:600,color:row.c}}>{row.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* DATA ENTRY */}
      {tab==="data"&&ec&&(
        <div className="fu">
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,alignItems:"start"}}>
            {/* LEFT: PDF VIEWER — now loads from Supabase */}
            <PdfViewer clientId={d.id} reportUploaded={d.reportUploaded}/>
            {/* RIGHT: DATA ENTRY */}
            <div style={{display:"flex",flexDirection:"column",gap:0}}>
              <div className="card">
                <div className="ct">👤 Personal Information</div>
                <div className="fg-row">
                  <div className="fg"><label className="fl">Full Legal Name</label>
                    <input className="fi" value={ec.name||""} onChange={e=>setEc(x=>({...x,name:e.target.value}))}/></div>
                  <div className="fg"><label className="fl">Date of Birth</label>
                    <input className="fi" placeholder="MM/DD/YYYY" value={ec.dob||""} onChange={e=>setEc(x=>({...x,dob:e.target.value}))}/></div>
                </div>
                <div className="fg"><label className="fl">Current Mailing Address (used on all letters)</label>
                  <input className="fi" placeholder="Street, City, State ZIP" value={ec.currentAddress||""} onChange={e=>setEc(x=>({...x,currentAddress:e.target.value}))}/></div>
                <div className="fg-row3">
                  {[{l:"TransUnion",k:"transunion"},{l:"Experian",k:"experian"},{l:"Equifax",k:"equifax"}].map(b=>(
                    <div className="fg" key={b.k}><label className="fl">{b.l}</label>
                      <input className="fi" placeholder="Score" value={ec.scores?.[b.k]||""}
                        style={{textAlign:"center",fontFamily:"monospace",fontSize:20,fontWeight:700}}
                        onChange={e=>setEc(x=>({...x,scores:{...x.scores,[b.k]:parseInt(e.target.value)||null}}))}/></div>
                  ))}
                </div>
              </div>
              <div className="card">
                <div className="ct">👤 Name Variations / Aliases</div>
                <div className="cs">Every name shown under "Also Known As" across all 3 bureaus</div>
                {(ec.nameVariants||[]).map((n,i)=>(
                  <div key={i} style={{display:"flex",gap:8,marginBottom:8}}>
                    <input className="fi" value={n}
                      placeholder={i===0?"Primary legal name":"Alias / variation"}
                      onChange={e=>updArr("nameVariants",i,e.target.value)}/>
                    {i>0&&<button className="btn btn-red btn-sm" onClick={()=>delItem("nameVariants",i)}>✕</button>}
                  </div>
                ))}
                <button className="btn btn-g btn-sm" onClick={()=>addItem("nameVariants","")}>+ Add Alias</button>
              </div>
              <div className="card">
                <div className="ct">📍 Current Addresses on Report</div>
                <div className="cs">Listed under "Current Address(es)" in Personal Information</div>
                {(ec.currentAddresses||[]).map((a,i)=>(
                  <div key={i} style={{display:"flex",gap:8,marginBottom:8}}>
                    <input className="fi" value={a} placeholder="Street, City, State ZIP"
                      onChange={e=>updArr("currentAddresses",i,e.target.value)}/>
                    {i>0&&<button className="btn btn-red btn-sm" onClick={()=>delItem("currentAddresses",i)}>✕</button>}
                  </div>
                ))}
                <button className="btn btn-g btn-sm" onClick={()=>addItem("currentAddresses","")}>+ Add</button>
              </div>
              <div className="card" style={{borderColor:C.red+"44"}}>
                <div className="ct" style={{color:C.red}}>📍 Previous Addresses — Remove Round 1</div>
                <div className="cs">Listed under "Previous Address(es)" — these are what we remove first</div>
                {(ec.previousAddresses||[]).map((a,i)=>(
                  <div key={i} style={{display:"flex",gap:8,marginBottom:8}}>
                    <input className="fi" value={a} placeholder="Previous address"
                      style={{borderColor:C.red+"44"}}
                      onChange={e=>updArr("previousAddresses",i,e.target.value)}/>
                    <button className="btn btn-red btn-sm" onClick={()=>delItem("previousAddresses",i)}>✕</button>
                  </div>
                ))}
                <button className="btn btn-g btn-sm" onClick={()=>addItem("previousAddresses","")}>+ Add Previous Address</button>
              </div>
              <div className="card">
                <div className="ct">💳 All Accounts</div>
                <div className="cs">Every account from the Account History section — toggle Negative / Positive</div>
                {(ec.accounts||[]).map((a,i)=>(
                  <div key={i} style={{
                    background:C.surface,
                    border:`1px solid ${a.negative?C.red+"55":C.green+"33"}`,
                    borderRadius:14,padding:14,marginBottom:10,
                  }}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
                      <div style={{fontWeight:700,fontSize:13,color:a.negative?C.red:C.green}}>
                        {a.negative?"⚠":"✓"} {a.creditor||`Account ${i+1}`}
                      </div>
                      <div style={{display:"flex",gap:6}}>
                        <button
                          style={{
                            padding:"4px 10px",borderRadius:8,border:"none",cursor:"pointer",
                            fontSize:11,fontWeight:700,fontFamily:"'Outfit',sans-serif",
                            background:a.negative?C.red+"22":C.green+"22",
                            color:a.negative?C.red:C.green,
                          }}
                          onClick={()=>updAcct(i,"negative",!a.negative)}>
                          {a.negative?"⚠ Negative":"✓ Positive"}
                        </button>
                        <button className="btn btn-red btn-sm" onClick={()=>delItem("accounts",i)}>✕</button>
                      </div>
                    </div>
                    <div className="fg-row">
                      <div className="fg"><label className="fl">Creditor</label>
                        <input className="fi" value={a.creditor||""} onChange={e=>updAcct(i,"creditor",e.target.value)}/></div>
                      <div className="fg"><label className="fl">Balance ($)</label>
                        <input className="fi" value={a.balance||""} onChange={e=>updAcct(i,"balance",e.target.value)}/></div>
                    </div>
                    <div className="fg-row">
                      <div className="fg"><label className="fl">Account Type</label>
                        <select className="fsel" value={a.type||"Credit Card"} onChange={e=>updAcct(i,"type",e.target.value)}>
                          {["Credit Card","Auto Loan","Student Loan","Personal Loan","Mortgage","Collection","Charge-off","Rental","Secured Loan","Other"].map(t=><option key={t}>{t}</option>)}
                        </select></div>
                      <div className="fg"><label className="fl">Payment Status</label>
                        <select className="fsel" value={a.status||"Current"} onChange={e=>updAcct(i,"status",e.target.value)}>
                          {["Current","Paid","Closed","Transferred","Collection","Charge-off","Late 30 Days","Late 60 Days","Late 90 Days","Derogatory"].map(s=><option key={s}>{s}</option>)}
                        </select></div>
                    </div>
                    <div className="fg" style={{marginBottom:0}}><label className="fl">Bureau(s)</label>
                      <select className="fsel" value={a.bureau||"All 3"} onChange={e=>updAcct(i,"bureau",e.target.value)}>
                        {["All 3","TransUnion Only","Experian Only","Equifax Only","TransUnion & Experian","TransUnion & Equifax","Experian & Equifax"].map(b=><option key={b}>{b}</option>)}
                      </select></div>
                  </div>
                ))}
                <button className="btn btn-g btn-sm" onClick={()=>addItem("accounts",{creditor:"",balance:"",type:"Credit Card",status:"Current",bureau:"All 3",negative:false,id:Date.now()})}>
                  + Add Account
                </button>
              </div>
              <div className="card">
                <div className="ct">⚠️ Late Payments</div>
                <div className="cs">Any account showing late payments in the 2-year payment history grid</div>
                {(ec.latePayments||[]).map((lp,i)=>(
                  <div key={i} style={{display:"flex",gap:8,marginBottom:10,flexWrap:"wrap"}}>
                    <input className="fi" style={{flex:2,minWidth:120}} placeholder="Creditor" value={lp.creditor||""} onChange={e=>updArr("latePayments",i,{...lp,creditor:e.target.value})}/>
                    <select className="fsel" style={{flex:1,minWidth:90}} value={lp.days||"30"} onChange={e=>updArr("latePayments",i,{...lp,days:e.target.value})}>
                      {["30","60","90","120"].map(d=><option key={d} value={d}>{d} days</option>)}
                    </select>
                    <select className="fsel" style={{flex:1,minWidth:120}} value={lp.bureau||""} onChange={e=>updArr("latePayments",i,{...lp,bureau:e.target.value})}>
                      <option value="">All Bureaus</option>
                      <option value="TransUnion">TransUnion</option>
                      <option value="Experian">Experian</option>
                      <option value="Equifax">Equifax</option>
                    </select>
                    <input className="fi" placeholder="Date (e.g. 01/2025)" value={lp.date||""} onChange={e=>updArr("latePayments",i,{...lp,date:e.target.value})} style={{flex:1,minWidth:110}}/>
                    <button className="btn btn-red btn-sm" onClick={()=>delItem("latePayments",i)}>✕</button>
                  </div>
                ))}
                <button className="btn btn-g btn-sm" onClick={()=>addItem("latePayments",{creditor:"",days:"30",bureau:"",date:""})}>+ Add Late Payment</button>
              </div>
              <div className="card">
                <div className="ct">🔍 Hard Inquiries</div>
                <div className="cs">From the Inquiries section at the bottom of the report. Leave empty if "None Reported."</div>
                {(ec.inquiries||[]).map((inq,i)=>(
                  <div key={i} style={{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"}}>
                    <input className="fi" placeholder="Company name" value={inq.name||""} onChange={e=>updArr("inquiries",i,{...inq,name:e.target.value})} style={{flex:2,minWidth:140}}/>
                    <input className="fi" placeholder="Date (e.g. 03/2026)" value={inq.date||""} onChange={e=>updArr("inquiries",i,{...inq,date:e.target.value})} style={{flex:1,minWidth:120}}/>
                    <select className="fsel" style={{flex:1,minWidth:120}} value={inq.bureau||""} onChange={e=>updArr("inquiries",i,{...inq,bureau:e.target.value})}>
                      <option value="">All Bureaus</option>
                      <option value="TransUnion">TransUnion</option>
                      <option value="Experian">Experian</option>
                      <option value="Equifax">Equifax</option>
                    </select>
                    <button className="btn btn-red btn-sm" onClick={()=>delItem("inquiries",i)}>✕</button>
                  </div>
                ))}
                <button className="btn btn-g btn-sm" onClick={()=>addItem("inquiries",{name:"",date:"",bureau:""})}>+ Add Inquiry</button>
              </div>
              <button className="btn btn-p btn-full" style={{fontSize:15,padding:14,marginBottom:20}} onClick={save} disabled={saving}>
                {saving ? <><Spin/> Saving...</> : "💾 Save All Data"}
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ACCOUNTS VIEW */}
      {tab==="accounts"&&(
        <div className="fu">
          {/* Sub-tab navigation */}
          <div style={{display:"flex",gap:4,background:C.surface,borderRadius:14,padding:4,marginBottom:16}}>
            {[
              {key:"negative",label:"⚠️ Negative",count:neg.length,color:C.red},
              {key:"positive",label:"✅ Positive",count:pos.length,color:C.green},
              {key:"latePayments",label:"🕐 Late Payments",count:(d.latePayments||[]).length,color:C.yellow},
              {key:"inquiries",label:"🔍 Hard Inquiries",count:(d.inquiries||[]).length,color:C.muted},
            ].map(t=>(
              <button key={t.key} onClick={()=>setAcctTab(t.key)}
                style={{flex:1,padding:"9px 6px",border:"none",borderRadius:10,cursor:"pointer",
                  fontFamily:"'Outfit',sans-serif",fontSize:12,fontWeight:700,transition:"all .2s",
                  background:acctTab===t.key?C.accent:"transparent",
                  color:acctTab===t.key?"white":C.muted,
                  boxShadow:acctTab===t.key?`0 4px 12px ${C.accent}44`:"none"}}>
                {t.label}
                {t.count>0&&<span style={{marginLeft:5,background:acctTab===t.key?"rgba(255,255,255,.25)":t.color+"22",
                  color:acctTab===t.key?"white":t.color,borderRadius:20,padding:"1px 7px",fontSize:11}}>{t.count}</span>}
              </button>
            ))}
          </div>

          {/* Negative Accounts */}
          {acctTab==="negative"&&(
            <div className="card" style={{borderColor:neg.length?C.red+"44":C.border}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
                <div><div className="ct">⚠️ Negative Accounts</div><div style={{fontSize:12,color:C.muted}}>Round 2 dispute targets</div></div>
                <span className="badge b-red">{neg.length}</span>
              </div>
              {neg.length>0?(
                <div className="tw">
                  <table>
                    <thead><tr><th>Creditor</th><th>Type</th><th>Balance</th><th>Status</th><th>Bureau</th></tr></thead>
                    <tbody>
                      {neg.map((a,i)=>(
                        <tr key={i} style={{background:C.red+"06"}}>
                          <td style={{fontWeight:700}}>{a.creditor}</td>
                          <td><span className="badge b-gray">{a.type}</span></td>
                          <td style={{fontFamily:"monospace",color:C.red,fontWeight:700}}>${parseFloat(a.balance||0).toLocaleString()}</td>
                          <td><span className="badge b-red">{a.status}</span></td>
                          <td style={{fontSize:11,color:C.muted}}>{a.bureau}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ):<div style={{textAlign:"center",padding:24,color:C.muted,fontSize:13}}>✅ No negative accounts entered yet</div>}
            </div>
          )}

          {/* Positive Accounts */}
          {acctTab==="positive"&&(
            <div className="card" style={{borderColor:C.green+"33"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
                <div><div className="ct">✅ Positive Accounts</div><div style={{fontSize:12,color:C.muted}}>Keep in good standing</div></div>
                <span className="badge b-green">{pos.length}</span>
              </div>
              {pos.length>0?(
                <div className="tw">
                  <table>
                    <thead><tr><th>Creditor</th><th>Type</th><th>Balance</th><th>Status</th><th>Bureau</th></tr></thead>
                    <tbody>
                      {pos.map((a,i)=>(
                        <tr key={i}>
                          <td style={{fontWeight:700}}>{a.creditor}</td>
                          <td><span className="badge b-gray">{a.type}</span></td>
                          <td style={{fontFamily:"monospace"}}>${parseFloat(a.balance||0).toLocaleString()}</td>
                          <td><span className="badge b-green">{a.status}</span></td>
                          <td style={{fontSize:11,color:C.muted}}>{a.bureau}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ):<div style={{textAlign:"center",padding:24,color:C.muted,fontSize:13}}>No positive accounts entered yet</div>}
            </div>
          )}

          {/* Late Payments */}
          {acctTab==="latePayments"&&(
            <div className="card" style={{borderColor:C.yellow+"44"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
                <div><div className="ct">🕐 Late Payments</div><div style={{fontSize:12,color:C.muted}}>Dispute targets — add via Enter Data tab</div></div>
                <span className="badge" style={{background:C.yellow+"22",color:C.yellow}}>{(d.latePayments||[]).length}</span>
              </div>
              {(d.latePayments||[]).length>0?(
                <div className="tw">
                  <table>
                    <thead><tr><th>Creditor</th><th>Days Late</th><th>Bureau</th><th>Date</th></tr></thead>
                    <tbody>
                      {(d.latePayments||[]).map((lp,i)=>(
                        <tr key={i} style={{background:C.yellow+"06"}}>
                          <td style={{fontWeight:700}}>{lp.creditor}</td>
                          <td><span className="badge b-red">{lp.days} days</span></td>
                          <td style={{fontSize:11,color:C.muted}}>{lp.bureau}</td>
                          <td style={{fontSize:11,color:C.muted}}>{lp.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ):<div style={{textAlign:"center",padding:24,color:C.muted,fontSize:13}}>No late payments entered yet — add them in Enter Data</div>}
            </div>
          )}

          {/* Hard Inquiries */}
          {acctTab==="inquiries"&&(
            <div className="card">
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
                <div><div className="ct">🔍 Hard Inquiries</div><div style={{fontSize:12,color:C.muted}}>Dispute targets — add via Enter Data tab</div></div>
                <span className="badge b-gray">{(d.inquiries||[]).length}</span>
              </div>
              {(d.inquiries||[]).length>0?(
                <div className="tw">
                  <table>
                    <thead><tr><th>Company</th><th>Date</th><th>Bureau</th></tr></thead>
                    <tbody>
                      {(d.inquiries||[]).map((inq,i)=>(
                        <tr key={i}>
                          <td style={{fontWeight:700}}>{inq.name}</td>
                          <td style={{color:C.muted,fontSize:12}}>{inq.date}</td>
                          <td style={{fontSize:11,color:C.muted}}>{inq.bureau}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ):<div style={{textAlign:"center",padding:24,color:C.muted,fontSize:13}}>No inquiries entered yet — add them in Enter Data</div>}
            </div>
          )}
        </div>
      )}
      {/* LETTERS */}
      {tab==="letters"&&(
        <div className="fu">
          <div className="card">
            <div className="ct">📨 Dispute Letter Generator</div>
            <div className="cs">Select round and bureau — letter auto-populates with verified client data</div>
            <div className="fg-row" style={{marginBottom:16}}>
              <div className="fg"><label className="fl">Dispute Round</label>
                <select className="fsel" value={lRound} onChange={e=>setLRound(Number(e.target.value))}>
                  <option value={1}>Round 1 — Address & Name Removal</option>
                  <option value={2}>Round 2 — 605B Compliance Attack</option>
                  <option value={3}>Round 3 — Factual Dispute</option>
                  <option value={4}>Round 4 — Advanced Factual</option>
                </select></div>
              <div className="fg"><label className="fl">Target Bureau</label>
                <select className="fsel" value={bureau} onChange={e=>setBureau(e.target.value)}>
                  <option>Equifax</option><option>TransUnion</option><option>Experian</option>
                </select></div>
            </div>
            <div className="letter-box">{getLetter()}</div>
            <div style={{display:"flex",gap:10,marginTop:14,flexWrap:"wrap",alignItems:"center"}}>
              <button className="btn btn-p" onClick={()=>downloadLetter(getLetter(),lRound,bureau,d.name)}>
                ⬇️ Download Letter
              </button>
              <button className="btn btn-g" onClick={()=>copy(getLetter(),`${bureau}-R${lRound}`)}>
                {copied===`${bureau}-R${lRound}`?"✓ Copied!":"📋 Copy"}
              </button>
              <div style={{marginLeft:"auto",display:"flex",gap:6}}>
                {["Equifax","TransUnion","Experian"].map(b=>(
                  <button key={b} className="btn btn-g btn-sm" onClick={()=>setBureau(b)}
                    style={{borderColor:bureau===b?C.accent:C.border,color:bureau===b?C.accentLt:C.muted}}>{b}</button>
                ))}
              </div>
            </div>
            <div style={{marginTop:12,fontSize:12,color:C.yellow}}>
              ⚠️ Send via Certified Mail with Return Receipt · Allow 30–45 days for bureau response
            </div>
          </div>
          <div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:14,padding:18}}>
            <div style={{fontWeight:700,fontSize:13,marginBottom:12}}>⚡ Quick Download — All 3 Bureaus (Round {lRound})</div>
            <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
              {["Equifax","TransUnion","Experian"].map(b=>{
                const txt = lRound===1?genR1(d,b):lRound===2?gen605B(d,b):lRound===3?genFactual(d,b):genAdvanced(d,b);
                return (
                  <button key={b} className="btn btn-g" onClick={()=>downloadLetter(txt,lRound,b,d.name)}>
                    ⬇️ {b}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {/* ROUND MANAGEMENT */}
      {tab==="rounds"&&(
        <div className="fu">
          <div className="card">
            <div className="ct">🗓️ Round Management</div>
            <div className="cs">Track each round — a credit report update is required before advancing</div>
            {[
              {r:1,l:"Address & Name Removal",i:"📍"},
              {r:2,l:"605B Compliance Attack",i:"⚖️"},
              {r:3,l:"Factual Dispute",i:"🔍"},
              {r:4,l:"Advanced Factual",i:"🎯"},
            ].map(item=>{
              const rData=(d.rounds||[]).find(rd=>rd.num===item.r)||{status:"pending"};
              const done=rData.status==="complete";
              const act=rData.status==="active"||rData.status==="sent"||(rData.status==="pending"&&item.r===d.round);
              const isCurrent=item.r===d.round;
              const roundUpdate=d.roundUpdates?.[item.r];
              const hasUpdate=roundUpdate?.agentFilled;
              const clientConfirmed=roundUpdate?.clientConfirmed;
              const negAccts=(d.accounts||[]).filter(a=>a.negative);
              return(
                <div key={item.r} style={{background:C.surface,border:`1px solid ${done?C.green+"44":act?C.accent+"44":C.border}`,
                  borderRadius:14,padding:18,marginBottom:12}}>
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8}}>
                    <div style={{display:"flex",alignItems:"center",gap:10}}>
                      <span style={{fontSize:20}}>{item.i}</span>
                      <div>
                        <div style={{fontWeight:700,fontSize:14}}>Round {item.r} — {item.l}</div>
                        {rData.sentAt&&<div style={{fontSize:11,color:C.muted}}>Letters sent: {rData.sentAt}</div>}
                      </div>
                    </div>
                    <span className={`badge ${done?"b-green":act&&rData.sentAt&&!hasUpdate?"b-yellow":act?"b-blue":"b-gray"}`}>
                      {done?"Complete":act&&rData.sentAt&&!hasUpdate?"Update Required":act?rData.sentAt?"Awaiting Response":"Letters Ready":"Pending"}
                    </span>
                  </div>
                  {/* Mark sent button */}
                  {act&&!rData.sentAt&&isCurrent&&(
                    <button className="btn btn-p btn-sm" onClick={markRoundSent}>📨 Mark Letters Sent</button>
                  )}
                  {/* After sent: show update gate */}
                  {act&&rData.sentAt&&isCurrent&&!hasUpdate&&(
                    <div className="update-gate">
                      <div className="update-gate-header">
                        <span style={{fontSize:20}}>📋</span>
                        <div>
                          <div style={{fontWeight:700,fontSize:13}}>Credit Report Update Required</div>
                          <div style={{fontSize:12,color:C.muted}}>Enter the new scores and removed accounts before advancing to Round {item.r+1}</div>
                        </div>
                      </div>
                      {clientConfirmed&&<div style={{fontSize:12,color:C.gold,marginBottom:10}}>✅ Client has pulled their updated report</div>}
                      <div style={{fontSize:12,color:C.muted,marginBottom:8,fontWeight:600}}>NEW SCORES</div>
                      <div className="score-row">
                        {[{l:"TransUnion",k:"newTU",orig:d.scores?.transunion},{l:"Experian",k:"newEX",orig:d.scores?.experian},{l:"Equifax",k:"newEQ",orig:d.scores?.equifax}].map(b=>(
                          <div className="score-box" key={b.k}>
                            <div style={{fontSize:10,color:C.muted,textTransform:"uppercase",letterSpacing:"1px",marginBottom:6}}>{b.l}</div>
                            {b.orig&&<div style={{fontSize:10,color:C.muted,marginBottom:4}}>Was: {b.orig}</div>}
                            <input className="fi" style={{textAlign:"center",fontSize:16,fontWeight:700,padding:"8px"}}
                              placeholder="—" value={roundUpdateDraft[b.k]}
                              onChange={e=>setRoundUpdateDraft(x=>({...x,[b.k]:e.target.value}))}/>
                          </div>
                        ))}
                      </div>
                      <div style={{fontSize:12,color:C.muted,marginBottom:8,fontWeight:600,marginTop:12}}>ACCOUNTS REMOVED THIS ROUND</div>
                      <div className="removed-list">
                        {negAccts.length===0&&<div style={{fontSize:12,color:C.muted}}>No negative accounts on file</div>}
                        {negAccts.map((a,i)=>{
                          const checked=(roundUpdateDraft.removedAccounts||[]).includes(a.creditor);
                          return(
                            <div key={i} className={`removed-item ${checked?"checked":""}`}
                              onClick={()=>setRoundUpdateDraft(x=>{
                                const list=x.removedAccounts||[];
                                return {...x,removedAccounts:checked?list.filter(n=>n!==a.creditor):[...list,a.creditor]};
                              })}>
                              <span style={{fontSize:16}}>{checked?"✅":"⬜"}</span>
                              <div style={{flex:1}}>
                                <div style={{fontSize:13,fontWeight:600}}>{a.creditor}</div>
                                <div style={{fontSize:11,color:C.muted}}>${a.balance} · {a.bureau}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div style={{marginTop:10}}>
                        <label className="fl">NOTES / SUMMARY</label>
                        <textarea className="fi" rows={2} style={{resize:"vertical"}} placeholder="e.g. 3 accounts removed, score up 45 pts..."
                          value={roundUpdateDraft.notes} onChange={e=>setRoundUpdateDraft(x=>({...x,notes:e.target.value}))}/>
                      </div>
                      <button className="btn btn-p" style={{marginTop:12,width:"100%"}} onClick={saveRoundUpdate}>
                        💾 Save Round {item.r} Update
                      </button>
                    </div>
                  )}
                  {/* Update saved — show summary + unlock complete */}
                  {act&&rData.sentAt&&isCurrent&&hasUpdate&&(
                    <div>
                      <div className="update-done">
                        <div style={{fontWeight:700,fontSize:13,marginBottom:10}}>✅ Round {item.r} Update — Filed</div>
                        <div className="score-row">
                          {[{l:"TransUnion",k:"newTU",orig:d.scores?.transunion},{l:"Experian",k:"newEX",orig:d.scores?.experian},{l:"Equifax",k:"newEQ",orig:d.scores?.equifax}].map(b=>{
                            const newS=parseInt(roundUpdate[b.k]);
                            const delta=newS&&b.orig?newS-b.orig:null;
                            return(
                              <div className="score-box" key={b.k}>
                                <div style={{fontSize:10,color:C.muted,textTransform:"uppercase",letterSpacing:"1px",marginBottom:4}}>{b.l}</div>
                                <div style={{fontSize:22,fontWeight:700,color:delta>0?C.green:delta<0?C.red:C.text}}>{roundUpdate[b.k]||"—"}</div>
                                {delta!==null&&<div className={delta>0?"score-delta-pos":delta<0?"score-delta-neg":"score-delta-zero"}>{delta>0?"+":""}{delta} pts</div>}
                              </div>
                            );
                          })}
                        </div>
                        {(roundUpdate.removedAccounts||[]).length>0&&(
                          <div style={{marginTop:10}}>
                            <div style={{fontSize:11,color:C.muted,fontWeight:600,marginBottom:6}}>ACCOUNTS REMOVED</div>
                            {roundUpdate.removedAccounts.map((a,i)=>(
                              <span key={i} className="badge b-green" style={{marginRight:6,marginBottom:4}}>{a}</span>
                            ))}
                          </div>
                        )}
                        {roundUpdate.notes&&<div style={{fontSize:12,color:C.muted,marginTop:10}}>{roundUpdate.notes}</div>}
                      </div>
                      {item.r<4&&(
                        <button className="btn btn-gold" style={{marginTop:12,width:"100%"}} onClick={completeRound}>
                          → Mark Round {item.r} Complete &amp; Start Round {item.r+1}
                        </button>
                      )}
                    </div>
                  )}
                  {/* Lock indicator for future rounds */}
                  {!act&&!done&&item.r>d.round&&(
                    <div className="lock-block">
                      <span style={{fontSize:20}}>🔒</span>
                      <div style={{fontSize:12,color:C.muted}}>Locked — complete Round {item.r-1} and submit a credit report update to unlock</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
      {toast&&<div className="toast">{toast}</div>}
    </div>
  );
}
/* ─── ROOT ───────────────────────────────────────────────────────────────── */
export default function App() {
  const [view, setView] = useState("client");
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem("ss_user");
      return stored ? JSON.parse(stored) : null;
    } catch(e) { return null; }
  }); // { id, name, email, role, token }
  const [clientData, setClientData] = useState(null); // full client detail for client portal
  const [toast, setToast] = useState("");
  const [loading, setLoading] = useState(false);
  const toast_ = m => { setToast(m); setTimeout(()=>setToast(""),3000); };
  const fetchClientData = async (clientId) => {
    try {
      const data = await api(`/api/clients/${clientId}`);
      setClientData(mapClient(data));
    } catch(err) {
      console.error("Fetch client data:", err);
    }
  };
  const handleAuth = (userData) => {
    setUser(userData);
    localStorage.setItem("ss_user", JSON.stringify(userData));
    if (userData.role === "client") {
      fetchClientData(userData.id);
    }
  };
  const handleLogout = () => {
    setUser(null);
    setClientData(null);
    setToken(null);
    localStorage.removeItem("ss_user");
    setView("client");
  };
  // Restore client data on page load if already logged in as client
  useEffect(() => {
    if (user && user.role === "client" && !clientData) {
      fetchClientData(user.id);
    }
  }, []);
  const handleOnboardComplete = () => {
    // Refresh client data after PDF upload
    if (user) {
      fetchClientData(user.id);
    }
    toast_("✓ Report submitted! Your team will review shortly.");
  };
  if (loading) return (
    <div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:C.bg}}>
      <div style={{width:32,height:32,border:`3px solid ${C.accent}`,borderTopColor:"transparent",borderRadius:"50%",animation:"spin .8s linear infinite"}}/>
    </div>
  );
  const isClient = user?.role === "client";
  const isAdmin = user?.role === "admin";
  const clientNeedsOnboard = isClient && clientData && !clientData.reportUploaded && clientData.onboardStep !== "review" && clientData.status !== "active";
  const clientIsActive = isClient && clientData && (clientData.reportUploaded || clientData.approved || clientData.status === "active");
  const clientPending = isClient && clientData && clientData.reportUploaded && !clientData.approved && clientData.status !== "active";
  return (
    <>
      <style>{css}</style>
      <div className="app">
        {user&&(
          <nav className="nav">
            <div className="logo">
              <div className="lmark"><div className="sww">{[10,14,18,14,10].map((h,i)=><div key={i} className="swb" style={{height:h}}/>)}</div></div>
              <div className="lname">Sound<span>Score</span></div>
            </div>
            <div style={{display:"flex",gap:8,alignItems:"center"}}>
              {isClient&&<div style={{fontSize:12,color:C.muted,display:"flex",alignItems:"center",gap:6}}>
                <div style={{width:8,height:8,borderRadius:"50%",background:C.green}}/>
                {user.name}
              </div>}
              {isAdmin&&<div style={{fontSize:12,color:C.muted,display:"flex",alignItems:"center",gap:6}}>
                <div style={{width:8,height:8,borderRadius:"50%",background:C.gold}}/>
                {user.name} · Admin
              </div>}
              <button className="btn btn-g btn-sm" onClick={handleLogout}>Log Out</button>
            </div>
          </nav>
        )}
        {!user&&(
          <div>
            <div style={{position:"absolute",top:20,right:24,zIndex:100,display:"flex",gap:6}}>
              <button className={`btn btn-sm ${view==="client"?"btn-p":"btn-g"}`} onClick={()=>setView("client")}>Client Login</button>
              <button className={`btn btn-sm ${view==="admin"?"btn-gold":"btn-g"}`} onClick={()=>setView("admin")}>Admin Login</button>
            </div>
            {view==="client"
              ? <AuthPage mode="client" onAuth={handleAuth}/>
              : <AuthPage mode="admin" onAuth={handleAuth}/>
            }
          </div>
        )}
        {isAdmin&&(
          <div className="main">
            <AdminDash admin={user} onLogout={handleLogout}/>
          </div>
        )}
        {clientNeedsOnboard&&(
          <ClientOnboarding client={clientData} onComplete={handleOnboardComplete}/>
        )}
        {clientPending&&(
          <div className="main">
            <ClientPortal client={clientData}/>
          </div>
        )}
        {clientIsActive&&!clientPending&&(
          <div className="main">
            <ClientPortal client={clientData}/>
          </div>
        )}
        {toast&&<div className="toast">{toast}</div>}
      </div>
    </>
  );
}
