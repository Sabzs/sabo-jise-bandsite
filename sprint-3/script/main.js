const parentDiv = document.getElementById("comments");
const userForm = document.getElementById("userForm");



function commentsLoop(showsArr) {

    userForm.innerHTML.value = '';
    userForm.reset();


    const sortedArry = showsArr.sort(function (a, b) {
        return a.timestamp - b.timestamp;
        // return b.date - a.date;
    });

    for (let i = 0; i < sortedArry.length; i++) {
        sortedArry[i].anotherKey = "new value";
        createCommentElem(sortedArry[i]);
    }

}
userForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("form Submitted");
    const nameInput = event.target.userName.value;
    const commentInput = event.target.userComment.value;
    if (nameInput === "" || commentInput === "") {
        alert("please fill your name and comments");
    } else {
        postComment({ name: nameInput, comment: commentInput });
    }
    userForm.reset();
});

function getComments() {
    axios
        .get(
            "https://project-1-api.herokuapp.com/comments?api_key=812f588e-483e-4c64-b13d-437c4e8554e5"
        )
        .then(response => {
            console.log(response);
            let infoArray = response.data;
            infoArray.forEach(element => {
                const commentsInfoDiv = document.createElement("div");
                commentsInfoDiv.classList.add("main__comment-info");

                const circleDiv = document.createElement("div")
                circleDiv.classList.add("main__circleDiv")
                const imageCircle = document.createElement("div");
                imageCircle.classList.add("main__greyCircle");

                const userCommentsDiv = document.createElement("div");
                userCommentsDiv.classList.add("main__userComments");

                const nameDateDiv = document.createElement("div");
                nameDateDiv.classList.add("main__nameDate");

                // ===================ARRAY OF OBJECTS ====================================//

                const commentName = document.createElement("p");
                commentName.classList.add("main__userName");
                commentName.innerText = element.name;

                const commentTime = document.createElement("p");
                commentTime.classList.add("main__userTime");
                commentTime.innerText = element.timestamp;

                // create a <p> tag for the comment description
                const commentDescription = document.createElement("p");
                commentDescription.classList.add("main__userText");
                commentDescription.innerText = element.comment;

                //====================== APENDDING SECTION =============================//

                commentsInfoDiv.appendChild(circleDiv);
                commentsInfoDiv.appendChild(userCommentsDiv);

                circleDiv.appendChild(imageCircle);

                userCommentsDiv.appendChild(nameDateDiv);
                userCommentsDiv.appendChild(commentDescription)

                nameDateDiv.appendChild(commentName);
                nameDateDiv.appendChild(commentTime);

                //==================== FINAL APPEND TO MAIN-DIV ========================//
                parentDiv.appendChild(commentsInfoDiv);
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}
getComments();


function postComment(postObj) {
    console.log(postObj);
    axios
        .post(`https://project-1-api.herokuapp.com/comments?api_key=812f588e-483e-4c64-b13d-437c4e8554e5`, postObj)
        .then((response) => {
            console.log(response)
            getComments();
        }).catch((error) => { console.log(error) })
    // getComments();
}
userForm.reset();
