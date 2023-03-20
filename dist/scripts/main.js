const heroImageBg = document.querySelector(".section__image-bg");
const heroImageBgSrc = {
  mobile: "./images/bg-intro-mobile.svg",
  desktop: "./images/bg-intro-desktop.svg",
};

// Change hero image depending on screen resize
window.addEventListener("resize", () => {
  if (window.innerWidth <= 375) {
    heroImageBg.setAttribute("src", heroImageBgSrc.mobile);
  } else {
    heroImageBg.setAttribute("src", heroImageBgSrc.desktop);
  }
});

if (window.innerWidth <= 375) {
  heroImageBg.setAttribute("src", heroImageBgSrc.mobile);
} else {
  heroImageBg.setAttribute("src", heroImageBgSrc.desktop);
} // this is for the first load

// Hamburger menu interaction
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuIconSrc = {
  hamburger: "./images/icon-hamburger.svg",
  close: "./images/icon-close.svg",
};
const nav = document.querySelector(".nav");
const main = document.querySelector(".l-main");
const overlay = document.querySelector(".overlay");

const showMenu = () => {
  nav.classList.remove("nav--hidden");
  const currentYPosition = window.scrollY;
  const navCurrentTop = currentYPosition + 88 + "px";
  nav.style.top = navCurrentTop;
  overlay.style.display = "block";
  hamburgerMenu.setAttribute("src", hamburgerMenuIconSrc.close);
};

const hideMenu = () => {
  nav.classList.add("nav--hidden");
  nav.style.top = "-201px";
  overlay.style.display = "none";
  hamburgerMenu.setAttribute("src", hamburgerMenuIconSrc.hamburger);
};

const toggleMenu = () => {
  const navIsVisible = !nav.classList.contains("nav--hidden");
  if (navIsVisible) {
    hideMenu();
  } else {
    showMenu();
  }
};

hamburgerMenu.addEventListener("click", toggleMenu);
main.addEventListener("click", hideMenu);

window.addEventListener("resize", () => {
  const navIsVisible = !nav.classList.contains("nav--hidden");
  if (window.innerWidth >= 768 && navIsVisible) {
    hideMenu();
  }
});

window.addEventListener("scroll", () => {
  const currentYPosition = window.scrollY;
  const navCurrentTop = currentYPosition + 88 + "px";
  nav.style.top = navCurrentTop;
});
