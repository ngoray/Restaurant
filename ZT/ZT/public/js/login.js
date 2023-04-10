var login_url = "/login";
var register_url = "/register";
var user_url = "/user";

// to retrieve all information of the registered users
function getUserData() {
    var request = new XMLHttpRequest();
    request.open('GET', user_url, true);
    request.onload = function () {
        user_array = JSON.parse(request.responseText);
        console.log(user_array);
    };
    request.send();
}

// added displayUserInfo() for profile page
function getUserData1() {
    var request = new XMLHttpRequest();
    request.open('GET', user_url, true);
    request.onload = function () {
        user_array = JSON.parse(request.responseText);
        console.log(user_array);
        displayUserInfo();
    };
    request.send();
}

// login function
function login() {
    var loginUser = new XMLHttpRequest();
    loginUser.open('POST', login_url, true);

    var userName = document.getElementById("loginusername").value;
    var logPassword = document.getElementById("loginpassword").value;

    var loginData = {
        "username": userName,
        "password": logPassword,
    };

    loginUser.setRequestHeader("Content-Type", "application/json");
    loginUser.onload = function () {
        var output = JSON.parse(loginUser.responseText);
        if (output.token) {
            getUserData();
            sessionStorage.setItem("token", output.token);
            sessionStorage.setItem("username", output.username);
            window.location.href = "/index.html";
        } else {
            alert(output.message);
        }
    };
    loginUser.send(JSON.stringify(loginData));

}

// register function
function register() {
    var registerUser = new XMLHttpRequest();
    registerUser.open('POST', register_url, true);


    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var Name = firstName + " " + lastName;
    var regUserName = document.getElementById("signupUsername").value;
    var email = document.getElementById("email").value;
    var regPassword = document.getElementById("signupPW").value;
    var address = document.getElementById("address").value;
    var date = new Date();
    var dateCreated = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() + ":" + date.getSeconds();

    var registerData = {
        "Name": Name,
        "username": regUserName,
        "password": regPassword,
        "email": email,
        "address": address,
        "dateCreated": dateCreated
    }
    console.log(registerData);

    registerUser.setRequestHeader("Content-Type", "application/json");
    registerUser.onload = function () {
        var output = JSON.parse(registerUser.responseText);
        if (output.token) {
            sessionStorage.setItem("token", output.token);
            sessionStorage.setItem("username", registerData.username);
            window.location.href = "/index.html";
        } else {
            alert(output.message);
        }
    };
    registerUser.send(JSON.stringify(registerData));
}

// logging out by clearing session storage
function logout() {
    sessionStorage.clear();
    window.location.href = "/index.html";
}

// to display the information of the currently logged in user
function displayUserInfo() {
    for (var i = 0; i < user_array.length; i++) {
        if (sessionStorage.getItem("username") == user_array[i].username) {
            document.getElementById("profileUsername").innerHTML = "<div class='displayUserName' style='display:inline-block'>Username: </div>"+ " " + user_array[i].username;
            document.getElementById("profileName").innerHTML = "<div class='displayEmail' style='display:inline-block'>Name: </div>" + " " + user_array[i].name;
            document.getElementById("profileEmail").innerHTML = "<div class='displayEmail' style='display:inline-block'>Email: </div>" + " " + user_array[i].email;
            document.getElementById("profileAddress").innerHTML = "<div class='displayAddress' style='display:inline-block'>Address: </div>" + " " + user_array[i].address;
            document.getElementById("profileDateCreated").innerHTML = "<div class='displayDate' style='display:inline-block'>Date Created: </div>" + " " +  user_array[i].dateCreate;

            // var star = "";
            // // star += "<img src='images/edit.png' class='edit' item='" + i + "' onClick='editUserInfo(this)' />";
            // star += "<img src='images/delete.png' class='edit' item='" + i + "' onclick='deleteUser(this)'/>";
            // document.getElementById("profileUsername").insertAdjacentHTML('beforebegin', star);
        }
    }
}

// function editUserInfo() {
//     var editUserModal = new Modal(document.getElementById("editUserModal"));
//     editUserModal.show();
//     for (var i = 0; i < user_array.length; i++) {
//         if (sessionStorage.getItem("username") == user_array[i].username) {
//             document.getElementById("editemail").value = user_array[i].email;
//             document.getElementById("editsignupUsername").value = user_array[i].username;
//             document.getElementById("editemail").value = user_array[i].email;
//             document.getElementById("editaddress").value = user_array[i].address;
//         }
//     }
// }

// function deleteUser() {
//     var response = confirm("Delete user?");
//     if (response == true){
//         for (var i = 0; i < user_array.length; i++) {
//             if (sessionStorage.getItem("username") == user_array[i].username) {
//                 var delete_user_url = user_url + "/" + user_array[i].user_Id;
//             }
//         }
//         var deleteAccount = new XMLHttpRequest();
//         deleteAccount.open("DELETE", delete_user_url, true);
//         deleteAccount.onload = function() {
//             alert("Your account has been deleted. Clicking OK will log you out.");
//             logout();
//         }
//     };
//     deleteAccount.send();
// }

// function updateUserInfo() {
//     var response = confirm("Are you sure you want to edit your information?");

//     var name = document.getElementById("editfirstname").value + " " + document.getElementById("editlastname").value;
//     var email = document.getElementById("editemail").value;
//     var username = document.getElementById("editsignupUsername").value;
//     var password = document.getElementById("editsignupPW2").value;
//     var address = document.getElementById("editaddress").value;

//     var editedUserInfo = {
//         "name": name,
//         "username": username,
//         "password": password,
//         "email": email,
//         "address": address
//     }
//     console.log(editedUserInfo);

//     if (response == true) {
//         for (var i = 0; i < user_array.length; i++) {
//             if (sessionStorage.getItem("username") == user_array[i].username) {
//                 var edit_user_url = user_url + "/" + user_array[i].user_Id;
//             }
//         }
//         var updateUser = new XMLHttpRequest();
//         updateUser.open("PUT", edit_user_url, true);
//         updateUser.setRequestHeader("Content-Type", "application/json");
//         updateUser.onload = function() {
//             console.log("hello world");
//             sessionStorage.setItem("username", editedUserInfo.username);
//             alert("Your user information has been edited. Clicking OK will refresh the page.");
//             location.reload(true);
//         }
//     }
//     updateUser.send(JSON.stringify(editedUserInfo));
// }

