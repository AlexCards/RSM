document.addEventListener("DOMContentLoaded", () => {
  const sliderContent = document.querySelector(".sliderContent");
  const slides = document.querySelectorAll(".slide");
  const points = document.querySelectorAll(".point");
  const rightArrow = document.querySelector(".right");
  const leftArrow = document.querySelector(".left");

  let counter = 0;

  const setOder = element => {
    element.style.order = counter;
    counter++;
  };

  const classListCleaner = (elements, element, classList) => {
    for (element of elements) {
      element.classList.remove(classList);
    }
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
      classListCleaner(points, point, "selected");

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

  for (arrow of document.querySelectorAll(".arrows")) {
    arrow.addEventListener("click", () => {
      clearInterval(sliderInterval);
      sliderInterval = setInterval(slider, time);
    });
  }

  rightArrow.addEventListener("click", () => {
    classListCleaner(points, point, "selected");

    if (i === 4) {
      sliderContent.insertBefore(slides[0], slides[i]);
      points[0].classList.add("selected");

      return (i = 0);
    } else {
      points[i + 1].classList.add("selected");
      sliderContent.insertBefore(slides[i + 1], slides[i]);

      return i++;
    }
  });

  leftArrow.addEventListener("click", () => {
    classListCleaner(points, point, "selected");

    if (i === 0) {
      sliderContent.insertBefore(slides[4], slides[i]);
      points[4].classList.add("selected");

      return (i = 4);
    } else {
      sliderContent.insertBefore(slides[i - 1], slides[i]);
      points[i - 1].classList.add("selected");

      return i--;
    }
  });
});
