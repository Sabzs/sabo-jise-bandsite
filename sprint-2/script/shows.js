//============================================
//add prevent default ===HERE=== //

//============================================================================//
const commentsCont = document.getElementById("shows");
// const userForm = document.getElementById("userForm");
// const userText = document.getElementById("serComments");


const commentsData = [
    {
        name: "Michael Lyons",
        timestamp: "12/18/2018",
        description: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going.This is still simply the greatest opening of a concert I have EVER witnessed.",
    },
    {
        name: "Gary Wong",
        timestamp: "12/12/2018",
        description: "Every time I see him shred I feel so motivated to get off my couch and hop on my board.He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
    },
    {
        name: "Theodore Duncan",
        timestamp: "11/15/2018",
        description: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
    },


    {
        DATE: "Mon Dec 17 2018",
        VENUE: "Ronald Lane",
        LOCATION: "San Francisco, CA"
    },
    {
        DATE: "Tue Jul 18 2019",
        VENUE: "Pier 3 East",
        LOCATION: "San Francisco, CA"
    },
    {
        DATE: "Fri Jul 22 2019",
        VENUE: "View Loungue",
        LOCATION: "San Francisco, CA"
    },
    {
        DATE: "Sat Aug 12 2019",
        VENUE: "Renald Lane",
        LOCATION: "San Francisco, CA"
    },
    {
        DATE: "Fri 05 2019",
        VENUE: "Moscow Center",
        LOCATION: "San Francisco, CA"
    },
    {
        DATE: "Wed Aug 11 2019",
        VENUE: "Pres Club",
        LOCATION: "San Francisco, CA"
    },



];



function loopThroughComments(commentsArr) {
    //clearing the input/textarea
    shows.innerHTML = '';


    for (let i = 0; i < commentsArr.length; i++) {
        commentsArr[i].anotherKey = "new value";
        createCommentElem(commentsArr[i]);
    }
}
function createCommentElem(comment) {
    // create a <div>
    const commentsInfoDiv = document.createElement("div");
    commentsInfoDiv.classList.add("main__comment-info");

    // create <img> tag for silver-grey circle and append to "commentElemt"
    // const circleDiv = document.createElement("div")
    // circleDiv.classList.add("main__circleDiv")
    // const imageCircle = document.createElement("div");
    // imageCircle.classList.add("main__greyCircle");

    /* create <div> container for and append name/timestamp/imamgeCircle ---
    then append <div> container to "commentElemt" */
    const userCommentsDiv = document.createElement("div");
    userCommentsDiv.classList.add("main__userComments");

    // append name/date to this div then append this <div> to <nameDateDiv>
    const nameDateDiv = document.createElement("div");
    nameDateDiv.classList.add("main__nameDate");

    // ===================ARRAY OF OBJECTS ====================================//
    // create a <p> tag for the name
    const commentName = document.createElement("p");
    commentName.classList.add("main__userName");
    commentName.innerText = comment.DATE;

    // create a <p> tag for the timestamp
    const commentTime = document.createElement("p");
    commentTime.classList.add("main__userTime");
    commentTime.innerText = comment.VENUE;

    // create a <p> tag for the comment description
    const commentDescription = document.createElement("p");
    commentDescription.classList.add("main__userText");
    commentDescription.innerText = comment.LOCATION;

    //====================== APENDDING SECTION =======================================//
    // append to <commentsInfoDiv>
    // commentsInfoDiv.appendChild(commentDescriptionElem);
    // commentsInfoDiv.appendChild(circleDiv);
    commentsInfoDiv.appendChild(userCommentsDiv);

    // append imageCircle to parent <cirCleDiv>
    // circleDiv.appendChild(imageCircle);

    // userCommentsDiv.appendChild(nameDate/Description);
    userCommentsDiv.appendChild(nameDateDiv);
    userCommentsDiv.appendChild(commentDescription)

    // nameDate appendChild <p> tags name/date
    nameDateDiv.appendChild(commentName);
    nameDateDiv.appendChild(commentTime);



    //==================== FINAL APPEND TO MAIN-DIV ====================================//
    // glues everything together and appends to the MAIN DIV
    commentsCont.appendChild(commentsInfoDiv);
}
loopThroughComments(commentsData);


//===================================================================================//
userForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // const nameInput = event.target.userName.value;
    // const commentInput = event.target.userComment.value;
    // // console.log('form submitted', event.target.userName.value);
    // // console.log('form submitted', event.target.userComment.value);
    // // comments.push(
    // //     {
    // //         name: 'Jonah',
    // //         comments: nameInput,
    // //         date: new Date()
    // //     },
    // //     {
    // //         name: '',
    // //         comments: commentInput,
    // //         date: new Date()
    // //     },
    // // );
    // // // console.log(comments);
    // // loopThroughComments(comments);
});

loopThroughComments(commentsData);

//=========================================================


// const showsMainDiv = document.getElementById("shows");

// const showsData = [
//     {
//         DATE: "Mon Dec 17 2018",
//         VENUE: "Ronald Lane",
//         LOCATION: "San Francisco, CA"
//     },
//     {
//         DATE: "Tue Jul 18 2019",
//         VENUE: "Pier 3 East",
//         LOCATION: "San Francisco, CA"
//     },
//     {
//         DATE: "Fri Jul 22 2019",
//         VENUE: "View Loungue",
//         LOCATION: "San Francisco, CA"
//     },
//     {
//         DATE: "Sat Aug 12 2019",
//         VENUE: "Renald Lane",
//         LOCATION: "San Francisco, CA"
//     },
//     {
//         DATE: "Fri 05 2019",
//         VENUE: "Moscow Center",
//         LOCATION: "San Francisco, CA"
//     },
//     {
//         DATE: "Wed Aug 11 2019",
//         VENUE: "Pres Club",
//         LOCATION: "San Francisco, CA"
//     },
// ];




