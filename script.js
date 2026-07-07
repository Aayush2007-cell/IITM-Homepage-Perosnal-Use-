document.addEventListener("DOMContentLoaded", () => {

  console.log("IIT Madras homepage (educational recreation) loaded");

  // Mobile navigation toggle
  const navToggle = document.getElementById("navToggle");
  const primaryNav = document.getElementById("primaryNav");

  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = primaryNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu when a nav link is tapped (mobile)
    primaryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        primaryNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Back to top button
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.classList.toggle("visible", window.scrollY > 400);
    });
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Footer "last updated" timestamp
  const lastUpdated = document.getElementById("lastUpdated");
  if (lastUpdated) {
    const now = new Date();
    const formatted = now.toLocaleString("en-IN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).replace(",", "");
    lastUpdated.textContent = `Website last updated on: ${formatted}`;
  }

  // Subtle entrance for notice cards
  const notices = document.querySelectorAll(".notice");
  notices.forEach((notice, i) => {
    notice.style.opacity = "0";
    notice.style.transform = "translateY(8px)";
    notice.style.transition = "opacity .4s ease, transform .4s ease";
    setTimeout(() => {
      notice.style.opacity = "1";
      notice.style.transform = "translateY(0)";
    }, 80 * i);
  });

});