// Navbar toggle for mobile
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", !expanded);
});

// GSAP Animations
window.addEventListener("load", () => {
  gsap.from(".intro-hi", { y: -50, opacity: 0, duration: 1 });
  gsap.from(".intro-name", { y: 50, opacity: 0, duration: 1, delay: 0.3 });
  gsap.from(".intro-sub", { opacity: 0, duration: 1, delay: 0.6 });
  gsap.from(".hero-actions", { opacity: 0, y: 30, duration: 1, delay: 0.9 });
});

// Scroll animation for sections
const sections = document.querySelectorAll(".section");
sections.forEach((sec) => {
  gsap.from(sec, {
    scrollTrigger: {
      trigger: sec,
      start: "top 80%"
    },
    y: 50,
    opacity: 0,
    duration: 1
  });
});

// Dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();
