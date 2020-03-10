const items = document.querySelectorAll(".accordion a");


function toggleAccordion(){
  var acc = document.getElementsByClassName("content");
  var asd = document.querySelector(".accordion a");
  
  var i;

  for (i = 0; i < acc.length; i++) {
  items[i].classList.toggle('active');
  items[i].nextElementSibling.classList.toggle('active');
  // if (asd == this) {
   // asd.classList.toggle('active');
  //  asd.nextElementSibling.classList.toggle('active');
  //  }  
    
  }
  

}
 
items.forEach(item => item.addEventListener('click', toggleAccordion));
