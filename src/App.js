import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import logo from './assets/logo.JPG'; 
import meTalking from './assets/me_talking.jpg';
import homeImg from './assets/home.JPG';
import c12009 from './assets/c1_2009.jpg';
import c22009 from './assets/c2_2009.jpg';
import c2017 from './assets/c_2017.jpg';
import c2020 from './assets/c_2020.jpg';
import cjvn from './assets/c_jvn.JPG';
import c2024 from './assets/c_2024.JPG';
import c12024 from './assets/c1_2024.PNG';
import ptelescope from './assets/p_telescope.JPG';
import ptrailing from './assets/p_trailing.jpg';
import pmkway from './assets/p_mkw.png';
import pcamouflage from './assets/p_camouflage.jpg';
import pduck from './assets/p_duck.JPG';
import pbird from './assets/p_bird.JPG';
import cosmic_web from './assets/cosmic_web.png';
import fractal from './assets/fractal.jpg';
import h0 from './assets/h0.png';
import sciart from './assets/sciart.JPG';
import visible_matter from './assets/visible_matter.png';
import web2 from './assets/web2.png';

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
  body: `According to Einstein’s General Theory of Relativity, gravity arises from the curvature of spacetime caused by the presence of matter and energy. This curvature drives the mutual attraction of matter, leading to the formation of cosmic structures — galaxies, clusters, filaments, and vast voids — collectively known as the Large-Scale Structure (LSS) of the Universe.

The mapping of these structures has evolved over nearly a century, from Hubble’s early galaxy counts to modern redshift surveys such as 2dFGRS, SDSS, DESI, and Euclid, which have revealed a striking cosmic web pattern. This intricate network of filaments and voids reflects how gravity amplifies tiny primordial fluctuations in the matter density field left behind by the inflationary epoch of the early Universe.

The theoretical understanding of LSS begins with small quantum fluctuations seeded during inflation, which grew under gravity as the Universe expanded and cooled. In the early linear regime, these perturbations are well described by linear perturbation theory and transfer functions, consistent with observations of the Cosmic Microwave Background (CMB). As time progressed, gravitational collapse entered the non-linear regime, leading to the condensation of matter into dark matter halos, which serve as the birthplaces of galaxies.

My research explores this process of structure formation, focusing on how non-linear gravitational clustering shapes the distribution and evolution of cosmic structures. Using a combination of cosmological simulations and analytical models, I study how dark matter, the dominant mass component of the Universe, governs the growth of these structures and influences the observable Universe.`
} ,  
halo: {
  title: "Galaxy/Halo",
  body: `Dark matter halos — the gravitationally bound systems within which galaxies form and evolve. These halos grow through mergers and accretion, tracing the filamentary backbone of the cosmic web. Their abundance, internal structure, and evolution encode rich information about the underlying cosmology and the physics of structure formation.

We focused on understanding the statistical properties and evolution of halos in both scale-free and ΛCDM cosmologies. We demonstrated that deviations from the universality of the halo mass function arise from the slope of the input power spectrum, showing that scale-invariant models can mimic ΛCDM behavior approximately. This work provided new insights into how initial conditions shape the population and evolution of halos, and why analytical models must be refined to capture these effects accurately.

We also explored the self-similarity of halo shapes and their dependence on cosmological parameters. Using controlled numerical experiments, we found that halo shapes exhibit universal scaling behavior when normalized by a characteristic non-linear mass. These results highlight the predictive power of self-similarity in connecting dark matter physics to observable galaxy distributions.

In the future, I aim to extend these studies to hydrodynamical simulations, incorporating the effects of baryonic physics on halo morphology and evolution. I am particularly interested in linking halo-scale dynamics to galaxy-scale observables, exploring how baryons modify halo structure/properties.

Related material:
<br />
<a href="https://academic.oup.com/mnras/article/521/4/5960/7091923?login=true" target="_blank" rel="noopener noreferrer">[MNRAS article] Halo mass function in scale invariant models</a>
<br />
<a href="https://ui.adsabs.harvard.edu/abs/2025asi..confO..68N/abstract" target="_blank" rel="noopener noreferrer">[ASI abstract] Self-Similarity of Halo Shapes in Cosmological Simulations</a>`
},


hubble: {
  title: "Cosmological Tensions",
  body: `Modern cosmology rests on the success of the ΛCDM model, yet precision observations have revealed several persistent discrepancies — the so-called cosmological tensions — Hubble tension, S8 tension, and the presence of ultra-large-scale patterns. 

The most significant among these is the Hubble tension, where estimates of the Universe’s expansion rate differ by 4–5 standard deviations depending on the measurement method. Understanding whether these tensions arise from new physics or from the complexity of cosmic structure or observational systematics remains a challenge.

We investigate how gravitational clustering and cosmic environment contribute to these observed discrepancies. Using large-volume cosmological N-body simulations, we have examined how peculiar velocities and local density fluctuations bias measurements of the Hubble–Lemaître constant. Our results show that Milky Way–like environments can induce variations of up to 5% in locally inferred expansion rates, accommodating part of the Hubble tension. 

Scale of homogeneity debate — the question of whether the Universe truly becomes uniform beyond a certain scale. Using fractal dimension analysis on cosmological simulations, we test whether the recently reported ultra-large structures, such as the Giant Arc and Big Ring, are consistent with ΛCDM predictions or suggest a breakdown of statistical homogeneity. 

We have run large-volume simulations to measure bulk flow statistics and their correlation with local density environments. These results will inform how coherent flows bias cosmological measurements and whether our observed location is representative of ΛCDM expectations.

Looking forward, I intend to combine these analyses with data from upcoming surveys such as DESI, LSST, and Euclid to build a framework that disentangles the effects of environment, cosmic variance, and survey geometry from intrinsic parameters.

Related material:
<br />
<a href="https://journals.aps.org/prd/abstract/10.1103/PhysRevD.111.043516" target="_blank" rel="noopener noreferrer">[PRD article] Dispersion in the Hubble-Lemaître constant measurements from gravitational clustering</a>
<br />
<a href="https://youtu.be/JJmDFDxWJhg" target="_blank" rel="noopener noreferrer">[ICTP talk] Dispersion in the Hubble-Lemaître constant measurements from gravitational clustering</a>
<br />
<a href="https://ui.adsabs.harvard.edu/abs/2024asi..confO..15G/abstract" target="_blank" rel="noopener noreferrer">[ASI abstract] Dispersion in the Hubble-Lemaître constant measurements from gravitational clustering</a>`
},

numerical: {
  title: "Numerical Artefacts",
  body: `Cosmological simulations are essential tools for understanding how the Universe evolves from primordial density fluctuations to the complex large-scale structures we observe today. However, these simulations are limited by computational constraints, which can introduce numerical artefacts that distort physical interpretations. Issues such as finite box size, discrete particle sampling, force resolution, and transient modes can all impact how accurately simulations capture non-linear gravitational clustering and halo formation. Systematically disentangling numerical artefacts from genuine physical signals is crucial for the next generation of precision cosmological simulations, capable of matching the accuracy demanded by surveys like Euclid, LSST, and DESI.

We investigated the origin of transient features that arise from the mismatch between initial condition generation and subsequent dynamical evolution. We showed how missing small-scale power and the choice of initial redshift can affect mode coupling, halo collapse, and the growth of structures. Our analysis provided a set of guidelines for initializing and evolving cosmological simulations, improving their robustness for studying non-linear dynamics and halo statistics.

Using a new suite of simulations, we are examining how finite box size influences derived quantities such as halo shapes, density profiles, and mass functions. Our results show that this effect is systematic and significant for simulation boxes smaller than approximately 50 Mpc, highlighting the importance of volume effects in accurately characterizing halo properties.

Related material:
<br />
<a href="https://link.springer.com/article/10.1007/s12036-025-10055-x" target="_blank" rel="noopener noreferrer">[JOAA article] On the origin of transient features in cosmological N-Body simulations</a>`
},

thermo: {
  title: "Cosmo-Thermo",
  body: `The thermodynamics perspective links the large-scale behavior of the Universe to fundamental principles such as entropy growth, equilibrium, and stability. Our recent and ongoing work explores this connection by studying the thermodynamic interpretation of late-time cosmology. We adopt a dynamical systems approach to examine whether cosmological models can attain thermodynamic stability. We find that while the Universe may pass through multiple phase transitions, it never truly reaches a stable equilibrium.
  
  Related material:
<br />
  <a href="https://arxiv.org/abs/2509.04964" target="_blank" rel="noopener noreferrer">[preprint] A dynamical systems perspective on the thermodynamics of late-time cosmology
</a>`
},

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
<a href={process.env.PUBLIC_URL + '/CV_Swati_Gavas.pdf'} target="_blank" rel="noopener noreferrer" className="cv-link">
  Curriculum Vitae
</a>{" --- "}
<a href={process.env.PUBLIC_URL + '/Swati_Gavas_Thesis.pdf'} target="_blank" rel="noopener noreferrer" className="cv-link">
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

          {/* === Render the active research tab content (uncommented & active) === */}
<div className="research-content">
  <h3>{researchTabs[researchTab].title}</h3>
  {String(researchTabs[researchTab].body || "")
    .split(/\r?\n\s*\r?\n/)
    .map((para, idx) => (
      <p key={idx} dangerouslySetInnerHTML={{ __html: para.trim() }} />
    ))}
</div>


        </Section>
        )}

        {activeSection === "scipop" && (
        <Section id="scipop">
          <div className="section-heading">
            <h2>Science Popularisation</h2>
          </div>
            <p>
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
                {tab === "caricatures" && "Caricatures+"}
                {tab === "misc" && "Miscellaneous"}
              </a>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="gallery-grid">
              {galleryTab === "illustration" && (
                <>
      <div className="gallery-item">
      <h4>Cosmic web/ Dark Matter </h4>
<ClickToOpen src={cosmic_web} alt="Cosmic web" />
    </div> 
         <div className="gallery-item">
      <h4>Award winning SciArt</h4>
<ClickToOpen src={sciart} alt="sciart" />
    </div> 
   <div className="gallery-item">
      <h4>Visible Matter</h4>
<ClickToOpen src={visible_matter} alt="Visible Matter" />
    </div> 
        <div className="gallery-item">
      <h4>Hubble constant bias with local density</h4>
<ClickToOpen src={h0} alt="Hubble" />
    </div>
      <div className="gallery-item">
      <h4>Dark matter at different scales</h4>
<ClickToOpen src={web2} alt="web2" />
    </div>
    <div className="gallery-item">
      <h4>Fractal structure: Python. Turtle</h4>
<ClickToOpen src={fractal} alt="fractal" />
    </div>
                </>
              )}

              {galleryTab === "photography" && (
                <>
      <div className="gallery-item">
      <h4>Milky way clound and orion, location:Isapur, MH</h4>
<ClickToOpen src={pmkway} alt="Milky way clound and orion" />
    </div> 
         <div className="gallery-item">
      <h4>Star trail, location: Kasol,HP</h4>
<ClickToOpen src={ptrailing} alt="Star trail" />
    </div> 
   <div className="gallery-item">
      <h4>Telescope</h4>
<ClickToOpen src={ptelescope} alt="Telescope" />
    </div> 
        <div className="gallery-item">
      <h4>Duck, location: Shibsagar AS</h4>
<ClickToOpen src={pduck} alt="Duck" />
    </div>
      <div className="gallery-item">
      <h4>Camouflage</h4>
<ClickToOpen src={pcamouflage} alt="Camouflage" />
    </div>
    <div className="gallery-item">
      <h4>Birds, location: Sukhana Lake PB</h4>
<ClickToOpen src={pbird} alt="Birds" />
    </div>
                </>
              )}

{galleryTab === "caricatures" && (
  <>
           <div className="gallery-item">
      <h4>Jayant Vishnu Naralikar</h4>
<ClickToOpen src={cjvn} alt="Jayant Vishnu Naralikar" />
    </div> 
         <div className="gallery-item">
      <h4>From back of the nib</h4>
<ClickToOpen src={c2024} alt="From back of the nib" />
    </div> 
   <div className="gallery-item">
      <h4>Undefined</h4>
<ClickToOpen src={c12024} alt="undefined" />
    </div> 
        <div className="gallery-item">
      <h4>covid boredom</h4>
<ClickToOpen src={c2020} alt="covid boredom" />
    </div>
      <div className="gallery-item">
      <h4>2017 collection (! some of them not public figures !)</h4>
<ClickToOpen src={c2017} alt="2017 collection" />
    </div>
    <div className="gallery-item">
      <h4>2009 collection: Part II</h4>
<ClickToOpen src={c22009} alt="2009 collection: Part II" />
    </div>
        <div className="gallery-item">
      <h4>2009 collection: Part I</h4>
<ClickToOpen src={c12009} alt="2009 collection: Part I" />
    </div>
  </>
)}


{galleryTab === "misc" && (
  <>
    <div className="gallery-item">
      <h4>Me talking in conferences: ICTP and ASI</h4>
<ClickToOpen src={meTalking} alt="Me talking..." />
    </div>

    <div className="gallery-item">
      <h4>Home/Isapur/Western Ghats</h4>
<ClickToOpen src={homeImg} alt="Home" />
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
<a href={process.env.PUBLIC_URL + '/CV_Swati_Gavas.pdf'} target="_blank" rel="noopener noreferrer" className="cv-link">
  Curriculum Vitae
</a>{" --- "}
<a href={process.env.PUBLIC_URL + '/Swati_Gavas_Thesis.pdf'} target="_blank" rel="noopener noreferrer" className="cv-link">
  Thesis
</a>


            </p>
          </Section>
        )}
      </main>

<footer>
  <p>© {new Date().getFullYear()} Swati Gavas</p>
<p className="last-updated">
  Last updated: {new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })}
</p>

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

function ClickToOpen({ src, alt }) {
  return (
    <a href={src} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={alt} />
    </a>
  );
}
