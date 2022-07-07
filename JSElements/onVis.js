
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function animateOnVis() {

  var revealsF = document.querySelectorAll(".fadeInVis"); 
  var revealsT = document.querySelectorAll(".typedOutText"); 

  
  for (var i = 0; i < revealsF.length; i++) {
    var windowHeightF = window.innerHeight;
    var elementTopF = revealsF[i].getBoundingClientRect().top;
    var elementVisibleF = 150;
  
    if (elementTopF < windowHeightF - elementVisibleF) {
      revealsF[i].classList.add("active");
      revealsT[i].classList.add("active"); 
      
     } else {
      revealsF[i].classList.remove("active");
      revealsT[i].classList.remove("active"); 
      
        
    }
  }
}

window.addEventListener("scroll", animateOnVis);

sleep(65).then(() => {
  animateOnVis()
  

});






  
  
