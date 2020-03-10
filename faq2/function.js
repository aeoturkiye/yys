const items = document.querySelectorAll(".accordion a");

function toggleAccordion(){
  
var acc = document.getElementsByClassName("content");
var i;
  for (i = 0; i < acc.length; i++) {  
  items[i].classList.toggle('hide');
  items[i].nextElementSibling.classList.toggle('hide');
  }
  
  this.classList.toggle('show');
  this.nextElementSibling.classList.toggle('show'); 
  
} 

items.forEach(item => item.addEventListener('click', toggleAccordion));
