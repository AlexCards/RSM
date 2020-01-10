document.addEventListener("DOMContentLoaded", () => {
  const sliderContent = document.querySelector(".sliderContent");
  const slides = document.querySelectorAll(".slide");
  const points = document.querySelectorAll(".point");

  let counter = 0;

  const setOder = element => {
    element.style.order = counter;
    counter++;
  };

  let i = 0;
  const time = 3000;

  setInterval(() => {
    points[i].classList.remove("selected");
    switch (i) {
      case 0:
      case 1:
      case 2:
      case 3:
        sliderContent.insertBefore(slides[i + 1], slides[i]);

        i++;

        break;

      case 4:
        sliderContent.insertBefore(slides[0], slides[4]);

        i = 0;
        break;

      default:
        break;
    }

    points[i].classList.add("selected");
  }, time);

  for (point of points) {
    setOder(point);

    point.addEventListener("click", function() {
      for (point of points) {
        point.classList.remove("selected");
      }
      points[this.style.order].classList.add("selected");

      console.log(sliderContent.firstElementChild);
    });
  }
});
