
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
   
    sidebar.classList.toggle("active");
}

window.onclick = function(event) {
    const sidebar = document.getElementById("sidebar");
    const hamburger = document.querySelector(".hamburger");
    
    if (sidebar.classList.contains("active") && 
        !sidebar.contains(event.target) && 
        event.target !== hamburger) {
        sidebar.classList.remove("active");
    }
}


const products = [
    {id:1, name:"Laptop", price:50000, cat:"Laptop", img:"images/lap-hp.jpg",
  moreImgs:["images/lap-hp.jpg","images/lap-acer.jpg","images/lap-hp.jpg"],
  desc:"High performance Laptop with 16GB RAM."},
  
    {id:2, name:"Phone", price:20000, cat:"Phone", img:"images/mob-oneplus.jpg",
  moreImgs:["images/mob-oneplus.jpg","images/mob-iphone.jpg","images/mob1.jpg"],
  desc:"Latest 5G Smartphone with AMOLED Display." },

    {id:3, name:"TV", price:30000, cat:"TV", img:"images/tv1.jpg",
  moreImgs:["images/tv1.jpg","images/tv21.jpg","images/tv22.jpg"],
  desc:"4K Ultra HD Smart LED TV."},

    { id:4, name:"Headphones", price:2000, cat:"Audio", img:"images/head5.jpg",
  moreImgs:["images/head5.jpg","images/head22.jpg","images/head4.jpg"],
  desc:"Noise Cancelling Wireless Headphones."}
];

function displayProducts() {
    const productList = document.getElementById('product-list');
    if (!productList) return;

    productList.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.style.cursor = "pointer";

        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">₹${product.price}</p>
            <button class="btn-add">Add to Cart</button>
        `;

       
        card.addEventListener("click", () => {
            window.location.href = `product-details.html?id=${product.id}`;
        });

     
        card.querySelector(".btn-add").addEventListener("click", (e) => {
            e.stopPropagation();
            addToCart(product.id);
        });

        productList.appendChild(card);
    });
}

// Call function
displayProducts();



function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.innerText = cart.length;
    }
}

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products.find(p => p.id === productId);
    
    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        alert(`${product.name} cart mein add ho gaya hai!`);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
    updateCartCount();
});



function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartContainer = document.querySelector('.cart-items');
    let totalElement = document.getElementById('total');
    let total = 0;

    if (!cartContainer) return; 

    cartContainer.innerHTML = ""; 

    if (cart.length === 0) {
        cartContainer.innerHTML = "<div style='text-align:center; padding: 50px;'><h3>Aapka cart khali hai!</h3><a href='products.html'>Shop Now</a></div>";
        totalElement.innerText = "0";
        return;
    }

    cart.forEach((item, index) => {
      
        let priceValue = item.price;
        
        if (typeof priceValue === 'string') {
         
            priceValue = parseFloat(priceValue.replace(/[^\d.]/g, '')); 
        } else {
          
            priceValue = parseFloat(priceValue);
        }

        total += priceValue;

        cartContainer.innerHTML += `
            <div class="cart-item" style="display: flex; align-items: center; border-bottom: 1px solid #ddd; padding: 10px;">
                <img src="${item.img}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: contain; margin-right: 20px;">
                <div class="cart-details" style="flex: 1;">
                    <h3 style="margin: 0;">${item.name}</h3>
                    <p style="color: #B12704; font-weight: bold;">₹${priceValue.toLocaleString('en-IN')}</p>
                </div>
                <button class="remove-btn" onclick="removeItem(${index})" style="background: #cc0000; color: white; border: none; padding: 5px 10px; cursor: pointer; border-radius: 4px;">Remove</button>
            </div>
        `;
    });

 
    totalElement.innerText = total.toLocaleString('en-IN');
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
  
    if (typeof updateCartCount === "function") updateCartCount();
}

document.addEventListener('DOMContentLoaded', displayCart);