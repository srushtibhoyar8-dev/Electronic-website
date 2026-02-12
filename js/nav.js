function toggleMenu() {
  const s = document.getElementById("sidebar");
  s.style.left = s.style.left === "0px" ? "-250px" : "0px";
}

// CART COUNT UPDATE FUNCTION
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = document.getElementById("cart-count");

  if (count) {
    count.innerText = cart.length;
  }
}

// Page load pe counter update
document.addEventListener("DOMContentLoaded", updateCartCount);
