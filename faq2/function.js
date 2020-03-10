const items = document.querySelectorAll(".accordion a");


function toggleAccordion(){
  var acc = document.getElementsByClassName("content");
  items.classList.toggle('active',false);
  items.nextElementSibling.classList.toggle('active',false);
  
  //var asd = document.querySelector(".accordion a");
  
  //var i;

  //for (i = 0; i < acc.length; i++) {
  
  //items[i].classList.toggle('active',false);
  //items[i].nextElementSibling.classList.toggle('active',false);
  
   
    
  //}
  

}
 
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
//items.forEach(item => item.addEventListener('click', toggleAccordion));
