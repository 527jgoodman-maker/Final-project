/* ───────────────── NAVBAR SHADOW ───────────────── */

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

});

/* ───────────────── ACTIVE LINKS ───────────────── */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop;

    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }

  });

});

/* ───────────────── SIMPLE CART ───────────────── */

let cartCount = 0;

function addToCart() {

  cartCount++;

  document.getElementById("cartCount").textContent = cartCount;

  const cartBtn = document.getElementById("cartBtn");

  cartBtn.style.transform = "scale(1.15)";

  setTimeout(() => {
    cartBtn.style.transform = "scale(1)";
  }, 200);

}

/* ───────────────── SMOOTH SCROLL ───────────────── */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e) {

    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });

  });

});