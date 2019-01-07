window.onscroll = function() {myFunction()};

var navbar = document.getElementById("IndexHeader");


var sticky = navbar.offsetTop;


function myFunction() {
  if (window.pageYOffset  == sticky) {
 	
     //navbar.style.display = "block";
    document.getElementById("navi").classList.remove("trans");
 
    
    
  } else {
  //navbar.style.display = "none";
 //firstNav.style.display = "none";
         document.getElementById("navi").classList.add("trans");
     

                    /*as of now, if you were to set the element id to IndexHeader, and set the if statment to if(pageY == sticky)
                     * and have the jquery code run, you would be able to see the nav bar appear and dissapear
                     */
    
  }
  
  }
