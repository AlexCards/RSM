document.addEventListener("DOMContentLoaded", () => {
  const sliderContent = document.querySelector(".sliderContent");
  const slides = document.querySelectorAll(".slide");

  let i = 0;

  setInterval(() => {
    switch (i) {
      case 0:
      case 1:
      case 2:
      case 3:
        sliderContent.insertBefore(slides[i + 1], slides[i]);
        i++;
        break;

      case 4:
        setTimeout(() => {
          sliderContent.insertBefore(slides[0], slides[4]);
          i = 0;
        }, 1500);
        break;

      default:
        break;
    }
  }, 1500);
});
