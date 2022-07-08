let navOpen = false;

function openOrCloseNav() {
    
    

    if (navOpen == false){
        
        
        document.getElementById("sideNav").style.width = "17rem";
        document.getElementById("mainContent").style.marginLeft = "25rem";

        document.getElementById("navBarImage").style.transform = "rotate(90deg)";
        document.getElementById("navBarImage").style.marginLeft = "18rem";
        
        navOpen = true
    }

    else if (navOpen == true){

        document.getElementById("sideNav").style.width = "0";
        document.getElementById("mainContent").style.marginLeft = "9rem";
                
        document.getElementById("navBarImage").style.transform = "rotate(0deg)";
        document.getElementById("navBarImage").style.marginLeft = "1rem";
        
        navOpen = false

    }
    
}
