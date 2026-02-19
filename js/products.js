
const products=[


 {id:1, name:"Laptop", price:50000, cat:"Laptop", img:"images/lap-hp.jpg",
  moreImgs:["images/lap-hp.jpg","images/lap-acer.jpg","images/lap-hp.jpg"],
  color:"Silver",
  warranty:"1 Year Warranty",
  size:"15.6 inch Display",
  desc:"High performance laptop with 16GB RAM. Suitable for office, gaming and multitasking."
 },

 {id:2, name:"Phone", price:20000, cat:"Phone", img:"images/mob-g1.jpg",
  moreImgs:["images/mob-oneplus.jpg","images/mob-iphone.jpg","images/mob1.jpg"],
  color:"Black",
  warranty:"1 Year Brand Warranty",
  size:"6.5 inch Display",
  desc:"Latest 5G smartphone with AMOLED display. Long battery life and fast performance."
 },

 {id:3, name:"TV", price:30000, cat:"TV", img:"images/tv1.jpg",
  moreImgs:["images/tv1.jpg","images/tv21.jpg","images/tv22.jpg"],
  color:"Black",
  warranty:"2 Years Warranty",
  size:"43 inch Screen",
  desc:"4K Ultra HD Smart LED TV. Enjoy OTT apps, clear sound and vivid picture quality."
 },

 {id:4, name:"Headphones", price:2000, cat:"Audio", img:"images/head5.jpg",
  moreImgs:["images/head5.jpg","images/head22.jpg","images/head4.jpg"],
  color:"Blue",
  warranty:"6 Months Warranty",
  size:"Adjustable Fit",
  desc:"Noise cancelling wireless headphones. Comfortable design with powerful bass."
 },

 {id:5, name:"Camera", price:25000, cat:"Camera", img:"images/camera1.jpg",
  moreImgs:["images/camera1.jpg","images/cam1.jpg","images/cam2.jpg"],
  color:"Black",
  warranty:"1 Year Warranty",
  size:"24.2 MP Lens",
  desc:"DSLR camera with high resolution images. Perfect for photography and videography."
 },

 {id:6, name:"Speaker", price:5000, cat:"Audio", img:"images/speaker.jpg",
  moreImgs:["images/speaker.jpg","images/speak2.jpg","images/speak3.jpg"],
  color:"Grey",
  warranty:"1 Year Warranty",
  size:"Portable Size",
  desc:"Portable Bluetooth speaker with deep bass. Ideal for parties and outdoor use."
 }

];



document.addEventListener("DOMContentLoaded", function(){

const container =
 document.querySelector(".product-grid") ||
 document.querySelector(".products");

function display(data){
 if(!container) return;
 container.innerHTML="";
 data.forEach(p=>{
   container.innerHTML+=`
   <div class="card" onclick="goToDetails(${p.id})" style="cursor:pointer;">
     <img src="${p.img}">
     <h3>${p.name}</h3>
     <p>₹${p.price}</p>
     <button  class="button" onclick="event.stopPropagation(); addCart(${p.id})">Add to Cart</button>
   </div>`;
 });
}

// Details navigation
window.goToDetails = function(id){
 window.location.href=`product-details.html?id=${id}`;
}

// Cart function
window.addCart=function(id){
 let cart=JSON.parse(localStorage.getItem("myCart"))||[];
 const product=products.find(p=>p.id===id);

 if(product){
   cart.push(product);
   localStorage.setItem("myCart",JSON.stringify(cart));
   updateCartCount();
   alert(product.name+" added to cart!");
 }
}

function updateCartCount(){
 let cart=JSON.parse(localStorage.getItem("myCart"))||[];
 const count=document.getElementById("cart-count");
 if(count) count.innerText=cart.length;
}

// Initial
display(products);
updateCartCount();

// Search
const search=document.getElementById("search");
if(search){
 search.addEventListener("input",e=>{
   const val=e.target.value.toLowerCase();
   display(products.filter(p=>p.name.toLowerCase().includes(val)));
 });
}

// Filter
const filter=document.getElementById("filter");
if(filter){
 filter.addEventListener("change",e=>{
   const v=e.target.value;
   if(v==="all") display(products);
   else display(products.filter(p=>p.cat===v));
 });
}

});
