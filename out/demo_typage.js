"use strict";
// Declaration de variables
let nom = "string"; // string par inférence
let age = 15;
let grand = false;
// Les type pour tableaux:
let age_animaux = [2, 5, 1];
let nom_animaux = ["rex", "pico", "dingo"];
let tab = ['paul', 48, true];
tab = [false, 27, 'marie'];
// tab = [ { nom: 'dominique' } ]; // impossible, (string | number | boolean)[] par inférence
// nom = age; // impossible: nom est de type 'string' et age a une valeur 'number'
let nimp;
// Ecriture des nombre:
let binaire = 0b00001011; // 11
let octal = 0o13; // 11
let decimal = 11; // 11
let hexadecimal = 0xB; // 11
let grand_nombre = 2500000000000;
// type any: prendre n'importe quelles valeurs
nimp = {
    key1: 'value',
    key2: 'value',
};
nimp = nom;
nimp = age;
// type unknown: 
let saipa = "saipa";
saipa = 5;
// type never: pour des retour de fonctions qui ne se terminent jamais bien
function maFunc(error_message) {
    throw error_message;
}
// Créer des types
// union de types
let naissance; // chaine, Date
let personne = {
    nom: "luc",
    age: 40
};
let tabAssoc = {
    paul: new Date(),
    'marie': new Date(),
    "dominique": new Date()
};
// je veux définir un tableau associatif ou les clef sont les nom de personne
// et les valeurs un object contenant le nom de la personne ainsi que sa date de naissance
// en Date ou en chaine de caractère.
let t1 = {
    luc: {
        'nom-famille': 'luc',
        date: new Date()
    },
    marie: {
        'nom-famille': 'marie',
        date: new Date()
    }
};
let t2 = t1;
let truc =  ?  : ;
// Enums
var Couleur;
(function (Couleur) {
    Couleur["RED"] = "#FF0000";
    Couleur["GREEN"] = "#00FF00";
    Couleur["BLUE"] = "#0000FF";
})(Couleur || (Couleur = {}));
let ma_couleur = Couleur.GREEN;
console.log(ma_couleur.toString());
