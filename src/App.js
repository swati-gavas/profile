import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import logo from './assets/logo.JPG'; 

const GALLERY_ITEMS = [
  { id: 1, title: "Observatory Night", desc: "A short description about the observatory image or outreach event.", src: null },
  { id: 2, title: "Simulation Render", desc: "Visualization from a simulation showing halo formation and filamentary structure.", src: null },
  { id: 3, title: "Conference Photo", desc: "Photo from a recent conference or seminar highlighting outreach.", src: null },
  { id: 4, title: "Field Work", desc: "Image related to field work, outreach, or educational activity.", src: null }
];

export default function PersonalWebsite() {
  const [activeSection, setActiveSection] = useState("about");
  const [researchTab, setResearchTab] = useState("intro");
  const [galleryTab, setGalleryTab] = useState("illustration");

  const researchTabs = {
    intro: {
      title: "Introduction",
      body:
        "My research focuses on understanding how non-linear gravitational clustering drives the formation and evolution of large-scale structures in the Universe. I use N-body simulations and analytical models to study halo mass functions, peculiar velocities, and large-scale flows, connecting them to galaxy clustering and cosmological parameter estimation."
    },
    halo: {
      title: "Galaxy/Halo",
      body:
        "The Halo Mass Function (HMF) is a cornerstone of cosmology, describing the distribution of dark matter halos by mass. My work refines HMF models under scale-invariant cosmologies, identifying non-universal corrections and testing them with high-resolution simulations to improve predictions for future surveys like Euclid and LSST."
    },
    hubble: {
      title: "Cosmological Tensions",
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
        <img src={logo} alt="Swati Gavas" className="logo-img" />
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
                A cosmology researcher exploring gravitational clustering, galaxy/halo physics,
                and structure formation in the Universe. Combining simulations, analytical models, and observations.
              </p>
            </motion.div>

            <Section id="about" title="About Me">
              <p>
                I am from a small tribal village called Isapur in the Western Ghats. Owing to my father's job transfers, I spent my childhood in different towns and villages across western Maharashtra, including Koyana, Kokrud, and Chiplun. I completed my education in Maharashtra up to the postgraduate level, earning a Bachelor's degree in Physics from Mumbai University, followed by a Master's degree in Physics with a specialization in Astronomy and Astrophysics at Savitribai Phule Pune University and Inter-University Centre for Astronomy and Astrophysics (IUCAA), Pune.
              </p>
              <p>
               In 2018, I joined the Indian Institute of Science Education and Research (IISER) Mohali for my doctoral studies in cosmology. My PhD, completed in December 2024 under the supervision of <a href="https://web.iisermohali.ac.in/Faculty/jasjeet/index.html" target="_blank" rel="noopener noreferrer">Prof. Jasjeet Singh Bagla</a>, was titled “Aspects of gravitational clustering and structure formation in the Universe.” My thesis focused on non-linear structure formation using cosmological N-body simulations, with contributions to understanding the halo mass function in scale-invariant models, the dispersion in Hubble—Lemaître constant measurements due to gravitational clustering, and the origin of transient numerical artifacts in simulations.
              </p>
              <p>
                Since April 2025, I have been a postdoctoral researcher at the National Institute of Science Education and Research (NISER), Bhubaneswar, hosted by <a href="https://niser.irins.org/profile/241972" target="_blank" rel="noopener noreferrer"> Dr. Nishikanta Khandai</a>. My current work continues to explore gravitational clustering, halo formation, and late-time cosmology using both simulations and analytical approaches. 
              </p>
              <p>
                Beyond research, I have contributed to teaching, mentored students in simulation-based projects, and actively participated in scientific events. I enjoy working on problems that bring together physics, computation, and interpretation.
              </p>
              <p>
                Outside academic life, I enjoy reading, travelling, caricaturing, and science popularization.
              </p>  
             <p>
              Download: {" "}
              <a href="/CV_swati_gavas.pdf" target="_blank" rel="noopener noreferrer" className="cv-link">
                Curriculum Vitae
              </a> ---
              <a href="/Swati_Gavas_thesis.pdf" target="_blank" rel="noopener noreferrer" className="cv-link">
                 Thesis
              </a>  
              </p>
            </Section>
          </>
        )}

        {activeSection === "research" && (
        <Section id="research">
          <div className="section-heading">
            <h2>Research</h2>
            <div className="research-links">
              <a href="https://scholar.google.com/citations?user=jes8qZUAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
              <a href="https://orcid.org/my-orcid?orcid=0000-0002-0775-3334" target="_blank" rel="noopener noreferrer">ORCID</a>
              <a href="https://inspirehep.net/authors/2808503" target="_blank" rel="noopener noreferrer">INSPIRE-HEP</a>
              <a href="https://ui.adsabs.harvard.edu/search/q=author%3A%22Swati%20Gavas%22" target="_blank" rel="noopener noreferrer">NASA ADS</a>
            </div>
          </div>

          <div className="research-nav">
            {Object.keys(researchTabs).map((key) => (
            <a
              key={key}
              href="#"
              onClick={(e) => { e.preventDefault(); setResearchTab(key); }}
              className={researchTab === key ? "active" : ""}>
              {researchTabs[key].title}
            </a>
            ))}
          </div>
{/* 
          <div className="research-content">
            <h3>{researchTabs[activeSubtab].title}</h3>
            <p>{researchTabs[activeSubtab].body}</p>
          </div> */}

          </Section>
        )}

        {activeSection === "scipop" && (
        <Section id="scipop">
          <div className="section-heading">
            <h2>Science Popularisation</h2>
          </div>            <p>
              I try to share science beyond academia through short explainers, informal articles, and occasional outreach talks in simple language. It's a small attempt to make ideas in cosmology/physics/science a bit more approachable for people who are curious but not from the field.
            </p>
            <p>
              <a href="https://www.youtube.com/watch?v=d9UKLpNnECo" target="_blank" rel="noopener noreferrer">My adventures with cosmic ghost | A 2-Minute Tour of My PhD</a>: A two minute video on my PhD research — explaining how dark matter shapes the Universe and how our cosmic location influences the measured expansion rate. Watch it on YouTube.
            </p>
            <p>
              <a href="https://www.youtube.com/watch?v=5RHTLGk3zfs" target="_blank" rel="noopener noreferrer">Structure Formation in the Universe</a>: A one-hour talk for undergraduate students. It introduces how galaxies, clusters, and the cosmic web form from tiny fluctuations in the early Universe, explaining the role of gravity and cosmological simulations in shaping the large-scale structure we observe today.
            </p>
          </Section>
        )}

        {activeSection === "gallery" && (
          <Section id="gallery">
            <div className="section-heading">
              <h2>Image Gallery</h2>
            </div>

            {/* Gallery Tabs */}
            <div className="gallery-nav">
              {["illustration", "photography", "caricatures", "misc"].map((tab) => (
              <a
                key={tab}
                href="#"
                onClick={(e) => { e.preventDefault(); setGalleryTab(tab); }}
                className={galleryTab === tab ? "active" : ""}>
                {tab === "illustration" && "Science Illustration"}
                {tab === "photography" && "Photography"}
                {tab === "caricatures" && "Caricatures"}
                {tab === "misc" && "Miscellaneous"}
              </a>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="gallery-grid">
              {galleryTab === "illustration" && (
                <>
                  <div className="gallery-item">
                    <h4>visible matter Web</h4>
                    <img src="visibl_matter.png" alt="visible Matter Web" />
                  </div>
                  <div className="gallery-item">
                    <h4>Dark matter Web</h4>
                    <img src="/assets/simulation.png" alt="Dark matter" />
                  </div>
                  <div className="gallery-item">
                    <h4>Dark matter on different scales</h4>
                    <img src="/assets/dm_scales.png" alt="Dark matter" />
                  </div>
                  <div className="gallery-item">
                    <h4>Hubble constant bias with local density</h4>
                    <img src="/assets/h0.png" alt="Hubble constant" />
                  </div>
                </>
              )}

              {galleryTab === "photography" && (
                <>
                  <div className="gallery-item">
                    <h4>Night Sky</h4>
                    <img src="/assets/photo1.jpg" alt="Night Sky" />
                  </div>
                  <div className="gallery-item">
                    <h4>Telescope Setup</h4>
                    <img src="/assets/photo2.jpg" alt="Telescope Setup" />
                  </div>
                  <div className="gallery-item">
                    <h4>Campus Evening</h4>
                    <img src="/assets/photo3.jpg" alt="Campus Evening" />
                  </div>
                  <div className="gallery-item">
                    <h4>Field Trip</h4>
                    <img src="/assets/photo4.jpg" alt="Field Trip" />
                  </div>
                </>
              )}

              {galleryTab === "caricatures" && (
                <>
                  <div className="gallery-item">
                    <h4>Scientist at Work</h4>
                    <img src="/assets/caricature1.jpg" alt="Scientist caricature" />
                  </div>
                  <div className="gallery-item">
                    <h4>Conference Chaos</h4>
                    <img src="/assets/caricature2.jpg" alt="Conference caricature" />
                  </div>
                </>
              )}

              {galleryTab === "misc" && (
                <>
                  <div className="gallery-item">
                    <h4>Workshop Memories</h4>
                    <img src="/assets/misc1.jpg" alt="Workshop" />
                  </div>
                  <div className="gallery-item">
                    <h4>Travel Snapshot</h4>
                    <img src="/assets/misc2.jpg" alt="Travel" />
                  </div>
                </>
              )}
            </div>
          </Section>
        )}



        {activeSection === "contact" && (
          <Section id="contact" title="Contact">
            <p>Reach out for collaborations, talks, or discussions.</p>
            <p>
              Email:{" "}
              <a href="mailto:youremail@example.com" className="email-link">
                swatigavas47@gmail.com
              </a>{", "}
              Digital Presence: {" "}
              <a href="https://www.linkedin.com/in/swatigavas/" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
              {", "}
              <a href="https://www.youtube.com/@ugly-duckling-x" target="_blank" rel="noopener noreferrer" className="social-link">
                YouTube
              </a>  
              {", "}  
              <a href="https://ictp.global/users/8140114" target="_blank" rel="noopener noreferrer" className="social-link">
                ICTP Global
              </a>
              {", "}
              <a href="https://www.goodreads.com/user/show/146852512-swati-gavas" target="_blank" rel="noopener noreferrer" className="social-link">
                goodreads
              </a>
          </p>
            <p>
            Download: {" "}
            <a href="/Swati_Gavas_CV.pdf" target="_blank" rel="noopener noreferrer" className="cv-link">
              Curriculum Vitae
            </a> ---
            <a href="/Swati_Gavas_thesis.pdf" target="_blank" rel="noopener noreferrer" className="cv-link">
                Thesis
            </a>  
            </p>
          </Section>
        )}
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Swati Gavas </p>
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
