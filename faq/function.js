vate// Code By Webdevtrick ( https://webdevtrick.com )
const items = document.querySelectorAll(".accordion a");
 
function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
  Siblings.classList.toggle('deactivate');

}
 
items.forEach(item => item.addEventListener('click', toggleAccordion));
