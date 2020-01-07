document.addEventListener("DOMContentLoaded", () => {
  const shoppingCart = document.querySelector(".shopContainer");
  const checkbox = document.querySelector(".shopContainer input");
  const products = document.querySelectorAll(".shopingCartProduct");

  document.addEventListener("click", e => {
    if (!shoppingCart.contains(e.target)) {
      checkbox.checked = false;
    }
  });

  document.querySelector(".counter").innerHTML = products.length;
});
