const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#nav-menu");
const storedTheme = localStorage.getItem("portfolio-theme");
const resumeLink = document.querySelector(".resume-link");

if (storedTheme) {
  root.dataset.theme = storedTheme;
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  root.dataset.theme = "dark";
}

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem("portfolio-theme", nextTheme);
});

navToggle?.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

if (window.location.protocol !== "file:") {
  fetch("assets/Srisuthan_Resume.pdf", { method: "HEAD" })
    .then((response) => {
      if (!response.ok) throw new Error("Resume file unavailable");
    })
    .catch(() => {
      if (!resumeLink) return;
      resumeLink.removeAttribute("download");
      resumeLink.href = "mailto:suthansri692@gmail.com?subject=Resume%20request%20-%20Srisuthan%20V%20P%20R";
      resumeLink.setAttribute("aria-label", "Request resume by email");
    });
}

const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add("is-visible"));
}
