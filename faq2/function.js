const items = document.querySelectorAll(".accordion a");

function toggleAccordion(){
  var acc = document.getElementsByClassName("content");
  alert(acc.length);
  
  var i;
  for (i = 0; i < acc.length; i++) {
  var active = document.querySelector(".accordion a");
    if (active && active != this) {
      //active.classList.remove("active");
      active.nextElementSibling.classList.toggle('passşve');
    }
    }  
  
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}
 
items.forEach(item => item.addEventListener('click', toggleAccordion));
