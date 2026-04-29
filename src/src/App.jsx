import React, { useState } from "react";

export default function App() {
  const [showForm, setShowForm] = useState(false);

  const whatsappNumber = "639000000000"; // replace with your number

  const submitLead = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const interest = e.target.interest.value;

    const message = `Hi Ruches, I accessed your Knowledge Hub.%0A%0AName: ${name}%0AEmail: ${email}%0AWhatsApp: ${phone}%0AInterest: ${interest}%0A%0AI want to learn more.`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    setShowForm(false);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#061a4d", color: "white", fontFamily: "Arial, sans-serif" }}>
      <section style={{ padding: "60px 24px", background: "linear-gradient(135deg,#061a4d,#0b3fa5,#d4af37)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h1 style={{ fontSize: 48, marginBottom: 20 }}>
            Ruches Partner Knowledge Hub
          </h1>
          <p style={{ fontSize: 20, maxWidth: 700 }}>
            A professional resource center for Introducing Brokers, Fund Managers, Copy Trading clients, and serious traders.
          </p>

          <button
            onClick={() => setShowForm(true)}
            style={{
              marginTop: 30,
              padding: "16px 28px",
              background: "#d4af37",
              color: "#061a4d",
              border: "none",
              borderRadius: 14,
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Get Access to Documents
          </button>
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "50px 24px" }}>
        <h2 style={{ fontSize: 34 }}>Main Resource Hubs</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20, marginTop: 30 }}>
          {["Introducing Broker Hub", "Fund Manager Hub", "Trader Client Hub", "Copy Trading Hub"].map((title) => (
            <div key={title} style={{ background: "rgba(255,255,255,0.1)", padding: 24, borderRadius: 20 }}>
              <h3>{title}</h3>
              <p style={{ color: "#dbeafe" }}>
                Access guides, checklists, onboarding materials, and next-step support.
              </p>
              <button
                onClick={() => setShowForm(true)}
                style={{
                  marginTop: 15,
                  padding: "12px 18px",
                  background: "#d4af37",
                  color: "#061a4d",
                  border: "none",
                  borderRadius: 12,
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
              >
                Get Access
              </button>
            </div>
          ))}
        </div>
      </section>

      {showForm && (
        <div style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.75)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 20
        }}>
          <form
            onSubmit={submitLead}
            style={{
              background: "#061a4d",
              padding: 30,
              borderRadius: 24,
              width: "100%",
              maxWidth: 480,
              border: "1px solid #d4af37"
            }}
          >
            <h2>Get Access</h2>
            <p style={{ color: "#dbeafe" }}>
              Enter your details and Ruches will guide you personally.
            </p>

            <input name="name" required placeholder="Full name" style={inputStyle} />
            <input name="email" required placeholder="Email address" type="email" style={inputStyle} />
            <input name="phone" required placeholder="WhatsApp number" style={inputStyle} />

            <select name="interest" style={inputStyle}>
              <option>Introducing Broker</option>
              <option>Fund Manager</option>
              <option>Copy Trading</option>
              <option>Trader Account</option>
            </select>

            <button type="submit" style={buttonStyle}>
              Continue to WhatsApp
            </button>

            <button
              type="button"
              onClick={() => setShowForm(false)}
              style={{ ...buttonStyle, background: "transparent", color: "white", border: "1px solid white" }}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: 14,
  marginTop: 12,
  borderRadius: 12,
  border: "1px solid #d4af37",
  background: "white",
  color: "#061a4d",
  boxSizing: "border-box"
};

const buttonStyle = {
  width: "100%",
  marginTop: 14,
  padding: 14,
  borderRadius: 12,
  border: "none",
  background: "#d4af37",
  color: "#061a4d",
  fontWeight: "bold",
  cursor: "pointer"
};
