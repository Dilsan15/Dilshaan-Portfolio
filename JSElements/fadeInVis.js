
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function reveal() {
    var reveals = document.querySelectorAll(".fadeInVis"); 

  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}

window.addEventListener("scroll", reveal);

sleep(200).then(() => {
    reveal()
});