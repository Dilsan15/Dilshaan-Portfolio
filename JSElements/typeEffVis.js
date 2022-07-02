
function sleepMe (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
  
function revealMe() {
    var revealsMe = document.querySelectorAll(".typedOutText"); 
    
    
    for (var i = 0; i < revealsMe.length; i++) {
        var windowHeightMe = window.innerHeight;
        var elementTopMe = revealsMe[i].getBoundingClientRect().top;
        var elementVisibleMe = 150;
    
        if (elementTopMe < windowHeightMe - elementVisibleMe) {
          revealsMe[i].classList.add("active");
          
        } else {
          revealsMe[i].classList.remove("active");
        }
    }
}
  
window.addEventListener("scroll", revealMe);
  
sleepMe(200).then(() => {
    revealMe()
});