// eslint-disable linebreak-style
const menuButton = document.querySelector("#menu-icon");
const exitMenuButton = document.querySelector("#exit-menu-icon");
const menuLinks = document.querySelectorAll(".mobile-menu-link");
const menuBtns = [menuButton, exitMenuButton];
const menuContainer = document.querySelector(".mobile-menu-container");
const wholePage = document.querySelector("html");

menuBts.map((menuBtn) =>
  menuBtn.addEventListener("click", () => {
    menuContainer.classList.toggle("mobile-menu-toggler");
    wholePage.classList.toggle("overflow-none");
  })
);

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", () => {
    menuContainer.classList.toggle("mobile-menu-toggler");
  });
});
