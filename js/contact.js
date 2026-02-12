document.getElementById("contactForm")
.addEventListener("submit",e=>{
 e.preventDefault();

 const name=document.getElementById("name");
 const email=document.getElementById("email");
 const msg=document.getElementById("msg");

 let valid=true;

 if(!/^[A-Za-z ]{3,}$/.test(name.value)){
  nameErr.innerText="Invalid name";
  valid=false;
 }
 else nameErr.innerText="";

 if(!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email.value)){
  emailErr.innerText="Invalid email";
  valid=false;
 }
 else emailErr.innerText="";

 if(msg.value.length<10){
  msgErr.innerText="Message too short";
  valid=false;
 }
 else msgErr.innerText="";

 if(valid) alert("Form submitted successfully");
});