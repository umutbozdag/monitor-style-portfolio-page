var aboutMeButton = document.getElementById("about-me-button");
var aboutMeDiv = document.getElementById("about-me");
var windowCloseBtn = document.querySelectorAll(".window-close-btn");

aboutMeButton.addEventListener("dblclick", handleDoubleClick);
windowCloseBtn[0].addEventListener("click", closeWindow);

aboutMeDiv.style.display = "none";
var mouseClickSound = new Audio('sounds/double_click.ogg');

function handleDoubleClick() {

    mouseClickSound.play();

    if (aboutMeDiv.style.display == "none") {
        aboutMeDiv.style.display = "inline";
    } else {
        aboutMeDiv.style.display = "none";
    }
}

function closeWindow() {
    aboutMeDiv.style.display = "none";
}