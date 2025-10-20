import React, { useState } from "react";
import { motion } from "framer-motion";

const GALLERY_ITEMS = [
  { id: 1, title: "Observatory Night", desc: "A short description about the observatory image or outreach event.", src: null },
  { id: 2, title: "Simulation Render", desc: "Visualization from a simulation showing halo formation and filamentary structure.", src: null },
  { id: 3, title: "Conference Photo", desc: "Photo from a recent conference or seminar highlighting outreach.", src: null },
  { id: 4, title: "Field Work", desc: "Image related to field work, outreach, or educational activity.", src: null }
];

export default function PersonalWebsite() {
  const [activeSection, setActiveSection] = useState("about");
  const [activeSubtab, setActiveSubtab] = useState("intro");
  const [visitorCount, setVisitorCount] = useState(1247);

  const researchTabs = {
    intro: {
      title: "Intro",
      body:
        "My research focuses on understanding how non-linear gravitational clustering drives the formation and evolution of large-scale structures in the Universe. I use N-body simulations and analytical models to study halo mass functions, peculiar velocities, and large-scale flows, connecting them to galaxy clustering and cosmological parameter estimation."
    },
    halo: {
      title: "Halo Shapes & abundance",
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
    <div className="min-h-screen bg-black text-gray-200 font-light">
      <header className="sticky top-0 backdrop-blur bg-black/60 border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" className="flex items-center gap-3">
            <img src="/logo.png" alt="Swati Gavas" className="w-10 h-10 rounded-full object-cover border border-gray-700" />
            <span className="font-semibold tracking-wide text-lg">Swati Gavas</span>
          </a>
          <nav className="hidden sm:flex gap-6 text-sm text-gray-400">
            <NavLink section="about" setActiveSection={setActiveSection}>About</NavLink>
            <NavLink section="research" setActiveSection={setActiveSection}>Research</NavLink>
            <NavLink section="scipop" setActiveSection={setActiveSection}>SciPop</NavLink>
            <NavLink section="gallery" setActiveSection={setActiveSection}>Image Gallery</NavLink>
            <NavLink section="contact" setActiveSection={setActiveSection}>Contact</NavLink>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 md:px-10 py-16 space-y-16 scroll-smooth">
        {activeSection === "about" && (
          <>
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }} 
              className="text-gray-400 max-w-4xl mx-auto text-left space-y-3"
            >
              <p className="text-lg">Hello — I am</p>
              <p className="font-thin text-6xl text-white">Swati Gavas</p>
              <p className="text-base text-gray-300 max-w-3xl leading-relaxed">
                a cosmology researcher exploring gravitational clustering, halo physics, and structure formation in the Universe. Combining analytical models, simulations, and observations.
              </p>
            </motion.div>

            <Section id="about" title="About Me">
              <div>
                <p className="mt-4">
                  I am from a small tribal village called Isapur in the Western Ghats. Owing to my father’s job transfers, I spent my childhood in different towns and villages across western Maharashtra, including Koyana, Kokrud, and Chiplun. I completed my education in Maharashtra up to the postgraduate level, earning a Bachelor’s degree in Physics from Mumbai University, followed by a Master’s degree in Physics with a specialization in Astronomy and Astrophysics at Savitribai Phule Pune University, Pune.
                </p>
                <p className="mt-4">
                  In 2018, I joined the Indian Institute of Science Education and Research (IISER) Mohali for my doctoral studies in cosmology. My PhD, completed in December 2024 under the supervision of Prof. Jasjeet Singh Bagla, was titled “Aspects of gravitational clustering and structure formation in the Universe.” My thesis focused on non-linear structure formation using cosmological N-body simulations, with contributions to understanding the halo mass function in scale-invariant models, the dispersion in Hubble–Lemaître constant measurements due to gravitational clustering, and the origin of transient numerical artifacts in simulations.
                </p>
                <p className="mt-4">
                  Since April 2025, I have been a postdoctoral researcher at the National Institute of Science Education and Research (NISER), Bhubaneswar, hosted by Dr. Nishikanta Khandai. My current work continues to explore gravitational clustering, halo formation, and late-time cosmology using both simulations and analytical approaches.
                </p>
                <p className="mt-4">
                  Beyond research, I have contributed to teaching, mentored students in simulation-based projects, and actively participated in scientific events. I enjoy working on problems that bring together physics, computation, and interpretation.
                </p>
                <p className="mt-4">
                  Outside academic life, I enjoy reading, travelling, caricaturing, and science popularisation.
                </p>
              </div>
            </Section>
          </>
        )}

        {activeSection === "research" && (
          <Section id="research" title="Research">
            <div className="flex gap-6 justify-end items-center mb-4 text-xs">
              <a href="https://scholar.google.com/citations?user=YOUR_ID" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">Google Scholar</a>
              <a href="https://orcid.org/YOUR_ORCID" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">ORCID</a>
              <a href="https://inspirehep.net/authors/YOUR_ID" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">INSPIRE-HEP</a>
              <a href="https://ui.adsabs.harvard.edu/search/q=author%3A%22Swati%20Gavas%22" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">NASA ADS</a>
            </div>

            <h2 className="text-xl font-semibold text-gray-100 mb-4">Research</h2>

            <div className="flex gap-6 justify-start text-base text-gray-300 mb-2 font-semibold border-b border-gray-700 pb-2">
              <button onClick={() => setActiveSubtab("intro")} className={`${activeSubtab === "intro" ? "text-white" : "text-gray-400"}`}>Intro</button>
              <button onClick={() => setActiveSubtab("halo")} className={`${activeSubtab === "halo" ? "text-white" : "text-gray-400"}`}>Halo Mass Function</button>
              <button onClick={() => setActiveSubtab("hubble")} className={`${activeSubtab === "hubble" ? "text-white" : "text-gray-400"}`}>Hubble Tension</button>
              <button onClick={() => setActiveSubtab("numerical")} className={`${activeSubtab === "numerical" ? "text-white" : "text-gray-400"}`}>Numerical Artefacts</button>
              <button onClick={() => setActiveSubtab("thermo")} className={`${activeSubtab === "thermo" ? "text-white" : "text-gray-400"}`}>Cosmo-Thermo</button>
            </div>

            <div className="mt-2">
              <h3 className="text-lg font-semibold text-gray-100">{researchTabs[activeSubtab].title}</h3>
              <p className="mt-3 text-gray-300 leading-relaxed">{researchTabs[activeSubtab].body}</p>
            </div>
          </Section>
        )}

        {activeSection === "scipop" && <Section id="scipop" title="SciPop">
          Communicating science beyond academia through short explainers, articles, and outreach talks in accessible language.
        </Section>}

        {activeSection === "gallery" && <Section id="gallery" title="Image Gallery">
          <div className="flex flex-col gap-8">
            {GALLERY_ITEMS.map((item, i) => (
              <div key={item.id} className={`flex flex-col md:flex-row items-center md:items-stretch gap-6 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 flex-shrink-0">
                  <div className="bg-gray-700 h-48 md:h-full rounded-lg flex items-center justify-center">
                    <span className="text-sm text-gray-400">Image {item.id}</span>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-lg font-semibold text-gray-100">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>}

        {activeSection === "contact" && <Section id="contact" title="Contact">
          Reach out for collaborations, talks, or discussions.
          <p className="mt-1 text-gray-400">Email: <a href="mailto:youremail@example.com" className="underline hover:text-gray-200">youremail@example.com</a></p>
        </Section>}
      </main>

      <footer className="border-t border-gray-800 py-6 text-center text-xs text-gray-500 flex justify-center items-center gap-4">
        <span>© {new Date().getFullYear()} Swati Gavas</span>
        <span className="text-gray-400">| {visitorCount}</span>
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
    <a href={`#${section}`} onClick={handleClick} className="hover:text-gray-200">
      {children}
    </a>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="space-y-2 py-12">
      <div className="text-sm leading-relaxed text-gray-300 max-w-5xl mx-auto px-6">{children}</div>
    </section>
  );
}
