import React, { useState } from "react";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState("");

  const whatsappNumber = "639000000000"; // CHANGE THIS to your real WhatsApp number

  const documents = [
    "IB Partner Starter Guide",
    "Fund Manager Roadmap",
    "Risk Management Framework",
    "Copy Trading Explained",
    "Account Opening & Funding Guide"
  ];

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

    const message = `Hi Ruches, I accessed your Knowledge Hub.%0A%0AName: ${name}%0AEmail: ${email}%0AWhatsApp: ${phone}%0AInterest: ${interest}%0ARequested Document: ${selectedDoc}%0A%0AI would like to learn more.`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    setShowForm(false);
  }

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <h1 style={styles.title}>Ruches Partner Knowledge Hub</h1>
        <p style={styles.subtitle}>
          A premium blue-and-gold resource center for Introducing Brokers, Fund Managers, Copy Trading clients, and serious traders.
        </p>
        <button style={styles.goldButton} onClick={() => openForm("Partner Knowledge Hub Access")}>
          Get Access to Partner System
        </button>
      </section>

      <section style={styles.section}>
        <h2>Choose Your Resource</h2>

        <div style={styles.grid}>
          {documents.map((doc) => (
            <div style={styles.card} key={doc}>
              <h3>{doc}</h3>
              <p>Access this guide and receive direct next-step support from Ruches.</p>
              <button style={styles.goldButtonSmall} onClick={() => openForm(doc)}>
                Get Access
              </button>
            </div>
          ))}
        </div>
      </section>

      {showForm && (
        <div style={styles.overlay}>
          <form style={styles.form} onSubmit={submitLead}>
            <h2>Get Access</h2>
            <p>You requested: <strong>{selectedDoc}</strong></p>

            <input name="name" required placeholder="Full name" style={styles.input} />
            <input name="email" type="email" required placeholder="Email address" style={styles.input} />
            <input name="phone" required placeholder="WhatsApp number" style={styles.input} />

            <select name="interest" style={styles.input}>
              <option>Introducing Broker</option>
              <option>Fund Manager</option>
              <option>Copy Trading</option>
              <option>Trader Account</option>
            </select>

            <button type="submit" style={styles.goldButton}>
              Continue to WhatsApp
            </button>

            <button type="button" style={styles.cancelButton} onClick={() => setShowForm(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#061a4d",
    color: "white",
    fontFamily: "Arial, sans-serif"
  },
  hero: {
    padding: "70px 30px",
    background: "linear-gradient(135deg, #061a4d, #0b3fa5, #d4af37)"
  },
  title: {
    fontSize: "48px",
    marginBottom: "20px"
  },
  subtitle: {
    fontSize: "20px",
    maxWidth: "750px",
    lineHeight: "1.6"
  },
  section: {
    padding: "50px 30px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px",
    marginTop: "30px"
  },
  card: {
    background: "rgba(255,255,255,0.1)",
    padding: "25px",
    borderRadius: "20px",
    border: "1px solid rgba(212,175,55,0.4)"
  },
  goldButton: {
    background: "#d4af37",
    color: "#061a4d",
    padding: "15px 24px",
    border: "none",
    borderRadius: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "20px"
  },
  goldButtonSmall: {
    background: "#d4af37",
    color: "#061a4d",
    padding: "12px 18px",
    border: "none",
    borderRadius: "12px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "15px"
  },
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.75)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px"
  },
  form: {
    background: "#061a4d",
    padding: "30px",
    borderRadius: "24px",
    width: "100%",
    maxWidth: "480px",
    border: "1px solid #d4af37"
  },
  input: {
    width: "100%",
    padding: "14px",
    marginTop: "12px",
    borderRadius: "12px",
    border: "1px solid #d4af37",
    boxSizing: "border-box"
  },
  cancelButton: {
    width: "100%",
    marginTop: "12px",
    padding: "14px",
    borderRadius: "12px",
    background: "transparent",
    color: "white",
    border: "1px solid white",
    cursor: "pointer"
  }
};
