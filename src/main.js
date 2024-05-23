const homeButton = document.querySelector("#home-bttn");
const aboutButton = document.querySelector("#abt-bttn");
const porfolioButton = document.querySelector("#portfolio-bttn");
const skillsButton = document.querySelector("#skills-bttn");
const contactButton = document.querySelector("#contact-bttn");

var homeContainer = document.querySelector("#home-container")
var aboutMeContainer = document.querySelector("#about-me-container")
var portfolioContainer = document.querySelector("#portfolio-container")
var skillsContainer = document.querySelector("#skills-container")
var contactContainer = document.querySelector("#contact-container")

homeButton.addEventListener("click", function(event) {
    hideMainDivs();
    homeContainer.style.display = "block";
});

aboutButton.addEventListener("click", function(event) {
    hideMainDivs();
    aboutMeContainer.style.display = "block";
})

porfolioButton.addEventListener("click", function(event) {
    hideMainDivs();
    portfolioContainer.style.display = "block";
})

skillsButton.addEventListener("click", function(event) {
    hideMainDivs();
    skillsContainer.style.display = "block";
})

contactButton.addEventListener("click", function(event) {
    hideMainDivs();
    contactContainer.style.display = "block";
})

function hideMainDivs() {
    homeContainer.style.display = "none";
    aboutMeContainer.style.display = "none";
    portfolioContainer.style.display = "none";
    skillsContainer.style.display = "none";
    contactContainer.style.display = "none";
}