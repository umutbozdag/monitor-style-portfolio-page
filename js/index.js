var startingText = document.getElementById("starting-text");
var mainPage = document.getElementById("main-page");

mainPage.style.visibility = "hidden";

function printLetterByLetter(destination, message, speed) {
    var i = 0;
    var interval = setInterval(function () {
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length) {
            clearInterval(interval);
        }
    }, speed);
}

function handleVisibility() {
    if (startingText.style.visibility == "visible") {
        startingText.style.visibility = "hidden";
    } else {
        startingText.style.visibility = "visible";

        var timeout = setTimeout(() => {
            startingText.style.visibility = "hidden";
            mainPage.style.visibility = "visible";

        }, 5000);
    }

    if (mainPage.style.visibility == "visible") {
        mainPage.style.visibility = "hidden";
        startingText.style.visibility = "hidden";
        // Clear timeout
        clearTimeout(timeout);
    }
}

printLetterByLetter("starting-text", "Hello world!\nBooting >", 100);

handleVisibility();