const items = document.querySelectorAll(".accordion a");

items.classList.toggle('active',false);
items.nextElementSibling.classList.toggle('active',false);

function toggleAccordion(){
  
  var acc = document.getElementsByClassName("content");
  
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
  //var asd = document.querySelector(".accordion a");
  
  //var i;

  //for (i = 0; i < acc.length; i++) {
  
  //items[i].classList.toggle('active',false);
  //items[i].nextElementSibling.classList.toggle('active',false);
  
   
    
  //}
  

}
 

//items.forEach(item => item.addEventListener('click', toggleAccordion));
