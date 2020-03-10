const items = document.querySelectorAll(".accordion a");


function toggleAccordion(){
  var acc = document.getElementsByClassName("content");
  var asd = document.querySelector(".accordion a");
  
  var i;

  for (i = 0; i < acc.length; i++) {
  items[i].classList.remove('active');
  items[i].nextElementSibling.classList.remove('active');
  if (asd == this) {
   this.classList.toggle('active');
   this.nextElementSibling.classList.toggle('active');
   }  
    
  }
  

}
 
//items.forEach(item => item.addEventListener('click', toggleAccordion));
