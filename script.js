const skills = [
  "Laravel",
  "PHP",
  "React.js",
  "Node.js",
  "Express.js",
  "JavaScript (ES6+)",
  "TypeScript",
  "MySQL",
  "MongoDB",
  "RESTful API Development",

  "Vue.js",
  "Inertia.js",
  "Tailwind CSS",
  "Bootstrap 5",

  "Stripe (Payment Gateway)",
  "Google Maps API",
  "Firebase",
  "AWS (EC2, S3, RDS, Lambda, CloudFront)",

  "Docker",
  "Redis / Caching",
  "GitHub Actions (CI/CD)",
  "WebSockets",

  "Git / GitHub",
  "Agile / Scrum",
  "Postman",
];
const projectsData = {
  submittly: {
    title: "Submittly - Automated content submission",
    tech: "MongoDB, Express.js, React.js, Node.js, WebSockets",
    image: "./projects/submittly.png",
    link: "https://project-z4nuk.vercel.app/",
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
      "Full-cycle Laravel backend serving 2000+ users via 85+ RESTful APIs.",
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
      "Built a scalable Learning Management System featuring a custom assessment engine and seamless digital education.",
      "Implemented role-based access control and dashboard to track student progress and engagement in real-time.",
    ],
  },
  wapdaCity: {
    title: "  Wapda City",
    tech: "Laravel, PHP, MySQL, MVC Architecture",
    image: "./projects/wapda.png",
    details: [
      "Built a large-scale housing society platform with 9+ modules including gate pass management, HR, employee, land records, and vehicle management — handling 100k–150k gate pass transactions monthly",
      "Refactored legacy codebases, reducing page load time by 30% through backend performance improvements.",
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
    ],
  },
  musafir: {
    title: "Musafir",
    tech: "JS, Firebase, Admin Panel for Traveling App",
    image: "./projects/musafir.png",
    link: "https://cgit.pk/musafir",
    details: [
      "Developed a high-speed traveling app admin panel using JavaScript and Firebase for real-time data synchronization and user management",
    ],
  },
  pos: {
    title: "Point Of Sale",
    tech: "PHP, Point of Sale, SaaS",
    image: "./projects/pos.png",
    link: "https://cgit.pk/pos/",
    details: [
      "Designed and developed a SaaS Point of Sale web application",
      "Integrated financial reporting and inventory management system",
    ],
  },
  adobe: {
    title: "Zaba",
    tech: "Web Design, Adobe XD to Code",
    image: "./projects/zaba.png",
    details: [
      "Converted an Adobe XD design into a fully responsive front-end using HTML, Bootstrap, and JavaScript — pixel-perfect handoff from design to code.",
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
  badgeContainer: document.getElementById("badge-container"),
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
    return `<div class="flex-shrink-0 flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-800 border border-gray-600 text-gray-300">
      <span class="text-[10px]  tracking-wider">Design</span>
    </div>`;
  if (!link)
    return `<div class="flex-shrink-0 flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-800 border border-gray-600 text-gray-300" title="Private Project">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
      <span class="text-[10px] ">Private</span>
    </div>`;
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
      <div class="flex items-start justify-between gap-2 mb-1">
        <h4 class="text-xl font-semibold group-hover:text-accent-purple transition truncate">${project.title.split(" - ")[0]}</h4>
        <div class="flex-shrink-0 flex items-center pt-1">
          ${getActionMarkup(id, project.link)}
        </div>
        
        
      </div>
      <p class="text-sm text-gray-400 line-clamp-1">${project.tech}</p>
    </div>
  `,
    )
    .join("");
};

function getPrivateBadgeHTML() {
  return `
    <div class="flex-shrink-0 flex items-center pt-1">
      <div class="flex-shrink-0 flex items-center gap-1 px-4 py-0.5 rounded-full bg-gray-800 border border-gray-500 text-gray-300" title="Private Project">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <span class="text-[14px]">Private</span>
      </div>
    </div>`;
}

//  Modal Logic
const toggleModal = (show = false, projectId = null) => {
  if (show && projectId) {
    const project = projectsData[projectId];
    dom.mTitle.textContent = project.title;
    dom.mSub.textContent = project.tech;
    dom.mImage.src = project.image;
    dom.mProjLink.href = project.link;

    const isPrivate = !project.link;
    dom.mProjLink.classList.toggle("hidden", isPrivate);
    
    dom.badgeContainer.innerHTML = isPrivate ? getPrivateBadgeHTML() : "";

    dom.mImgLink.href = project.image;

    dom.mDetails.innerHTML = project.details
      .map(
        (detail) => `
      <p class="flex items-start">
        <svg class="w-5 h-5 mr-3 mt-1 text-accent-purple flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.857a.75.75 0 00-1.214-.858L9 11.143l-1.643-1.643a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l4.5-4.5a.75.75 0 00.04-1.04z" clip-rule="evenodd"></path></svg>
        ${detail}
      </p>
    `,
      )
      .join("");

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
