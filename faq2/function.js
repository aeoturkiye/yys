// Code By Webdevtrick ( https://webdevtrick.com )
const items = document.querySelectorAll(".accordion a");
var acc = document.getElementsByClassName("content");

function toggleAccordion(){
  //var acc = document.getElementsByClassName("content");
  alert(acc.length);
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
  //this.nextElementSibling.classList.toggle('passive');
}
 
items.forEach(item => item.addEventListener('click', toggleAccordion));
