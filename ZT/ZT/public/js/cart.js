var cart_array = [];
var cart_url = "/cart";
var address = "";

// for getting all the information that is in the cart
function getCartData() {
    var request = new XMLHttpRequest();
    request.open('GET', cart_url, true);

    request.onload = function () {
        cart_array = JSON.parse(request.responseText);
        console.log(cart_array);
        getAddress();
    };
    request.send();
}

// for displaying the relevant products in the cart
function displayCart() {
    var cartLength = cart_array.length;
    var totalPrice = 0;
    document.getElementById("emptyCart").innerHTML = "There are currently no products in your cart.";
    document.getElementById("addedProducts").innerHTML = "";

    // for displaying products
    for (var i = 0; i < cartLength; i++) {
        // ensuring that products from previous sessions do not appear
        if (sessionStorage.getItem("token") == cart_array[i].sessionToken) {
            document.getElementById("emptyCart").innerHTML = "";
            var productName = cart_array[i].productName;

            // summation of all prices that are in the cart
            totalPrice = totalPrice + cart_array[i].price;

            var productHTML = '<div style="border-bottom: 1px rgb(216, 216, 216) solid;" id="product' + i + '"> ' + productName + '</div><br>'
            document.getElementById("addedProducts").insertAdjacentHTML('beforeend', productHTML);
            var cancel = "";
            cancel += "<img src='images/cross.png' class='deleteInCart' item='" + i + "' onClick='deleteFromCart(this)' />";
            document.getElementById("product" + i).insertAdjacentHTML('beforeend', cancel);
        }
    }
    // displaying total price
    document.getElementById("addedTotalPrice").innerHTML = "<strong>Total Amount:</strong> $" + totalPrice;
    // displaying address
    document.getElementById("deliveryLocation").innerHTML = "</br><strong>Address:</strong> " + address;
}

// add to cart function
function addToCart(item) {
    currentIndex = item;
    var sessionToken = sessionStorage.getItem("token");
    var productName = product_array[currentIndex].name;
    var price = product_array[currentIndex].price;

    var productDataToCart = {
        "sessionToken": sessionToken,
        "productName": productName,
        "price": price
    }
    console.log(productDataToCart);
    var postProductToCart = new XMLHttpRequest();
    postProductToCart.open("POST", cart_url, true);
    postProductToCart.setRequestHeader("Content-Type", "application/json");
    postProductToCart.onload = function () {
        getCartData();
        alert("Successfully added to cart!");
    };
    postProductToCart.send(JSON.stringify(productDataToCart));
}

function addToCartInModal() {
    var sessionToken = sessionStorage.getItem("token");
    var productName = product_array[currentIndex].name;
    var price = product_array[currentIndex].price;

    var productDataToCart = {
        "sessionToken": sessionToken,
        "productName": productName,
        "price": price
    }
    console.log(productDataToCart);
    var postProductToCart = new XMLHttpRequest();
    postProductToCart.open("POST", cart_url, true);
    postProductToCart.setRequestHeader("Content-Type", "application/json");
    postProductToCart.onload = function () {
        getCartData();
        alert("Successfully added to cart!");
    };
    postProductToCart.send(JSON.stringify(productDataToCart));
}

// deleting from cart function
function deleteFromCart(element) {
    var item = element.getAttribute("item");
    var response = confirm("Remove this product from your cart?");
    if (response == true) {
        var delete_fromCart_url = cart_url + "/" + cart_array[item].cart_Id;
        var removeProduct = new XMLHttpRequest();
        removeProduct.open("DELETE", delete_fromCart_url, true);
        removeProduct.onload = function () {
            getCartData();
            alert("Successfully removed from cart. The cart modal will now close. Please re-open to see your updated cart.")
            var cartModal = new Modal(document.getElementById("cartModal"));
            cartModal.hide();
        }
        removeProduct.send();
    }
}

// to get the address of the user in order to display it in the cart
function getAddress() {
    for (var i = 0; i < user_array.length; i++) {
        if (sessionStorage.getItem("username") == user_array[i].username) {
            address = user_array[i].address;
        }
    }
}