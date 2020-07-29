const parentContainer = document.getElementById("comments");
const userForm = document.getElementById("userForm");


// function loopThroughComments(commentsArr) { //if it doesnt work swap back (shawsArr) <=> (commenstArr) ///

//     comments.innerHTML = '';

//     const sortedArry = commentsArr.sort(function (a, b) {   //if it doesnt work swap back (shawsArr) <=> (commentArr) ///
//         return b.timestamp - a.timestamp;
//     });

//     for (let i = 0; i < sortedArry.length; i++) {
//         sortedArry[i].anotherKey = "new value";
//         createCommentElem(sortedArry[i]);
//     }
// }
//if axios doesn't work replace with this.....//
// function createCommentElem(comment)
//============================================
// = (event) => 
//=============================================

const handleFormSubmit = (event) => {
    event.preventDefault(); // keeps the page from reloading
    const nameInput = event.target.userName.value;
    const commentInput = event.target.userComment.value;

    userForm.push(
        {
            name: nameInput,
            timestamp: new Date(Date.now()),
            comment: commentInput,
        },
    );
};
axios
    .get(
        "https://project-1-api.herokuapp.com/comments?api_key=812f588e-483e-4c64-b13d-437c4e8554e5"
    )
    .then(response => {
        console.log(response.data);
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
            // commentName.innerText = comment.name;
            commentName.innerText = element.name;

            const commentTime = document.createElement("p");
            commentTime.classList.add("main__userTime");
            // const month = infoArray.timestamp.getMonth() + 1;
            // const date = infoArray.timestamp.getDate();
            // const year = infoArray.timestamp.getFullYear();
            // commentTime.innerText = (`${month}, ${date}, ${year}`);
            commentTime.innerText = element.timestamp;

            // create a <p> tag for the comment description
            const commentDescription = document.createElement("p");
            commentDescription.classList.add("main__userText");
            // commentDescription.innerText = comment.description;
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
            parentContainer.appendChild(commentsInfoDiv);
        });
        // .catch((error) => console.log(error));
    });


// };
userForm.addEventListener('submit', handleFormSubmit);


// // 

// // loopThroughComments(commentsData);

// //==========================Form Submit EVENT LISTENER ===================================//
// userForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     const nameInput = event.target.userName.value;
//     const commentInput = event.target.userComment.value;
//     commentsData.push(
//         {
//             name: nameInput,
//             timestamp: new Date(Date.now()),
//             description: commentInput,
//         },
//     );
//     // //  loopThroughComments(commentsData);//
// });

// // // loopThroughComments(commentsData);//

