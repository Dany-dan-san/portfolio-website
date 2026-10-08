document.addEventListener("DOMContentLoaded", () => {

  const menuButton = document.querySelector(".mobile-menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  const submenuButton = document.querySelector(".mobile-submenu-button");
  const servicesSubmenu = document.querySelector(".mobile-submenu");


  /* =======================================================
     MAIN MOBILE MENU
     ======================================================= */

  function openMenu() {
    menuButton.classList.add("is-open");
    mobileMenu.classList.add("is-open");

    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Close navigation");
  }


  function closeMenu() {
    menuButton.classList.remove("is-open");
    mobileMenu.classList.remove("is-open");

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");

    closeServicesSubmenu();
  }


  function toggleMenu() {
    const isOpen = menuButton.classList.contains("is-open");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }


  menuButton.addEventListener("click", toggleMenu);


  /* =======================================================
     SERVICES SUBMENU
     ======================================================= */

  function openServicesSubmenu() {
    submenuButton.classList.add("is-open");
    servicesSubmenu.classList.add("is-open");

    submenuButton.setAttribute("aria-expanded", "true");
  }


  function closeServicesSubmenu() {
    submenuButton.classList.remove("is-open");
    servicesSubmenu.classList.remove("is-open");

    submenuButton.setAttribute("aria-expanded", "false");
  }


  function toggleServicesSubmenu() {
    const isOpen =
      submenuButton.classList.contains("is-open");

    if (isOpen) {
      closeServicesSubmenu();
    } else {
      openServicesSubmenu();
    }
  }


  submenuButton.addEventListener(
    "click",
    toggleServicesSubmenu
  );


  /* =======================================================
     CLICK OUTSIDE
     ======================================================= */

  document.addEventListener("click", (event) => {

    const clickedInsideMenu =
      mobileMenu.contains(event.target);

    const clickedMenuButton =
      menuButton.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {
      closeMenu();
    }

  });


  /* =======================================================
     ESCAPE
     ======================================================= */

  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
      closeMenu();
    }

  });


  /* =======================================================
     RESET WHEN RETURNING TO DESKTOP
     ======================================================= */

  window.addEventListener("resize", () => {

    if (window.innerWidth > 1074) {
      closeMenu();
    }

  });

});