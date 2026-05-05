const projectsData = {
  submittly: {
    title: "Submittly - Automated content submission",
    tech: "MongoDB, Express.js, React.js, Node.js, WebSockets",
    image: "./projects/submittly.png",
    details: [
      "Built a full-stack MERN application with role-based access across 3 user types.",
      "Integrated real-time team-admin chat via WebSockets",
    ],
  },
  zapElectric: {
    title: "ZAP Power",
    tech: " Laravel, MySQL, REST APIs, Stripe, Google Maps API, Push Notifications",
    image: "./projects/zap.png",
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
    details: [
      "Engineered a high-speed Laravel ticketing system that centralizes user grievances and automates resolution workflows",
      "Engineered a seamless workflow for ticket escalation and automated email notifications and significantly reducing manual overhead.",
    ],
  },
  examLms: {
    title: " Exam-360 LMS ",
    tech: " Laravel, PHP, Learning Management System",
    image: "./projects/exam360-lms.png",
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
    details: [
      "Developed a specialized Event ERP to photography reservations",
      "Automated financial tracking and deposit management, reducing administrative errors during peak event seasons.",
      
    ],
  },
  crownPalace: {
    title: "Crown Palace Marquee",
    tech: " Laravel, PHP, ERP, Marquee Event Reservation ",
    image: "./projects/marquee.png",
    details: [
      "Developed a specialized Event ERP to manage multi-hall availability and reservations",
      "Automated financial tracking and deposit management, reducing administrative errors during peak event seasons.",
     
    ],
  },
  mrk: {
    title: "MRK Car Carrier Services",
    tech: " Laravel, PHP, ERP, Car Carrier Services ",
    image: "./projects/mrk.png",
    details: [
      "Engineered a logistics ERP to automate car carrier workflows, from pickup scheduling to final delivery.",
      "Implemented electronic Billing and fleet monitoring to digitize the entire vehicle transport lifecycle.",
    ],
  },
  alhaaj: {
    title: "AL-Haaj Bundoo Khan",
    tech: "PHP, Online Order System",
    image: "./projects/al-haaj.png",
    details: [
      "Engineered a seamless real-time order management workflow to synchronize kitchen production with customer delivery and pickup requests.",
      "Developed a high-traffic online ordering system that digitizes the restaurant’s menu and streamlines front-of-house operations.",
    ],
  },
  musafir: {
    title: "Musafir",
    tech: "JS, Firebase, Admin Panel for Traveling App",
    image: "./projects/musafir.png",
    details: [
      "Developed a high-speed traveling app admin panel using JavaScript and Firebase for real-time data synchronization and user management",
      "Engineered a dynamic booking dashboard, enabling instant updates to travel packages and live customer support.",
    ],
  },
  pos: {
    title: "Point Of Sale",
    tech: "PHP, Point of Sale, SaaS",
    image: "./projects/pos.png",
    details: [
      "Designed and developed the API for a mobile e-commerce platform featuring a custom bidding and auction system.",
      "Integrated multiple payment gateways and secure user authentication methods.",
      "Engineered the bidding logic to handle simultaneous, real time bid placements.",
    ],
  },
  //   adobe: {
  //     title: "Zaba",
  //     tech: "Web Design, Adobe XD to Code",
  //     image: "./projects/zaba.png",
  //     details: [
  //       "Designed and developed the API for a mobile e-commerce platform featuring a custom bidding and auction system.",
  //       "Integrated multiple payment gateways and secure user authentication methods.",
  //       "Engineered the bidding logic to handle simultaneous, real time bid placements.",
  //     ],
  //   },
};

const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalSubheading = document.getElementById("modal-subheading");
const modalDetails = document.getElementById("modal-details");
const modalImage = document.getElementById("modal-image");

function openModal(projectId) {
  const project = projectsData[projectId];

  if (!project) {
    console.error("Project data not found for ID:", projectId);
    return;
  }

  // Populate modal content
  modalTitle.textContent = project.title;
  modalSubheading.textContent = project.tech;
  modalImage.src = project.image;
  modalImage.alt = project.title;

  // Clear previous details and add new ones
  modalDetails.innerHTML = "";
  project.details.forEach((detail) => {
    const p = document.createElement("p");
    p.className = "flex items-start";
    p.innerHTML = `<svg class="w-5 h-5 mr-3 mt-1 text-accent-purple flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.857a.75.75 0 00-1.214-.858L9 11.143l-1.643-1.643a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l4.5-4.5a.75.75 0 00.04-1.04z" clip-rule="evenodd"></path></svg>${detail}`;
    modalDetails.appendChild(p);
  });

  // Show the modal with transition effect
  modal.classList.remove("opacity-0", "pointer-events-none");
  modal.querySelector("div:last-child").classList.remove("scale-95"); // Target the inner modal content for scaling effect
  modal.querySelector("div:last-child").classList.add("scale-100");
}

function closeModal() {
  // Hide the modal with transition effect
  modal.classList.add("opacity-0", "pointer-events-none");
  modal.querySelector("div:last-child").classList.remove("scale-100");
  modal.querySelector("div:last-child").classList.add("scale-95");
}

// Optional: Close modal when clicking outside of it
modal.addEventListener("click", (e) => {
  if (e.target.id === "project-modal") {
    closeModal();
  }
});

// Make sure the Tailwind config is still at the top
tailwind.config = {
  theme: {
    extend: {
      colors: {
        "accent-purple": "#06b6d4" /* Vibrant cyan  06b6d4*/,
        "dark-charcoal": "#121216" /* Very dark background */,
        "card-bg":
          "#1e1e24" /* Slightly lighter background for card and inner elements */,
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
};
