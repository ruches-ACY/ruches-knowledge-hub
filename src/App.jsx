import React, { useState } from "react";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState("");

  const whatsappNumber = "639000000000"; // CHANGE THIS

  const documents = [
    "IB Partner Starter Guide",
    "Fund Manager Roadmap",
    "Risk Management Framework",
    "Copy Trading Explained",
    "Account Opening Guide"
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

    const message = `Hi Ruches, I accessed your Knowledge Hub.%0A%0AName: ${name}%0AEmail: ${email}%0AWhatsApp: ${phone}%0AInterest: ${interest}%0ARequested Document: ${selectedDoc}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    setShowForm(false);
  }

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <h1 style={styles.title}>ACY Partner Knowledge Hub</h1>
        <p style={styles.subtitle}>
          A premium resource center for Introducing Brokers, Fund Managers, and serious traders looking to scale their trading business.
        </p>

        <button style={styles.goldButton} onClick={() => openForm("Full Access")}>
          Get Access to Partner System
        </button>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Choose Your Resource</h2>

        <div style={styles.grid}>
          {documents.map((doc) => (
            <div style={styles.card} key={doc}>
              <h3 style={{ marginBottom: 10 }}>{doc}</h3>
              <p style={{ opacity: 0.8 }}>
                Access this guide and receive direct guidance tailored to your next step.
              </p>

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
            <h2>Secure Your Access</h2>
            <p>You selected: <b>{selectedDoc}</b></p>

            <input name="name" required placeholder="Full Name" style={styles.input} />
            <input name="email" required placeholder="Email" style={styles.input} />
            <input name="phone" required placeholder="WhatsApp Number" style={styles.input} />

            <select name="interest" style={styles.input}>
              <option>Introducing Broker</option>
              <option>Fund Manager</option>
              <option>Copy Trading</option>
              <option>Trader Account</option>
            </select>

            <button type="submit" style={styles.goldButton}>
              Continue to WhatsApp
            </button>

            <button
              type="button"
              onClick={() => setShowForm(false)}
              style={styles.cancel}
            >
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
    background: "#071a3a", // deep navy
    color: "white",
    fontFamily: "Arial"
  },

  hero: {
    padding: "80px 30px",
    background: "linear-gradient(135deg, #071a3a, #0d2c73, #cfa73c)", // ACY feel
  },

  title: {
    fontSize: "50px",
    marginBottom: 20,
    fontWeight: "bold"
  },

  subtitle: {
    fontSize: "20px",
    maxWidth: "750px",
    lineHeight: 1.6,
    opacity: 0.9
  },

  section: {
    padding: "60px 30px"
  },

  sectionTitle: {
    fontSize: "32px",
    marginBottom: 20
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 20
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    padding: 25,
    borderRadius: 18,
    border: "1px solid rgba(207,167,60,0.4)"
  },

  goldButton: {
    background: "linear-gradient(90deg, #cfa73c, #f5d06f)", // vibrant gold
    color: "#071a3a",
    padding: "15px 25px",
    border: "none",
    borderRadius: 12,
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: 20
  },

  goldButtonSmall: {
    background: "linear-gradient(90deg, #cfa73c, #f5d06f)",
    color: "#071a3a",
    padding: "10px 16px",
    border: "none",
    borderRadius: 10,
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: 15
  },

  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.75)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  form: {
    background: "#071a3a",
    padding: 30,
    borderRadius: 20,
    width: "100%",
    maxWidth: 450,
    border: "1px solid #cfa73c"
  },

  input: {
    width: "100%",
    padding: 14,
    marginTop: 12,
    borderRadius: 10,
    border: "1px solid #cfa73c"
  },

  cancel: {
    marginTop: 12,
    width: "100%",
    padding: 12,
    borderRadius: 10,
    border: "1px solid white",
    background: "transparent",
    color: "white",
    cursor: "pointer"
  }
};
