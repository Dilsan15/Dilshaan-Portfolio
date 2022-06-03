let navState = 0;



function openOrCloseNav() {
    
    

    if (navState % 2 == 0){
        
        
        document.getElementsByClassName("sideNav")[0].style.width = "15%";
        document.getElementsByClassName("mainContent")[0].style.marginLeft = "20rem";

        document.getElementsByClassName("navBarImage")[0].style.transform = "rotate(90deg)";
        document.getElementsByClassName("navBarImage")[0].style.marginLeft = "14.5rem";

        document.getElementsByClassName("autoScrollUpButton")[0].style.marginLeft = "14.0rem";
        
        navState = 1
    }

    else if (navState % 2 == 1){

        document.getElementsByClassName("sideNav")[0].style.width = "0%";
        document.getElementsByClassName("mainContent")[0].style.marginLeft = "14rem";
        
        document.getElementsByClassName("navBarImage")[0].style.transform = "rotate(0deg)";
        document.getElementsByClassName("navBarImage")[0].style.marginLeft = "1rem";
        
        document.getElementsByClassName("autoScrollUpButton")[0].style.marginLeft = "1rem";
        
        navState = 0

    }
    
}
