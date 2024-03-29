const commentsCont = document.getElementById("shows");

axios
    .get(
        "https://project-1-api.herokuapp.com/showdates?api_key=812f588e-483e-4c64-b13d-437c4e8554e5"
    )
    .then(response => {
        console.log(response.data);
        let showsArray = response.data;
        showsArray.forEach(element => {
            const showsInfoDiv = document.createElement("div");
            showsInfoDiv.classList.add("main__shows-info");

            const showsEventsDiv = document.createElement("div");
            showsEventsDiv.classList.add("main__tourEvents");

            // ===================ARRAY OF OBJECTS =====================//
            const showDate = document.createElement("p");
            showDate.classList.add("main__eventDates");
            showDate.innerText = element.date;

            const showVenue = document.createElement("p");
            showVenue.classList.add("main__eventDetails");
            showVenue.innerText = element.place;

            const showLocation = document.createElement("p");
            showLocation.classList.add("main__eventDetails");
            showLocation.innerText = element.location;

            const buttonDiv = document.createElement("div")
            buttonDiv.classList.add("main__buttonDiv")
            const buyTicket = document.createElement("button");
            buyTicket.classList.add("main__btn-ticket");
            buyTicket.innerHTML = "BUY TICKETS";

            // ======================ARRAY HEADERS =====================//
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

            //====================== APENDDING SECTION ====================//
            showsInfoDiv.appendChild(showsEventsDiv);
            showsInfoDiv.appendChild(buttonDiv);

            buttonDiv.appendChild(buyTicket);

            showsEventsDiv.appendChild(eventDate);
            showsEventsDiv.appendChild(showDate);
            showsEventsDiv.appendChild(eventVenue);
            showsEventsDiv.appendChild(showVenue);
            showsEventsDiv.appendChild(eventLocation);
            showsEventsDiv.appendChild(showLocation);

            //==================== FINAL APPEND TO MAIN-DIV ===============//
            commentsCont.appendChild(showsInfoDiv);
        });
    });
