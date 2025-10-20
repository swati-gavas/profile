import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

const GALLERY_ITEMS = [
  { id: 1, title: "Observatory Night", desc: "A short description about the observatory image or outreach event.", src: null },
  { id: 2, title: "Simulation Render", desc: "Visualization from a simulation showing halo formation and filamentary structure.", src: null },
  { id: 3, title: "Conference Photo", desc: "Photo from a recent conference or seminar highlighting outreach.", src: null },
  { id: 4, title: "Field Work", desc: "Image related to field work, outreach, or educational activity.", src: null }
];

export default function PersonalWebsite() {
  const [activeSection, setActiveSection] = useState("about");
  const [activeSubtab, setActiveSubtab] = useState("intro");
  const [visitorCount] = useState(1247);

  const researchTabs = {
    intro: {
      title: "Intro",
      body:
        "My research focuses on understanding how non-linear gravitational clustering drives the formation and evolution of large-scale structures in the Universe. I use N-body simulations and analytical models to study halo mass functions, peculiar velocities, and large-scale flows, connecting them to galaxy clustering and cosmological parameter estimation."
    },
    halo: {
      title: "Halo Shapes & Abundance",
      body:
        "The Halo Mass Function (HMF) is a cornerstone of cosmology, describing the distribution of dark matter halos by mass. My work refines HMF models under scale-invariant cosmologies, identifying non-universal corrections and testing them with high-resolution simulations to improve predictions for future surveys like Euclid and LSST."
    },
    hubble: {
      title: "Hubble Tension",
      body:
        "Peculiar velocities arising from gravitational clustering introduce biases in local Hubble parameter estimates. I quantify how cosmic variance and velocity flows contribute to the observed Hubble tension, emphasizing the statistical importance of sampling large volumes for robust cosmological inference."
    },
    numerical: {
      title: "Numerical Artefacts",
      body:
        "Numerical artefacts in N-body simulations — such as discreteness noise, force softening effects, and time-stepping errors — can create transient non-physical features. I identify their origins, quantify their impact on halo statistics, and propose diagnostics to mitigate them."
    },
    thermo: {
      title: "Cosmo-Thermo",
      body:
        "I explore analogies between cosmological structure growth and thermodynamic systems, examining entropy production, energy partitioning, and coarse-grained thermodynamic descriptors for large-scale structure formation. This provides an alternative viewpoint on late-time cosmic evolution."
    }
  };

  return (
    <div className="app">
      {/* Header */}
      <header>
        <a href="#hero" className="logo">
          <img src="/logo.png" alt="Swati Gavas" className="logo-img" />
          <span>Swati Gavas</span>
        </a>
        <nav className="nav-links">
          <NavLink section="about" setActiveSection={setActiveSection}>About</NavLink>
          <NavLink section="research" setActiveSection={setActiveSection}>Research</NavLink>
          <NavLink section="scipop" setActiveSection={setActiveSection}>SciPop</NavLink>
          <NavLink section="gallery" setActiveSection={setActiveSection}>Gallery</NavLink>
          <NavLink section="contact" setActiveSection={setActiveSection}>Contact</NavLink>
        </nav>
      </header>

      {/* Main content */}
      <main className="container">
        {activeSection === "about" && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="intro-sub">Hello — I am</p>
              <h1 className="intro-name">Swati Gavas</h1>
              <p className="intro-desc">
                A cosmology researcher exploring gravitational clustering, halo physics,
                and structure formation in the Universe. Combining analytical models,
                simulations, and observations.
              </p>
            </motion.div>

            <Section id="about" title="About Me">
              <p>
                I am from a small tribal village called Isapur in the Western Ghats. Owing
                to my father’s job transfers, I spent my childhood in different towns and
                villages across western Maharashtra, including Koyana, Kokrud, and Chiplun.
                I completed my education in Maharashtra up to the postgraduate level,
                earning a Bachelor’s degree in Physics from Mumbai University, followed by
                a Master’s degree in Physics with a specialization in Astronomy and
                Astrophysics at Savitribai Phule Pune University, Pune.
              </p>
              <p>
                In 2018, I joined the Indian Institute of Science Education and Research
                (IISER) Mohali for my doctoral studies in cosmology. My PhD, completed in
                December 2024 under the supervision of Prof. Jasjeet Singh Bagla, was
                titled “Aspects of gravitational clustering and structure formation in the
                Universe.” My thesis focused on non-linear structure formation using
                cosmological N-body simulations, contributing to our understanding of halo
                mass functions, Hubble constant dispersion, and numerical artefacts.
              </p>
              <p>
                Since April 2025, I have been a postdoctoral researcher at the National
                Institute of Science Education and Research (NISER), Bhubaneswar, hosted by
                Dr. Nishikanta Khandai. My current work explores gravitational clustering,
                halo formation, and late-time cosmology using simulations and analytical
                approaches.
              </p>
            </Section>
          </>
        )}

        {activeSection === "research" && (
          <Section id="research" title="Research">
            <div className="research-tabs">
              {Object.keys(researchTabs).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveSubtab(key)}
                  className={activeSubtab === key ? "active" : ""}
                >
                  {researchTabs[key].title}
                </button>
              ))}
            </div>
            <h3>{researchTabs[activeSubtab].title}</h3>
            <p>{researchTabs[activeSubtab].body}</p>
          </Section>
        )}

        {activeSection === "scipop" && (
          <Section id="scipop" title="Science Popularisation">
            <p>
              Communicating science beyond academia through short explainers, articles,
              and outreach talks in accessible language.
            </p>
          </Section>
        )}

        {activeSection === "gallery" && (
          <Section id="gallery" title="Image Gallery">
            {GALLERY_ITEMS.map((item) => (
              <div key={item.id} className="gallery-item">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </Section>
        )}

        {activeSection === "contact" && (
          <Section id="contact" title="Contact">
            <p>Reach out for collaborations, talks, or discussions.</p>
            <p>
              Email:{" "}
              <a href="mailto:youremail@example.com" className="email-link">
                youremail@example.com
              </a>
            </p>
          </Section>
        )}
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Swati Gavas | Visitors: {visitorCount}</p>
      </footer>
    </div>
  );
}

function NavLink({ section, setActiveSection, children }) {
  const handleClick = (e) => {
    e.preventDefault();
    setActiveSection(section);
  };
  return (
    <a href={`#${section}`} onClick={handleClick}>
      {children}
    </a>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
