document.addEventListener("DOMContentLoaded", () => {
  const fullCatalog = document.querySelector(".fullCatalog");
  const btn = document.querySelector("#fullContentBtn");

  fullCatalog.style.height = "0px";

  btn.addEventListener("click", () => {
    if (fullCatalog.style.height === "0px") {
      //open
      fullCatalog.style.height = "310px";
      fullCatalog.style.transition = "height .5s ease";
    } else {
      //close
      fullCatalog.style.height = "0px";
    }
  });

  
});
