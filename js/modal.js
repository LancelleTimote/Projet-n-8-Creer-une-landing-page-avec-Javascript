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
const locationTournament = document.getElementsByName("location");
const terms = document.querySelector("#checkbox1");
const btnSubmit = document.querySelector("#submit");

const firstNameError = document.querySelector("#firstNameError");
const lastNameError = document.querySelector("#lastNameError");
const emailError = document.querySelector("#emailError");
const birthdateError = document.querySelector("#birthdateError");
const quantityError = document.querySelector("#quantityError");
const locationError = document.querySelector("#locationError");
const termsError = document.querySelector("#termsError");

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

//Contrôle de la validité du prénom
function firstNameControl() {
    if (regExLastnameFirstname(firstName.value)) {
        firstNameError.innerHTML = "Valide";
        return true;
    } else {
        firstNameError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
        return false;
    }
}

//Contrôle de la validité du nom
function lastNameControl() {
    if (regExLastnameFirstname(lastName.value)) {
        lastNameError.innerHTML = "Valide";
        return true;
    } else {
        lastNameError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        return false;
    }
}

//Contrôle de la validité de l'email
function emailControl() {
    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
        emailError.innerHTML = "Valide";
        return true;
    } else {
        emailError.innerHTML = "Veuillez entrer un email valide.";
        return false;
    }
}

//Contrôle de la validité de la date de naissance
function birthdateControl() {
    if(birthdate.value === '' || birthdate.value == null) {
        birthdateError.innerHTML = "Veuillez entrer votre date de naissance.";
        return false;
    } else {
        birthdateError.innerHTML = "Valide";
        return true;
    }
}

//Contrôle nombre tournoi
function quantityControl() {
    if(quantity.value == '') {
        quantityError.innerHTML = "Veuillez indiquer le nombre de tournoi.";
        return false;
    } else {
        quantityError.innerHTML = "Valide";
        return true;
    }
}

//Contrôle choix ville
function locationTournamentControl() {
    if(locationTournament.checked == false) {
        locationError.innerHTML = "Veuillez cocher une ville.";
        return false;
    } else {
        locationError.innerHTML = "Valide";
        return true;
    }
}

//Contrôle conditions acceptés
function termsControl() {
    if(terms.checked == false) {
        termsError.innerHTML = "Veuillez accepter les conditions d'utilisation.";
        return false;
    } else {
        termsError.innerHTML = "Valide";
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