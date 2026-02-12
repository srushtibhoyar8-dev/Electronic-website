let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// ADD TO CART
function addCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  saveCart();
  alert("Added to cart");
}

// REMOVE FROM CART
function removeCart(index) {
  cart.splice(index, 1);
  saveCart();
  showCart();
}

// SHOW CART
function showCart() {
  const container = document.querySelector(".cart-items");
  if (!container) return;

  container.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    container.innerHTML += `
      <div>
        ${item.name} - ₹${item.price}
        <button onclick="removeCart(${index})">
          Remove
        </button>
      </div>
    `;
  });

  document.getElementById("total").innerText = total;
}

showCart();
