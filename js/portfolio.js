var portfolioButton = document.getElementById("portfolio-button");
var portfolioDiv = document.getElementById("portfolio");
var windowCloseBtn = document.querySelectorAll(".window-close-btn");

portfolioButton.addEventListener("dblclick", handleClick);
windowCloseBtn[1].addEventListener("click", closeWindow);

portfolioDiv.style.visibility = "hidden";
var mouseClickSound = new Audio('sounds/double_click.ogg');

function handleClick() {

    mouseClickSound.play();

    if (portfolioDiv.style.visibility == "hidden") {
        portfolioDiv.style.visibility = "visible";
    } else {
        portfolioDiv.style.visibility = "hidden";
    }
}

function closeWindow() {
    portfolioDiv.style.visibility = "hidden";
}