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
const modalBtnClose = document.querySelector('.close');

const form = document.querySelector("#form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const numTournaments = document.querySelector("#numTournaments");
const locTournament = document.getElementsByName("location");
const terms = document.querySelector("#checkbox1");
const notifications = document.querySelector("#checkbox2");
const btnSubmit = document.querySelector("#submit");
const confirmation = document.querySelector("#confirmation");
const btnEnd = document.querySelector('#btnEnd');

const firstNameValidation = document.querySelector("#firstNameValidation");
const lastNameValidation = document.querySelector("#lastNameValidation");
const emailValidation = document.querySelector("#emailValidation");
const birthdateValidation = document.querySelector("#birthdateValidation");
const numTournamentsValidation = document.querySelector("#numTournamentsValidation");
const locTournamentValidation = document.querySelector("#locationValidation");
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
    document.querySelector(`#${querySelectorId}`).classList.add("p-valide");
    document.querySelector(`#${querySelectorId}`).classList.remove("p-error");
}

//Couleur texte champ incorrect
function colorTextIncorrectForm(querySelectorId) {
    document.querySelector(`#${querySelectorId}`).classList.add("p-error");
    document.querySelector(`#${querySelectorId}`).classList.remove("p-valide");
}

//Couleur border champ correct
function colorBorderCorrectForm(querySelectorId) {
    document.querySelector(`#${querySelectorId}`).classList.add("border-valide");
    document.querySelector(`#${querySelectorId}`).classList.remove("border-error");
}

//Couleur border champ incorrect
function colorBorderIncorrectForm(querySelectorId) {
    document.querySelector(`#${querySelectorId}`).classList.add("border-error");
    document.querySelector(`#${querySelectorId}`).classList.remove("border-valide");
}

//Vérification dynamique du lieu du tournoi
function checkedLocTournament() {
    let locationChecked = false;
    for(let i = 0; i < locTournament.length; i++) {
        const isChecked = locTournament[i].checked;
        if(isChecked) {
            locationChecked = true;
            return true;
        }
    }
}

//Contrôle de la validité du prénom
function firstNameControl() {
    if (regExLastnameFirstname(firstName.value)) {
        textCorrectForm("firstNameValidation");
        colorTextCorrectForm("firstNameValidation");
        colorBorderCorrectForm("firstName");
        return true;
    } else {
        firstNameValidation.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
        colorTextIncorrectForm("firstNameValidation");
        colorBorderIncorrectForm("firstName");
        return false;
    }
}

//Contrôle de la validité du nom
function lastNameControl() {
    if (regExLastnameFirstname(lastName.value)) {
        textCorrectForm("lastNameValidation");
        colorTextCorrectForm("lastNameValidation");
        colorBorderCorrectForm("lastName");
        return true;
    } else {
        lastNameValidation.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        colorTextIncorrectForm("lastNameValidation");
        colorBorderIncorrectForm("lastName");
        return false;
    }
}

//Contrôle de la validité de l'email
function emailControl() {
    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
        textCorrectForm("emailValidation");
        colorTextCorrectForm("emailValidation");
        colorBorderCorrectForm("email");
        return true;
    } else {
        emailValidation.innerHTML = "Veuillez entrer un email valide.";
        colorTextIncorrectForm("emailValidation");
        colorBorderIncorrectForm("email");
        return false;
    }
}

//Contrôle de la validité de la date de naissance
function birthdateControl() {
    if(/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/.test(birthdate.value)) {
        textCorrectForm("birthdateValidation");
        colorTextCorrectForm("birthdateValidation");
        colorBorderCorrectForm("birthdate");
        return true;
    } else {
        birthdateValidation.innerHTML = "Veuillez entrer votre date de naissance.";
        colorTextIncorrectForm("birthdateValidation");
        colorBorderIncorrectForm("birthdate");
        return false;
    }
}

//Contrôle nombre tournoi
function numTournamentsControl() {
    if(/^[0-9]{1,3}$/.test(numTournaments.value)) {
        textCorrectForm("numTournamentsValidation");
        colorTextCorrectForm("numTournamentsValidation");
        colorBorderCorrectForm("numTournaments");
        return true;
    } else {
        numTournamentsValidation.innerHTML = "Veuillez indiquer le nombre de tournoi.";
        colorTextIncorrectForm("numTournamentsValidation");
        colorBorderIncorrectForm("numTournaments");
        return false;
    }
}

//Contrôle choix ville
function locTournamentControl() {
    if(!checkedLocTournament()) {
        locTournamentValidation.innerHTML = "Veuillez cocher une ville.";
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

//Récupération du lieu du tournoi
function getlocTournament() {
    let result = "";
    for (let i =0; i < locTournament.length; i++) {
        if(locTournament[i].checked) {
            result += locTournament[i].value + ", ";
        }
    }
    return result;
}

btnEnd.addEventListener('click', function(event) {
    modalbg.style.display = "none";
    window.location.reload();
})

//Événement au click bouton submit
btnSubmit.addEventListener('click', function(event) {
    event.preventDefault();
    //Contrôle validité du formulaire
    if(firstNameControl() && lastNameControl() && emailControl() && birthdateControl() && numTournamentsControl() && locTournamentControl() && termsControl()) {
        console.log(
            "Prénom :", firstName.value,
            "Nom :", lastName.value,
            "Email :", email.value,
            "Date de naissance :", birthdate.value,
            "Nombre de tournois :", numTournaments.value,
            "Lieu de tournoi :", getlocTournament(),
            "Conditions d'utilisation :", terms.checked,
            "Notifications :", notifications.checked,
        );
        form.style.display = "none";
        confirmation.style.display = "flex";
        confirmation.style.flexDirection = "column";
        confirmation.style.alignItems = "center";
    } else {
        alert("Veuillez remplir correctement le formulaire.");
    }
})