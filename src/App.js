import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import translations from "./i18n";
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
import tree from './assets/tree_12.png'; 
const CV_FILE = process.env.PUBLIC_URL + '/CV_swati_gavas.pdf';
const RedshiftedMemories_FILE = process.env.PUBLIC_URL + '/Redshifted_Memories_Swati_Gavas.pdf';

const galleryImageKeys = {
  illustration: { tree, cosmic_web, sciart, visible_matter, h0, web2, fractal },
  photography: { pmkway, ptrailing, ptelescope, pduck, pcamouflage, pbird },
  caricatures: { cjvn, c2024, c12024, c2020, c2017, c22009, c12009 },
  misc: { meTalking, homeImg },
};

export default function PersonalWebsite() {
  const [activeSection, setActiveSection] = useState("about");
  const [researchTab, setResearchTab] = useState("intro");
  const [galleryTab, setGalleryTab] = useState("illustration");
  const [lang, setLang] = useState("en");
  const t = translations[lang];
  const researchTabs = t.research.tabs;

  return (
    <div className="app">
      {/* Header */}
      <header>
        <div className="header-top">
          <a href="/" className="logo">
            <img src={logo} alt="Swati Gavas" className="logo-img" />
            <span>{t.hero.name}</span>
          </a>
          <div className="lang-switch" role="group" aria-label="Language">
            <button
              type="button"
              className={lang === "en" ? "active" : ""}
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
            >
              English
            </button>
            <span className="lang-divider">/</span>
            <button
              type="button"
              className={lang === "mr" ? "active" : ""}
              onClick={() => setLang("mr")}
              aria-pressed={lang === "mr"}
            >
              मराठी
            </button>
          </div>
        </div>
        <nav className="nav-links">
          <NavLink section="about" setActiveSection={setActiveSection}>{t.nav.about}</NavLink>
          <NavLink section="research" setActiveSection={setActiveSection}>{t.nav.research}</NavLink>
          <NavLink section="scipop" setActiveSection={setActiveSection}>{t.nav.scipop}</NavLink>
          <NavLink section="gallery" setActiveSection={setActiveSection}>{t.nav.gallery}</NavLink>
          <NavLink section="contact" setActiveSection={setActiveSection}>{t.nav.contact}</NavLink>
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
              <p className="intro-sub">{t.hero.hello}</p>
              <h1 className="intro-name">{t.hero.name}</h1>
              <p className="intro-desc">
                {t.hero.desc}
              </p>
            </motion.div>

            <Section id="about" title={t.about.title}>
              <div className="about-layout">
                <div className="about-prose">
                  <p>
                    {t.about.p1}
                  </p>
                  <p>
                    {t.about.p2Pre}<a href="https://web.iisermohali.ac.in/Faculty/jasjeet/index.html" target="_blank" rel="noopener noreferrer">{t.about.p2Advisor}</a>{t.about.p2Post}
                  </p>
                  <p>
                    {t.about.p3Pre}<a href="https://niser.irins.org/profile/241972" target="_blank" rel="noopener noreferrer">{t.about.p3Host1}</a>{t.about.p3Mid}<a href="https://gax.sjtu.edu.cn/jxhan/node/4" target="_blank" rel="noopener noreferrer">{t.about.p3Host2}</a>{t.about.p3Post}
                  </p>
                  <p>
                    {t.about.p4}
                  </p>
                  <p>
                    {t.about.p5}
                  </p>
                 <p>
                  {t.about.download} {" "}
                  <a href={CV_FILE} target="_blank" rel="noopener noreferrer" className="cv-link">
                    {t.about.cv}
                  </a>

                  </p>
                </div>

                <aside className="about-timeline" aria-label="Career timeline">
                  <h3 className="timeline-heading">{t.about.timelineHeading}</h3>
                  <ol className="timeline-list">
                    {t.timeline.map((item, idx) => (
                      <li className="timeline-item" key={idx}>
                        <span className="timeline-dot" />
                        <span className="timeline-date">{item.date}</span>
                        <span className="timeline-role">{item.role}</span>
                        <span className="timeline-org">{item.org}</span>
                      </li>
                    ))}
                  </ol>
                </aside>
              </div>
            </Section>
          </>
        )}

        {activeSection === "research" && (
        <Section id="research">
          <div className="section-heading">
            <h2>{t.research.heading}</h2>
            <div className="research-links">
              <a href="https://scholar.google.com/citations?user=jes8qZUAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">{t.research.links.scholar}</a>
              <a href="https://orcid.org/my-orcid?orcid=0000-0002-0775-3334" target="_blank" rel="noopener noreferrer">{t.research.links.orcid}</a>
              <a href="https://inspirehep.net/authors/2808503" target="_blank" rel="noopener noreferrer">{t.research.links.inspire}</a>
              <a href="https://ui.adsabs.harvard.edu/search/q=author%3A%22Swati%20Gavas%22" target="_blank" rel="noopener noreferrer">{t.research.links.ads}</a>
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
            <h2>{t.scipop.heading}</h2>
          </div>
            <p>
              {t.scipop.p1}
            </p>
            <p>
              <a href={RedshiftedMemories_FILE} target="_blank" rel="noopener noreferrer" className="cv-link">{t.scipop.story} </a>: <em>{t.scipop.storyTagline}</em><br></br>
              {t.scipop.storyBody}
            </p>
            <p>
              <a href="https://www.youtube.com/watch?v=d9UKLpNnECo" target="_blank" rel="noopener noreferrer">{t.scipop.video1Title}</a>: {t.scipop.video1Body}
            </p>
            <p>
              <a href="https://www.youtube.com/watch?v=5RHTLGk3zfs" target="_blank" rel="noopener noreferrer">{t.scipop.video2Title}</a>: {t.scipop.video2Body}
            </p>
          </Section>
        )}

        {activeSection === "gallery" && (
          <Section id="gallery">
            <div className="section-heading">
              <h2>{t.gallery.heading}</h2>
            </div>

            {/* Gallery Tabs */}
            <div className="gallery-nav">
              {["illustration", "photography", "caricatures", "misc"].map((tab) => (
              <a
                key={tab}
                href="#"
                onClick={(e) => { e.preventDefault(); setGalleryTab(tab); }}
                className={galleryTab === tab ? "active" : ""}>
                {t.gallery.tabs[tab]}
              </a>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="gallery-grid">
              {Object.entries(galleryImageKeys[galleryTab]).map(([key, src]) => (
                <div className="gallery-item" key={key}>
                  <h4>{t.gallery[galleryTab][key]}</h4>
                  <ClickToOpen src={src} alt={t.gallery[galleryTab][key]} />
                </div>
              ))}
            </div>
          </Section>
        )}



        {activeSection === "contact" && (
          <Section id="contact" title={t.contact.title}>
            <p>{t.contact.intro}</p>
            <p>
              {t.contact.email}{" "}
              <a href="mailto:swatigavas47@gmail.com" className="email-link">
                swatigavas47@gmail.com
              </a>{", "}
              {t.contact.digital} {" "}
              <a href="https://www.linkedin.com/in/swatigavas/" target="_blank" rel="noopener noreferrer" className="social-link">
                {t.contact.linkedin}
              </a>
              {", "}
              <a href="https://www.youtube.com/@ugly-duckling-x" target="_blank" rel="noopener noreferrer" className="social-link">
                {t.contact.youtube}
              </a>
              {", "}
              <a href="https://www.goodreads.com/user/show/146852512-swati-gavas" target="_blank" rel="noopener noreferrer" className="social-link">
                {t.contact.goodreads}
              </a>
          </p>
            <p>
            {t.contact.download} {" "}
            <a href={CV_FILE} target="_blank" rel="noopener noreferrer" className="cv-link">
              {t.contact.cv}
            </a>{" --- "}
            <a href="https://arxiv.org/abs/2604.21634" target="_blank" rel="noopener noreferrer" className="cv-link">
              {t.contact.thesis}
            </a>

            </p>
          </Section>
        )}
      </main>

<footer>
  <p>© {new Date().getFullYear()} Swati Gavas</p>
<p className="last-updated">
  {t.footer.lastUpdated}
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
