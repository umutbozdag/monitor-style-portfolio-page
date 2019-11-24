var aboutMeButton = document.getElementById("about-me-button");
var aboutMeDiv = document.getElementById("about-me");
aboutMeButton.addEventListener("dblclick", handleClick);

aboutMeDiv.style.visibility = "hidden";
var mouseClickSound = new Audio('sounds/double_click.ogg');

function handleClick() {

    mouseClickSound.play();

    if (aboutMeDiv.style.visibility == "hidden") {
        aboutMeDiv.style.visibility = "visible";
    } else {
        aboutMeDiv.style.visibility = "hidden";
    }
}
