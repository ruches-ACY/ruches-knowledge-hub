import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { Search, Users, Briefcase, TrendingUp, FileText, Download, Calendar, ShieldCheck, ArrowRight, Star, BookOpen, BarChart3, MessageCircle, Globe2, CheckCircle2 } from "lucide-react";
import "./style.css";

const resources = [
  { category: "Introducing Broker", title: "IB Partner Starter Guide", description: "A roadmap explaining how Introducing Brokers can build a client network and earn from trading volume.", type: "Guide", level: "Beginner", icon: Users },
  { category: "Introducing Broker", title: "IB Client Onboarding Checklist", description: "Step-by-step checklist for helping referred clients open, verify, fund, and start trading confidently.", type: "Checklist", level: "Practical", icon: CheckCircle2 },
  { category: "Fund Manager", title: "Forex Fund Manager Roadmap", description: "A professional guide for traders who want to move from personal trading into managing investor capital.", type: "Guide", level: "Advanced", icon: Briefcase },
  { category: "Fund Manager", title: "Risk Management Framework", description: "Core principles for drawdown control, allocation limits, reporting, and disciplined decision-making.", type: "Framework", level: "Professional", icon: ShieldCheck },
  { category: "Trader Resources", title: "Account Opening & Funding Guide", description: "A clear guide to help clients complete registration, verification, funding, and platform access.", type: "Guide", level: "Beginner", icon: FileText },
  { category: "Copy Trading", title: "Copy Trading Explained", description: "A client-friendly explanation of copy trading, signal providers, follower benefits, and risk reminders.", type: "Explainer", level: "Beginner", icon: TrendingUp }
];

const hubSections = [
  { title: "Introducing Broker Hub", description: "Help partners understand how to build a trader network, onboard clients, and grow recurring commission potential.", icon: Users, items: ["IB starter guide", "Client onboarding checklist", "Marketing scripts", "Partner FAQ"] },
  { title: "Fund Manager Hub", description: "Give serious traders the documents, frameworks, and education needed to think and operate professionally.", icon: Briefcase, items: ["Fund manager roadmap", "Risk framework", "Investor communication", "Performance tracking"] },
  { title: "Trader Client Hub", description: "Make it easier for clients to open accounts, fund, use platforms, and trade responsibly.", icon: BarChart3, items: ["Account setup", "Deposit guide", "MT4/MT5 support", "Trading basics"] },
  { title: "Copy Trading Hub", description: "Educate traders on copy trading, signal provider opportunities, follower expectations, and risk awareness.", icon: TrendingUp, items: ["Copy trading overview", "Signal provider guide", "Follower education", "Risk disclaimer"] }
];

const categories = ["All", "Introducing Broker", "Fund Manager", "Trader Resources", "Copy Trading"];

function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filteredResources = resources.filter((resource) => {
    const matchesCategory = category === "All" || resource.category === category;
    const matchesSearch = `${resource.title} ${resource.description} ${resource.category}`.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main>
      <section className="hero">
        <div className="container">
          <nav className="nav">
            <div className="brand">
              <div className="brandIcon"><Globe2 size={24} /></div>
              <div><p>Knowledge Hub</p><h1>Ruches Partner Resource Center</h1></div>
            </div>
            <div className="links"><a href="#hubs">Hubs</a><a href="#downloads">Downloads</a><a href="#roadmap">Roadmap</a><a href="#call">Book a Call</a></div>
          </nav>
          <div className="heroGrid">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="pill"><Star size={16}/> Built for IBs, Fund Managers & Serious Traders</div>
              <h2>Everything your clients and partners need — organized in one professional hub.</h2>
              <p className="heroText">A polished resource center for onboarding traders, educating Introducing Brokers, supporting Fund Managers, explaining copy trading, and giving clients fast access to the documents they need.</p>
              <div className="heroButtons"><a className="btn primary" href="#downloads">Explore Resources <ArrowRight size={18}/></a><a className="btn secondary" href="#call">Book Strategy Call</a></div>
              <p className="risk">Educational content only. Trading involves risk. Clients should read all terms, conditions, and risk disclosures before participating.</p>
            </motion.div>
            <motion.div className="overviewCard" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <div className="overviewInner"><div className="overviewHead"><div><p>Hub Overview</p><h3>Resource Library</h3></div><BookOpen color="#7dd3fc" size={34}/></div>
              {hubSections.map((section) => { const Icon = section.icon; return <div className="overviewItem" key={section.title}><div className="miniIcon"><Icon size={21}/></div><div><h4>{section.title}</h4><p>{section.items.length} key resource groups</p></div></div>; })}</div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="hubs" className="section container"><div className="sectionHead"><p>Main Hubs</p><h2>Organized by client journey</h2><span>Each hub is designed to answer common client questions before they ask — saving time and creating a more premium client experience.</span></div><div className="hubGrid">{hubSections.map((section) => { const Icon = section.icon; return <article className="card" key={section.title}><div className="bigIcon"><Icon size={28}/></div><h3>{section.title}</h3><p>{section.description}</p><div className="tags">{section.items.map(item => <span key={item}>{item}</span>)}</div></article>; })}</div></section>

      <section id="downloads" className="downloadSection"><div className="container"><div className="downloadTop"><div className="sectionHead"><p>Download Center</p><h2>Searchable document library</h2><span>Use this area for PDFs, checklists, onboarding guides, scripts, explainer documents, and campaign materials.</span></div><div className="searchBox"><Search size={20}/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search resources..." /></div></div><div className="categoryRow">{categories.map(cat => <button key={cat} onClick={() => setCategory(cat)} className={category === cat ? "active" : ""}>{cat}</button>)}</div><div className="resourceGrid">{filteredResources.map((resource) => { const Icon = resource.icon; return <article className="resourceCard" key={resource.title}><div className="resourceTop"><div className="bigIcon"><Icon size={25}/></div><span>{resource.type}</span></div><small>{resource.category}</small><h3>{resource.title}</h3><p>{resource.description}</p><div className="resourceFoot"><em>{resource.level}</em><a href="#"> <Download size={16}/> View</a></div></article>; })}</div></div></section>

      <section id="roadmap" className="section container"><div className="sectionHead"><p>Build Roadmap</p><h2>Launch it in four phases</h2></div><div className="phaseGrid">{[["Phase 1", "Core Website", "Home, Start Here, IB Hub, Fund Manager Hub, Download Center."], ["Phase 2", "Resource Expansion", "Add trader education, copy trading, FAQs, and platform guides."], ["Phase 3", "Lead Capture", "Add forms, email automation, booking links, and segmented follow-ups."], ["Phase 4", "Partner Portal", "Create gated content for serious IBs, signal providers, and fund managers."]].map(([phase, title, desc]) => <article className="phaseCard" key={phase}><p>{phase}</p><h3>{title}</h3><span>{desc}</span></article>)}</div></section>

      <section id="call" className="container callWrap"><div className="callBox"><div><p className="label">Client Action</p><h2>Ready to grow as an IB, Fund Manager, or serious trader?</h2><span>Book a strategy call and get guided on the next step — whether that is opening an account, becoming an Introducing Broker, exploring copy trading, or building a fund manager pathway.</span></div><div className="callCard"><div className="whiteIcon"><Calendar size={24}/></div><h3>Book a Strategy Call</h3><p>Replace this button with your Calendly, WhatsApp, or landing page link.</p><a className="btn primary" href="https://tinyurl.com/LIVE-ACCOUNT" target="_blank" rel="noreferrer"><MessageCircle size={18}/> Contact Ruches</a></div></div></section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
