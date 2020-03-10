// Code By Webdevtrick ( https://webdevtrick.com )
const items = document.querySelectorAll(".accordion a");
 
function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
  not(this).nextElementSibling.classList.slideUp();
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
