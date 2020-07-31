// const comments = document.getElementById("comments");
// const userForm = document.getElementById("userForm");


// const commentsData = [
//     {
//         name: "Michael Lyons",
//         timestamp: new Date(2018, 11, 18),
//         description: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going.This is still simply the greatest opening of a concert I have EVER witnessed.",
//     },
//     {
//         name: "Gary Wong",
//         timestamp: new Date(2018, 11, 11),
//         description: "Every time I see him shred I feel so motivated to get off my couch and hop on my board.He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
//     },
//     {
//         name: "Theodore Duncan",
//         timestamp: new Date(2018, 10, 15),
//         description: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
//     },
// ];


// function loopThroughComments(commentsArr) {

//     comments.innerHTML = '';

//     const sortedArry = commentsArr.sort(function (a, b) {
//         return b.timestamp - a.timestamp;
//     });

//     //loop through sorted array and append to the DOM
//     for (let i = 0; i < sortedArry.length; i++) {
//         const messageLi = document.createElement("li");
//         messageLi.innerText = sortedArry[i].comment;
//         comments.appendChild(messageLi);
//     }

//     // //my original loop..../
//     // for (let i = 0; i < sortedArry.length; i++) {
//     //     sortedArry[i].anotherKey = "new value";
//     //     createCommentElem(sortedArry[i]);
//     // }
// }

// //========================== EVENT LISTENER ===================================//
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
//     loopThroughComments(commentsData);
// });

// // loopThroughComments(commentsData);
// function getComments() {
//     // axios
//     //     .get(
//     //         `https://project-1-api.herokuapp.com/comments?api_key=9d31b530-e2fe-442c-86ef-7b2ba165cbfa`
//     //     )
//     //     .then(function (response) {
//     //         console.log(response); // inspect api response
//     //         


//     axios
//         .get(
//             "https://project-1-api.herokuapp.com/comments?api_key=812f588e-483e-4c64-b13d-437c4e8554e5"
//         )
//         .then(response => {
//             console.log(response.data);
//             // loopThroughComments(response.data);
//             let infoArray = response.data;
//             infoArray.forEach(element => {

//                 const commentsInfoDiv = document.createElement("div");
//                 commentsInfoDiv.classList.add("main__comment-info");

//                 const circleDiv = document.createElement("div")
//                 circleDiv.classList.add("main__circleDiv")
//                 const imageCircle = document.createElement("div");
//                 imageCircle.classList.add("main__greyCircle");

//                 const userCommentsDiv = document.createElement("div");
//                 userCommentsDiv.classList.add("main__userComments");

//                 const nameDateDiv = document.createElement("div");
//                 nameDateDiv.classList.add("main__nameDate");

//                 // ===================ARRAY OF OBJECTS ====================================//

//                 const commentName = document.createElement("p");
//                 commentName.classList.add("main__userName");
//                 // commentName.innerText = comment.name;
//                 commentName.innerText = element.name;

//                 const commentTime = document.createElement("p");
//                 commentTime.classList.add("main__userTime");
//                 commentTime.innerText = element.timestamp;
//                 // const date = comment.timestamp.getDate();
//                 // const month = comment.timestamp.getMonth() + 1;
//                 // const year = comment.timestamp.getFullYear();
//                 // commentTime.innerText = `${month}, ${date}, ${year}`;

//                 // create a <p> tag for the comment description
//                 const commentDescription = document.createElement("p");
//                 commentDescription.classList.add("main__userText");
//                 // commentDescription.innerText = comment.description;
//                 commentDescription.innerText = element.comment;

//                 //====================== APENDDING SECTION =============================//

//                 commentsInfoDiv.appendChild(circleDiv);
//                 commentsInfoDiv.appendChild(userCommentsDiv);

//                 circleDiv.appendChild(imageCircle);

//                 userCommentsDiv.appendChild(nameDateDiv);
//                 userCommentsDiv.appendChild(commentDescription)

//                 nameDateDiv.appendChild(commentName);
//                 nameDateDiv.appendChild(commentTime);

//                 //==================== FINAL APPEND TO MAIN-DIV ========================//
//                 comments.appendChild(commentsInfoDiv);


//             })
//             // .catch(function (error) {
//             //     console.log(error);
//             // });
//         })
// }
// // call function to load API data and append data to DOM
// getComments();


//=============================================================================================
//=================================================================================
const comments = document.getElementById("comments");
const userForm = document.getElementById("userForm");

function looThroughComments(showsArr) {
    comments.innerHTML.value = '';
    const sortedArry = showsArr.sort(function (a, b) {
        return b.timestamp - a.timestamp;
        // return b.date - a.date;
    });

    for (let i = 0; i < sortedArry.length; i++) {
        sortedArry[i].anotherKey = "new value";
        createCommentElem(sortedArry[i]);

        // const messageLi = document.createElement("li")
        // messageLi.innerText = sortedArry[i].comments;
        // messageList.appendChild(messageLi);

    }

    comments.addEventListener("submit", e => {
        e.preventDefault();
        const nameInput = event.target.userName.value;
        const commentInput = event.target.userComment.value;


    })

    // userFomr.textContent = "";
    userForm.reset();
    userForm.focus();
}
//ajax here
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
            comments.appendChild(commentsInfoDiv);

        })
        // .catch(function (error) {
        //     console.log(error);
        // });


        // userFomr.textContent = "";
        userForm.reset();
        userForm.focus();

    })

