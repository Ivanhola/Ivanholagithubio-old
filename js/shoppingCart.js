

var myCart = (function () {
   
    var cart = [];

    function Item(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }

    function cartSaveJSON() {
        localStorage.setItem("myCart", JSON.stringify(cart));
    }

    function cartLoadJSON() {
        cart = JSON.parse(localStorage.getItem("myCart"));
        if (cart === null) {
            cart = [];
        }
    }

    cartLoadJSON();



    
    var object = {};

    object.cartAddItem = function (name, price, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count += count;
                cartSaveJSON();
                return;
            }
        }

        console.log("cartAddItem:", name, price, count);

        var item = new Item(name, price, count);
        cart.push(item);
        cartSaveJSON();
    };

    object.ItemCountSetter = function (name, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
        cartSaveJSON();
    };


    object.removeItems = function (name) { // Removes item from cart
        for (var i in cart) {
            if (cart[i].name === name) { 
                cart[i].count--; 
                if (cart[i].count === 0) {
                    cart.splice(i, 1);
                }
                break;
            }
        }
        cartSaveJSON();
    };


    object.removeAllCartObjects = function (name) { // removes all item name
        for (var i in cart) {
            if (cart[i].name === name) {
                cart.splice(i, 1);
                break;
            }
        }
        cartSaveJSON();
    };

//create empty array and save
    object.clearCart = function () {
        cart = [];
        cartSaveJSON();
    };


    object.countCart = function () { // total count
        var totalCount = 0;
        for (var i in cart) {
            totalCount += cart[i].count;
        }

        return totalCount;
    };

    object.totalCart = function () { //Total Amound of Cost
        var totalCost = 0;
        for (var i in cart) {
            totalCost += cart[i].price * cart[i].count;
        }
        return totalCost.toFixed(2);
    };

    object.listCart = function () {
        var cartCopy = [];
        
        for (var i in cart) {
          
            var item = cart[i];
            var itemCopy = {};
            for (var p in item) {
                itemCopy[p] = item[p];
            }
            itemCopy.total = (item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy);
        }
        return cartCopy;
    };

    
    return object;
})();




