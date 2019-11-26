var startMenu = document.getElementById("start-menu");
var startButton = document.getElementById("start-button").addEventListener("click", handleStartMenu);;

mainPage.style.display = "none";
startMenu.style.visibility = "hidden";

function handleStartMenu() {
    if (startMenu.style.visibility == "hidden") {
        startMenu.style.visibility= "visible";
    } else {
        startMenu.style.visibility= "hidden";
    }
}