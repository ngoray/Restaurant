var showPass = true;
var showPass1 = true;
var showPass2 = true;
var editshowPass = true;
var editshowPass1 = true;
var product_array = [];
var product_url = "/products"
var category1 = "Burger";
var comment_array = [];
var comment_url = "/comments";
var user_array = [];

function showPassword() {
    var pw = document.getElementById("loginpassword");
    var showpw = document.getElementById("pwshow");

    if (showPass == true) {
        showpw.src = "images/showpw.png";
        showpw.title = "Toggle Password Visbility (Current Status: Visible)";
        pw.type = "text";
        showPass = false;
        console.log("text");
        
    }

    else if (showPass == false) {
        showpw.src = "images/showpw2.png";
        showpw.title = "Toggle Password Visbility (Current Status: Not Visible)";
        pw.type = "password";
        showPass = true;
        console.log("pass");
    }
}
function showPassword1() {
    var pw = document.getElementById("signupPW");
    var showpw = document.getElementById("pwshow1");

    if (showPass1 == true) {
        showpw.src = "images/showpw.png";
        showpw.title = "Toggle Password Visbility (Current Status: Visible)";
        pw.type = "text";
        showPass1 = false;
        console.log("text");
        
    }

    else if (showPass1 == false) {
        showpw.src = "images/showpw2.png";
        showpw.title = "Toggle Password Visbility (Current Status: Not Visible)";
        pw.type = "password";
        showPass1 = true;
        console.log("pass");
    }
}
function showPassword2() {
    var pw = document.getElementById("signupPW2");
    var showpw = document.getElementById("pwshow2");

    if (showPass2 == true) {
        showpw.src = "images/showpw.png";
        showpw.title = "Toggle Password Visbility (Current Status: Visible)";
        pw.type = "text";
        showPass2 = false;
        console.log("text");
    }

    else if (showPass2 == false) {
        showpw.src = "images/showpw2.png";
        showpw.title = "Toggle Password Visbility (Current Status: Not Visible)";
        pw.type = "password";
        showPass2 = true;
        console.log("pass");
    }
}

// function editShowPassword() {
//     var pw = document.getElementById("editsignupPW");
//     var showpw = document.getElementById("editpwshow1");

//     if (editshowPass == true) {
//         showpw.src = "images/showpw.png";
//         showpw.title = "Toggle Password Visbility (Current Status: Visible)";
//         pw.type = "text";
//         editshowPass = false;
//     }
    
//     else if (editshowPass == false) {
//         showpw.src = "images/showpw2.png";
//         showpw.title = "Toggle Password Visbility (Current Status: Not Visible)";
//         pw.type = "password";
//         editshowPass = false;
//     }
// }

// function editShowPassword1() {
//     var pw = document.getElementById("editsignupPW2");
//     var showpw = document.getElementById("editpwshow2");

//     if (editshowPass1 == true) {
//         showpw.src = "images/showpw.png";
//         showpw.title = "Toggle Password Visbility (Current Status: Visible)";
//         pw.type = "text";
//         editshowPass1 = false;
//     }
    
//     else if (editshowPass1 == false) {
//         showpw.src = "images/showpw2.png";
//         showpw.title = "Toggle Password Visbility (Current Status: Not Visible)";
//         pw.type = "password";
//         editshowPass1 = true;
//     }
// }

function signupModal() {
    var signupModal = new Modal(document.getElementById("signupModal"));
    signupModal.show();
}

function cartModal() {
    var cartModal = new Modal(document.getElementById("cartModal"));
    displayCart();
    cartModal.show();
}

function loginModal(){
    var loginModal = new Modal(document.getElementById("loginModal"));
    loginModal.show();
}

function addToCartModal() {
    var addToCartModal = new Modal(document.getElementById("addToCartModal"));
    addToCartModal.show();
}

function checkPassword(){
    var notSame = "#ff7b7b";
    var same = "transparent";
    signupPW = document.getElementById("signupPW");
    signupPW2 = document.getElementById("signupPW2");

    if (signupPW2.value != signupPW.value){
        signupPW2.style.backgroundColor = notSame;
    }

    else {
        signupPW2.style.backgroundColor = same;
    }
}

// function checkPassword1(){
//     var notSame = "#ff7b7b";
//     var same = "transparent";
//     signupPW = document.getElementById("editsignupPW");
//     signupPW2 = document.getElementById("editsignupPW2");

//     if (signupPW2.value != signupPW.value){
//         signupPW2.style.backgroundColor = notSame;
//     }

//     else {
//         signupPW2.style.backgroundColor = same;
//     }
// }

function checkLogin(){
    username = document.getElementById('loginusername');
    password = document.getElementById('loginpassword');
    usernameLength = username.value.length;
    passwordLength = password.value.length;
    if (usernameLength > 0 && passwordLength > 0){
        login()
    }
    else {
        if (usernameLength == 0){
            username.setCustomValidity('Username cannot be empty.')
        }
        else if (passwordLength == 0){
            password.setCustomValidity('Password cannot be empty.')
        }
    }
}

function checkValid() {
    signupPW = document.getElementById("signupPW");
    signupPW2 = document.getElementById("signupPW2");
    username = document.getElementById("signupUsername");
    passwordLength = signupPW.value.length;
    usernameLength = username.value.length;
    if (signupPW2.value == signupPW.value && passwordLength > 5 && usernameLength < 21 )  {
        register();
    }
}

// function checkValid1() {
//     signupPW = document.getElementById("editsignupPW");
//     signupPW2 = document.getElementById("editsignupPW2");
//     username = document.getElementById("editsignupUsername");
//     passwordLength = signupPW.value.length;
//     usernameLength = username.value.length;
//     if (signupPW2.value == signupPW.value && passwordLength > 5 && usernameLength < 21 )  {
//         updateUserInfo();
//     }
// }

// function editcheckValid() {
//     signupPW = document.getElementById("editsignupPW");
//     signupPW2 = document.getElementById("editsignupPW2");
//     username = document.getElementById("editsignupUsername");
//     passwordLength = signupPW.value.length;
//     usernameLength = username.value.length;
//     if (signupPW2.value == signupPW.value && passwordLength > 5 && usernameLength < 21 )  {
//         updateUser();
//     }  
// }

function showBurger() {
    document.getElementById("burgers").classList.remove("menuCatLi");
    document.getElementById("burgers").classList.add("menuCatLi2");
    document.getElementById("sides").classList.add("menuCatLi");
    document.getElementById("sides").classList.remove("menuCatLi2");
    document.getElementById("drinks").classList.add("menuCatLi");
    document.getElementById("drinks").classList.remove("menuCatLi2");
    document.getElementById("new").classList.add("menuCatLi");
    document.getElementById("new").classList.remove("menuCatLi2");
    document.getElementById("desserts").classList.add("menuCatLi");
    document.getElementById("desserts").classList.remove("menuCatLi2");
    category1 = "Burger"
    displayProducts(category1);
    console.log("burger");
}
function showSides() {
    document.getElementById("burgers").classList.add("menuCatLi");
    document.getElementById("burgers").classList.remove("menuCatLi2")
    document.getElementById("sides").classList.remove("menuCatLi");
    document.getElementById("sides").classList.add("menuCatLi2");
    document.getElementById("drinks").classList.add("menuCatLi");
    document.getElementById("drinks").classList.remove("menuCatLi2")
    document.getElementById("new").classList.add("menuCatLi");
    document.getElementById("new").classList.remove("menuCatLi2")
    document.getElementById("desserts").classList.add("menuCatLi");
    document.getElementById("desserts").classList.remove("menuCatLi2");
    category1 = "Side"
    displayProducts(category1);
    console.log("side");
}

function showDrinks() {
    document.getElementById("burgers").classList.add("menuCatLi");
    document.getElementById("burgers").classList.remove("menuCatLi2");
    document.getElementById("sides").classList.add("menuCatLi");
    document.getElementById("sides").classList.remove("menuCatLi2");
    document.getElementById("drinks").classList.remove("menuCatLi");
    document.getElementById("drinks").classList.add("menuCatLi2");
    document.getElementById("new").classList.add("menuCatLi");
    document.getElementById("new").classList.remove("menuCatLi2");
    document.getElementById("desserts").classList.add("menuCatLi");
    document.getElementById("desserts").classList.remove("menuCatLi2");
    category1 = "Drink"
    displayProducts(category1);
    console.log("drink");
}
function showNew() {
    document.getElementById("burgers").classList.add("menuCatLi");
    document.getElementById("burgers").classList.remove("menuCatLi2");
    document.getElementById("sides").classList.add("menuCatLi");
    document.getElementById("sides").classList.remove("menuCatLi2");
    document.getElementById("drinks").classList.add("menuCatLi");
    document.getElementById("drinks").classList.remove("menuCatLi2");
    document.getElementById("new").classList.remove("menuCatLi");
    document.getElementById("new").classList.add("menuCatLi2");
    document.getElementById("desserts").classList.add("menuCatLi");
    document.getElementById("desserts").classList.remove("menuCatLi2");
    category1 = "New"
    displayProducts(category1);
    console.log("new");
}
function showDesserts() {
    document.getElementById("burgers").classList.add("menuCatLi");
    document.getElementById("burgers").classList.remove("menuCatLi2");
    document.getElementById("sides").classList.add("menuCatLi");
    document.getElementById("sides").classList.remove("menuCatLi2");
    document.getElementById("drinks").classList.add("menuCatLi");
    document.getElementById("drinks").classList.remove("menuCatLi2");
    document.getElementById("new").classList.add("menuCatLi");
    document.getElementById("new").classList.remove("menuCatLi2");
    document.getElementById("desserts").classList.remove("menuCatLi");
    document.getElementById("desserts").classList.add("menuCatLi2");
    category1 = "Dessert"
    displayProducts(category1);
    console.log("dessert");
}

function menuOnload() {
    getUserData();
    getCartData();
    fetchComments();
    getProducts();
}

function profileOnload() {
    getUserData1();
    getCartData();
}

function aboutOnload() {
    getUserData();
    getCartData();
}

function indexOnload() {
    getUserData();
    getCartData();
}

function checkout() {
    if (document.getElementById("emptyCart").innerHTML == ""){
    var cartModal = new Modal(document.getElementById("cartModal"));
    alert("Your order has been received! It will arrive shortly. Thank you for choosing French Burgers!");
    cartModal.hide();
    }
    else {
        alert("Your cart is empty.");
    }
}

// conditions for if user is not logged in
if (sessionStorage.getItem("username") != undefined) {
    // setting login to become username
    document.getElementById("navLogin").innerHTML = sessionStorage.getItem("username");
    // change href from login.html to profile.html
    document.getElementById("navLogin").setAttribute('href', 'profile.html');
    // changing the login modal to cart modal
    document.getElementById("navCart").removeAttribute('onclick', 'loginModal()');
    document.getElementById("navCart").setAttribute('onclick', 'cartModal()');
}
