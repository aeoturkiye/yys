const items = document.querySelectorAll(".accordion a");

function toggleAccordion(){
  
var acc = document.getElementsByClassName("content");
var i;
  for (i = 0; i < acc.length; i++) {  
  items[i].classList.toggle('deactive');
  items[i].nextElementSibling.classList.toggle('deactive');
  }
  
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active'); 
  
} 

items.forEach(item => item.addEventListener('click', toggleAccordion));
