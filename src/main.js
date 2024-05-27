// Initial Load rendering functions
$(document).ready(function(event) {
    hideMainDivs();
    homeContainer.style.display = "inline-block"
    renderProjectTiles();
    renderSkillsCloud();
})

// Nav Bar Javascript to power navigation buttons
const homeButton = document.querySelector("#home-bttn");
const aboutButton = document.querySelector("#abt-bttn");
const porfolioButton = document.querySelector("#portfolio-bttn");
const skillsButton = document.querySelector("#skills-bttn");
const contactButton = document.querySelector("#contact-bttn");
const mainDivs = document.querySelectorAll(".content-container")

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
    mainDivs.forEach((element) => element.style.display = "none")
}

// Portfolio Section script to generate and build tiles from data instead of hard coding all of those tiles!

var portfolioProjectsContainer = document.querySelector("#portfolio-tiles")

function renderProjectTiles() {
    portfolioProjectsContainer.innerHTML = ""
    portfolioProjectsData.forEach((project) => {
        portfolioProjectsContainer.innerHTML += `
            <div class="project-tile">
                <h3>${project.title}</h3>
                <hr>
                <p>${project.description}</p>
                <hr>
                <div class="project-link-container">
                    <a href="${project.gitHubURL}"><strong>CODE</strong></a>
                    <a href="${project.deployedURL || project.gitHubURL}"><strong>DEPLOYED</strong></a>
                </div>
            </div>
        `
    })

}

function renderSkillsCloud() {
    
    // Find and empty the container element
    var tagCloudBox = document.querySelector('#tag-cloud');
   
    // Configure tag cloud options
    var settings = {

        entries: skills,
        width: 600,
        height: 600,
        radius: '65%',
        radiusMin: 25,
        bgDraw: true,
        bgColor: 'transparent',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 360,
        speed: 0.2,
        fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: '15',
        fontColor: '#fff',
        fontWeight: 'normal',//bold
        fontStyle: 'normal',//italic 
        fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: true,
        tooltipFontFamily: 'Oswald, Arial, sans-serif',
        tooltipFontSize: '11',
        tooltipFontColor: '#fff',
        tooltipFontWeight: 'normal',//bold
        tooltipFontStyle: 'normal',//italic 
        tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        tooltipFontToUpperCase: false,
        tooltipTextAnchor: 'left',
        tooltipDiffX: 0,
        tooltipDiffY: 10,
        animatingSpeed: 0.01,
        animatingRadiusLimit: 1.5
    
    };

    // render the cloud
    var svg3DTagCloud = new SVG3DTagCloud(tagCloudBox, settings);
}