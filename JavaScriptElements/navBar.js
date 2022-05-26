let navState = 0;

function openOrCloseNav() {
    
    if (navState % 2 == 0){
        document.getElementById("mySidenav").style.width = "270px";
        document.getElementById("main").style.marginLeft = "250px";
        navState = 1
    }

    else if (navState % 2 == 1){
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        navState = 0

    }
    
}
