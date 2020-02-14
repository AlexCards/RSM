document.addEventListener("DOMContentLoaded", () => {
  for (smallImg of document.querySelectorAll(".imgContainer img")) {
    smallImg.addEventListener("click", function() {
      console.log(this);
    });
  }
  for (el of document.querySelectorAll(".imgContainer")) {
    if (el.childElementCount > 3) {
      const leftArrow = document.createElement(`img`);
      const rightArrow = document.createElement(`img`);

      rightArrow.src = "/SVG_Icons/str_small_right.svg";
      leftArrow.src = "/SVG_Icons/str_small_left.svg";

      el.parentElement.appendChild(leftArrow);
      el.parentElement.appendChild(rightArrow);

      leftArrow.classList.add("leftArrow");
      rightArrow.classList.add("rightArrow");
    }
  }
});
