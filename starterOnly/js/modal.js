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
const firstName = document.querySelector("#firstName").value;
const lastName = document.querySelector("#lastName").value;
const email = document.querySelector("#email").value;
const birthdate = document.querySelector("#birthdate").value;
const quantity = document.querySelector("#quantity").value;
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

//Regex
// function regExLastnameFirstname(value) {
//     return /^([A-Za-z]{3,20})?([-]{0,1})?([A-Za-z]{3,20})$/.test(value);    //la méthode test() vérifie s'il y a une correspondance entre un texte et une expression rationnelle.
// }                                                                         //elle retourne true en succès, et false en cas contraire (booléen).


//Événement au click bouton submit
form.addEventListener('submit', (e) => {

    //Contrôle de la validité du prénom
    if (firstName === '' || firstName == null || firstName.length <= 2) {
        firstNameError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    }


    //Contrôle de la validité du nom
    if (lastName === '' || lastName == null || lastName.length <= 2) {
        lastNameError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    }

    //Contrôle de la validité de l'email
    if(email === '' || email == null) {
        emailError.innerHTML = "Veuillez entrer un email valide.";
    }

    //Contrôle de la validité de la date de naissance
    if(birthdate === '' || birthdate == null) {
        birthdateError.innerHTML = "Veuillez entrer votre date de naissance.";
    }

    //Contrôle quantité tournoi
    if(quantity == '') {
        quantityError.innerHTML = "Veuillez indiquer le nombre de tournoi.";
    }

    //Contrôle choix ville
    if(locationTournament.checked == false) {
        locationError.innerHTML = "Veuillez cocher une ville.";
    }

    //Contrôle conditions acceptés
    if(terms.checked == false) {
        termsError.innerHTML = "Veuillez accepter les conditions d'utilisation.";
    }

    else {
        e.preventDefault()
    }
})