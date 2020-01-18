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
  time = 5000;

  slider = () => {
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
  };

  let sliderInterval = setInterval(slider, time);

  for (point of points) {
    setOder(point);

    point.addEventListener("click", function() {
      for (point of points) {
        point.classList.remove("selected");
      }
      points[this.style.order].classList.add("selected");

      sliderContent.insertBefore(
        slides[this.style.order],
        sliderContent.firstElementChild
      );

      i = parseInt(this.style.order);

      clearInterval(sliderInterval);
      sliderInterval = setInterval(slider, time);
    });
  }
});
