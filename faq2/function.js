// Code By Webdevtrick ( https://webdevtrick.com )
const items = document.querySelectorAll(".accordion a");
var acc = document.getElementsByClassName("accordion-item"); 
function toggleAccordion(){
  alert(acc);
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}
 
items.forEach(item => item.addEventListener('click', toggleAccordion));
