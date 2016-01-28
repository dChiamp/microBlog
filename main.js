window.onload = function() {

var form = document.getElementById('enter-post');

var postsList = document.getElementById("posts-list")
var formBtn = document.getElementById('form-submit-button');

var totalPostsNum = document.getElementById("posts-num");

var postsArray = []

function createNewPost () {
	for (var i = 0; i < postsArray.length; i++) {
		var lastPostArrayIndex = postsArray.lastIndexOf(postsArray[i]);
	};

	var newPost = document.createElement("ul");
	var t = document.createTextNode(postsArray[lastPostArrayIndex]);
	// create numbered posts for bonus reasons
	newPost.id = "post-" + (lastPostArrayIndex + 2);
	console.log(t);
	newPost.appendChild(t);
	postsList.appendChild(newPost);
}

function addPostsToArray () {
	postsArray.push(form.value);
	//trying to reset form
	form.value = "";
}

function countTotalPosts () {
	totalPostsNum.textContent = "Total Posts: " + (postsArray.length + 1);
}


// post function
formBtn.addEventListener("click", function (e) {
	e.preventDefault();

	addPostsToArray();
	createNewPost();
	countTotalPosts();

	// addComment();
})

}

/* BONUS FAIL

//fn to get li id
document.addEventListener("click", function(e) {
    var commentListId = e.target.id;
    console.log(commentListId);
})

var commentListNum = document.getElementsByTagName("ul");
function addComment () {

	// create form
	var newComment = document.createElement("form");
	var newCommentInput = newComment.value;
	var text = newCommentInput.value;
	newComment.appendChild(text);
	commentListNum.appendChild(newComment)

}

// sort alpha
var sortAlpaBtn = document.getElementById("sort-alpha");

function sortAlpha () {
	postsArray.sort();
	console.log(postsArray);
	

}

sortAlpaBtn.addEventListener("click", function(){
	sortAlpha();
})

*/


