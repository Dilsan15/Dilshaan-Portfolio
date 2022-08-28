
currentHorizPId = "FS2"
lastHorizPId = "FS2"

function changeSlideHoriz(linkText){
    
    lastSlideLi = document.getElementById(currentHorizPId).getElementsByTagName("ul")[0].getElementsByTagName("li")


    if (lastPId != ""){

       for (let lastDesc of lastSlideLi){
        
            lastDesc.classList.add("noVis")
            lastDesc.classList.remove("fadeInLi")
       } 
    }

    
    titleSlide = document.getElementsByClassName("verticalSlideHeading")[0]
    titleSlide.innerHTML = linkText.innerHTML
    titleSlide.style.animation = 'none';
    titleSlide.offsetHeight; 
    titleSlide.style.animation = null; 


    currentHorizPId=linkText.innerHTML.replace(/[a-z]/g, '').split(" ").join("")
    let currentSlideLi = document.getElementById(currentHorizPId).getElementsByTagName("ul")[0].getElementsByTagName("li")
    let timeOut = 1000
    

    let linkBar = document.querySelectorAll(".verticalSlideShowLinks a")

    for (let preLinks of linkBar){
        
        if (currentHorizPId == preLinks.innerHTML.replace(/[a-z]/g, '').split(" ").join("")){
            preLinks.classList.remove("linkHalfVis")
            continue
        }

        preLinks.classList.add("linkHalfVis")
        preLinks.classList.add("disabledLink")
    }

    for (let desc of currentSlideLi){

        setTimeout(() => desc.classList.add("fadeInLi"), timeOut)
        setTimeout(() => desc.classList.remove("noVis"), timeOut)
        
        timeOut = timeOut + 1000

        
    }

    nowSlideLi = document.getElementById(currentHorizPId).getElementsByTagName("ul")[0].getElementsByTagName("li")

    for (let nowLink of linkBar){
    
        setTimeout(()=> nowLink.classList.remove("disabledLink"), 2500)  
    
    }
    

    lastHorizPId = currentHorizPId
    




}




