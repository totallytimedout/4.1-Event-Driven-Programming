// Caleb Hess

//

// Assignment 4.1

//
//the meme container
const meme = document.getElementById("meme-wrapper");

//  the meme image
const memeImage = document.getElementById("memeImage");

// toggle function utilized by start and stop functions
function toggleButtonState() {
    console.log("buttons swapped");
    document.getElementById("start").toggleAttribute("disabled");
    document.getElementById("stop").toggleAttribute("disabled");
}
function start(ev, a) {
    if (!ev) {
        // throw an error if the function doesn't receive the event that calls it.
        throw Error("must be called in response to an event trigger");
    } else {
        memeImage.style.animationPlayState = "running";


    }



    // let the console know that the button start has been activated and the function ran
    console.log("start");

    // console.log(ev) /* to see what properties are passed to the function from the event */
    // console.log(ev.srcElement) /* found this accessor handy */
    //
    //
    // toggle the disabled state of the source element of from the event that called the function to be disabled
    // ev.srcElement.toggleAttribute("disabled");
    // activate the stop button to be available
    // document.getElementById("stop").toggleAttribute("disabled");
    toggleButtonState();

}

function stop(ev) {
    if (!ev) {
        // throw an error if the fdunction doesn't receive the event that calls it.

        throw Error("must be called in response to an event trigger");
    } else {
        memeImage.style.animationPlayState = "paused";
    }


    // let the console know that the button start has been activated and the function ran

    console.log("stop");

    // console.log(ev.srcElement)

    //

    // console.log(args);

    //

    // toggle the disabled state of the source element of from the event that called the function to be disabled

    // ev.srcElement.toggleAttribute("disabled");

    // // activate the stop button to be available

    // document.getElementById("start").toggleAttribute("disabled");

    toggleButtonState();
}

// reload function

function reload() {
    console.log("reload");

    location.reload();
}


// the main function used to attach the buttons to the meme image
function attachControls(element) {
    // element is the reference to an element on the page that should have these control buttons attached to it.
    // the element must be a container element that holds the element needing the buttons
    // ie. meme-wrapper is a wrapper div to group the whole set of buttons and image as one memer item
    // a is an alias for element used for convenience and ease of typing
    const a = element;

    if (!a ||
        a instanceof HTMLElement !== true
        // if there is no 'a' or 'a' is not an instance of an HTMLElement
    ) {
        //then if its no a create a an element to have the buttonss appended to
        if (!a) {
            // create the container div
            let defaultInsert = document.createElement("div");

            defaultInsert.id = `default_insert_${document.querySelectorAll("[id*=default_insert_").length}`;

            // give the element a dynamic Id that establishes a sequential order of id's for each element created by the function
            document.body.appendChild(defaultInsert);

            // put the newly created container element to the bottom of the page
        } else {
            //if there is an a variable then a must not be an HTMLElement therefore throw a new error " typeof element is invalid";
            // console.warn(element instanceof HTMLElement);
            throw Error(`typeof ${element} is invlaid`); //error
        }
    } /* if a is : */

    if (a instanceof HTMLElement === true /* HTML Element */ ||
        a instanceof HTMLDivElement === true /* Div Element */ ||
        a instanceof HTMLImageElement === true /* Image Element */ ||
        a instanceof HTMLAreaElement === true /* Area Element */ ||
        a instanceof HTMLTableElement === true) {
        /* Table Element */
        // a constant for the function values to be iterated through
        const controlButtons = [start, stop, reload];

        // initialize the buttonElements Array to store the newly created buttons
        let buttonElements = [];

        console.log(controlButtons); /* See if the Array formed properly */









        //
        // for loop
        //      let index as i = 0
        //      if i is less than the number of controlButtons in the controlButtons array incremenet i by one after the iteration
        for (let i = 0; i < controlButtons.length; i++) {
            // initialize the insertedButtoni temporary variable to a button element
            let insertedButton = document.createElement("button");

            // ass the class "inserted" to the button element
            insertedButton.classList.add("inserted");

            // if i is strictly equal to 1 in type and and value
            if (i === 1) {
                // if its the second button in the array create it disabled first
                insertedButton.disabled = true;
            }

            // set the id of the button to the name of the function the button corresponds to
            insertedButton.id = controlButtons[i].name;


            insertedButton.onclick = controlButtons[i];
            // set the value of the inner html of the button to the name of the function the button calls
            insertedButton.innerHTML = controlButtons[i].name;

            // insert the element right after the end tag of the elemednt in which this function targets
            a.insertAdjacentElement("afterend", insertedButton);

            //push the nedwly created button to the buttonElements Array
            buttonElements.push(document.getElementById(controlButtons[i].name));

            console.log(buttonElements[i]);

            //variable check:
            //first iteration:button#start.inserted
            //second iteration: button#stop.inserted
            //third iteration: button#reload.inserted
        }

        console.log(buttonElements);

        //variable check:
        //Array(3) [ button#start.inserted, button#stop.inserted, button#reload.inserted ]
        //move.js:121:17
        console.log(controlButtons);

        //variable check:
        //Array(3) [ start(ev, a), stop(ev), reload() ]
        //move.js:122:17
    }
}

//call the function attachControls provided with the parameter as meme

attachControls(meme);
