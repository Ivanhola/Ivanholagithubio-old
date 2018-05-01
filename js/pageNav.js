       
                   function pageInfo(action, pageNumber) {
    var i;
    var shopContent;
    var shopPage;
    
    shopContent = document.getElementsByClassName("shopContent");
    for (i = 0; i < shopContent.length; i++) {
        shopContent[i].style.display = "none";
    }
    
    shopPage = document.getElementsByClassName("StorePage");
    for (i = 0; i < shopPage.length; i++) {
        shopPage[i].className = shopPage[i].className.replace(" active", "");
    }
    
    
    document.getElementById(pageNumber).style.display = "block";
    action.currentTarget.className += " active";
    
    
}
var here = document.getElementById('here');




