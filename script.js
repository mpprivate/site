const correctPassword = "petit ange";

//Sections
const passwordSection = document.getElementById("password-form");
const questionSection = document.querySelector(".question");
const gallerySection = document.getElementById("gallery");
const footerSection = document.getElementById("bot");

const form = document.getElementById("access-form");
const passwordInput = document.getElementById("password");
const radioCheck = document.querySelector('input[type="radio"][name="love"]');


//MDP
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const enteredPassword = passwordInput.value;
    
    if (enteredPassword === correctPassword) {
        questionSection.style.display = "flex";
    } 
    else {
        alert("Dommage, une prochaine fois peut être. Tu vas réussir petit ange");
        passwordInput.value = "";
    }
});

//QUESTION YES-NO
radioCheck.addEventListener("change", function() {
    if (radioCheck.checked) {
        passwordSection.style.display = "None";
        questionSection.style.display = "None";
        gallerySection.style.display = "flex";
    }
    else {
        gallerySection.style.display = "none";
    }
});

//GALLERY
//const imageCards = document.querySelectorAll('.image-card');

//imageCards.forEach(card => {
//    card.addEventListener('click', () => {
//        card.querySelector('.overlay').style.display = 'block';
//    });

//    card.querySelector('.overlay').addEventListener('click', (event) => {
//        event.stopPropagation();
//        card.querySelector('.overlay').style.display = 'none';
//    });
//});

//TIMER
const yearOtp = document.getElementById("YY");
const monthOtp = document.getElementById("MM");
const dayOtp = document.getElementById("DD");
const hoursOtp = document.getElementById("HH");
const minOpt = document.getElementById("MIN");
const secOtp = document.getElementById("SS");


var x = setInterval(function() {
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() +1;
    let day = date.getDate();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    const y = year - 2021;
    const mo = month - 7;
    const d = day - 1;
    const h = hour - 1;
    const mi = minutes;
    const s = seconds;
    
    yearOtp.innerHTML = y;
    monthOtp.innerHTML = mo;
    dayOtp.innerHTML = d;
    hoursOtp.innerHTML = h;
    minOpt.innerHTML = mi;
    secOtp.innerHTML = s;
})

//SHUFFLE IMAGE

document.addEventListener("DOMContentLoaded", function () {
    var gallery = document.querySelector(".photo-gallery");
    var pics = Array.from(document.querySelectorAll(".pic"));

    // Shuffle the order of image elements
    pics.sort(function () {
        return 0.5 - Math.random();
    });

    // Clear the existing gallery
    gallery.innerHTML = "";

    // Append the shuffled image elements back to the gallery
    pics.forEach(function (pic) {
        gallery.appendChild(pic);
    });
});

/*OPEN IMAGE*/

document.addEventListener("DOMContentLoaded", function () {
    var gallery = document.querySelector(".photo-gallery");
    var popupContainer = document.getElementById("popup-container");
    var blurContainer = document.getElementById("blur-container");
    var popupImage = document.getElementById("popup-image");
    var popupText = document.getElementById("popup-text");

    gallery.addEventListener("click", function (event) {
        var clickedImage = event.target.closest(".pic");
        if (clickedImage) {
            var clickedImageSrc = clickedImage.querySelector("img").src;
            var clickedImageAlt = clickedImage.querySelector("img").alt;
            var clickedImageText = clickedImage.getAttribute("data-text");

            popupImage.src = clickedImageSrc;
            popupImage.alt = clickedImageAlt;
            popupText.textContent = clickedImageText;

            popupContainer.style.display = "flex";
            blurContainer.style.display = "block";
            gallery.classList.add("gallery-disabled");

            document.body.classList.add("body-no-scroll");
        }
    });

    popupContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("popup-container")) {
            closePopup();
            gallery.classList.remove("gallery-disabled");
        }
    });
});

function closePopup() {
    var popupContainer = document.getElementById("popup-container");
    var blurContainer = document.getElementById("blur-container");
    popupContainer.style.display = "none";
    blurContainer.style.display = "none";

    document.body.classList.remove("body-no-scroll");
}
