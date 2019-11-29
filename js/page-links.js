var aboutMeButton = document.getElementById("about-me-button");
var aboutMeDiv = document.getElementById("about-me");
var windowCloseBtn = document.querySelectorAll(".window-close-btn");
var portfolioButton = document.getElementById("portfolio-button");
var portfolioDiv = document.getElementById("portfolio");
var windowCloseBtn = document.querySelectorAll(".window-close-btn");

aboutMeDiv.style.display = "none";
portfolioDiv.style.display = "none";

var mouseClickSound = new Audio('sounds/double_click.ogg');

aboutMeButton.addEventListener("dblclick", function () {

    mouseClickSound.play();

    if (aboutMeDiv.style.display == "none") {
        aboutMeDiv.style.display = "inline";
    } else {
        aboutMeDiv.style.display = "none";
    }

});
windowCloseBtn[0].addEventListener("click", function () {
    aboutMeDiv.style.display = "none";
});

portfolioButton.addEventListener("dblclick", function () {
    mouseClickSound.play();

    if (portfolioDiv.style.display == "none") {
        portfolioDiv.style.display = "inline";
    } else {
        portfolioDiv.style.display = "none";
    }
});
windowCloseBtn[1].addEventListener("click", function(){
    portfolioDiv.style.display = "none";
});



