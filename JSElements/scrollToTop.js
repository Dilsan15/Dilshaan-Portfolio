
history.scrollRestoration = "manual";

$(window).on('beforeunload', function(){
      $(window).scrollTop(0);
});






window.onscroll = function() {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {

            document.getElementsByClassName("autoScrollUpButton")[0].style.opacity = "100%";
            document.getElementsByClassName("scrollUpImage")[0].style.opacity = '100%';
            document.getElementsByClassName("autoScrollUpButton")[0].disabled = false
             
            
            
         
         
         
      
      } else {

            document.getElementsByClassName("autoScrollUpButton")[0].style.opacity = "0%";
            document.getElementsByClassName("scrollUpImage")[0].style.opacity = "0%";
            document.getElementsByClassName("autoScrollUpButton")[0].disabled = true
            

            
            
      }
};