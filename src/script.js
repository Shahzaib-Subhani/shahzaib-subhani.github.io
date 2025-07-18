import { gsap } from "gsap";
import $ from "jquery/dist/jquery.min";
import "./plugins";

function page_intro() {
    var e = gsap.timeline();
    e.to([".loading-screen h3", ".loading-screen .line-frame"], {
      ease: "power4.inOut",
      duration: 1,
      opacity: 1,
      y: "100%",
    }),
      e.to(".loading-screen", {
        ease: "expo.out",
        duration: 1.4,
        y: "100%",
        delay: 0.15,
      }),
      e.set(".loading-screen", {
        zIndex: -100,
      });
  }
(function () {
  var wind = $(window);

  /* =============================================================================
    -----------------------------  Smooth Scroll nav   -----------------------------
    ============================================================================= */

  $.scrollIt({
    upKey: 38, // key code to navigate to the next section
    downKey: 40, // key code to navigate to the previous section
    easing: "swing", // the easing function for animation
    scrollTime: 600, // how long (in ms) the animation takes
    activeClass: "active", // class given to the active nav element
    onPageChange: null, // function(pageIndex) that is called when page is changed
    topOffset: -100, // offste (in px) for fixed top navigation
  });

  /* =============================================================================
    --------------------------------  Navbar Menu   --------------------------------
    ============================================================================= */

  $(".navbar .dropdown").hover(
    function () {
      $(this).find(".dropdown-menu").addClass("show");
    },
    function () {
      $(this).find(".dropdown-menu").removeClass("show");
    }
  );

  $(".navbar .dropdown-item").hover(
    function () {
      $(this).find(".dropdown-side").addClass("show");
    },
    function () {
      $(this).find(".dropdown-side").removeClass("show");
    }
  );

  $(".navbar").on("click", ".navbar-toggler", function () {
    $(".navbar .navbar-collapse").toggleClass("show");
  });

  wind.on("scroll", function () {
    var bodyScroll = wind.scrollTop(),
      navbar = $(".navbar"),
      logo = $(".navbar.change .logo> img");

    if (bodyScroll > 300) {
      navbar.addClass("nav-scroll");
      logo.attr("src", "assets/imgs/logo-dark.png");
    } else {
      navbar.removeClass("nav-scroll");
      logo.attr("src", "assets/imgs/logo-light.png");
    }
  });

  function noScroll() {
    window.scrollTo(0, 0);
  }

  /* =============================================================================
    ------------------------------  Services active   ------------------------------
    ============================================================================= */

  $(".services .item").on("mouseenter", function () {
    $(".services .item").removeClass("active");
    $(this).addClass("active");

    if ($(this).hasClass("active")) {
      return false;
    }
  });

  /* =============================================================================
    ------------------------------  Data Background   ------------------------------
    ============================================================================= */

  var pageSection = $(".bg-img, section");
  pageSection.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css(
        "background-image",
        "url(" + $(this).data("background") + ")"
      );
    }
  });

  /* =============================================================================
    -----------------------------------  Tabs  -------------------------------------
    ============================================================================= */

  $("#tabs .tab-links").on("click", ".item-link", function () {
    var tab_id = $(this).attr("data-tab");

    $("#tabs .tab-links .item-link").removeClass("current");
    $(this).addClass("current");

    $(".tab-content").hide();
    $("#" + tab_id).show();
  });

  $("#tabs-fade .tab-links").on("click", ".item-link", function () {
    var tab2_id = $(this).attr("data-tab");

    $("#tabs-fade .tab-links .item-link").removeClass("current");
    $(this).addClass("current");

    $(".tab-content").fadeOut();
    $("#" + tab2_id).fadeIn();
  });

  /* =============================================================================
    ---------------------------------  Tolltip  ------------------------------------
    ============================================================================= */

  $("[data-tooltip-tit]")
    .hover(
      function () {
        $('<div class="div-tooltip-tit"></div>')
          .text($(this).attr("data-tooltip-tit"))
          .appendTo("body")
          .fadeIn("slow");
      },
      function () {
        $(".div-tooltip-tit").remove();
      }
    )
    .mousemove(function (e) {
      $(".div-tooltip-tit").css({ top: e.pageY + 10, left: e.pageX + 20 });
    });

  $("[data-tooltip-sub]")
    .hover(
      function () {
        $('<div class="div-tooltip-sub"></div>')
          .text($(this).attr("data-tooltip-sub"))
          .appendTo("body")
          .fadeIn("slow");
      },
      function () {
        $(".div-tooltip-sub").remove();
      }
    )
    .mousemove(function (e) {
      $(".div-tooltip-sub").css({ top: e.pageY + -15, left: e.pageX + 30 });
    });

  /* =============================================================================
    -----------------------------  Trigger Plugins  --------------------------------
    ============================================================================= */

  /* ========== Sticky ========== */

  $("#sticky_item").stick_in_parent();
})();

/* =============================================================================
-----------------------------  Parallax Animation  -----------------------------
============================================================================= */

(function () {
  const link = document.querySelectorAll(".hover-this");
  const cursor = document.querySelector(".cursor");
  const animateit = function (e) {
    const hoverAnim = this.querySelector(".hover-anim");
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,
      move = 25,
      xMove = (x / width) * (move * 2) - move,
      yMove = (y / height) * (move * 2) - move;
    hoverAnim.style.transform = `translate(${xMove}px, ${yMove}px)`;
    if (e.type === "mouseleave") hoverAnim.style.transform = "";
  };
  const editCursor = (e) => {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  };
  link.forEach((b) => b.addEventListener("mousemove", animateit));
  link.forEach((b) => b.addEventListener("mouseleave", animateit));
  window.addEventListener("mousemove", editCursor);

  $("a, .cursor-pointer").hover(
    function () {
      $(".cursor").addClass("cursor-active");
    },
    function () {
      $(".cursor").removeClass("cursor-active");
    }
  );

  let elements = document.querySelectorAll(".rolling-text");

  elements.forEach((element) => {
    let innerText = element.innerText;
    element.innerHTML = "";

    let textContainer = document.createElement("div");
    textContainer.classList.add("block");

    for (let letter of innerText) {
      let span = document.createElement("span");
      span.innerText = letter.trim() === "" ? "\xa0" : letter;
      span.classList.add("letter");
      textContainer.appendChild(span);
    }

    element.appendChild(textContainer);
    element.appendChild(textContainer.cloneNode(true));
  });

  elements.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.classList.remove("play");
    });
  });
})();

/* =============================================================================
-----------------------------  Button scroll up   ------------------------------
============================================================================= */

$(document).ready(function () {
  "use strict";

  var progressPath = document.querySelector(".progress-wrap path");
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 150;
  var duration = 550;
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > offset) {
      $(".progress-wrap").addClass("active-progress");
    } else {
      $(".progress-wrap").removeClass("active-progress");
    }
  });
  $(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });
});

/* =============================================================================
////////////////////////////////////////////////////////////////////////////////
============================================================================= */

$(function () {
  var width = $(window).width();
  if (width < 991) {
    ("use strict");

    $(".navbar .navbar-nav").on("click", ".nav-link", function () {
      $(".navbar .navbar-nav .dropdown .dropdown-menu").removeClass("show");

      $(this).parent().find(".dropdown-menu").addClass("show");
    });
  }
});

const loadSkills = () => {
  const skills = [
    {
      name: "Laravel",
      imageSrc: "assets/imgs/avif/skills/laravel.avif",
      imageError: "assets/imgs/skills/laravel.png",
      alt: "laravel",
    },
    {
      name: "PHP",
      imageSrc: "assets/imgs/avif/skills/php.avif",
      imageError: "assets/imgs/skills/php.png",
      alt: "php",
    },
    {
      name: "Vue",
      imageSrc: "assets/imgs/skills/vue.png",
      imageError: "assets/imgs/skills/vue.png",
      alt: "vue",
    },
    {
      name: "React",
      imageSrc: "assets/imgs/skills/react.png",
      imageError: "assets/imgs/skills/react.png",
      alt: "react",
    },
    {
      name: "MySQL",
      imageSrc: "assets/imgs/avif/skills/mysql.avif",
      imageError: "assets/imgs/skills/mysql.png",
      alt: "mysql",
    },
    {
      name: "JavaScript (Advance)",
      imageSrc: "assets/imgs/avif/skills/javascript.avif",
      imageError: "assets/imgs/skills/javascript.png",
      alt: "javascript",
    },
    {
      name: "jQuery",
      imageSrc: "assets/imgs/avif/skills/jquery.avif",
      imageError: "assets/imgs/skills/jquery.png",
      alt: "jquery",
    },
    {
      name: "Firebase",
      imageSrc: "assets/imgs/avif/skills/firebase.avif",
      imageError: "assets/imgs/skills/firebase.png",
      alt: "firebase",
    },
    {
      name: "TailWind CSS",
      imageSrc: "assets/imgs/avif/skills/tailwind.avif",
      imageError: "assets/imgs/skills/tailwind.png",
      alt: "tailwind",
    },
    {
      name: "Bootstrap",
      imageSrc: "assets/imgs/avif/skills/bootstrap.avif",
      imageError: "assets/imgs/skills/bootstrap.png",
      alt: "bootstrap",
    },
    {
      name: "Postman",
      imageSrc: "assets/imgs/skills/postman.png",
      imageError: "assets/imgs/skills/postman.png",
      alt: "postman",
    },
    {
      name: "GitHub",
      imageSrc: "assets/imgs/skills/github.png",
      imageError: "assets/imgs/skills/github.png",
      alt: "github",
    },
  ];

  const skillsGrid = document.getElementById("skills-grid");

  skills.forEach((skills) => {
    const gridItem = document.createElement("div");
    gridItem.classList.add("col-md-6");

    gridItem.innerHTML = `
       <div class="item mb-30">
          <div class="d-flex align-items-center mb-30">
            <div class="mr-30">
              <div class="img icon-img-40">
                <img src="${skills.imageSrc}" onerror="this.onerror=null; this.src='${skills.imageError}';" alt="${skills.alt}" loading="lazy"/>
              </div>
            </div>
            <div>
              <h6 class="fz-18">${skills.name}</h6>
            </div>
          </div>
        </div>`;

    skillsGrid.appendChild(gridItem);
  });
};

const loadWebsites = async () => {
  const websites = [
    {
      category: "ZAP Power",
      title: "Electricity and Battery Management System",
      imageSrc: "assets/imgs/avif/projects/zap.avif",
      imageError: "assets/imgs/portfolio/zap.png",
      alt: "zap power",
      href: "https://zappower.co",
    },
    {
      category: "Exam-360 Support",
      title: "Complaint Management System",
      imageSrc: "assets/imgs/avif/projects/exam-360.avif",
      imageError: "assets/imgs/portfolio/exam-360.png",
      alt: "exam-360",
      href: "https://support.exam360.in/",
    },
    {
      category: "Exam-360 LMS",
      title: "Learning Management System",
      imageSrc: "assets/imgs/avif/projects/exam360-lms.avif",
      imageError: "assets/imgs/portfolio/exam360-lms.png",
      alt: "exam-360 LMS",
      href: "https://support.exam360.in/el/login",
    },
    {
      category: "Wapda City",
      title: "Housing Society Management System",
      imageSrc: "assets/imgs/avif/projects/wapda.avif",
      imageError: "assets/imgs/portfolio/wapda.png",
      alt: "wapda-city",
      href: "javascript:void(0);",
    },
    {
      category: "AZU Studio",
      title: "Photography Reservation System & ERP",
      imageSrc: "assets/imgs/avif/projects/azustudio.avif",
      imageError: "assets/imgs/portfolio/azustudio.png",
      alt: "azu-studio",
      href: "https://mastudio.deskbook.cloud",
    },
    {
      category: "Crown Palace Marquee",
      title: "Marquee Event Reservation System & ERP",
      imageSrc: "assets/imgs/avif/projects/marquee.avif",
      imageError: "assets/imgs/portfolio/marquee.png",
      alt: "marquee",
      href: "https://cp.deskbook.cloud",
    },
    {
      category: "MRK Car Carrier Services",
      title: "Car Carrier Services System & ERP",
      imageSrc: "assets/imgs/avif/projects/mrk.avif",
      imageError: "assets/imgs/portfolio/wapda.png",
      alt: "mrk",
      href: "https://mrk.deskbook.cloud",
    },
    {
      category: "Flair Collections",
      title: "MultiVendor E-commerce Website",
      imageSrc: "assets/imgs/avif/projects/flair.avif",
      imageError: "assets/imgs/portfolio/flair.png",
      alt: "flair",
      href: "https://www.iflairyou.com/",
    },
    {
      category: "AL-Haaj Bundoo Khan",
      title: "Restaurant website & Online Order System",
      imageSrc: "assets/imgs/avif/projects/al-haaj.avif",
      imageError: "assets/imgs/portfolio/al-haaj.png",
      alt: "al-haaj",
      href: "https://www.al-haajbundookhan.com",
    },
    {
      category: "Zaba",
      title: "Web Design (Adobe XD to Code)",
      imageSrc: "assets/imgs/avif/projects/zaba.avif",
      imageError: "assets/imgs/portfolio/zaba.png",
      alt: "zaba",
      href: "javascript:void(0);",
    },
    {
      category: "Musafir",
      title: "Admin Panel for Traveling App (JS + Firebase)",
      imageSrc: "assets/imgs/avif/projects/musafir.avif",
      imageError: "assets/imgs/portfolio/musafir.png",
      alt: "musafir",
      href: "https://www.cgit.pk/musafir",
    },
    {
      category: "Point Of Sale",
      title: "Point of Sale website",
      imageSrc: "assets/imgs/avif/projects/pos.avif",
      imageError: "assets/imgs/portfolio/pos.png",
      alt: "pos",
      href: "https://www.cgit.pk/pos",
    },
    {
      category: "Segi Library",
      title: "Library Management System for Segi University",
      imageSrc: "assets/imgs/avif/projects/segi.avif",
      imageError: "assets/imgs/portfolio/segi.png",
      alt: "segi",
      href: "https://university.segi.edu.my/library/",
    },
    {
      category: "Punjab Horse Riding Club",
      title: "Horse Event Management System",
      imageSrc: "assets/imgs/avif/projects/horse.avif",
      imageError: "assets/imgs/portfolio/horse.png",
      alt: "horse",
      href: "javascript:void(0);",
    },
    {
      category: "Hotel",
      title: "Hotel Reservation System.",
      imageSrc: "assets/imgs/avif/projects/hotel.avif",
      imageError: "assets/imgs/portfolio/hotel.png",
      alt: "hotel",
      href: "https://cgit.pk/hotel/",
    },
    {
      category: "Mobile City",
      title: "Mobile E-commerce Site [Final Year Project]",
      imageSrc: "assets/imgs/avif/projects/mobile.avif",
      imageError: "assets/imgs/portfolio/mobile.png",
      alt: "mobile",
      href: "javascript:void(0);",
    },
  ];

  const portfolioGrid = document.getElementById("portfolio-grid");

  websites.forEach((website) => {
    const gridItem = document.createElement("div");
    gridItem.classList.add("col-lg-6", "col-md-6");

    gridItem.innerHTML = `
        <div class="item mt-50">
          <div class="img">
            <a href="${website.href}" class="portfolio-cursor">
              <img src="${website.imageSrc}" onerror="this.onerror=null; this.src='${website.imageError}';" alt="${website.alt}" loading="lazy" class="radius-8"/>
            </a>  
          </div>
          <div class="cont mt-30 d-flex align-items-center">
            <div>
              <span class="tag">${website.title}</span>
              <h6 class="line-height-1">
                <a href="${website.href}" class="portfolio-cursor">${website.category}</a>
              </h6>
            </div>
          </div>
        </div>`;

    portfolioGrid.appendChild(gridItem);
  });
  return new Promise((resolve) => {
    resolve(true);
  });
};

const contactSubmit = () => {
  const formMessages = document.querySelector(".form-message p");

  const sender = document.getElementById("inputEmail").value.trim();
  const message = document.getElementById("inputMessage").value.trim();
  const subject = document.getElementById("inputSubject").value.trim();
  const name = document.getElementById("inputName").value.trim();

  if (!sender || !message || !name || !subject) {
    formMessages.classList.remove("text-success");
    formMessages.classList.add("text-danger");
    formMessages.textContent = "Please fill all fields";
    return;
  }

  const sendEmail = {
    to_email: "shahzaibsubhani28@gmail.com",
    from_name: name,
    from_email: sender,
    message: `
    Name: ${name}
    Email: ${sender}
    Subject: ${subject}
    Message: ${message}`,
  };

  import("emailjs-com")
    .then(({ send }) => {
      send(
        "service_c8j04up",
        "template_c8rfgkc",
        sendEmail,
        "LvbutGXRFqzcFBA77"
      )
        .then((response) => {
          setMessage("text-success", "Message Sent Successfully");
          resetFormFields();
          hideMessage(1600);
        })
        .catch((error) => {
          setMessage("text-danger", "Something went wrong!");
          resetFormFields();
          hideMessage(1800);
        });
    })
    .catch((err) => {
      setMessage("text-danger", "Something went wrong!");
      resetFormFields();
      hideMessage(1800);
    });

  const resetFormFields = () => {
    document.getElementById("inputName").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputSubject").value = "";
    document.getElementById("inputMessage").value = "";
  };

  const setMessage = (messageType, message) => {
    const formMessages = document.querySelector(".form-message p");
    formMessages.classList.remove("text-success", "text-danger");
    formMessages.classList.add(messageType);
    formMessages.textContent = message;
  };

  const hideMessage = (delay) => {
    setTimeout(() => {
      document.querySelector(".form-message p").style.display = "none";
    }, delay);
  };
};

window.addEventListener("load", page_intro);
document.addEventListener("DOMContentLoaded", loadSkills);
document.addEventListener("DOMContentLoaded", async () => {
  await loadWebsites();
  $(".portfolio-cursor").hover(
    function () {
      $(".cursor").addClass("cursor-active");
    },
    function () {
      $(".cursor").removeClass("cursor-active");
    }
  );
});

const formButton = document.getElementById("contact-button");
formButton.addEventListener("click", contactSubmit);
