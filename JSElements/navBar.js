let navState = 0;



function openOrCloseNav() {
    
    

    if (navState % 2 == 0){
        
        
        document.getElementsByClassName("sideNav")[0].style.width = "20%";
        document.getElementsByClassName("mainContent")[0].style.marginLeft = "30rem";
        document.getElementsByClassName("navBarImage")[0].style.marginLeft = "20rem";
        navState = 1
    }

    else if (navState % 2 == 1){

        document.getElementsByClassName("sideNav")[0].style.width = "0%";
        document.getElementsByClassName("mainContent")[0].style.marginLeft = "14rem";
        document.getElementsByClassName("navBarImage")[0].style.marginLeft = "1rem";
        navState = 0

    }
    
}
