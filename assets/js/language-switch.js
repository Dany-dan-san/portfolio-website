document.addEventListener("DOMContentLoaded", () => {

  const languageLinks = document.querySelectorAll("[data-language]");

  const currentPath = window.location.pathname;

  const isCzech =
    currentPath === "/cs" ||
    currentPath === "/cs/" ||
    currentPath.startsWith("/cs/");

  languageLinks.forEach((link) => {

    const language = link.dataset.language;

    const active =
      (language === "cs" && isCzech) ||
      (language === "en" && !isCzech);

    link.classList.toggle("is-active", active);

    if (active) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }

  });

});