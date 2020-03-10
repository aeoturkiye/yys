const items = document.querySelectorAll(".accordion a");

function toggleAccordion(){
  
var acc = document.getElementsByClassName("content");

var i;
  for (i = 0; i < acc.length; i++) {  
  items[i].classList.toggle('active',false);
  items[i].nextElementSibling.classList.toggle('active',false);
  }
  
  this.classList.toggle('active',true);
  this.nextElementSibling.classList.toggle('active',true); 

  if (this.classList.toggle('active')== true) {
      items.classList.toggle('active',false);
      items.nextElementSibling.classList.toggle('active',false);
  }
  
  
} 

items.forEach(item => item.addEventListener('click', toggleAccordion));
