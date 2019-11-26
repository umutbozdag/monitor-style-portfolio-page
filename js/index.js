var startingText = document.getElementById("starting-text");
var mainPage = document.getElementById("main-page");
var footerDate = document.getElementById("footer-date");


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
    if (startingText.style.display == "inline") {
        startingText.style.display = "none";
    } else {
        startingText.style.display = "inline";

        var timeout = setTimeout(() => {
            startingText.style.display = "none";
            mainPage.style.display = "inline";

        }, 5000);
    }

    if (mainPage.style.display == "inline") {
        mainPage.style.display = "none";
        startingText.style.display = "none";
        // Clear timeout
        clearTimeout(timeout);
    }
}

function handleDateTime() {
    setInterval(() => {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;

        footerDate.innerHTML = dateTime;
    }, 1000);

}

printLetterByLetter("starting-text", "Hello world!\nBooting >", 100);

handleVisibility();

handleDateTime();
