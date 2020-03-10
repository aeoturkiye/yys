const items = document.querySelectorAll(".accordion a");

function toggleAccordion(){
  var acc = document.getElementsByClassName("content");
  alert(acc.length);
    
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}
 
items.forEach(item => item.addEventListener('click', toggleAccordion));
