
currentPId = "CN"
lastPId = "CN"

function changeSlide(linkText){
    

    lastSlideLi = document.getElementById(currentPId).getElementsByTagName("ul")[0].getElementsByTagName("li")


    if (lastPId != ""){

       for (let lastDesc of lastSlideLi){
        
            lastDesc.classList.add("noVis")
            lastDesc.classList.remove("fadeInLi")
       } 
    }

    
    titleSlide = document.getElementsByClassName("slideHeading")[0]
    titleSlide.innerHTML = linkText.innerHTML
    titleSlide.style.animation = 'none';
    titleSlide.offsetHeight; 
    titleSlide.style.animation = null; 


    currentPId=linkText.innerHTML.replace(/[a-z]/g, '').split(" ").join("")
    let currentSlideLi = document.getElementById(currentPId).getElementsByTagName("ul")[0].getElementsByTagName("li")
    let timeOut = 1000
    

    let linkBar = document.querySelectorAll(".slideShowLinks a")

    for (let preLinks of linkBar){
        
        if (currentPId == preLinks.innerHTML.replace(/[a-z]/g, '').split(" ").join("")){
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

    nowSlideLi = document.getElementById(currentPId).getElementsByTagName("ul")[0].getElementsByTagName("li")

    for (let nowLink of linkBar){
    
        setTimeout(()=> nowLink.classList.remove("disabledLink"), 1500)  
    
    }
    

    lastPId = currentPId
    




}


