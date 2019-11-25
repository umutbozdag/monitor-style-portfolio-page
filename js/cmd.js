var cmdButton = document.getElementById("cmd-button");
var cmdDiv = document.getElementById("cmd");
var windowCloseBtn = document.querySelectorAll(".window-close-btn");

cmdButton.addEventListener("dblclick", handleClick);
windowCloseBtn[2].addEventListener("click", closeWindow);

cmdDiv.style.visibility = "hidden";
var mouseClickSound = new Audio('sounds/double_click.ogg');

function handleClick() {

    mouseClickSound.play();

    if (cmdDiv.style.visibility == "hidden") {
        cmdDiv.style.visibility = "visible";
    } else {
        cmdDiv.style.visibility = "hidden";
    }
}

function closeWindow() {
    cmdDiv.style.visibility = "hidden";
}