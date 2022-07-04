let navOpen = false;

function openOrCloseNav() {
    
    

    if (navOpen == false){
        
        
        document.getElementsByClassName("sideNav")[0].style.width = "17rem";
        document.getElementsByClassName("mainContent")[0].style.marginLeft = "25rem";

        document.getElementsByClassName("navBarImage")[0].style.transform = "rotate(90deg)";
        document.getElementsByClassName("navBarImage")[0].style.marginLeft = "18rem";

        
        
        navOpen = true
    }

    else if (navOpen == true){

        document.getElementsByClassName("sideNav")[0].style.width = "0%";
        document.getElementsByClassName("mainContent")[0].style.marginLeft = "10rem";
        
        document.getElementsByClassName("navBarImage")[0].style.transform = "rotate(0deg)";
        document.getElementsByClassName("navBarImage")[0].style.marginLeft = "1rem";
        
        navOpen = false

    }
    
}
