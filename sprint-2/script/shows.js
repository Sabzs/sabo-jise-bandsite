
//============================================================================//
const commentsCont = document.getElementById("shows");


const commentsData = [

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

    shows.innerHTML = '';

    for (let i = 0; i < commentsArr.length; i++) {
        commentsArr[i].anotherKey = "new value";
        createCommentElem(commentsArr[i]);
    }
}
function createCommentElem(comment) {
    // create a <div>
    const showsInfoDiv = document.createElement("div");
    showsInfoDiv.classList.add("main__shows-info");


    /* create <div> container for and append name/timestamp/imamgeCircle ---
    then append <div> container to "commentElemt" */
    const showsEventsDiv = document.createElement("div");
    showsEventsDiv.classList.add("main__tourEvents");

    // ===================ARRAY OF OBJECTS ====================================//
    const showDate = document.createElement("p");
    showDate.classList.add("main__eventDates");
    showDate.innerText = comment.DATE;

    const showVenue = document.createElement("p");
    showVenue.classList.add("main__eventDetails");
    showVenue.innerText = comment.VENUE;

    const showLocation = document.createElement("p");
    showLocation.classList.add("main__eventDetails");
    showLocation.innerText = comment.LOCATION;

    const buttonDiv = document.createElement("div")
    buttonDiv.classList.add("main__buttonDiv")
    const buyTicket = document.createElement("button");
    buyTicket.classList.add("main__btn-ticket");
    buyTicket.innerHTML = "BUY TICKETS";

    // ======================ARRAY HEADERS ===================  //

    // Date header ...... //
    const eventDate = document.createElement("p");
    eventDate.classList.add("main__dateHeaders");
    eventDate.innerText = "DATE";

    // Venue header ...... //
    const eventVenue = document.createElement("p");
    eventVenue.classList.add("main__eventHeaders");
    eventVenue.innerText = "VENUE";

    // location header ...... //
    const eventLocation = document.createElement("p");
    eventLocation.classList.add("main__eventHeaders");
    eventLocation.innerText = "LOCATION";


    //====================== APENDDING SECTION =======================================//

    showsInfoDiv.appendChild(showsEventsDiv);
    showsInfoDiv.appendChild(buttonDiv);

    buttonDiv.appendChild(buyTicket);

    showsEventsDiv.appendChild(eventDate);
    showsEventsDiv.appendChild(showDate);
    showsEventsDiv.appendChild(eventVenue);
    showsEventsDiv.appendChild(showVenue);
    showsEventsDiv.appendChild(eventLocation);
    showsEventsDiv.appendChild(showLocation);


    //==================== FINAL APPEND TO MAIN-DIV ====================================//
    // glues everything together and appends to the MAIN DIV
    commentsCont.appendChild(showsInfoDiv);
}
loopThroughComments(commentsData);


//===================================================================================//
shows.addEventListener('submit', function (event) {
    event.preventDefault();

    // // loopThroughComments(comments);
});

loopThroughComments(commentsData);

//=========================================================

