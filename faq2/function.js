const items = document.querySelectorAll(".accordion a");

function toggleAccordion(){

  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
  
if (this.classList.contains("active")){ 
  
var acc = document.getElementsByClassName("content");
var i;
  for (i = 0; i < acc.length; i++) {  
  items[i].classList.toggle('active',false);
  items[i].nextElementSibling.classList.toggle('active',false);
  }
  
  this.classList.toggle('active',true);
  this.nextElementSibling.classList.toggle('active',true);
  return false;
} 
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
