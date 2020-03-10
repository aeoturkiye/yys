const items = document.querySelectorAll(".accordion a");

function toggleAccordion(){
  
var acc = document.getElementsByClassName("content");

if (this.classList.toggle('active')=== false) {
var i;
  for (i = 0; i < acc.length; i++) {  
  items[i].classList.toggle('active',false);
  items[i].nextElementSibling.classList.toggle('active',false);
  }
  
  this.classList.toggle('active',true);
  this.nextElementSibling.classList.toggle('active',true); 
}
  
  if (this.classList.toggle('active')=== true) {
    alert("asd")
    //items[i].classList.toggle('active',false);
    //items[i].nextElementSibling.classList.toggle('active',false);
  }
  
  
} 

items.forEach(item => item.addEventListener('click', toggleAccordion));
