const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container form", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__container a", {
  ...scrollRevealOption,
  delay: 1500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

const productsToShow = [
  {
    name: "Long Sword",
    price: "55.00",
    image: "./assets/craft-1.png",
  },
  {
    name: "Blue Glaive",
    price: "60.00",
    image: "./assets/craft-2.png",
  },
  {
    name: "Blue Spear",
    price: "65.00",
    image: "./assets/craft-3.png",
  },
];

function filterProducts(query) {
  return productsToShow.filter((product) => {
    return product.name.toLowerCase().includes(query.toLowerCase());
  });
}

function renderProducts(products) {
  const productListDiv = document.getElementById("product-list");
  productListDiv.innerHTML = "";

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `<h3>${product.name}</h3>
    <p>$${product.price}</p>`;

    const productImage = document.createElement("img");
    productImage.src = product.image;

    productListDiv.appendChild(productDiv);
    productListDiv.appendChild(productImage);
  });
}

document.getElementById("search-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const searchInput = document.getElementById("search-input");
  const searchQuery = searchInput.value.trim();
  const filteredProducts = filterProducts(searchQuery);
  renderProducts(filteredProducts);
});
