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

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const locationTournament = document.querySelector(".location");
const terms = document.querySelector("#checkbox1");
const btnSubmit = document.querySelector("#submit");

const firstNameValidation = document.querySelector("#firstNameValidation");
const lastNameValidation = document.querySelector("#lastNameValidation");
const emailValidation = document.querySelector("#emailValidation");
const birthdateValidation = document.querySelector("#birthdateValidation");
const quantityValidation = document.querySelector("#quantityValidation");
const locationValidation = document.querySelector("#locationValidation");
const termsValidation = document.querySelector("#termsValidation");

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

//Regex
function regExLastnameFirstname(value) {
    return /^([A-Za-z]{3,20})?([-]{0,1})?([A-Za-z]{3,20})$/.test(value);    //la méthode test() vérifie s'il y a une correspondance entre un texte et une expression rationnelle.
}                                                                           //elle retourne true en succès, et false en cas contraire (booléen).

//Texte validation ok
function textCorrectForm(querySelectorId){
    document.querySelector(`#${querySelectorId}`).innerHTML = "Valide";
}

//Couleur texte champ correct
function colorTextCorrectForm(querySelectorId) {
    document.querySelector(`#${querySelectorId}`).classList.add("div-valide");
    document.querySelector(`#${querySelectorId}`).classList.remove("div-error");
}

//Couleur texte champ incorrect
function colorTextIncorrectForm(querySelectorId) {
    document.querySelector(`#${querySelectorId}`).classList.add("div-error");
    document.querySelector(`#${querySelectorId}`).classList.remove("div-valide");
}

//Couleur background champ correct
function colorBackgroundCorrectForm(querySelectorId) {
    document.querySelector(`#${querySelectorId}`).classList.add("background-valide");
    document.querySelector(`#${querySelectorId}`).classList.remove("background-error");
}

//Couleur background champ incorrect
function colorBackgroundIncorrectForm(querySelectorId) {
    document.querySelector(`#${querySelectorId}`).classList.add("background-error");
    document.querySelector(`#${querySelectorId}`).classList.remove("background-valide");
}

//Contrôle de la validité du prénom
function firstNameControl() {
    if (regExLastnameFirstname(firstName.value)) {
        textCorrectForm("firstNameValidation");
        colorTextCorrectForm("firstNameValidation");
        colorBackgroundCorrectForm("firstName");
        return true;
    } else {
        firstNameValidation.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
        colorTextIncorrectForm("firstNameValidation");
        colorBackgroundIncorrectForm("firstName");
        return false;
    }
}

//Contrôle de la validité du nom
function lastNameControl() {
    if (regExLastnameFirstname(lastName.value)) {
        textCorrectForm("lastNameValidation");
        colorTextCorrectForm("lastNameValidation");
        colorBackgroundCorrectForm("lastName");
        return true;
    } else {
        lastNameValidation.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        colorTextIncorrectForm("lastNameValidation");
        colorBackgroundIncorrectForm("lastName");
        return false;
    }
}

//Contrôle de la validité de l'email
function emailControl() {
    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
        textCorrectForm("emailValidation");
        colorTextCorrectForm("emailValidation");
        colorBackgroundCorrectForm("email");
        return true;
    } else {
        emailValidation.innerHTML = "Veuillez entrer un email valide.";
        colorTextIncorrectForm("emailValidation");
        colorBackgroundIncorrectForm("email");
        return false;
    }
}

//Contrôle de la validité de la date de naissance
function birthdateControl() {
    if(birthdate.value === '' || birthdate.value == null) {
        birthdateValidation.innerHTML = "Veuillez entrer votre date de naissance.";
        colorTextIncorrectForm("birthdateValidation");
        colorBackgroundIncorrectForm("birthdate");
        return false;
    } else {
        textCorrectForm("birthdateValidation");
        colorTextCorrectForm("birthdateValidation");
        colorBackgroundCorrectForm("birthdate");
        return true;
    }
}

//Contrôle nombre tournoi
function quantityControl() {
    if(quantity.value == '') {
        quantityValidation.innerHTML = "Veuillez indiquer le nombre de tournoi.";
        colorTextIncorrectForm("quantityValidation");
        colorBackgroundIncorrectForm("quantity");
        return false;
    } else {
        textCorrectForm("quantityValidation");
        colorTextCorrectForm("quantityValidation");
        colorBackgroundCorrectForm("quantity");
        return true;
    }
}

//Contrôle choix ville
function locationTournamentControl() {
    if(locationTournament.checked == false) {
        locationValidation.innerHTML = "Veuillez cocher une ville.";
        colorTextIncorrectForm("locationValidation");
        return false;
    } else {
        textCorrectForm("locationValidation");
        colorTextCorrectForm("locationValidation");
        return true;
    }
}

//Contrôle conditions acceptés
function termsControl() {
    if(terms.checked == false) {
        termsValidation.innerHTML = "Veuillez accepter les conditions d'utilisation.";
        colorTextIncorrectForm("termsValidation");
        return false;
    } else {
        textCorrectForm("termsValidation");
        colorTextCorrectForm("termsValidation");
        return true;
    }
}

//Événement au click bouton submit
btnSubmit.addEventListener("click", function(event) {
    event.preventDefault();
    //Contrôle validité du formulaire
    if(firstNameControl() && lastNameControl() && emailControl() && birthdateControl() && quantityControl() && locationTournamentControl() && termsControl()) {
        alert("Tout est valide");
    } else {
        alert("Veuillez remplir correctement le formulaire.");
    }
})