// Code By Webdevtrick ( https://webdevtrick.com )
const items = document.querySelectorAll(".accordion a");
var acc = document.getElementsByClassName("content");

function toggleAccordion(){
  alert(accx[0].style.display);
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
  //this.nextElementSibling.classList.toggle('passive');
}
 
items.forEach(item => item.addEventListener('click', toggleAccordion));
