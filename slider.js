var sliderwraper=document.getElementsByClassName("slider-wrapper");
var carentelment=document.getElementsByClassName("slider-img active");
   
hasActiveSlideImage();
setInterval(slidenext,4000);
function hasActiveSlideImage() {

    if (carentelment.length==0) {
        
       sliderwraper[0].firstElementChild.classList.add("active");
    } 
}

function slidenext() {

      
       var nextelemt= carentelment[0].nextElementSibling;
    

      if (nextelemt==null) {
        carentelment[0].classList.remove("active");  
        sliderwraper[0].firstElementChild.classList.add("active");
        
    }
    else{
       nextelemt.classList.add("active")
       carentelment[0].classList.remove("active");
    }

}

function slideprev() {

   
       var prevelemt= carentelment[0].previousElementSibling;
    

      if (prevelemt==null) {
        carentelment[0].classList.remove("active");  
        sliderwraper[0].lastElementChild.classList.add("active");
        
    }
    else{
        carentelment[0].classList.remove("active");
        prevelemt.classList.add("active")
       
    }
}
