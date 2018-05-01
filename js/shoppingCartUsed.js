 
            //add to cart function
            var addToCart = document.getElementsByClassName("addToCart"); //get class
             var showCart = document.getElementById('showCart');
            
            var addFunction = function(event){ //create function to add to cart
                event.preventDefault();
                var name = this.getAttribute("data-name");
                var price = this.getAttribute("data-price");

                myCart.cartAddItem(name, price, 1);
                displayCart();
            };
            //loop through each class on click
for (var i = 0; i < addToCart.length; i++) {
    addToCart[i].addEventListener('click', addFunction, false);
}



            document.getElementById("emptyCart").addEventListener("click", function(event){
                myCart.clearCart();
                displayCart();
            });

            function displayCart() {
                var cartArray = myCart.listCart();
                console.log(cartArray);
                var output = "";

                for (var i in cartArray) { 
output += cartArray[i].name + " <input class='itemCount' type='number' data-name='" + cartArray[i].name +"' value='"+cartArray[i].count+"' >"
 + " x "+cartArray[i].price +" = "+cartArray[i].total +" <button class='addItem' data-name='" +cartArray[i].name+"'>+</button>"
 + " <button class='subtractItem' data-name='" +cartArray[i].name+"'>-</button>" + "<br>";
                }

                document.getElementById("showCart").innerHTML = output;
                document.getElementById("countCart").innerHTML= myCart.countCart();
                document.getElementById("totalAmount").innerHTML = myCart.totalCart();
            }
            //deleting items
            showCart.addEventListener('click', function(event){
                var evnt = event.target;
                if (evnt.classList.contains('deleteItem')) {
                var name = evnt.getAttribute("data-name");
                myCart.removeAllCartObjects(name);
                displayCart();
            }
            });
            
            //subtracting items
             showCart.addEventListener('click', function(event){
                 var evnt = event.target;
                 if (evnt.classList.contains('subtractItem')) {
                var name = evnt.getAttribute("data-name");
                myCart.removeItems(name);
                displayCart();
            }
            });
            
         
        // plus button   = add items 
showCart.addEventListener('click', function(event){
    var evnt = event.target;
    if (evnt.classList.contains('addItem')) {
       var name = evnt.getAttribute("data-name");
        myCart.cartAddItem(name, 0, 1);
        displayCart();
    }
});    
      
 showCart.addEventListener('change', function(event){
                var evnt = event.target;
                if (evnt.classList.contains('itemCount')) {
                var name = evnt.getAttribute("data-name");
                var count = evnt.value;
                myCart.ItemCountSetter(name, count);
                displayCart();
            }
            });




            displayCart();
