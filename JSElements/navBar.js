
let navOpen = false;

function openOrCloseNav() {

    if (navOpen == false){
        
        document.getElementById("sideNav").style.width = "19vw";
        document.getElementById("mainContent").style.marginLeft = "25rem";
        document.getElementById("navBarImage").style.transform = "rotate(90deg)";
        document.getElementById("navBarImage").style.marginLeft = "20rem";

        if (screen.width < 960){
            document.getElementById('sideNav').style.width = "100%"
            document.getElementById('sideNav').style.scrollBehavior = "auto"

        }
           
        navOpen = true
    }

    else if (navOpen == true){

        document.getElementById("sideNav").style.width = "0";
        document.getElementById("mainContent").style.marginLeft = "12rem";
        document.getElementById("navBarImage").style.transform = "rotate(0deg)";
        document.getElementById("navBarImage").style.marginLeft = "1rem";
        
        navOpen = false

    }
    
}
