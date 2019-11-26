var portfolioButton = document.getElementById("portfolio-button");
var portfolioDiv = document.getElementById("portfolio");
var windowCloseBtn = document.querySelectorAll(".window-close-btn");

portfolioButton.addEventListener("dblclick", handleDoubleClick);
windowCloseBtn[1].addEventListener("click", closeWindow);

portfolioDiv.style.display = "none";
var mouseClickSound = new Audio('sounds/double_click.ogg');

function handleDoubleClick() {

    mouseClickSound.play();

    if (portfolioDiv.style.display == "none") {
        portfolioDiv.style.display = "inline";
    } else {
        portfolioDiv.style.display = "none";
    }
}

function closeWindow() {
    portfolioDiv.style.display = "none";
}