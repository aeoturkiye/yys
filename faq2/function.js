const items = document.querySelectorAll(".accordion a");

function toggleAccordion(){

this.classList.toggle('active');
this.nextElementSibling.classList.toggle('active'); 
  
//if this.classList.hasClass("active"){
//  alert("active");
//} else {
//alert("not");
//}
  
}  
//var acc = document.getElementsByClassName("content");
//var i;
//  for (i = 0; i < acc.length; i++) {  
//  items[i].classList.toggle('active');
//  items[i].nextElementSibling.classList.toggle('active');
//  }
  
//  this.classList.toggle('active');
//  this.nextElementSibling.classList.toggle('active'); 
  
//} 

items.forEach(item => item.addEventListener('click', toggleAccordion));
