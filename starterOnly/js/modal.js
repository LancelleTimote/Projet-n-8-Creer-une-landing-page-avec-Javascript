function editNav() {
var x = document.getElementById("myTopnav");
if (x.className === "topnav") {
    x.className += " responsive";
} else {
    x.className = "topnav";
}
}

//Récupération des éléments
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBtnClose = document.querySelector('.close');

const form = document.getElementById("form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const locationTournament = document.getElementsByName("location");
const terms = document.getElementById("checkbox1");

const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const birthdateError = document.getElementById("birthdateError");
const quantityError = document.getElementById("quantityError");
const locationError = document.getElementById("locationError");
const termsError = document.getElementById("termsError");

//Launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//Launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

//Fermeture du formulaire
modalBtnClose.addEventListener("click", function() {
    modalbg.style.display = "none";
});