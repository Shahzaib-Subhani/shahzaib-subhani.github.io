const skills = [
  // Tier 1: Primary Stack & Architectural Ownership (Current Role)
  "Laravel",
  "PHP",
  "React.js",
  "RESTful API Development", // Managed 60+ APIs [cite: 6, 22]
  "MySQL", // Designed schemas for high-volume transactional data [cite: 7, 23]
  "System Architecture", // Designed Zap Electric from scratch

  // Tier 2: Specialized Integrations & High-Scale Operations
  "Stripe (Payment Gateway)", // Managed full integration for subscription billing [cite: 6, 23]
  "Google Maps API", // Real-time driver tracking and delivery management [cite: 23]
  "Query Optimization", // Reduced page load time by 30% [cite: 29]
  "Laravel 6 to 9 Migration", // Led major legacy refactoring and migration [cite: 27]
  "Node.js", // MERN stack and Udemy certification [cite: 43, 53]
  "Express.js",
  "MongoDB",

  // Tier 3: Deployment, DevOps & Infrastructure
  "AWS (EC2, S3, RDS, Lambda, CloudFront)", // Full development lifecycle [cite: 7, 16]
  "Docker",
  "GitHub Actions (CI/CD)",
  "WebSockets", // Real-time team-admin chat and evaluation pipelines [cite: 42, 43]
  "Redis / Caching",
  "Hostinger", // Platform deployment and testing [cite: 16, 22]

  // Tier 4: Front-End, Design & UI Implementation
  "JavaScript (ES6+)",
  "TypeScript",
  "Tailwind CSS",
  "Vue.js",
  "Inertia.js",
  "Bootstrap 5",
  "Adobe XD to Code",
  "Material UI",

  // Tier 5: Tools & Professional Workflow
  "Git / GitHub",
  "Agile / Scrum", // Experience in solo and agile environments [cite: 26]
  "Postman",
  "Firebase", // Real-time travel admin panel [cite: 38]
  "SMTP / API Email",
  "Composer / NPM",
];
const projectsData = {
  submittly: {
    title: "Submittly - Automated content submission",
    tech: "MongoDB, Express.js, React.js, Node.js, WebSockets",
    image: "./projects/submittly.png",
    link: "",
    details: [
      "Built a full-stack MERN application with role-based access across 3 user types.",
      "Integrated real-time team-admin chat via WebSockets",
    ],
  },
  zapElectric: {
    title: "ZAP Power",
    tech: " Laravel, MySQL, REST APIs, Stripe, Google Maps API, Push Notifications",
    image: "./projects/zap.png",
    link: "https://dashboard.zappower.co",
    details: [
      "Full-cycle Laravel backend serving 500–5,000 users via 60+ RESTful APIs.",
      " Integrated Stripe payment gateway for subscription billing and Google Maps API for real-time driver route tracking and delivery management.",
      "Designed and optimized database schemas to support high-volume transactional data across all platform module.",
    ],
  },
  examSupport: {
    title: "Exam-360 Support",
    tech: "Laravel, PHP, Complaint Management System",
    image: "./projects/exam-360.png",
    link: "https://support.exam360.in/",
    details: [
      "Engineered a high-speed Laravel ticketing system that centralizes user grievances and automates resolution workflows",
      "Engineered a seamless workflow for ticket escalation and automated email notifications and significantly reducing manual overhead.",
    ],
  },
  examLms: {
    title: " Exam-360 LMS ",
    tech: " Laravel, PHP, Learning Management System",
    image: "./projects/exam360-lms.png",
    link: "https://e-learn.exam360.in/",
    details: [
      "Built a scalable Learning Management System featuring a custom assessment engine and automated grading for seamless digital education.",
      "Implemented role-based access control and performance analytics dashboards to track student progress and engagement in real-time.",
    ],
  },
  wapdaCity: {
    title: "  Wapda City",
    tech: "Laravel, PHP, MySQL, MVC Architecture",
    image: "./projects/wapda.png",
    details: [
      "Built a comprehensive large-scale housing society platform with 9+ modules including gate pass management, HR, employee records, land records, and vehicle management — handling 300k–500k gate pass transactions per month",
      "Refactored and optimized legacy codebases, reducing page load time by 30% through aggressive database query optimization and backend performance improvements.",
      "Migrated legacy codebases from Laravel 6 to Laravel 9 for improved security and maintainability",
    ],
  },
  azuPhoto: {
    title: "AZU Studio",
    tech: " Laravel, PHP, ERP, Photography Reservation",
    image: "./projects/azustudio.png",
    link: "https://deskbook.cloud/",
    details: [
      "Developed a specialized Event ERP to photography reservations",
      "Automated financial tracking and deposit management, reducing administrative errors during peak event seasons.",
    ],
  },
  crownPalace: {
    title: "Crown Palace Marquee",
    tech: " Laravel, PHP, ERP, Marquee Event Reservation ",
    image: "./projects/marquee.png",
    link: "https://deskbook.cloud/",
    details: [
      "Developed a specialized Event ERP to manage multi-hall availability and reservations",
      "Automated financial tracking and deposit management, reducing administrative errors during peak event seasons.",
    ],
  },
  mrk: {
    title: "MRK Car Carrier Services",
    tech: " Laravel, PHP, ERP, Car Carrier Services ",
    image: "./projects/mrk.png",
    link: "https://deskbook.cloud/",
    details: [
      "Engineered a logistics ERP to automate car carrier workflows, from pickup scheduling to final delivery.",
      "Implemented electronic Billing and fleet monitoring to digitize the entire vehicle transport lifecycle.",
    ],
  },
  alhaaj: {
    title: "AL-Haaj Bundoo Khan",
    tech: "PHP, Online Order System",
    image: "./projects/al-haaj.png",
    link: "https://al-haajbundookhan.com",
    details: [
      "Engineered a seamless real-time order management workflow to synchronize kitchen production with customer delivery and pickup requests.",
      "Developed a high-traffic online ordering system that digitizes the restaurant’s menu and streamlines front-of-house operations.",
    ],
  },
  musafir: {
    title: "Musafir",
    tech: "JS, Firebase, Admin Panel for Traveling App",
    image: "./projects/musafir.png",
    link: "https://cgit.pk/musafir",
    details: [
      "Developed a high-speed traveling app admin panel using JavaScript and Firebase for real-time data synchronization and user management",
      "Engineered a dynamic booking dashboard, enabling instant updates to travel packages and live customer support.",
    ],
  },
  pos: {
    title: "Point Of Sale",
    tech: "PHP, Point of Sale, SaaS",
    image: "./projects/pos.png",
    link: "https://cgit.pk/pos/",
    details: [
      "Designed and developed the API for a mobile e-commerce platform featuring a custom bidding and auction system.",
      "Integrated multiple payment gateways and secure user authentication methods.",
      "Engineered the bidding logic to handle simultaneous, real time bid placements.",
    ],
  },
  adobe: {
    title: "Zaba",
    tech: "Web Design, Adobe XD to Code",
    image: "./projects/zaba.png",
    details: [
      "Designed and developed the API for a mobile e-commerce platform featuring a custom bidding and auction system.",
      "Integrated multiple payment gateways and secure user authentication methods.",
      "Engineered the bidding logic to handle simultaneous, real time bid placements.",
    ],
  },
};

// Tailwind config remains at the top/global level as per your script
tailwind.config = {
  theme: {
    extend: {
      colors: {
        "accent-purple": "#06b6d4",
        "dark-charcoal": "#121216",
        "card-bg": "#1e1e24",
      },
      fontFamily: { sans: ["Poppins", "sans-serif"] },
    },
  },
};

//  DOM Selectors
const dom = {
  skills: document.getElementById("skills-container"),
  projects: document.getElementById("projects-grid"),
  modal: document.getElementById("project-modal"),
  modalContent: document.querySelector("#project-modal > div:last-child"),
  mTitle: document.getElementById("modal-title"),
  mSub: document.getElementById("modal-subheading"),
  mDetails: document.getElementById("modal-details"),
  mImage: document.getElementById("modal-image"),
  mImgLink: document.getElementById("image-link"),
  mProjLink: document.getElementById("modal-project-link"),
};

//  UI Renderers
const renderSkills = () => {
  if (!dom.skills) return;
  dom.skills.innerHTML = skills
    .map(
      (skill) => `
    <span class="px-4 py-2 bg-card-bg text-gray-300 rounded-full border border-gray-700 text-sm font-medium hover:border-accent-purple hover:text-white transition-all duration-300 cursor-default">
      ${skill}
    </span>
  `,
    )
    .join("");
};
const getActionMarkup = (id, link) => {
  if (id === "adobe")
    return `<div class="badge-base"><span class="text-[10px] font-bold uppercase">Design</span></div>`;
  if (!link)
    return `<div class="badge-base"><svg class="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"/></svg><span class="text-[10px] font-bold uppercase">Private</span></div>`;
  return `<a href="${link}" target="_blank" class="text-gray-400 hover:text-accent-purple transition-colors p-1 external-link"><svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg></a>`;
};

const renderProjects = () => {
  if (!dom.projects) return;
  dom.projects.innerHTML = Object.entries(projectsData)
    .map(
      ([id, project]) => `
    <div class="group bg-card-bg p-6 rounded-xl border border-gray-700 hover:border-accent-purple/50 transition duration-300 cursor-pointer project-card" data-id="${id}">
      <div class="h-40 bg-gray-700 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
        <img src="${project.image}" loading="lazy" class="h-full w-full object-cover group-hover:scale-105 transition duration-500" alt="${project.title}">
      </div>
      <div class="flex items-center justify-between mb-1">
        <h4 class="text-xl font-semibold group-hover:text-accent-purple transition truncate mr-2">${project.title.split(" - ")[0]}</h4>
        ${getActionMarkup(id, project.link)}
      </div>
      <p class="text-sm text-gray-400 line-clamp-1">${project.tech}</p>
    </div>
  `,
    )
    .join("");
};

//  Modal Logic
const toggleModal = (show = false, projectId = null) => {
  if (show && projectId) {
    const project = projectsData[projectId];
    dom.mTitle.textContent = project.title;
    dom.mSub.textContent = project.tech;
    dom.mImage.src = project.image;
    dom.mProjLink.href = project.link || "#";
    dom.mImgLink.href = project.image;

    dom.mDetails.innerHTML = project.details.map(detail => `
      <p class="flex items-start">
        <svg class="w-5 h-5 mr-3 mt-1 text-accent-purple flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.857a.75.75 0 00-1.214-.858L9 11.143l-1.643-1.643a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l4.5-4.5a.75.75 0 00.04-1.04z"/></svg>
        ${detail}
      </p>
    `).join("");

    dom.modal.classList.remove("opacity-0", "pointer-events-none");
    dom.modalContent.classList.replace("scale-95", "scale-100");
  } else {
    dom.modal.classList.add("opacity-0", "pointer-events-none");
    dom.modalContent.classList.replace("scale-100", "scale-95");
  }
};

// Event Listeners (Event Delegation)
dom.projects?.addEventListener("click", (e) => {
  const card = e.target.closest(".project-card");
  const isExternalLink = e.target.closest(".external-link");
  
  if (card && !isExternalLink) {
    toggleModal(true, card.dataset.id);
  }
});

dom.modal?.addEventListener("click", (e) => {
  if (e.target === dom.modal || e.target.closest(".close-modal")) {
    toggleModal(false);
  }
});

// Init
renderSkills();
renderProjects();