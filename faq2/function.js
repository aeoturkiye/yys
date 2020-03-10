// Code By Webdevtrick ( https://webdevtrick.com )
const items = document.querySelectorAll(".accordion a");
 
function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');


if (this.classList.toggle('active')===true){
  alert("true")
} else {
  alert("false")
}

}
 
items.forEach(item => item.addEventListener('click', toggleAccordion));
