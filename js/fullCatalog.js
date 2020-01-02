document.addEventListener("DOMContentLoaded", () => {
  const fullCatalog = document.querySelector(".fullCatalog");
  const btn = document.querySelector(".fullContentBtn");

  fullCatalog.style.height = "0px";
  document.querySelector(".fullCatalog table").style.display = "none";

  const menuIco = new Image();
  menuIco.src = "/SVG_Icons/menu.svg";

  const appender = btn.appendChild(menuIco);

  btn.addEventListener("click", function() {
    if (fullCatalog.style.height === "0px") {
      //open
      menuIco.src = "/SVG_Icons/close.svg";

      fullCatalog.style.height = "310px";
      fullCatalog.style.transition = "height .5s ease";

      this.classList.add("close");

      document.querySelector(".fullCatalog table").style.display = "block";
    } else {
      //close
      document.querySelector(".fullCatalog table").style.display = "none";
      
      menuIco.src = "/SVG_Icons/menu.svg";

      fullCatalog.style.height = "0px";

      this.classList.remove("close");
    }
  });
});
