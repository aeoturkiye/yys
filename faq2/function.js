const items = document.querySelectorAll(".accordion a");

function toggleAccordion(){
  

  
  if (this.classList.toggle('active')=== true) {
    alert("asd")
    //items[i].classList.toggle('active',false);
    //items[i].nextElementSibling.classList.toggle('active',false);
  }
  
  
} 

items.forEach(item => item.addEventListener('click', toggleAccordion));
