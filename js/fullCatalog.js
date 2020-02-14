document.addEventListener("DOMContentLoaded", () => {
  const fullCatalog = document.querySelector(".fullCatalog");
  const btn = document.querySelector(".fullContentBtn");

  fullCatalog.style.height = "0px";
  document.querySelector(".fullCatalog table").style.display = "none";

  const menuIco = new Image();
  menuIco.src = "/SVG_Icons/menu.svg";

  const appender = btn.appendChild(menuIco);

  const openFullCatalog = () => {
    document.querySelector(
      ".container"
    ).style.gridTemplateRows = `70px 70px auto 340px`;

    document.querySelector(
      ".container"
    ).style.gridTemplateAreas = `"header header" "nav nav" "fullCatalog fullCatalog" "slider catalog" "main main" "section section"`;
  };

  const closeFullCatalog = () => {
    document.querySelector(
      ".container"
    ).style.gridTemplateRows = `70px 70px 340px`;

    document.querySelector(
      ".container"
    ).style.gridTemplateAreas = `"header header" "nav nav" "slider catalog" "main main" "section section"`;
  };

  btn.addEventListener("click", function() {
    if (fullCatalog.style.height === "0px") {
      //open
      menuIco.src = "/SVG_Icons/close.svg";

      openFullCatalog();

      fullCatalog.style.height = "310px";
      fullCatalog.style.transition = "height .2s ease";

      this.classList.add("close");

      document.querySelector(".fullCatalog table").style.display =
        "inline-block";
    } else {
      //close
      document.querySelector(".fullCatalog table").style.display = "none";

      menuIco.src = "/SVG_Icons/menu.svg";

      fullCatalog.style.height = "0px";

      setTimeout(closeFullCatalog, 200);

      this.classList.remove("close");
    }
  });
});
