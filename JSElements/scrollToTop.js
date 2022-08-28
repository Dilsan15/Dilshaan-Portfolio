
window.onscroll = function() {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && screen.width > 950) {

            document.getElementById("autoScrollUpButton").style.opacity = "100%";
            document.getElementById("scrollUpImage").style.opacity = '100%';
            document.getElementById("autoScrollUpButton").disabled = false
      
      } else {

            document.getElementById("autoScrollUpButton").style.opacity = "0%";
            document.getElementById("scrollUpImage").style.opacity = "0%";
            document.getElementById("autoScrollUpButton").disabled = true
  
      }
};


history.scrollRestoration = "manual";
window.onbeforeunload = function () {
      window.scrollTo(0, 0);
}