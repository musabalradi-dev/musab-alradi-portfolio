// ===== Mobile Menu Functionality =====
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
const body = document.body;
const navLinksElements = document.querySelectorAll(".nav-link");

// Toggle Mobile Menu
menuToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  navLinks.classList.toggle("active");

  // تغيير الأيقونة
  const icon = menuToggle.querySelector("i");
  if (navLinks.classList.contains("active")) {
    icon.classList.remove("bx-menu");
    icon.classList.add("bx-x");
    body.style.overflow = "hidden"; // منع التمرير عند فتح المنيو
  } else {
    icon.classList.remove("bx-x");
    icon.classList.add("bx-menu");
    body.style.overflow = ""; // إعادة التمرير
  }
});

// Close menu when clicking on a link
navLinksElements.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove("active");
      menuToggle.querySelector("i").classList.remove("bx-x");
      menuToggle.querySelector("i").classList.add("bx-menu");
      body.style.overflow = "";
    }
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav-links") && !e.target.closest(".menu-toggle")) {
    navLinks.classList.remove("active");
    const icon = menuToggle.querySelector("i");
    icon.classList.remove("bx-x");
    icon.classList.add("bx-menu");
    body.style.overflow = "";
  }
});

// Close menu on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
    menuToggle.querySelector("i").classList.remove("bx-x");
    menuToggle.querySelector("i").classList.add("bx-menu");
    body.style.overflow = "";
  }
});

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    e.preventDefault();
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // إغلاق المنيو المتنقل إذا كان مفتوحاً
      if (window.innerWidth <= 768) {
        navLinks.classList.remove("active");
        menuToggle.querySelector("i").classList.remove("bx-x");
        menuToggle.querySelector("i").classList.add("bx-menu");
        body.style.overflow = "";
      }

      // التمرير السلس للعنصر المستهدف
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// ===== Active Nav Link Based on Scroll =====
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";
  const scrollPosition = window.pageYOffset + 150;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinksElements.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ===== Navbar Scroll Effect =====
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ===== Handle Window Resize =====
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove("active");
    menuToggle.querySelector("i").classList.remove("bx-x");
    menuToggle.querySelector("i").classList.add("bx-menu");
    body.style.overflow = "";
  }
});

// ===== Initialize on DOM Load =====
document.addEventListener("DOMContentLoaded", () => {
  // تطبيق تأثير Scroll للنافبار
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  }

  // تعيين الرابط النشط الأولي
  if (window.location.hash) {
    const activeLink = document.querySelector(
      `a[href="${window.location.hash}"]`
    );
    if (activeLink) {
      activeLink.classList.add("active");
    }
  } else {
    const homeLink = document.querySelector('a[href="#home"]');
    if (homeLink) {
      homeLink.classList.add("active");
    }
  }

  // تهيئة العداد المتحرك
  animateCounter();

  // إرسال النموذج
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // في التطبيق الحقيقي، هنا سيتم إرسال البيانات للخادم
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);

      console.log("Form submitted:", data);

      // عرض رسالة نجاح
      alert("شكراً على رسالتك! سأتواصل معك قريباً.");
      this.reset();
    });
  }

  // التحقق من تفضيلات الثيم المحفوظة
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.className = savedTheme;
  }

  // التحقق من تفضيلات اللغة المحفوظة
  const savedLang = localStorage.getItem("language") || "en";
  if (savedLang === "ar") {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
  }
});

// ===== Animated Counter for Stats =====
function animateCounter() {
  const counters = document.querySelectorAll(".stat-number");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute("data-count"));
          const duration = 1500;
          const increment = target / (duration / 16);
          let current = 0;

          const updateCounter = () => {
            current += increment;
            if (current >= target) {
              counter.textContent = target;
            } else {
              counter.textContent = Math.floor(current);
              requestAnimationFrame(updateCounter);
            }
          };

          requestAnimationFrame(updateCounter);
          observer.unobserve(counter);
        }
      });
    },
    { threshold: 0.5, rootMargin: "0px 0px -50px 0px" }
  );

  counters.forEach((counter) => observer.observe(counter));
}
