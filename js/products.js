const products=[
 {id:1,name:"Laptop",price:50000,cat:"Laptop",img:"images/laptop.jpg"},
 {id:2,name:"Phone",price:20000,cat:"Phone",img:"images/phone.jpg"},
 {id:3,name:"TV",price:30000,cat:"TV",img:"images/tv.jpg"},
 {id:4,name:"Headphones",price:2000,cat:"Audio",img:"images/headphone.jpg"},
 {id:5,name:"Camera",price:25000,cat:"Camera",img:"images/camera.jpg"},
 {id:6,name:"Speaker",price:5000,cat:"Audio",img:"images/speaker.jpg"}
];

const container=document.querySelector(".products");

function display(data){
  container.innerHTML="";
  data.forEach(p=>{
    container.innerHTML+=`<div class="card">
      <img src="${p.img}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addCart(${p.id})">Add to Cart</button>
    </div>`;
  });
}

display(products);

const search=document.getElementById("search");
if(search){
search.addEventListener("input",e=>{
  const val=e.target.value.toLowerCase();
  display(products.filter(p=>p.name.toLowerCase().includes(val)));
});}

const filter=document.getElementById("filter");
if(filter){
filter.addEventListener("change",e=>{
  const v=e.target.value;
  if(v==="all") display(products);
  else display(products.filter(p=>p.cat===v));
});}
