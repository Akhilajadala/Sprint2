// Import modules
import listofproduct from "./listofproduct.js";
import topbrands from "./topbrands.js";

// Function to initialize the image slider
function initImageSlider() {
  const btnPrev = document.querySelector(".btn-container-prev");
  const btnNext = document.querySelector(".btn-container-next");
  const ImageContainerSlider = document.querySelector("#imageSliderContainer");

  btnNext.addEventListener("click", () => {
    ImageContainerSlider.scrollLeft += 200;
  });

  btnPrev.addEventListener("click", () => {
    ImageContainerSlider.scrollLeft -= 100;
  });
}

// Function to render list of products
function renderListofProducts() {
  const listofproductEL = document.querySelector(".listofproduct");
  let listofproductHTMl = "";

  for (let i = 0; i < listofproduct.length; i++) {
    listofproductHTMl += `
      <a href="#">
        <img src="${listofproduct[i].img}"/>
        <p>${listofproduct[i].dis}</p>
      </a>`;
  }

  listofproductEL.innerHTML = listofproductHTMl;
}

// Function to render top brands
function renderTopBrands() {
  const brandTopproductE1 = document.querySelector(".brandTopproduct");
  let brandTopproductHTML = "";

  for (let i = 0; i < topbrands.length; i++) {
    brandTopproductHTML += `
      <a href="#">
        <img src="${topbrands[i].img}"/>
        <p>${topbrands[i].dis}</p>
      </a>`;
  }

  brandTopproductE1.innerHTML = brandTopproductHTML;
}

// Initialize the image slider
initImageSlider();

// Render list of products
renderListofProducts();

// Render top brands
renderTopBrands();
