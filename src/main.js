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
    hideAbout();
    hidePortfolio();
    hideSkills();
    hideContact();
    showHome();
});

aboutButton.addEventListener("click", function(event) {
    hideHome();
    hidePortfolio();
    hideSkills();
    hideContact();
    showAbout();
})

porfolioButton.addEventListener("click", function(event) {
    hideHome();
    hideAbout();
    hideSkills();
    hideContact();
    showPortfolio();
})

skillsButton.addEventListener("click", function(event) {
    hideHome();
    hideAbout();
    hidePortfolio();
    hideContact();
    showSkills();
})

contactButton.addEventListener("click", function(event) {
    hideHome();
    hideAbout();
    hidePortfolio();
    hideSkills();
    showContact();
})

function showAbout() {
    aboutMeContainer.style.display = "block";
}

function hideAbout() {
    aboutMeContainer.style.display = "none";
}

function showHome() {
    homeContainer.style.display = "block";
}

function hideHome() {
    homeContainer.style.display = "none";
}

function showPortfolio() {
    portfolioContainer.style.display = "block";
}

function hidePortfolio() {
    portfolioContainer.style.display = "none";
}

function showSkills() {
    skillsContainer.style.display = "block";
}

function hideSkills() {
    skillsContainer.style.display = "none";
}

function showContact() {
    contactContainer.style.display = "block";
}

function hideContact() {
    contactContainer.style.display = "none";
}

