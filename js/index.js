var computerButton = document.getElementById("computer-button");
var startingText = document.getElementById("starting-text");
var mainPage = document.getElementById("main-page");

computerButton.addEventListener("click", handleVisibility);

startingText.style.visibility = "hidden";
mainPage.style.visibility = "hidden";


function handleVisibility() {
    if (startingText.style.visibility == "visible") {
        startingText.style.visibility = "hidden";
    } else {
        startingText.style.visibility = "visible";

        var timeout = setTimeout(() => {
            startingText.style.visibility = "hidden";
            mainPage.style.visibility = "visible";

        }, 3000);
    }

    if(mainPage.style.visibility == "visible"){
        mainPage.style.visibility = "hidden";
        startingText.style.visibility = "hidden";
        // Clear timeout
        clearTimeout(timeout);
    }
}

