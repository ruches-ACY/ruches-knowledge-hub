
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Users, Briefcase, TrendingUp, FileText, Download, Calendar, ShieldCheck, ArrowRight, Star, BookOpen, BarChart3, MessageCircle, Globe2, CheckCircle2, Crown, Sparkles, Target, WalletCards } from "lucide-react";

const documents = [
  {
    category: "Introducing Broker",
    title: "IB Partner Starter Guide",
    description: "Learn how Introducing Brokers can build a trader network, support clients, and earn from trading volume.",
    type: "PDF Guide",
    level: "Beginner",
    file: "/documents/ib-partner-starter-guide.pdf",
    icon: Users,
  },
  {
    category: "Introducing Broker",
    title: "IB Client Onboarding Checklist",
    description: "A practical checklist to help referred clients open, verify, fund, and start trading confidently.",
    type: "Checklist",
    level: "Practical",
    file: "/documents/ib-client-onboarding-checklist.pdf",
    icon: CheckCircle2,
  },
  {
    category: "Fund Manager",
    title: "Forex Fund Manager Roadmap",
    description: "A professional guide for traders who want to move from personal trading into managing investor capital.",
    type: "PDF Guide",
    level: "Advanced",
    file: "/documents/fund-manager-roadmap.pdf",
    icon: Briefcase,
  },
  {
    category: "Fund Manager",
    title: "Risk Management Framework",
    description: "Core principles for drawdown control, allocation limits, reporting, and disciplined decision-making.",
    type: "Framework",
    level: "Professional",
    file: "/documents/risk-management-framework.pdf",
    icon: ShieldCheck,
  },
  {
    category: "Trader Resources",
    title: "Account Opening & Funding Guide",
    description: "A clear guide to help clients complete registration, verification, funding, and platform access.",
    type: "Guide",
    level: "Beginner",
    file: "/documents/account-opening-funding-guide.pdf",
    icon: FileText,
  },
  {
    category: "Copy Trading",
    title: "Copy Trading Explained",
    description: "A client-friendly explanation of copy trading, signal providers, follower benefits, and risk reminders.",
    type: "Explainer",
    level: "Beginner",
    file: "/documents/copy-trading-explained.pdf",
    icon: TrendingUp,
  },
];

const hubs = [
  {
    title: "Introducing Broker Hub",
    description: "Help partners understand how to build a trader network, onboard clients, and grow recurring commission potential.",
    icon: Users,
    accent: "from-blue-500 to-cyan-300",
    items: ["IB starter guide", "Client onboarding checklist", "Marketing scripts", "Partner FAQ"],
  },
  {
    title: "Fund Manager Hub",
    description: "Give serious traders the documents, frameworks, and education needed to think and operate professionally.",
    icon: Crown,
    accent: "from-yellow-400 to-amber-500",
    items: ["Fund manager roadmap", "Risk framework", "Investor communication", "Performance tracking"],
  },
  {
    title: "Trader Client Hub",
    description: "Make it easier for clients to open accounts, fund, use platforms, and trade with stronger structure.",
    icon: BarChart3,
    accent: "from-sky-400 to-blue-600",
    items: ["Account setup", "Deposit guide", "MT4/MT5 support", "Trading basics"],
  },
  {
    title: "Copy Trading Hub",
    description: "Educate traders on copy trading, signal provider opportunities, follower expectations, and risk awareness.",
    icon: TrendingUp,
    accent: "from-amber-300 to-yellow-500",
    items: ["Copy trading overview", "Signal provider guide", "Follower education", "Risk disclaimer"],
  },
];

const categories = ["All", "Introducing Broker", "Fund Manager", "Trader Resources", "Copy Trading"];

function Button({ children, className = "", href, onClick, type = "button" }) {
  const base = "inline-flex items-center justify-center rounded-2xl px-6 py-4 text-sm font-bold transition shadow-lg";
  const classes = `${base} ${className}`;
  if (href) {
    return <a href={href} target="_blank" rel="noreferrer" className={classes}>{children}</a>;
  }
  return <button type={type} onClick={onClick} className={classes}>{children}</button>;
}

function Card({ children, className = "" }) {
  return <div className={`rounded-3xl border border-white/10 bg-white/10 shadow-xl backdrop-blur ${className}`}>{children}</div>;
}

export default function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [lead, setLead] = useState({ name: "", email: "", whatsapp: "", interest: "Introducing Broker" });

  const yourWhatsAppNumber = "639000000000"; // Replace with your real WhatsApp number, no + sign

  const filteredDocs = documents.filter((doc) => {
    const matchCategory = category === "All" || doc.category === category;
    const matchSearch = `${doc.title} ${doc.description} ${doc.category}`.toLowerCase().includes(query.toLowerCase());
    return matchCategory && matchSearch;
  });

  const openLeadForm = (doc) => {
    setSelectedDoc(doc);
    setLead((prev) => ({ ...prev, interest: doc.category }));
  };

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    if (!lead.name || !lead.email || !lead.whatsapp || !selectedDoc) return;

    const message = `Hi Ruches, I just accessed your Partner Knowledge Hub.%0A%0AName: ${encodeURIComponent(lead.name)}%0AEmail: ${encodeURIComponent(lead.email)}%0AWhatsApp: ${encodeURIComponent(lead.whatsapp)}%0AInterest: ${encodeURIComponent(lead.interest)}%0ARequested document: ${encodeURIComponent(selectedDoc.title)}%0A%0AI would like to learn more about the next step.`;

    window.open(selectedDoc.file, "_blank");
    window.open(`https://wa.me/${yourWhatsAppNumber}?text=${message}`, "_blank");
    setSelectedDoc(null);
  };

  return (
    <main className="min-h-screen bg-[#03112f] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(59,130,246,0.55),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(250,204,21,0.4),transparent_25%),linear-gradient(135deg,#04133a,#08266f_45%,#0b1b3f)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:42px_42px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-8">
          <nav className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-300 to-amber-500 text-blue-950 shadow-xl">
                <Globe2 className="h-7 w-7" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-yellow-200">Partner Knowledge Hub</p>
                <h1 className="text-xl font-black">Ruches Lingad</h1>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm font-semibold text-blue-100">
              <a href="#hubs" className="hover:text-yellow-200">Hubs</a>
              <a href="#documents" className="hover:text-yellow-200">Documents</a>
              <a href="#funnel" className="hover:text-yellow-200">Partner Path</a>
              <a href="#contact" className="hover:text-yellow-200">Contact</a>
            </div>
          </nav>

          <div className="grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300/40 bg-yellow-300/15 px-4 py-2 text-sm font-bold text-yellow-100">
                <Sparkles className="h-4 w-4" /> For IBs, Fund Managers & Serious Traders
              </div>
              <h2 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
                Build your trading business with the right documents, guidance, and partner roadmap.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
                A vibrant client resource center for onboarding traders, educating Introducing Brokers, supporting Fund Managers, explaining copy trading, and helping serious clients take the next step.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#documents" className="bg-gradient-to-r from-yellow-300 to-amber-500 text-blue-950 hover:scale-[1.02]">
                  Access Documents <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button href="https://wa.me/639627969908" className="border border-white/20 bg-white/10 text-white hover:bg-white/20">
                  <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Ruches
                </Button>
              </div>
              <p className="mt-5 text-sm text-blue-200">
                Replace the WhatsApp number with your real number. Educational content only. Trading involves risk.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <Card className="p-6">
                <div className="rounded-[1.5rem] bg-blue-950/80 p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-yellow-200">Your Funnel</p>
                      <h3 className="text-2xl font-black">Trader → IB → Fund Manager</h3>
                    </div>
                    <Target className="h-9 w-9 text-yellow-300" />
                  </div>
                  <div className="space-y-4">
                    {["Learn the ecosystem", "Access partner documents", "Book a strategy call", "Start the right pathway"].map((item, index) => (
                      <div key={item} className="flex items-center gap-4 rounded-2xl bg-white/10 p-4">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 to-amber-500 font-black text-blue-950">{index + 1}</div>
                        <p className="font-semibold text-blue-50">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="hubs" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-300">Main Hubs</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">Organized by client opportunity</h2>
          <p className="mt-4 text-blue-100">Each hub answers the most common client questions and positions you as a strategic growth partner.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {hubs.map((hub) => {
            const Icon = hub.icon;
            return (
              <Card key={hub.title} className="p-7 transition hover:-translate-y-1 hover:bg-white/15">
                <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${hub.accent} text-blue-950 shadow-lg`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black">{hub.title}</h3>
                <p className="mt-3 leading-7 text-blue-100">{hub.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {hub.items.map((item) => <span key={item} className="rounded-full bg-blue-900/70 px-3 py-1 text-sm text-yellow-100">{item}</span>)}
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      <section id="documents" className="bg-blue-950/60 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-300">Download Center</p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">Client document library</h2>
              <p className="mt-4 max-w-2xl text-blue-100">Upload your PDFs into the public/documents folder, then connect each file link below.</p>
            </div>
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-200" />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search documents..." className="w-full rounded-2xl border border-yellow-300/20 bg-blue-950 px-12 py-4 text-white outline-none ring-yellow-300/30 focus:ring-4" />
            </div>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setCategory(cat)} className={`rounded-full px-4 py-2 text-sm font-bold transition ${category === cat ? "bg-gradient-to-r from-yellow-300 to-amber-500 text-blue-950" : "bg-white/10 text-blue-100 hover:bg-white/20"}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredDocs.map((doc) => {
              const Icon = doc.icon;
              return (
                <Card key={doc.title} className="p-6 transition hover:-translate-y-1 hover:bg-white/15">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-300 text-blue-950">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-yellow-300/20 px-3 py-1 text-xs font-bold text-yellow-100">{doc.type}</span>
                  </div>
                  <p className="text-sm font-bold text-yellow-300">{doc.category}</p>
                  <h3 className="mt-2 text-xl font-black">{doc.title}</h3>
                  <p className="mt-3 min-h-24 text-sm leading-6 text-blue-100">{doc.description}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm text-blue-200">{doc.level}</span>
                    <Button onClick={() => openLeadForm(doc)} className="bg-gradient-to-r from-yellow-300 to-amber-500 px-4 py-3 text-blue-950">
                      <Download className="mr-2 h-4 w-4" /> Get Access
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="funnel" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            [WalletCards, "For Traders", "Open the right account, understand platforms, learn risk control, and explore copy trading."],
            [Users, "For IBs", "Build a trader network, support referrals, and grow through volume-based partner opportunities."],
            [Crown, "For Fund Managers", "Structure risk, communicate professionally, and explore a more scalable trading model."],
          ].map(([Icon, title, text]) => (
            <Card key={title} className="p-7">
              <Icon className="h-10 w-10 text-yellow-300" />
              <h3 className="mt-5 text-2xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-blue-100">{text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[2rem] border border-yellow-300/20 bg-gradient-to-br from-blue-600 to-blue-950 p-8 shadow-2xl md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-200">Next Step</p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">Want to become an IB, Fund Manager, or serious trading partner?</h2>
              <p className="mt-5 max-w-2xl text-blue-100">Book a strategy conversation and get guided on the best next step based on your experience, goals, and current trading network.</p>
            </div>
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-300 to-amber-500 text-blue-950">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-black">Contact Ruches</h3>
              <p className="mt-3 text-sm leading-6 text-blue-100">Replace this with your real WhatsApp, Calendly, or account-opening link.</p>
              <Button href="https://wa.me/639627969908" className="mt-6 w-full bg-gradient-to-r from-yellow-300 to-amber-500 text-blue-950">
                <MessageCircle className="mr-2 h-5 w-5" /> Start on WhatsApp
              </Button>
            </Card>
          </div>
        </div>
      </section>
      {selectedDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
          <div className="w-full max-w-xl rounded-[2rem] border border-yellow-300/30 bg-blue-950 p-6 shadow-2xl">
            <div className="mb-5">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">Before You Download</p>
              <h3 className="mt-2 text-2xl font-black text-white">Get access to {selectedDoc.title}</h3>
              <p className="mt-2 text-sm leading-6 text-blue-100">
                Fill this in so Ruches can send the right guidance for your IB, Fund Manager, or trading journey.
              </p>
            </div>

            <form onSubmit={handleLeadSubmit} className="space-y-4">
              <input
                required
                value={lead.name}
                onChange={(e) => setLead({ ...lead, name: e.target.value })}
                placeholder="Full name"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-blue-200 focus:ring-4 focus:ring-yellow-300/30"
              />
              <input
                required
                type="email"
                value={lead.email}
                onChange={(e) => setLead({ ...lead, email: e.target.value })}
                placeholder="Email address"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-blue-200 focus:ring-4 focus:ring-yellow-300/30"
              />
              <input
                required
                value={lead.whatsapp}
                onChange={(e) => setLead({ ...lead, whatsapp: e.target.value })}
                placeholder="WhatsApp number"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-blue-200 focus:ring-4 focus:ring-yellow-300/30"
              />
              <select
                value={lead.interest}
                onChange={(e) => setLead({ ...lead, interest: e.target.value })}
                className="w-full rounded-2xl border border-white/10 bg-blue-900 px-4 py-3 text-white outline-none focus:ring-4 focus:ring-yellow-300/30"
              >
                <option>Introducing Broker</option>
                <option>Fund Manager</option>
                <option>Copy Trading</option>
                <option>Trader Account</option>
              </select>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Button type="submit" className="flex-1 bg-gradient-to-r from-yellow-300 to-amber-500 text-blue-950">
                  Download + WhatsApp Ruches
                </Button>
                <Button onClick={() => setSelectedDoc(null)} className="border border-white/20 bg-white/10 text-white hover:bg-white/20">
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

