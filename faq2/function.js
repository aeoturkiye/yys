const items = document.querySelectorAll(".accordion a");
var active = document.querySelector(".accordion a");

function toggleAccordion(){
  var acc = document.getElementsByClassName("content");
  alert(acc.length);
  var i;

  for (i = 0; i < acc.length; i++) {
  if (active && active != this) {
      active.classList.remove('active');
      active.nextElementSibling.classList.remove('active');
    }  
    
  }
  
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}
 
items.forEach(item => item.addEventListener('click', toggleAccordion));
