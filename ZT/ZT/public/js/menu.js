var currentIndex = 0;

// getting the information of all the products
function getProducts() {
    var request = new XMLHttpRequest();
    request.open('GET', product_url, true);
    request.onload = function () {
        product_array = JSON.parse(request.responseText);
        console.log(product_array);
        displayProducts(category1);
    };
    request.send();
}

// for displaying the products in their cards
function displayProducts(category1) {
    var table = document.getElementById("productTable");
    table.innerHTML = "";
    total = product_array.length;

    for (var count = 0; count < total; count++) {
        if (product_array[count].category === category1) {
            var thumbnail = "products/" + product_array[count].img;
            var productName = product_array[count].name;
            var cell = '<div class="card col-4 fadeTransition" style="color: black; height: 350px;">\
            <a style="cursor: pointer;" item="' + count + '">\
            <div class="top" onclick="productModal('+ count + ')">\
            <img src="' + thumbnail + '" style="border-radius:2px"></div></a>\
            <div class="bottom" style="text-align: center;"\
            <h1 style="font-size: 18px; padding: 0 0 5px 0;">' + productName + '</h1>\
            </div>\
                <a>\
                    <button class="addToCartButton" id="atcPreview" onclick="addToCart('+ count +')">\
                        <img src="images/addtocart.png" width="30px">\
                    </button>\
                </a>\
        </div>'

            table.insertAdjacentHTML('beforeend', cell);
        }
    }
    // enabling the clicking of the add to cart button outside of the modal if user is logged in
    if (sessionStorage.getItem("username") != undefined){
        var atcButton1 = document.getElementById("atcPreview");
        atcButton1.disabled = false;
    }
    else {
    // disabling the clicking of the add to cart button outside of the modal if user is not logged in
        var atcButton1 = document.getElementById("atcPreview");
        atcButton1.disabled = true;
    }
}

// setting the conditions for when user is logged in
if (sessionStorage.getItem("username") != undefined){
    function productModal(item) {
        currentIndex = item;
        document.getElementById("productthumbnail").src = "products/" + product_array[item].img;
        document.getElementById("productname").innerHTML = "<strong>Product Name:</strong> " + product_array[item].name;
        document.getElementById("productprice").innerHTML = "<strong>Product Price:</strong> $" + product_array[item].price;
        document.getElementById("productavailability").innerHTML = "<strong>Availability:</strong> " + product_array[item].availability;
        document.getElementById("productdescription").innerHTML = "<strong>Description:</strong> " + product_array[item].description;
        document.getElementById("reviewFor").innerHTML = '<strong>Review(s) for</strong> ' + '<strong>' + product_array[item].name + '</strong>';
        document.getElementsByName("reviewTextArea")[0].placeholder = 'Express your thoughts about the ' + product_array[item].name + ' here.';
        var submitButton = document.getElementById("submitComment");
        var atcButton = document.getElementById("atcInModal");
        submitButton.classList.remove("btn-secondary");
        submitButton.classList.add("btn-danger");
        submitButton.disabled = false;
        atcButton.disabled = false;
        atcButton.setAttribute('onclick', 'addToCartInModal()');
        showProductComments();
        var productModal = new Modal(document.getElementById("productModal"));
        productModal.show();
        console.log(item);
    }    
}
// setting the conditions for when user is not logged in, so that they cannot post a comment or add the product to cart from within the modal
else if (sessionStorage.getItem("username") == undefined) {
    function productModal(item) {
        currentIndex = item;
        document.getElementById("productthumbnail").src = "products/" + product_array[item].img;
        document.getElementById("productname").innerHTML = "<strong>Product Name:</strong> " + product_array[item].name;
        document.getElementById("productprice").innerHTML = "<strong>Product Price:</strong> $" + product_array[item].price;
        document.getElementById("productavailability").innerHTML = "<strong>Availability:</strong> " + product_array[item].availability;
        document.getElementById("productdescription").innerHTML = "<strong>Description:</strong> " + product_array[item].description;
        document.getElementById("reviewFor").innerHTML = '<strong>Review(s) for</strong> ' + '<strong>' + product_array[item].name + '</strong>';
        document.getElementsByName('reviewTextArea')[0].placeholder = "You have to be signed in to make a comment.";
        var submitButton = document.getElementById("submitComment");
        var atcButton = document.getElementById("atcInModal");
        submitButton.classList.add("btn-secondary");
        submitButton.classList.remove("btn-danger");
        submitButton.disabled = true;
        atcButton.disabled = true;
        showProductComments();
        var productModal = new Modal(document.getElementById("productModal"));
        productModal.show();
        console.log(item);
    }    
}