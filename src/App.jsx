import React, { useState } from "react";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState("");
  const [activeTab, setActiveTab] = useState("Introducing Broker");

  const whatsappNumber = "639627969908"; // CHANGE THIS to your real WhatsApp number

  const documents = {
    "Introducing Broker": [
      "IB Partner Starter Guide",
      "IB Client Onboarding Checklist",
      "IB Marketing Scripts"
    ],
    "Fund Manager": [
      "Fund Manager Roadmap",
      "Risk Management Framework",
      "Investor Communication Guide"
    ],
    "Copy Trading": [
      "Copy Trading Explained",
      "Signal Provider Starter Guide",
      "Follower Education Guide"
    ],
    "Trader Resources": [
      "Account Opening Guide",
      "Funding Guide",
      "Platform Setup Guide"
    ]
  };

  function openForm(doc) {
    setSelectedDoc(doc);
    setShowForm(true);
  }

  function submitLead(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const interest = e.target.interest.value;

    const message = `Hi Ruches, I accessed your ACY Partner Knowledge Hub.%0A%0AName: ${name}%0AEmail: ${email}%0AWhatsApp: ${phone}%0AInterest: ${interest}%0ARequested Document: ${selectedDoc}%0A%0AI would like to learn more.`;

    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`, "_blank");
    setShowForm(false);
  }

  return (
    <div className="page">
      <style>{css}</style>

      <nav className="nav">
        <div>
          <div className="brand">ACY Partner Knowledge Hub</div>
          <div className="subbrand">by Ruches Lingad</div>
        </div>
        <button onClick={() => openForm("Full Partner System Access")} className="navBtn">
          Get Access
        </button>
      </nav>

      <section className="hero">
        <div className="badge">Premium Resource Center for Growth-Focused Traders</div>
        <h1>
          Turn serious traders into <span>IBs, Fund Managers,</span> and long-term partners.
        </h1>
        <p>
          A premium blue-and-gold knowledge hub designed to educate, qualify, and convert traders into higher-value opportunities within the trading ecosystem.
        </p>

        <div className="heroBtns">
          <button onClick={() => openForm("Full Partner System Access")} className="goldBtn">
            Access Partner System
          </button>
          <button onClick={() => document.getElementById("library").scrollIntoView({ behavior: "smooth" })} className="ghostBtn">
            View Resources
          </button>
        </div>
      </section>

      <section className="stats">
        <div><strong>IB</strong><span>Partner Growth</span></div>
        <div><strong>FM</strong><span>Capital Pathway</span></div>
        <div><strong>Copy</strong><span>Retention Engine</span></div>
      </section>

      <section id="library" className="section">
        <h2>Choose Your Resource Pathway</h2>
        <p className="sectionText">
          Select the client category below. Each pathway opens a curated set of documents and prompts the visitor to connect with you directly.
        </p>

        <div className="tabs">
          {Object.keys(documents).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={activeTab === tab ? "tab active" : "tab"}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid">
          {documents[activeTab].map((doc) => (
            <div className="card" key={doc}>
              <div className="cardGlow"></div>
              <h3>{doc}</h3>
              <p>
                Unlock this resource and receive the next-step guidance based on your selected pathway.
              </p>
              <button onClick={() => openForm(doc)} className="goldBtn small">
                Get Access
              </button>
            </div>
          ))}
        </div>
      </section>
<section className="ibConversion">
  <div className="ibBox">
    <div>
      <div className="badge">Introducing Broker Growth Path</div>
      <h2>Build a trader network that can grow beyond one-time referrals.</h2>
      <p>
        This hub helps potential IBs understand the partner journey, client onboarding process,
        trading ecosystem, and next steps to start building a long-term trading business.
      </p>

      <div className="ibPoints">
        <div>✓ Learn how IB partnerships work</div>
        <div>✓ Access onboarding and marketing resources</div>
        <div>✓ Connect directly for next-step guidance</div>
      </div>

      <button onClick={() => openForm("Introducing Broker Growth System")} className="goldBtn">
        Start IB Pathway
      </button>
    </div>

    <div className="ibCard">
      <h3>IB Partner System</h3>
      <p>Educate → Qualify → Connect → Convert</p>
      <div className="miniMetric">
        <strong>01</strong><span>Attract traders</span>
      </div>
      <div className="miniMetric">
        <strong>02</strong><span>Guide onboarding</span>
      </div>
      <div className="miniMetric">
        <strong>03</strong><span>Build partner activity</span>
      </div>
    </div>
  </div>
</section>
      <section className="authority">
  <div className="authorityBox">

    <div className="authorityLeft">
      <div className="badge">Trusted Partner Positioning</div>

      <h2>
        Built for traders who want to operate at a <span>professional level</span>.
      </h2>

      <p>
        This platform is designed to guide serious traders into structured growth pathways —
        from individual trading to Introducing Broker networks, Fund Management, and Copy Trading ecosystems.
      </p>

      <div className="authorityPoints">
        <div>✓ Structured partner pathways (IB / Fund Manager / Copy Trading)</div>
        <div>✓ Direct access to guidance and onboarding support</div>
        <div>✓ Built around long-term growth, not short-term trades</div>
      </div>
    </div>

    <div className="authorityRight">
      <div className="authorityCard">
        <h3>What This Hub Represents</h3>

        <div className="miniMetric">
          <strong>01</strong>
          <span>Professional trading ecosystem</span>
        </div>

        <div className="miniMetric">
          <strong>02</strong>
          <span>Scalable income pathways</span>
        </div>

        <div className="miniMetric">
          <strong>03</strong>
          <span>Partner-level opportunity</span>
        </div>
      </div>
    </div>

  </div>
</section>
      <section className="finalCTA">
  <div className="ctaBox">
    <div className="badge">Limited Access • Partner-Level Resources</div>

    <h2>
      Turn your trading into <span>consistent income streams</span> — not just trades.
    </h2>

    <p>
      This private system is designed for traders who want to move beyond execution
      and step into real growth — as an Introducing Broker, Fund Manager, or Copy Trading leader.
      <br /><br />
      If you're serious about scaling, this is your next step.
    </p>

    <div className="ctaPoints">
      <div>✓ Access structured IB & Fund Manager pathways</div>
      <div>✓ Learn how to build long-term trading income streams</div>
      <div>✓ Get direct guidance on your next move</div>
    </div>

    <div className="ctaButtons">
      <button onClick={() => openForm("Start Partner Journey")} className="goldBtn">
        Get Full Access Now
      </button>

      <button onClick={() => openForm("Direct Consultation")} className="ghostBtn">
        Speak with Ruches
      </button>
    </div>
  </div>
</section>
      <section className="journey">
        <h2>The Partner Growth Journey</h2>
        <div className="steps">
          {["Learn", "Qualify", "Connect", "Convert"].map((step, i) => (
            <div className="step" key={step}>
              <div className="circle">{i + 1}</div>
              <h3>{step}</h3>
              <p>{["Access the right materials", "Identify the client pathway", "Move to WhatsApp conversation", "Guide them to the next action"][i]}</p>
            </div>
          ))}
        </div>
      </section>

      {showForm && (
        <div className="overlay">
          <form className="form" onSubmit={submitLead}>
            <h2>Secure Your Access</h2>
            <p>You selected: <b>{selectedDoc}</b></p>

            <input name="name" required placeholder="Full Name" />
            <input name="email" type="email" required placeholder="Email Address" />
            <input name="phone" required placeholder="WhatsApp Number" />

            <select name="interest">
              <option>Introducing Broker</option>
              <option>Fund Manager</option>
              <option>Copy Trading</option>
              <option>Trader Account</option>
            </select>

            <button type="submit" className="goldBtn full">
              Continue to WhatsApp
            </button>

            <button type="button" onClick={() => setShowForm(false)} className="cancel">
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
const css = `
* { box-sizing: border-box; }

body {
  margin: 0;
}

.page {
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(0, 102, 255, 0.35), transparent 35%),
    radial-gradient(circle at top right, rgba(245, 208, 111, 0.25), transparent 30%),
    #061a3d;
  color: white;
  font-family: 'Montserrat', sans-serif;
}

.brand {
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.subbrand {
  color: #f5d06f;
  font-size: 14px;
  margin-top: 4px;
}

.navBtn, .goldBtn {
  background: linear-gradient(135deg, #cfa73c, #f5d06f, #b88a20);
  color: #061a3d;
  border: none;
  padding: 14px 24px;
  border-radius: 999px;
  font-weight: 800;
  cursor: pointer;
  transition: 0.25s ease;
  box-shadow: 0 12px 30px rgba(245, 208, 111, 0.25);
}

.navBtn:hover, .goldBtn:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 18px 40px rgba(245, 208, 111, 0.35);
}

.hero {
  padding: 90px clamp(20px, 6vw, 100px) 70px;
}

.badge {
  display: inline-block;
  padding: 10px 18px;
  border: 1px solid rgba(245, 208, 111, 0.45);
  border-radius: 999px;
  color: #f5d06f;
  background: rgba(255,255,255,0.06);
  margin-bottom: 24px;
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 14px;
}

.hero h1 {
  font-size: clamp(44px, 7vw, 82px);
  line-height: 0.95;
  margin: 0 0 24px;
  letter-spacing: -1.8px;
  font-weight: 800;
}

.hero h1 span {
  color: #f5d06f;
  letter-spacing: -1px;
}

.hero p {
  font-size: 20px;
  line-height: 1.75;
  max-width: 760px;
  color: #dbeafe;
  font-weight: 400;
  letter-spacing: 0.2px;
}

.heroBtns {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 32px;
}

.ghostBtn {
  background: rgba(255,255,255,0.08);
  color: white;
  border: 1px solid rgba(255,255,255,0.25);
  padding: 14px 24px;
  border-radius: 999px;
  font-weight: 800;
  cursor: pointer;
  transition: 0.25s ease;
}

.ghostBtn:hover {
  background: rgba(255,255,255,0.15);
  transform: translateY(-3px);
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 18px;
  padding: 0 clamp(20px, 6vw, 100px) 60px;
}

.stats div {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(245, 208, 111, 0.25);
  border-radius: 22px;
  padding: 24px;
}

.stats strong {
  display: block;
  color: #f5d06f;
  font-size: 34px;
}

.stats span {
  font-family: 'Montserrat', Arial, sans-serif;
  color: #dbeafe;
}

.section, .journey {
  padding: 70px clamp(20px, 6vw, 100px);
}

.section h2, .journey h2 {
  font-size: 40px;
  margin-bottom: 12px;
  font-weight: 700;
  letter-spacing: -0.8px;
}

.sectionText {
  font-family: 'Montserrat', Arial, sans-serif;
  color: #dbeafe;
  max-width: 760px;
  line-height: 1.6;
}

.tabs {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin: 30px 0;
}

.tab {
  padding: 12px 18px;
  border-radius: 999px;
  border: 1px solid rgba(245, 208, 111, 0.25);
  background: rgba(255,255,255,0.06);
  color: white;
  cursor: pointer;
  font-weight: 700;
}

.tab.active {
  background: linear-gradient(135deg, #cfa73c, #f5d06f);
  color: #061a3d;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 22px;
}

.card {
  position: relative;
  overflow: hidden;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(245, 208, 111, 0.28);
  border-radius: 28px;
  padding: 28px;
  min-height: 240px;
  transition: 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
  border-color: #f5d06f;
}

.cardGlow {
  position: absolute;
  width: 140px;
  height: 140px;
  background: rgba(245, 208, 111, 0.18);
  border-radius: 50%;
  top: -50px;
  right: -50px;
}

.card h3 {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.4px;
}

.card p {
  position: relative;
  font-family: 'Montserrat', Arial, sans-serif;
  color: #dbeafe;
  line-height: 1.6;
}

.small {
  padding: 12px 18px;
}

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.step {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(245, 208, 111, 0.25);
  border-radius: 24px;
  padding: 26px;
}

.circle {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: linear-gradient(135deg, #cfa73c, #f5d06f);
  color: #061a3d;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
}

.step p {
  font-family: 'Montserrat', Arial, sans-serif;
  color: #dbeafe;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.78);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 99;
}

.form {
  width: 100%;
  max-width: 500px;
  background: #071a3a;
  border: 1px solid #f5d06f;
  border-radius: 28px;
  padding: 32px;
  box-shadow: 0 25px 70px rgba(0,0,0,0.45);
}

.form h2 {
  margin-top: 0;
  font-size: 32px;
}

.form p {
  color: #dbeafe;
  font-family: 'Montserrat', Arial, sans-serif;
}

.form input, .form select {
  width: 100%;
  padding: 15px;
  margin-top: 12px;
  border-radius: 14px;
  border: 1px solid rgba(245, 208, 111, 0.55);
  outline: none;
  font-size: 15px;
}

.full {
  width: 100%;
}

.cancel {
  width: 100%;
  margin-top: 12px;
  padding: 14px;
  border-radius: 14px;
  background: transparent;
  border: 1px solid white;
  color: white;
  cursor: pointer;
}

@media (max-width: 700px) {
  .nav {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .hero {
    padding-top: 60px;
  }
}
/* === LUXURY TYPOGRAPHY POLISH === */
h1, h2, h3 {
  text-rendering: optimizeLegibility;
  letter-spacing: -0.5px;
}

/* Improve ALL paragraph readability */
p {
  line-height: 1.75;
  letter-spacing: 0.2px;
}

/* Make buttons feel premium */
.goldBtn, .navBtn {
  letter-spacing: 0.6px;
  text-transform: uppercase;
}

/* Subtle text polish */
.subbrand {
  letter-spacing: 0.4px;
}
.hero h1 {
  letter-spacing: -2px;
}

button {
  transition: all 0.25s ease;
}
/* === PREMIUM ANIMATIONS + IB CONVERSION SECTION === */

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes goldPulse {
  0% {
    box-shadow: 0 0 0 rgba(245, 208, 111, 0);
  }
  50% {
    box-shadow: 0 0 35px rgba(245, 208, 111, 0.28);
  }
  100% {
    box-shadow: 0 0 0 rgba(245, 208, 111, 0);
  }
}

.hero,
.stats,
.section,
.journey,
.ibConversion {
  animation: fadeUp 0.8s ease both;
}

.card,
.step,
.stats div,
.ibCard {
  transition: all 0.3s ease;
}

.card:hover,
.step:hover,
.stats div:hover,
.ibCard:hover {
  transform: translateY(-8px);
  box-shadow: 0 22px 55px rgba(0, 0, 0, 0.28);
}

.goldBtn:hover,
.navBtn:hover {
  animation: goldPulse 1.4s ease infinite;
}

.ibConversion {
  padding: 70px clamp(20px, 6vw, 100px);
}

.ibBox {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 28px;
  align-items: center;
  padding: 38px;
  border: 1px solid rgba(245, 208, 111, 0.35);
  border-radius: 34px;
  background:
    radial-gradient(circle at top right, rgba(245, 208, 111, 0.18), transparent 35%),
    rgba(255, 255, 255, 0.07);
}

.ibBox h2 {
  font-size: clamp(34px, 5vw, 56px);
  line-height: 1.05;
  margin: 18px 0;
  font-weight: 800;
  letter-spacing: -1.5px;
}

.ibBox p {
  max-width: 720px;
  color: #dbeafe;
}

.ibPoints {
  display: grid;
  gap: 12px;
  margin: 26px 0;
  color: #f5d06f;
  font-weight: 700;
}

.ibCard {
  border-radius: 28px;
  padding: 28px;
  border: 1px solid rgba(245, 208, 111, 0.35);
  background: rgba(6, 26, 61, 0.76);
}

.ibCard h3 {
  font-size: 28px;
  margin-top: 0;
  color: #f5d06f;
}

.miniMetric {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 14px;
  padding: 16px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.08);
}

.miniMetric strong {
  color: #f5d06f;
  font-size: 24px;
}

.miniMetric span {
  color: #dbeafe;
  font-weight: 600;
}

@media (max-width: 800px) {
  .ibBox {
    grid-template-columns: 1fr;
    padding: 26px;
  }
}
/* === FINAL CTA SECTION === */
.finalCTA {
  padding: 80px clamp(20px, 6vw, 100px);
}

.ctaBox {
  text-align: center;
  padding: 60px 30px;
  border-radius: 30px;
  border: 1px solid rgba(245, 208, 111, 0.4);
  background:
    radial-gradient(circle at top, rgba(245, 208, 111, 0.15), transparent 40%),
    rgba(255,255,255,0.06);
}

.ctaBox h2 {
  font-size: clamp(32px, 5vw, 56px);
  margin-bottom: 20px;
  font-weight: 800;
}

.ctaBox p {
  max-width: 700px;
  margin: 0 auto;
  color: #dbeafe;
}

.ctaButtons {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}
      .ctaBox span {
  color: #f5d06f;
}

.ctaPoints {
  margin-top: 24px;
  display: grid;
  gap: 10px;
  color: #f5d06f;
  font-weight: 700;
}

/* === TRUST + AUTHORITY SECTION === */

.authority {
  padding: 80px clamp(20px, 6vw, 100px);
}

.authorityBox {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 28px;
  align-items: center;
}

.authorityLeft h2 {
  font-size: clamp(34px, 5vw, 56px);
  line-height: 1.05;
  margin: 18px 0;
  font-weight: 800;
}

.authorityLeft span {
  color: #f5d06f;
}

.authorityLeft p {
  max-width: 720px;
  color: #dbeafe;
}

.authorityPoints {
  margin-top: 24px;
  display: grid;
  gap: 10px;
  color: #f5d06f;
  font-weight: 700;
}

.authorityRight {
  display: flex;
  justify-content: center;
}

.authorityCard {
  width: 100%;
  max-width: 380px;
  border-radius: 28px;
  padding: 28px;
  border: 1px solid rgba(245, 208, 111, 0.35);
  background: rgba(6, 26, 61, 0.76);
}

.authorityCard h3 {
  font-size: 26px;
  margin-top: 0;
  color: #f5d06f;
}

@media (max-width: 800px) {
  .authorityBox {
    grid-template-columns: 1fr;
  }
}
/* === $10K FINTECH POLISH === */

.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(6, 26, 61, 0.72);
  backdrop-filter: blur(18px);
}

.page::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 20% 10%, rgba(245, 208, 111, 0.10), transparent 25%),
    radial-gradient(circle at 80% 30%, rgba(0, 102, 255, 0.16), transparent 28%);
  z-index: 0;
}

.page > * {
  position: relative;
  z-index: 1;
}

.hero {
  min-height: 72vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card,
.step,
.ibBox,
.authorityBox,
.ctaBox,
.stats div {
  box-shadow:
    0 20px 70px rgba(0,0,0,0.28),
    inset 0 1px 0 rgba(255,255,255,0.08);
}

.card::after,
.ibBox::after,
.authorityCard::after,
.ctaBox::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background: linear-gradient(135deg, rgba(255,255,255,0.12), transparent 35%);
}

.card,
.ibBox,
.authorityCard,
.ctaBox {
  position: relative;
  overflow: hidden;
}

.goldBtn {
  background-size: 200% 200%;
  animation: goldShimmer 5s ease infinite;
}

@keyframes goldShimmer {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.badge {
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.12);
}

.form {
  backdrop-filter: blur(20px);
}

input,
select {
  font-family: 'Montserrat', sans-serif;
}

input:focus,
select:focus {
  border-color: #f5d06f;
  box-shadow: 0 0 0 4px rgba(245, 208, 111, 0.16);
}
`;
