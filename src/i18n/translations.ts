export const translations = {
  en: {
    siteTitle: "Neerav Gala - Real Estate Data Analytics Consultant",
    siteDescription: "Real Estate 🏠 Data Analytics 🤖 Consultant",
    name: "Neerav Gala",
    tagline: "Real Estate 🏠 Data Analytics 🤖 Consultant",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    experience: "Experience",
    education: "Education",
    projects: "Projects/Papers",
    
    // Experience
    patrizia: {
      title: "Associate (Investment Planning and Reporting)",
      company: "PATRIZIA SE",
      location: "Frankfurt am Main, Germany",
      period: "Feb 2020 - May 2025"
    },
    cushman: {
      title: "Intern - Valuation",
      company: "Cushman and Wakefield",
      location: "Frankfurt am Main, Germany",
      period: "Feb 2019 - Dec 2019"
    },
    meenakshi: {
      title: "Engineer Trainee",
      company: "Meenakshi Infrastructure",
      location: "Hyderabad, India",
      period: "Dec 2016 - May 2017"
    },
    
    // Education
    gtech: {
      degree: "MSc Data Analytics",
      school: "Georgia Institute of Technology",
      location: "Online",
      period: "Aug 2024 - current"
    },
    ebs: {
      degree: "MSc Real Estate",
      school: "EBS University",
      location: "Oestrich Winkel, Germany",
      period: "Jan 2018 - Nov 2020"
    },
    vit: {
      degree: "Bachelors Civil Engineering",
      school: "VIT University",
      location: "Vellore, India",
      period: "Jan 2018 - Nov 2020"
    },
    
    // Projects
    thesis: {
      title: "EBS University Master Thesis - German rental price prediction",
      description: "Comparison of Different Regression Methodologies for Rental Price Prediction in the German Residential Market"
    },
    realrobo: {
      title: "RealRobo - Automated Real Estate Analyst",
      description: "An LLM chatbot that uses decision trees algorithm to calculate the feature that has the highest impact of the sales price of a house. And also backs it up with some explanation.",
      videoAlt: "Intro clip demonstrating data visualizations related to real estate analytics. Video controls available for play, pause, and timeline navigation.",
      videoNotSupported: "Your browser does not support the video element."
    },
    gtech_paper: {
      title: "Georgia Institute of Technology - Project Paper",
      description: "Classification of Brain Tumors using Hybrid Deep Learning Models",
      articleLink: "Article Link:"
    }
  },
  de: {
    siteTitle: "Neerav Gala - Immobilien-Datenanalyse-Berater",
    siteDescription: "Immobilien 🏠 Datenanalyse 🤖 Berater",
    name: "Neerav Gala",
    tagline: "Immobilien 🏠 Datenanalyse 🤖 Berater",
    email: "E-Mail",
    linkedin: "LinkedIn",
    github: "GitHub",
    experience: "Berufserfahrung",
    education: "Ausbildung",
    projects: "Projekte/Veröffentlichungen",
    
    // Experience
    patrizia: {
      title: "Associate (Investitionsplanung und Berichterstattung)",
      company: "PATRIZIA SE",
      location: "Frankfurt am Main, Deutschland",
      period: "Feb 2020 - Mai 2025"
    },
    cushman: {
      title: "Praktikant - Bewertung",
      company: "Cushman and Wakefield",
      location: "Frankfurt am Main, Deutschland",
      period: "Feb 2019 - Dez 2019"
    },
    meenakshi: {
      title: "Ingenieur-Trainee",
      company: "Meenakshi Infrastructure",
      location: "Hyderabad, Indien",
      period: "Dez 2016 - Mai 2017"
    },
    
    // Education
    gtech: {
      degree: "MSc Datenanalyse",
      school: "Georgia Institute of Technology",
      location: "Online",
      period: "Aug 2024 - aktuell"
    },
    ebs: {
      degree: "MSc Immobilienwirtschaft",
      school: "EBS Universität",
      location: "Oestrich Winkel, Deutschland",
      period: "Jan 2018 - Nov 2020"
    },
    vit: {
      degree: "Bachelor Bauingenieurwesen",
      school: "VIT Universität",
      location: "Vellore, Indien",
      period: "Jan 2018 - Nov 2020"
    },
    
    // Projects
    thesis: {
      title: "EBS Universität Masterarbeit - Vorhersage deutscher Mietpreise",
      description: "Vergleich verschiedener Regressionsmethoden zur Vorhersage von Mietpreisen auf dem deutschen Wohnungsmarkt"
    },
    realrobo: {
      title: "RealRobo - Automatisierter Immobilienanalyst",
      description: "Ein LLM-Chatbot, der Entscheidungsbaum-Algorithmen verwendet, um das Merkmal zu berechnen, das den größten Einfluss auf den Verkaufspreis eines Hauses hat. Und dies auch mit einer Erklärung untermauert.",
      videoAlt: "Intro-Clip mit Datenvisualisierungen zur Immobilienanalyse. Videosteuerung verfügbar für Wiedergabe, Pause und Timeline-Navigation.",
      videoNotSupported: "Ihr Browser unterstützt das Video-Element nicht."
    },
    gtech_paper: {
      title: "Georgia Institute of Technology - Projektarbeit",
      description: "Klassifizierung von Hirntumoren mit hybriden Deep-Learning-Modellen",
      articleLink: "Artikel-Link:"
    }
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = typeof translations[Language];
