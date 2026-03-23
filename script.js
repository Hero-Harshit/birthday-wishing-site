// For the heading

let heading = document.getElementById("heading");
let headingMsg = "Happy Birthday !";
let headingIndex = 0;

function updateHeading() {
    if (headingIndex < headingMsg.length) {
        heading.textContent += headingMsg[headingIndex];
        headingIndex++;
    } else {
        clearInterval(headingInterval);
    }
}   

let headingInterval = setInterval(updateHeading, 100);





// For the paragraph

let paragraphMsg = "Wishing you a day filled with love, joy, and unforgettable moments. May this year bring you happiness and success in all your endeavors. Happy Birthday Mamta.";
let paragraph = document.getElementById("paragraph");
let paragraphIndex = 0;

function updateParagraph() {
    if (paragraphIndex < paragraphMsg.length) {
        paragraph.textContent += paragraphMsg[paragraphIndex];
        paragraphIndex++;
    } else {
        clearInterval(paragraphInterval);
    }
}

let paragraphInterval = setInterval(updateParagraph, 50);
