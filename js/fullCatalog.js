const fullCatalog = document.querySelector(".fullCatalog");
let fullCatalogBtn = getComputedStyle(
  document.querySelector("#fullCatalogBtn"),
  ":before"
).getPropertyValue("content");

console.log(fullCatalogBtn);


function showFullContainer() {
  fullCatalog.classList.toggle("fullCatalogOnClick");
  fullCatalogBtn = `url("http://127.0.0.1:5500/SVG_Icons/close.svg")`
  console.log(fullCatalogBtn);
  
}
