const translations = {
  en: {
    nav: { about: "About", research: "Research", scipop: "SciPop", gallery: "Gallery", contact: "Contact" },

    hero: {
      hello: "Hello — I am",
      name: "Swati Gavas",
      desc: "A cosmology researcher exploring gravitational clustering, galaxy/halo physics, and structure formation in the Universe. Combining simulations, analytical models, and observations.",
    },

    about: {
      title: "About Me",
      p1: "I am from a small tribal village called Isapur in the Western Ghats. Owing to my father's job transfers, I spent my childhood in different towns and villages across western Maharashtra, including Koyana, Kokrud, and Chiplun. I completed my education in Maharashtra up to the postgraduate level, earning a Bachelor's degree in Physics from Mumbai University, followed by a Master's degree in Physics with a specialization in Astronomy and Astrophysics at Savitribai Phule Pune University and Inter-University Centre for Astronomy and Astrophysics (IUCAA), Pune.",
      p2Pre: "In 2018, I joined the Indian Institute of Science Education and Research (IISER) Mohali for my doctoral studies in cosmology. My PhD, completed in December 2024 under the supervision of ",
      p2Advisor: "Prof. Jasjeet Singh Bagla",
      p2Post: ", was titled \"Aspects of gravitational clustering and structure formation in the Universe.\" My thesis focused on non-linear structure formation using cosmological N-body simulations, with contributions to understanding the halo mass function in scale-invariant models, the dispersion in Hubble—Lemaître constant measurements due to gravitational clustering, and the origin of transient numerical artifacts in simulations.",
      p3Pre: "After my PhD, I spent a year as a postdoctoral researcher (April 2025 – March 2026) at the National Institute of Science Education and Research (NISER), Bhubaneswar, hosted by ",
      p3Host1: "Dr. Nishikanta Khandai",
      p3Mid: ", continuing to explore gravitational clustering, halo formation, and late-time cosmology through simulations and analytical approaches. Since July 2026, I have been at Shanghai Jiao Tong University (SJTU) for my second postdoctoral position, hosted by ",
      p3Host2: "Prof. Jiaxin Han",
      p3Post: ", where I am developing a halo mass function based on the depletion radius — a dynamical boundary whose time-dependence can refine the halo model framework.",
      p4: "Beyond research, I have contributed to teaching, mentored students in simulation-based projects, and actively participated in scientific events. I enjoy working on problems that bring together physics, computation, and interpretation.",
      p5: "Outside academic life, I enjoy reading, travelling, caricaturing, and science popularization.",
      download: "Download:",
      cv: "Curriculum Vitae",
      timelineHeading: "Positions",
    },

    timeline: [
      { date: "Jul 2026 — present", role: "Postdoctoral Researcher", org: "Shanghai Jiao Tong University" },
      { date: "Apr 2025 — Mar 2026", role: "Postdoctoral Researcher", org: "NISER, Bhubaneswar" },
      { date: "Aug 2018 — Dec 2024", role: "PhD, Cosmology", org: "IISER Mohali" },
      { date: "2015 — 2017", role: "MSc Physics (Astronomy & Astrophysics)", org: "Savitribai Phule Pune University / IUCAA" },
      { date: "2012 — 2015", role: "BSc Physics", org: "Mumbai University" },
    ],

    research: {
      heading: "Research",
      links: { scholar: "Google Scholar", orcid: "ORCID", inspire: "INSPIRE-HEP", ads: "NASA ADS" },
      tabs: {
        intro: {
          title: "Introduction",
          body: `According to Einstein's General Theory of Relativity, gravity arises from the curvature of spacetime caused by the presence of matter and energy. This curvature drives the mutual attraction of matter, leading to the formation of cosmic structures — galaxies, clusters, filaments, and vast voids — collectively known as the Large-Scale Structure (LSS) of the Universe.

    The mapping of these structures has evolved over nearly a century, from Hubble's early galaxy counts to modern redshift surveys such as 2dFGRS, SDSS, DESI, and Euclid, which have revealed a striking cosmic web pattern. This intricate network of filaments and voids reflects how gravity amplifies tiny primordial fluctuations in the matter density field left behind by the inflationary epoch of the early Universe.

    The theoretical understanding of LSS begins with small quantum fluctuations seeded during inflation, which grew under gravity as the Universe expanded and cooled. In the early linear regime, these perturbations are well described by linear perturbation theory and transfer functions, consistent with observations of the Cosmic Microwave Background (CMB). As time progressed, gravitational collapse entered the non-linear regime, leading to the condensation of matter into dark matter halos, which serve as the birthplaces of galaxies.

    My research explores this process of structure formation, focusing on how non-linear gravitational clustering shapes the distribution and evolution of cosmic structures. Using a combination of cosmological simulations and analytical models, I study how dark matter and baryonic matter governs the growth of these structures and influences the observable Universe.`,
        },
        halo: {
          title: "Galaxy/Halo",
          body: `Dark matter halos -- the gravitationally bound systems within which galaxies form and evolve. These halos grow through mergers and accretion, tracing the filamentary backbone of the cosmic web. Their abundance, internal structure, and evolution encode rich information about the underlying cosmology and the physics of structure formation.

    We focused on understanding the statistical properties and evolution of halos in both scale-free and ΛCDM cosmologies. We demonstrated that deviations from the universality of the halo mass function arise from the slope of the input power spectrum. This work showed that ΛCDM models can be mapped to scale-free analogues. It provides new insights into how initial conditions shape the population and evolution of halos, and why analytical models must be refined to capture these effects accurately. Going further, we aim to use simulations to model the mechanism of gravitational collapse and use these results to improve theoretical halo mass function predictions.

    We explored the self-similarity of halo shapes and their dependence on cosmological parameters, finding that they exhibit universal scaling behavior. Building on this, we aim to understand how evolving morphologies—driven by mergers and environment—affect galaxy properties. To capture the structural complexity of these halos beyond standard symmetric models, we employ spherical harmonic decomposition of the density field. This framework allows us to quantify deviations from ideal triaxiality (such as the l=1 dipole), serving as a powerful probe into a halo's dynamical state and the spatial distribution of its satellites.

    With the new proposed runs, we will investigate how baryons influence both the large-scale dark matter distribution--examining effects on the correlation function, halo bias, and various cross-correlations--and the small-scale distribution, including changes to halo density profiles for halos hosting galaxies during cosmic dawn.

    Related material:
    <br />
    <a href="https://academic.oup.com/mnras/article/521/4/5960/7091923?login=true" target="_blank" rel="noopener noreferrer">[MNRAS article] Halo mass function in scale invariant models</a>
    <br />
    <a href="https://ui.adsabs.harvard.edu/abs/2025asi..confO..68N/abstract" target="_blank" rel="noopener noreferrer">[ASI abstract] Self-Similarity of Halo Shapes in Cosmological Simulations</a>
    <br />
    <a href="https://arxiv.org/abs/2603.26640" target="_blank" rel="noopener noreferrer">[preprint] Universality of Halo Shape and its Morphological Evolution across Cosmic Time</a>`,
        },
        hubble: {
          title: "Cosmological Tensions",
          body: `Modern cosmology rests on the success of the ΛCDM model, yet precision observations have revealed several persistent discrepancies — the so-called cosmological tensions — Hubble tension, S8 tension, and the presence of ultra-large-scale patterns.

      The most significant among these is the Hubble tension, where estimates of the Universe's expansion rate differ by 4-5 standard deviations depending on the measurement method. Understanding whether these tensions arise from new physics or from the complexity of cosmic structure or observational systematics remains a challenge.

      We investigate how gravitational clustering and cosmic environment contribute to these observed discrepancies. Using large-volume cosmological N-body simulations, we have examined how peculiar velocities and local density fluctuations bias measurements of the Hubble-Lemaître constant. Our results show that Milky Way-like environments can induce variations of up to 5% in locally inferred expansion rates, accommodating part of the Hubble tension.

      Scale of homogeneity debate — the question of whether the Universe truly becomes uniform beyond a certain scale. Using fractal dimension analysis on cosmological simulations, we test whether the recently reported ultra-large structures, such as the Giant Arc and Big Ring, are consistent with ΛCDM predictions or suggest a breakdown of statistical homogeneity.

      We have run large-volume simulations to measure bulk flow statistics and their correlation with local density environments. These results will inform how coherent flows bias cosmological measurements and whether our observed location is representative of ΛCDM expectations.

      Looking forward, I intend to combine these analyses with data from upcoming surveys such as DESI, LSST, and Euclid to build a framework that disentangles the effects of environment, cosmic variance, and survey geometry from intrinsic parameters.

      Related material:
      <br />
      <a href="https://journals.aps.org/prd/abstract/10.1103/PhysRevD.111.043516" target="_blank" rel="noopener noreferrer">[PRD article] Dispersion in the Hubble-Lemaître constant measurements from gravitational clustering</a>
      <br />
      <a href="https://youtu.be/JJmDFDxWJhg" target="_blank" rel="noopener noreferrer">[ICTP talk] Dispersion in the Hubble-Lemaître constant measurements from gravitational clustering</a>
      <br />
      <a href="https://ui.adsabs.harvard.edu/abs/2024asi..confO..15G/abstract" target="_blank" rel="noopener noreferrer">[ASI abstract] Dispersion in the Hubble-Lemaître constant measurements from gravitational clustering</a>`,
        },
        numerical: {
          title: "Numerical Artefacts",
          body: `Cosmological simulations are essential tools for understanding how the Universe evolves from primordial density fluctuations to the complex large-scale structures we observe today. However, these simulations are limited by computational constraints, which can introduce numerical artefacts that distort physical interpretations. Issues such as finite box size, discrete particle sampling, force resolution, and transient modes can all impact how accurately simulations capture non-linear gravitational clustering and halo formation. Systematically disentangling numerical artefacts from genuine physical signals is crucial for the next generation of precision cosmological simulations, capable of matching the accuracy demanded by surveys like Euclid, LSST, and DESI.

      We investigated the origin of transient features that arise from the mismatch between initial condition generation and subsequent dynamical evolution. We showed how missing small-scale power can affect mode coupling, halo collapse, and the growth of structures. Our analysis provided a set of guidelines for initializing and evolving cosmological simulations, improving their robustness for studying non-linear dynamics and halo statistics.

      Using a new suite of simulations, we are examining how finite box size influences derived quantities such as halo shapes, density profiles, and mass functions. Our results show that this effect is systematic and significant for simulation boxes smaller than approximately 50 Mpc, highlighting the importance of volume effects in accurately characterizing halo properties.

      Related material:
      <br />
      <a href="https://link.springer.com/article/10.1007/s12036-025-10055-x" target="_blank" rel="noopener noreferrer">[JOAA article] On the origin of transient features in cosmological N-Body simulations</a>`,
        },
        thermo: {
          title: "Miscellaneous",
          body: `1. Cosmo-Thermo
      <br />
      Our recent and ongoing work explores this connection by studying the thermodynamic interpretation of late-time cosmology. We adopt a dynamical systems approach to examine whether cosmological models can attain thermodynamic stability. We find that while the Universe may pass through multiple phase transitions, it never truly reaches a stable equilibrium.

      Related material:
      <br />
      <a href="https://onlinelibrary.wiley.com/doi/10.1002/prop.70094" target="_blank" rel="noopener noreferrer">[Fortschr. Phys. article] A Dynamical Systems Perspective on the Thermodynamics of Late-Time Cosmology
      </a>`,
        },
      },
    },

    scipop: {
      heading: "Science Popularisation",
      p1: "I try to share science beyond academia through short explainers, informal articles, and occasional outreach talks in simple language. It's a small attempt to make ideas in cosmology/physics/science a bit more approachable for people who are curious but not from the field.",
      story: "Redshifted Memories",
      storyTagline: "When history is written in light, what happens when the light redshifts?",
      storyBody: "My short story was selected as a Top 20 finalist nationwide in the Spin Your Science at the India Science Festival 2026. It blends cosmological concepts with narrative to explore how we view the history.",
      video1Title: "My adventures with cosmic ghost | A 2-Minute Tour of My PhD",
      video1Body: "A two minute video on my PhD research — explaining how dark matter shapes the Universe and how our cosmic location influences the measured expansion rate. Watch it on YouTube.",
      video2Title: "Structure Formation in the Universe",
      video2Body: "A one-hour talk for undergraduate students. It introduces how galaxies, clusters, and the cosmic web form from tiny fluctuations in the early Universe, explaining the role of gravity and cosmological simulations in shaping the large-scale structure we observe today.",
    },

    gallery: {
      heading: "Image Gallery",
      tabs: { illustration: "Science Illustration", photography: "Photography", caricatures: "Caricatures+", misc: "Miscellaneous" },
      illustration: {
        tree: "Halo merger tree",
        cosmic_web: "Cosmic web/ Dark Matter",
        sciart: "Award winning SciArt",
        visible_matter: "Visible Matter",
        h0: "Hubble constant bias with local density",
        web2: "Dark matter at different scales",
        fractal: "Fractal structure: Python. Turtle",
      },
      photography: {
        pmkway: "Milky Way cloud and Orion, location: Isapur, MH",
        ptrailing: "Star trail, location: Kasol, HP",
        ptelescope: "Telescope setup",
        pduck: "Duck, location: Sibsagar, AS",
        pcamouflage: "Camouflage, location: SPPU",
        pbird: "Birds, location: Sukhana Lake, PB",
      },
      caricatures: {
        cjvn: "Jayant Vishnu Narlikar",
        c2024: "From back of the nib",
        c12024: "Undefined",
        c2020: "COVID boredom",
        c2017: "2017 collection ! some of them are not public figures !",
        c22009: "2009 collection: Part II",
        c12009: "2009 collection: Part I",
      },
      misc: {
        meTalking: "Me talking in conferences: ICTP and ASI",
        homeImg: "Home/Isapur/Western Ghats",
      },
    },

    contact: {
      title: "Contact",
      intro: "Reach out for collaborations, talks, discussions and feedback.",
      email: "Email:",
      digital: "Digital Presence:",
      linkedin: "LinkedIn",
      youtube: "YouTube",
      goodreads: "goodreads",
      download: "Download:",
      cv: "Curriculum Vitae",
      thesis: "Thesis",
    },

    footer: {
      lastUpdated: "Last updated: 14 Aug 2026",
    },
  },

  mr: {
    nav: { about: "माझ्याविषयी", research: "संशोधन", scipop: "विज्ञानप्रसार", gallery: "गॅलरी", contact: "संपर्क" },

    hero: {
      hello: "नमस्कार — मी आहे",
      name: "स्वाती गवस",
      desc: "गुरुत्वीय क्लस्टरिंग, आकाशगंगा/हेलो भौतिकशास्त्र आणि विश्वातील संरचना निर्मितीचा अभ्यास करणारी विश्वविज्ञान (कॉस्मॉलॉजी) संशोधक. सिम्युलेशन्स, विश्लेषणात्मक प्रतिमाने आणि निरीक्षणे यांची सांगड घालणारे संशोधन.",
    },

    about: {
      title: "माझ्याविषयी",
      p1: "मी पश्चिम घाटातील इसापूर या छोट्या आदिवासी गावातील आहे. वडिलांच्या बदलीच्या नोकरीमुळे माझे बालपण पश्चिम महाराष्ट्रातील कोयना, कोकरूड आणि चिपळूणसह विविध गावा-शहरांत गेले. मी महाराष्ट्रातच पदव्युत्तर शिक्षणापर्यंतचे शिक्षण पूर्ण केले — मुंबई विद्यापीठातून भौतिकशास्त्रातील पदवी (बी.एस्सी.), त्यानंतर सावित्रीबाई फुले पुणे विद्यापीठ आणि आंतरविद्यापीठ खगोलशास्त्र व खगोलभौतिकी केंद्र (IUCAA), पुणे येथून खगोलशास्त्र व खगोलभौतिकी विशेषीकरणासह भौतिकशास्त्रातील पदव्युत्तर पदवी (एम.एस्सी.).",
      p2Pre: "२०१८ मध्ये मी विश्वविज्ञानातील डॉक्टरेट अभ्यासासाठी भारतीय विज्ञान शिक्षण व संशोधन संस्था (IISER), मोहाली येथे रुजू झाले. डिसेंबर २०२४ मध्ये पूर्ण झालेली माझी पीएच.डी. ",
      p2Advisor: "प्रा. जसजीत सिंग बगला",
      p2Post: " यांच्या मार्गदर्शनाखाली झाली आणि तिचा विषय होता \"विश्वातील गुरुत्वीय क्लस्टरिंग आणि संरचना निर्मितीचे पैलू\". माझा प्रबंध विश्वविज्ञानीय एन-बॉडी सिम्युलेशन्स वापरून अरेषीय (नॉन-लिनियर) संरचना निर्मितीवर केंद्रित होता, ज्यामध्ये स्केल-इन्व्हेरिअंट प्रतिमानांमधील हेलो वस्तुमान फलन, गुरुत्वीय क्लस्टरिंगमुळे हबल-लमेत्र स्थिरांकाच्या मापनांतील विचलन, आणि सिम्युलेशन्समधील क्षणिक संख्यात्मक विकृतींचा उगम समजून घेण्यास योगदान दिले.",
      p3Pre: "पीएच.डी. नंतर, मी एक वर्ष (एप्रिल २०२५ – मार्च २०२६) राष्ट्रीय विज्ञान शिक्षण व संशोधन संस्था (NISER), भुवनेश्वर येथे पोस्ट-डॉक्टरल संशोधक म्हणून काम केले, यजमान होते ",
      p3Host1: "डॉ. निशिकांत खांडाई",
      p3Mid: ". तेथे मी सिम्युलेशन्स आणि विश्लेषणात्मक पद्धतींद्वारे गुरुत्वीय क्लस्टरिंग, हेलो निर्मिती आणि उत्तरकालीन (लेट-टाइम) विश्वविज्ञानाचा अभ्यास सुरू ठेवला. जुलै २०२६ पासून मी शांघाय जिआओ टोंग विद्यापीठ (SJTU) येथे माझ्या दुसऱ्या पोस्ट-डॉक्टरल पदावर आहे, यजमान आहेत ",
      p3Host2: "प्रा. जियाशिन हान",
      p3Post: ". येथे मी क्षरण त्रिज्येवर (डिप्लीशन रेडियस) आधारित हेलो वस्तुमान फलन विकसित करत आहे — ही एक गतिमान सीमा असून तिच्या काल-अवलंबित्वामुळे हेलो प्रतिमानाची चौकट अधिक सुधारता येऊ शकते.",
      p4: "संशोधनाव्यतिरिक्त, मी अध्यापनात योगदान दिले आहे, सिम्युलेशन-आधारित प्रकल्पांत विद्यार्थ्यांना मार्गदर्शन केले आहे, आणि विविध वैज्ञानिक उपक्रमांत सक्रिय सहभाग घेतला आहे. भौतिकशास्त्र, संगणन आणि अन्वयार्थ यांची सांगड घालणाऱ्या समस्यांवर काम करणे मला आवडते.",
      p5: "शैक्षणिक जीवनाव्यतिरिक्त, मला वाचन, प्रवास, व्यंगचित्रकला आणि विज्ञानप्रसाराची आवड आहे.",
      download: "डाउनलोड:",
      cv: "जीवनवृत्त (CV)",
      timelineHeading: "पदे",
    },

    timeline: [
      { date: "जुलै २०२६ — सद्य", role: "पोस्ट-डॉक्टरल संशोधक", org: "शांघाय जिआओ टोंग विद्यापीठ" },
      { date: "एप्रिल २०२५ — मार्च २०२६", role: "पोस्ट-डॉक्टरल संशोधक", org: "NISER, भुवनेश्वर" },
      { date: "ऑगस्ट २०१८ — डिसेंबर २०२४", role: "पीएच.डी., विश्वविज्ञान", org: "IISER मोहाली" },
      { date: "२०१५ — २०१७", role: "एम.एस्सी. भौतिकशास्त्र (खगोलशास्त्र व खगोलभौतिकी)", org: "सावित्रीबाई फुले पुणे विद्यापीठ / IUCAA" },
      { date: "२०१२ — २०१५", role: "बी.एस्सी. भौतिकशास्त्र", org: "मुंबई विद्यापीठ" },
    ],

    research: {
      heading: "संशोधन",
      links: { scholar: "Google Scholar", orcid: "ORCID", inspire: "INSPIRE-HEP", ads: "NASA ADS" },
      tabs: {
        intro: {
          title: "प्रस्तावना",
          body: `आइनस्टाइनच्या सामान्य सापेक्षता सिद्धांतानुसार, गुरुत्वाकर्षण हे पदार्थ आणि ऊर्जेच्या अस्तित्वामुळे अवकाश-काळात निर्माण होणाऱ्या वक्रतेतून उद्भवते. या वक्रतेमुळे पदार्थाचे परस्पर आकर्षण घडते, ज्यातून आकाशगंगा, समूह (क्लस्टर्स), तंतू (फिलामेंट्स) आणि विशाल पोकळ्या (व्हॉइड्स) यांसारख्या वैश्विक संरचना — एकत्रितपणे विश्वाची विशाल-प्रमाण संरचना (Large-Scale Structure, LSS) म्हणून ओळखल्या जाणाऱ्या — निर्माण होतात.

    या संरचनांचे मापन जवळजवळ एका शतकभर उत्क्रांत होत आले आहे — हबलच्या प्रारंभिक आकाशगंगा गणनेपासून ते 2dFGRS, SDSS, DESI आणि Euclid सारख्या आधुनिक रेडशिफ्ट सर्वेक्षणांपर्यंत, ज्यांनी एक विलोभनीय वैश्विक जाळ्याची (कॉस्मिक वेब) रचना उघड केली आहे. तंतू आणि पोकळ्यांचे हे गुंतागुंतीचे जाळे हे प्रारंभिक विश्वातील चलनशील (इन्फ्लेशनरी) युगातून उरलेल्या पदार्थ-घनता क्षेत्रातील सूक्ष्म आद्य चढउतारांना गुरुत्वाकर्षण कसे वाढवते हे दर्शवते.

    LSS चे सैद्धांतिक आकलन इन्फ्लेशन दरम्यान निर्माण झालेल्या सूक्ष्म क्वांटम चढउतारांपासून सुरू होते, जे विश्वाच्या प्रसरण व शीतलनासह गुरुत्वाकर्षणाखाली वाढत गेले. प्रारंभिक रेषीय (लिनियर) टप्प्यात, हे विक्षोभ (पर्टर्बेशन्स) रेषीय विक्षोभ सिद्धांत आणि ट्रान्सफर फलनांद्वारे चांगल्या प्रकारे वर्णिले जातात, जे वैश्विक सूक्ष्मतरंग पार्श्वभूमी (CMB) च्या निरीक्षणांशी सुसंगत आहेत. कालांतराने, गुरुत्वीय संकोचन अरेषीय (नॉन-लिनियर) टप्प्यात प्रवेश करते, ज्यातून पदार्थाचे डार्क मॅटर हेलोंमध्ये संघनन होते — जे आकाशगंगांचे जन्मस्थान ठरतात.

    माझे संशोधन या संरचना-निर्मिती प्रक्रियेचा अभ्यास करते, विशेषतः अरेषीय गुरुत्वीय क्लस्टरिंग वैश्विक संरचनांचे वितरण व उत्क्रांती कशी घडवते यावर भर देते. विश्वविज्ञानीय सिम्युलेशन्स आणि विश्लेषणात्मक प्रतिमानांच्या संयोगातून, डार्क मॅटर आणि बॅरिऑनिक पदार्थ या संरचनांच्या वाढीवर व निरीक्षणीय विश्वावर कसा प्रभाव टाकतात याचा मी अभ्यास करते.`,
        },
        halo: {
          title: "आकाशगंगा/हेलो",
          body: `डार्क मॅटर हेलो — गुरुत्वीयदृष्ट्या बद्ध अशा प्रणाली ज्यांच्या आत आकाशगंगा तयार होतात व उत्क्रांत होतात. हे हेलो विलीनीकरण (मर्जर) व संचयनातून वाढतात, वैश्विक जाळ्याचा तंतुमय गाभा तयार करतात. त्यांची विपुलता, अंतर्गत रचना आणि उत्क्रांती ही अंतर्निहित विश्वविज्ञान व संरचना-निर्मितीच्या भौतिकशास्त्राविषयी समृद्ध माहिती नोंदवते.

    आम्ही स्केल-फ्री आणि ΛCDM विश्वविज्ञानांमध्ये हेलोंचे सांख्यिकीय गुणधर्म व उत्क्रांती समजून घेण्यावर लक्ष केंद्रित केले. आम्ही दाखवून दिले की हेलो वस्तुमान फलनाच्या सार्वत्रिकतेतील विचलन हे इनपुट पॉवर स्पेक्ट्रमच्या उतारामुळे उद्भवते. या कामाने दाखवले की ΛCDM प्रतिमाने स्केल-फ्री समतुल्यांशी जुळवता येतात. यातून आद्य परिस्थिती हेलोंची लोकसंख्या व उत्क्रांती कशी घडवते आणि हे परिणाम अचूकपणे टिपण्यासाठी विश्लेषणात्मक प्रतिमाने का सुधारावी लागतात, याची नवी अंतर्दृष्टी मिळते. पुढे जाऊन, गुरुत्वीय संकोचनाची क्रियाविधी प्रतिमानित करण्यासाठी आणि सैद्धांतिक हेलो वस्तुमान फलन अंदाज सुधारण्यासाठी आम्ही सिम्युलेशन्स वापरण्याचे उद्दिष्ट ठेवतो.

    आम्ही हेलोंच्या आकारातील स्व-समानता (सेल्फ-सिमिलॅरिटी) आणि विश्वविज्ञानीय मापदंडांवरील तिचे अवलंबित्व अभ्यासले, आणि त्यांत सार्वत्रिक स्केलिंग वर्तन आढळले. यावर आधारित, विलीनीकरण व परिसराद्वारे चालणाऱ्या बदलत्या आकारशास्त्राचा आकाशगंगेच्या गुणधर्मांवर कसा परिणाम होतो हे समजून घेण्याचे आमचे उद्दिष्ट आहे. मानक सममित प्रतिमानांपलीकडे या हेलोंची संरचनात्मक गुंतागुंत टिपण्यासाठी, आम्ही घनता क्षेत्राचे गोलाकार हार्मोनिक विघटन (स्फेरिकल हार्मोनिक डीकंपोझिशन) वापरतो. ही चौकट आदर्श त्रिअक्षीयतेपासूनचे (उदा. l=1 द्विध्रुव) विचलन मोजण्यास सक्षम करते, जे हेलोच्या गतिक स्थितीचा व त्याच्या उपग्रहांच्या स्थानिक वितरणाचा एक सशक्त तपासक ठरते.

    नवीन प्रस्तावित सिम्युलेशन रन्ससह, बॅरिऑन्स मोठ्या-प्रमाणावरील डार्क मॅटर वितरणावर — सहसंबंध फलन, हेलो बायस व विविध क्रॉस-सहसंबंधांवरील परिणाम तपासून — तसेच लहान-प्रमाणावरील वितरणावर, ज्यात कॉस्मिक डॉनदरम्यान आकाशगंगा सामावणाऱ्या हेलोंच्या घनता प्रोफाइलमधील बदलांचा समावेश आहे, कसा प्रभाव टाकतात याचा आम्ही अभ्यास करू.

    संबंधित साहित्य:
    <br />
    <a href="https://academic.oup.com/mnras/article/521/4/5960/7091923?login=true" target="_blank" rel="noopener noreferrer">[MNRAS लेख] स्केल इन्व्हेरिअंट प्रतिमानांमधील हेलो वस्तुमान फलन</a>
    <br />
    <a href="https://ui.adsabs.harvard.edu/abs/2025asi..confO..68N/abstract" target="_blank" rel="noopener noreferrer">[ASI गोषवारा] विश्वविज्ञानीय सिम्युलेशन्समधील हेलो आकारांची स्व-समानता</a>
    <br />
    <a href="https://arxiv.org/abs/2603.26640" target="_blank" rel="noopener noreferrer">[प्रीप्रिंट] हेलो आकाराची सार्वत्रिकता आणि वैश्विक कालानुरूप त्याची आकारशास्त्रीय उत्क्रांती</a>`,
        },
        hubble: {
          title: "विश्वविज्ञानीय तणाव",
          body: `आधुनिक विश्वविज्ञान ΛCDM प्रतिमानाच्या यशावर आधारलेले आहे, तरीही अचूक निरीक्षणांनी अनेक सातत्यपूर्ण विसंगती उघड केल्या आहेत — तथाकथित विश्वविज्ञानीय तणाव — हबल तणाव, S8 तणाव, आणि अती-विशाल-प्रमाणावरील नमुन्यांचे अस्तित्व.

      यांपैकी सर्वात महत्त्वाचा म्हणजे हबल तणाव, ज्यात विश्वाच्या प्रसरण दराचे अंदाज मापन पद्धतीनुसार ४-५ प्रमाणित विचलनांनी भिन्न असतात. हे तणाव नवीन भौतिकशास्त्रामुळे उद्भवतात की वैश्विक संरचनेच्या गुंतागुंतीमुळे किंवा निरीक्षणीय त्रुटींमुळे, हे समजून घेणे अजूनही आव्हानात्मक आहे.

      गुरुत्वीय क्लस्टरिंग व वैश्विक परिसर या निरीक्षित विसंगतींना कसे कारणीभूत ठरतात याचा आम्ही अभ्यास करतो. मोठ्या-आकारमानाच्या विश्वविज्ञानीय एन-बॉडी सिम्युलेशन्स वापरून, आम्ही विशिष्ट वेग (पेक्युलियर व्हेलॉसिटीज) आणि स्थानिक घनता चढउतार हबल-लमेत्र स्थिरांकाच्या मापनांना कसे पूर्वग्रहित करतात याचे परीक्षण केले. आमचे निष्कर्ष दर्शवतात की आकाशगंगेसारख्या (मिल्की वे) परिसरांमुळे स्थानिकरीत्या अनुमानित प्रसरण दरात ५% पर्यंत बदल होऊ शकतो, जो हबल तणावाचा काही भाग स्पष्ट करतो.

      एकसमानतेच्या प्रमाणाबाबतची चर्चा — विश्व खरोखर एका विशिष्ट प्रमाणापलीकडे एकसमान बनते का, हा प्रश्न. विश्वविज्ञानीय सिम्युलेशन्सवर फ्रॅक्टल डायमेन्शन विश्लेषण वापरून, अलीकडे नोंदवलेल्या जायंट आर्क व बिग रिंगसारख्या अती-विशाल संरचना ΛCDM अंदाजांशी सुसंगत आहेत की सांख्यिकीय एकसमानतेच्या भंगाचे सूचक आहेत, याची आम्ही चाचणी करतो.

      स्थानिक घनता परिसरांशी सहसंबंध असलेल्या बल्क फ्लो सांख्यिकी मोजण्यासाठी आम्ही मोठ्या-आकारमानाच्या सिम्युलेशन्स चालवल्या आहेत. हे निष्कर्ष सुसंगत प्रवाह (कोहेरंट फ्लोज) विश्वविज्ञानीय मापनांना कसे पूर्वग्रहित करतात आणि आपले निरीक्षित स्थान ΛCDM अपेक्षांचे प्रातिनिधिक आहे का, हे स्पष्ट करतील.

      पुढे जाऊन, DESI, LSST आणि Euclid सारख्या आगामी सर्वेक्षणांतील माहितीसह हे विश्लेषण एकत्र करून, परिसर, वैश्विक विचरण (कॉस्मिक व्हेरिअन्स) व सर्वेक्षण भूमितीचे परिणाम अंगभूत मापदंडांपासून वेगळे करणारी चौकट उभारण्याचा माझा मानस आहे.

      संबंधित साहित्य:
      <br />
      <a href="https://journals.aps.org/prd/abstract/10.1103/PhysRevD.111.043516" target="_blank" rel="noopener noreferrer">[PRD लेख] गुरुत्वीय क्लस्टरिंगमुळे हबल-लमेत्र स्थिरांक मापनांतील विचलन</a>
      <br />
      <a href="https://youtu.be/JJmDFDxWJhg" target="_blank" rel="noopener noreferrer">[ICTP व्याख्यान] गुरुत्वीय क्लस्टरिंगमुळे हबल-लमेत्र स्थिरांक मापनांतील विचलन</a>
      <br />
      <a href="https://ui.adsabs.harvard.edu/abs/2024asi..confO..15G/abstract" target="_blank" rel="noopener noreferrer">[ASI गोषवारा] गुरुत्वीय क्लस्टरिंगमुळे हबल-लमेत्र स्थिरांक मापनांतील विचलन</a>`,
        },
        numerical: {
          title: "संख्यात्मक विकृती",
          body: `विश्व प्राथमिक घनता चढउतारांपासून आज आपण पाहत असलेल्या गुंतागुंतीच्या विशाल-प्रमाण संरचनांपर्यंत कसे उत्क्रांत होते हे समजून घेण्यासाठी विश्वविज्ञानीय सिम्युलेशन्स अत्यावश्यक साधने आहेत. मात्र, या सिम्युलेशन्सना संगणकीय मर्यादा असतात, ज्यामुळे भौतिक अन्वयार्थ विकृत करणाऱ्या संख्यात्मक त्रुटी (आर्टिफॅक्ट्स) निर्माण होऊ शकतात. मर्यादित बॉक्स आकार, वियुक्त कण नमुनाकरण (डिस्क्रीट पार्टिकल सॅम्पलिंग), बल विभेदन (फोर्स रिझोल्यूशन) आणि क्षणिक विधी (ट्रान्झिएंट मोड्स) यांसारख्या समस्या सिम्युलेशन्स अरेषीय गुरुत्वीय क्लस्टरिंग व हेलो निर्मिती किती अचूकपणे टिपतात यावर परिणाम करू शकतात. Euclid, LSST आणि DESI सारख्या सर्वेक्षणांना आवश्यक असलेल्या अचूकतेशी जुळणाऱ्या पुढील पिढीच्या अचूक विश्वविज्ञानीय सिम्युलेशन्ससाठी, संख्यात्मक त्रुटींना खऱ्या भौतिक संकेतांपासून पद्धतशीरपणे वेगळे करणे महत्त्वाचे आहे.

      आद्य परिस्थिती निर्मिती व त्यानंतरची गतिक उत्क्रांती यांतील विसंगतीतून उद्भवणाऱ्या क्षणिक वैशिष्ट्यांचा उगम आम्ही तपासला. लहान-प्रमाणावरील शक्ती (पॉवर) गहाळ असल्यास मोड-कपलिंग, हेलो संकोचन व संरचनांच्या वाढीवर कसा परिणाम होतो हे आम्ही दाखवले. आमच्या विश्लेषणाने विश्वविज्ञानीय सिम्युलेशन्सच्या आरंभीकरण व उत्क्रांतीसाठी मार्गदर्शक तत्त्वांचा एक संच पुरवला, ज्यामुळे अरेषीय गतिकी व हेलो सांख्यिकीच्या अभ्यासासाठी त्यांची विश्वासार्हता सुधारली.

      सिम्युलेशन्सच्या नव्या मालिकेचा वापर करून, मर्यादित बॉक्स आकार हेलो आकार, घनता प्रोफाइल व वस्तुमान फलनांसारख्या व्युत्पन्न राशींवर कसा परिणाम करतो याचे आम्ही परीक्षण करत आहोत. आमचे निष्कर्ष दर्शवतात की सुमारे ५० Mpc पेक्षा लहान सिम्युलेशन बॉक्ससाठी हा परिणाम पद्धतशीर व लक्षणीय आहे, जे हेलो गुणधर्म अचूकपणे वैशिष्ट्यीकृत करण्यात आकारमान परिणामांचे महत्त्व अधोरेखित करते.

      संबंधित साहित्य:
      <br />
      <a href="https://link.springer.com/article/10.1007/s12036-025-10055-x" target="_blank" rel="noopener noreferrer">[JOAA लेख] विश्वविज्ञानीय एन-बॉडी सिम्युलेशन्समधील क्षणिक वैशिष्ट्यांचा उगम</a>`,
        },
        thermo: {
          title: "संकीर्ण",
          body: `१. कॉस्मो-थर्मो
      <br />
      उत्तरकालीन (लेट-टाइम) विश्वविज्ञानाच्या उष्मागतिकीय (थर्मोडायनॅमिक) अन्वयार्थाचा अभ्यास करून आमचे अलीकडील व सुरू असलेले काम हा संबंध तपासते. विश्वविज्ञानीय प्रतिमाने उष्मागतिकीय स्थैर्य प्राप्त करू शकतात का, हे तपासण्यासाठी आम्ही गतिक प्रणाली (डायनॅमिकल सिस्टिम्स) दृष्टिकोन स्वीकारतो. आम्हाला आढळते की विश्व अनेक कलावस्था-संक्रमणांतून (फेज ट्रान्झिशन्स) जाऊ शकत असले, तरी ते खऱ्या अर्थाने स्थिर समतोलास कधीही पोहोचत नाही.

      संबंधित साहित्य:
      <br />
      <a href="https://onlinelibrary.wiley.com/doi/10.1002/prop.70094" target="_blank" rel="noopener noreferrer">[Fortschr. Phys. लेख] उत्तरकालीन विश्वविज्ञानाच्या उष्मागतिकीचा गतिक प्रणाली दृष्टिकोन
      </a>`,
        },
      },
    },

    scipop: {
      heading: "विज्ञानप्रसार",
      p1: "छोटे स्पष्टीकरणात्मक लेखन, अनौपचारिक लेख आणि अधूनमधून सोप्या भाषेतील प्रबोधनपर व्याख्यानांतून मी शैक्षणिक जगाबाहेरही विज्ञान पोहोचवण्याचा प्रयत्न करते. जे या क्षेत्रातील नाहीत पण कुतूहल बाळगतात अशांसाठी विश्वविज्ञान/भौतिकशास्त्र/विज्ञानातील कल्पना थोड्या अधिक सुलभ करण्याचा हा एक छोटासा प्रयत्न आहे.",
      story: "रेडशिफ्टेड मेमरीज्",
      storyTagline: "इतिहास प्रकाशात लिहिला जातो, तेव्हा तो प्रकाश रेडशिफ्ट झाला तर काय होते?",
      storyBody: "माझी लघुकथा इंडिया सायन्स फेस्टिव्हल २०२६ मधील 'स्पिन युवर सायन्स' या स्पर्धेत देशपातळीवर टॉप २० अंतिम फेरीसाठी निवडली गेली. ती विश्वविज्ञानीय संकल्पनांची सांगड कथानकाशी घालून आपण इतिहासाकडे कसे पाहतो हे उलगडते.",
      video1Title: "माझे वैश्विक भूताबरोबरचे साहस | माझ्या पीएच.डी.चा २-मिनिटांचा फेरफटका",
      video1Body: "माझ्या पीएच.डी. संशोधनावरील दोन मिनिटांची चित्रफीत — डार्क मॅटर विश्वाला कसा आकार देतो आणि आपले वैश्विक स्थान मोजलेल्या प्रसरण दरावर कसा परिणाम करते हे स्पष्ट करते. यूट्यूबवर पहा.",
      video2Title: "विश्वातील संरचना निर्मिती",
      video2Body: "पदवीपूर्व विद्यार्थ्यांसाठी एक तासाचे व्याख्यान. प्रारंभिक विश्वातील सूक्ष्म चढउतारांतून आकाशगंगा, समूह आणि वैश्विक जाळे कसे तयार होतात, तसेच गुरुत्वाकर्षण व विश्वविज्ञानीय सिम्युलेशन्सची भूमिका आज आपण पाहत असलेल्या विशाल-प्रमाण संरचनेला कशी आकार देते, याची ओळख यात करून दिली आहे.",
    },

    gallery: {
      heading: "प्रतिमा गॅलरी",
      tabs: { illustration: "विज्ञान चित्रण", photography: "छायाचित्रण", caricatures: "व्यंगचित्रे+", misc: "संकीर्ण" },
      illustration: {
        tree: "हेलो विलीनीकरण वृक्ष (मर्जर ट्री)",
        cosmic_web: "वैश्विक जाळे / डार्क मॅटर",
        sciart: "पुरस्कारप्राप्त विज्ञानकला",
        visible_matter: "दृश्यमान पदार्थ",
        h0: "स्थानिक घनतेसह हबल स्थिरांक पूर्वग्रह",
        web2: "विविध प्रमाणांवरील डार्क मॅटर",
        fractal: "फ्रॅक्टल संरचना: Python. Turtle",
      },
      photography: {
        pmkway: "आकाशगंगेचा मेघ आणि मृग नक्षत्र, स्थळ: इसापूर, महाराष्ट्र",
        ptrailing: "तारा-मार्ग (स्टार ट्रेल), स्थळ: कसोल, हिमाचल प्रदेश",
        ptelescope: "दुर्बीण मांडणी",
        pduck: "बदक, स्थळ: शिवसागर, आसाम",
        pcamouflage: "छद्मावरण (कॅमफ्लाज), स्थळ: SPPU",
        pbird: "पक्षी, स्थळ: सुखना सरोवर, पंजाब",
      },
      caricatures: {
        cjvn: "जयंत विष्णू नारळीकर",
        c2024: "निबाच्या मागच्या बाजूने",
        c12024: "अनिश्चित",
        c2020: "कोविड कालीन कंटाळा",
        c2017: "२०१७ संग्रह ! यांतील काही सार्वजनिक व्यक्ती नाहीत !",
        c22009: "२००९ संग्रह: भाग दुसरा",
        c12009: "२००९ संग्रह: भाग पहिला",
      },
      misc: {
        meTalking: "परिषदांमध्ये बोलताना: ICTP आणि ASI",
        homeImg: "घर/इसापूर/पश्चिम घाट",
      },
    },

    contact: {
      title: "संपर्क",
      intro: "सहकार्य, व्याख्याने, चर्चा आणि अभिप्रायासाठी संपर्क साधा.",
      email: "ईमेल:",
      digital: "डिजिटल उपस्थिती:",
      linkedin: "LinkedIn",
      youtube: "YouTube",
      goodreads: "goodreads",
      download: "डाउनलोड:",
      cv: "जीवनवृत्त (CV)",
      thesis: "प्रबंध",
    },

    footer: {
      lastUpdated: "शेवटचे अद्ययावत: १४ ऑगस्ट २०२६",
    },
  },
};

export default translations;
