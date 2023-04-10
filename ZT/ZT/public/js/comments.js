var normalImage = "images/smile.png";
var blackedImage = "images/smileBW.png";
var rating = 0;

// get all the comments
function fetchComments() {
    var request = new XMLHttpRequest();
    request.open('GET', comment_url, true);

    request.onload = function () {
        comment_array = JSON.parse(request.responseText);
        console.log(comment_array);
    };
    request.send();
}

// displaying comments under their products
function showProductComments() {
    var total = comment_array.length;
    document.getElementById("commentBody").textContent = "";
    document.getElementById("emptyComment1").innerHTML = "Currently, there are no reviews for this product. Be the first!";

    for (var i = 0; i < comment_array.length; i++) {
        if (comment_array[i].product_Id == product_array[currentIndex].product_Id) {
            document.getElementById("emptyComment1").innerHTML = "";
            var username = comment_array[i].username;
            var review = comment_array[i].review;
            var datePosted = comment_array[i].datePosted;
            var rating = comment_array[i].ratings;
            star = "";

            var commentsHTML = '<div style="width: 100%; border-bottom: 1px solid grey; padding-top: 10px;">\
            <small class="commentUserDate" id="usernameComment">\
            Commented by <strong>' + username + '</strong>\
            </small>\
            <div class="commentRatingTxt" id="rating' + i + '">\
            This user rated this product ' + rating + ' out of 5.\
            </div></br>\
            <div class="commentReview">\
            ' + review + '\
            </div>\
            <small class="commentUserDate">\
            Posted on <strong>' + datePosted + '</strong> (24h clock)\
            </div>'
            document.getElementById("commentBody").insertAdjacentHTML('beforeend', commentsHTML);

            if (sessionStorage.getItem("username") == comment_array[i].username) {
                var star = "";
                star += "<img src='images/delete.png' class='edit' item='" + i + "' onClick='deleteComment(this)' />";
                star += "<img src='images/edit.png' class='edit' item='" + i + "' onClick='editComment(this)' />";
                document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star);
            }
        }
    }
}

function resetPop(classname) {
    var pop = document.getElementsByClassName(classname);
    for (p of pop) {
        p.setAttribute("src", blackedImage);

    }
}

function rateIt(element, classname) {
    var num = element.getAttribute("value");
    var pop = document.getElementsByClassName(classname);
    var classTarget = "." + classname;
    resetPop(classname);
    changeImage(num, classTarget);
}

function changeImage(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", normalImage);
            rating = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", normalImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", normalImage);
            rating = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", normalImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", normalImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", normalImage);
            rating = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", normalImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", normalImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", normalImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", normalImage);
            rating = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", normalImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", normalImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", normalImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", normalImage);
            document.querySelector(classTarget + "[value='5']").setAttribute("src", normalImage);
            rating = 5;
            break;
    }
}

// add comment function
function addComment() {
    console.log(currentIndex);
    var product_Id = product_array[currentIndex].product_Id;
    var username = sessionStorage.getItem("username");
    var productName = product_array[currentIndex].name;
    var ratings = rating;
    var review = document.getElementById("reviewTextArea").value;
    var date = new Date();
    var datePosted = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() + ":" + date.getSeconds();
    console.log(datePosted);

    var commentData = {
        "product_Id": product_Id,
        "username": username,
        "productName": productName,
        "ratings": ratings,
        "review": review,
        "datePosted": datePosted
    }

    console.log(commentData);
    var postComment = new XMLHttpRequest();
    postComment.open("POST", comment_url, true);
    postComment.setRequestHeader("Content-Type", "application/json");
    postComment.onload = function () {
        fetchComments();
        var productModal1 = new Modal(document.getElementById("productModal"));
        alert("Your comment has been received! Clicking OK will close the product modal.");
        productModal1.hide();
    };
    postComment.send(JSON.stringify(commentData));
}

// delete comment function
function deleteComment(element) {
    var item = element.getAttribute("item");
    console.log(comment_array[item].comments_Id);
    var response = confirm("Are you sure you want to delete this comment?");

    if (response == true) {
        var delete_comment_url = comment_url + "/" + comment_array[item].comments_Id; //For Local Comments DB
        var eraseComment = new XMLHttpRequest();
        eraseComment.open("DELETE", delete_comment_url, true);
        eraseComment.onload = function () {
            fetchComments();
            var productModal1 = new Modal(document.getElementById("productModal"));
            alert("Your comment has been removed. Clicking OK will close the product modal.");
            productModal1.hide();
        }
    };
    eraseComment.send();
}

// setting the conditions and bringing up the edit comment modal
function editComment(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    var commentModal = new Modal(document.getElementById("productModal"));
    commentModal.hide();
    var editCommentModal = new Modal(document.getElementById("editCommentModal"));
    editCommentModal.show();
    document.getElementById("editTitle").innerHTML = "Editing your comment for " + comment_array[item].productName + ".";
    document.getElementById("editreviewTextArea").value = comment_array[item].review;
    console.log(comment_array[item].comments_Id);
}

// edit comment function
function updateComment() {
    var response = confirm("Are you sure you want to edit your comment? Changes you make cannot be undone.");
    if (response == true) {
        var edit_comment_url = comment_url + "/" + comment_array[currentIndex].comments_Id; //For Remote Comments DB. Here the id looks abit different as it is the Cloud implementation
        var updateComment = new XMLHttpRequest(); // new HttpRequest instance
        updateComment.open("PUT", edit_comment_url, true);
        updateComment.setRequestHeader("Content-Type", "application/json");
        comment_array[currentIndex].review = document.getElementById("editreviewTextArea").value;
        comment_array[currentIndex].ratings = rating;
        updateComment.onload = function () {
            fetchComments();
            var productModal1 = new Modal(document.getElementById("productModal"));
            alert("Your comment has been edited. Clicking OK will close the product modal.");
            productModal1.hide();
        };
        updateComment.send(JSON.stringify(comment_array[currentIndex]));
    }
}