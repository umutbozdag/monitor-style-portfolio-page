var cmdButton = document.getElementById("cmd-button");
var cmdDiv = document.getElementById("cmd");
var windowCloseBtn = document.querySelectorAll(".window-close-btn");
var readOnlyTextArea = document.getElementById("text-area-1");
var textArea = document.getElementById("text-area-2");
var consoleResult = document.getElementById("console-result");

readOnlyTextArea.value = `
date -> Actual date and time 
cls -> Clear console
color white -> Make background white and text black
color black -> Make background black and text white
color default -> Default
clear -> Clear window
`

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

function keyPressed(e) {
    var key = e.keyCode || e.which;
    if (key == 13 && textArea.value == "date") {
        date();
    }

}

function date() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;

    textArea.value = dateTime;
    textArea.readOnly = true;
}







