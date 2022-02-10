// Declaration de variables

let nom = "string"; // string par inférence
let age: number = 15;
let grand: boolean = false;

// Les type pour tableaux:

let age_animaux: number[] = [ 2, 5, 1 ];
let nom_animaux: Array<String> = [ "rex", "pico", "dingo" ];

let tab = [ 'paul', 48, true ];
tab = [ false, 27, 'marie' ];
// tab = [ { nom: 'dominique' } ]; // impossible, (string | number | boolean)[] par inférence

// nom = age; // impossible: nom est de type 'string' et age a une valeur 'number'

let nimp: any;

// Ecriture des nombre:

let binaire = 0b00001011 // 11
let octal = 0o13; // 11
let decimal = 11; // 11
let hexadecimal = 0xB; // 11

let grand_nombre = 2_500_000_000_000;

// type any: prendre n'importe quelles valeurs

nimp = {
    key1: 'value',
    key2: 'value',
};
nimp = nom;
nimp = age;

// type unknown: 

let saipa: unknown = "saipa";
saipa = 5;

// type never: pour des retour de fonctions qui ne se terminent jamais bien
function maFunc(error_message: string): never {
    throw error_message;
}

// Créer des types

// union de types

let naissance: string | Date; // chaine, Date
let personne: {
    nom: string,
    age: number
} = {
    nom: "luc",
    age: 40
};
let tabAssoc: {
    [nom: string]: Date,
    // taille: number // pas possible
} = {
    paul: new Date(),
    'marie': new Date(),
    "dominique": new Date()
}

// je veux définir un tableau associatif ou les clef sont les nom de personne
// et les valeurs un object contenant le nom de la personne ainsi que sa date de naissance
// en Date ou en chaine de caractère.


let t1: { [nom: string]:  {
    'nom-famille': string,
    date: Date | string
} } = {
    luc: {
        'nom-famille': 'luc',
        date: new Date()
    },
    marie: {
        'nom-famille': 'marie',
        date: new Date()
    }
};

type TabPersonne = { [nom: string]:  {
    'nom-famille': string,
    date: Date | string
} };

let t2: TabPersonne = t1;

type Machin = {
    id: number | string,
    alias: {
        [key: string]: Date
    }
}[] | null;

let truc: Machin = ? ;
// Enums

enum Couleur {
    RED = "#FF0000",
    GREEN = "#00FF00",
    BLUE = "#0000FF"
}

let ma_couleur: Couleur = Couleur.GREEN;

console.log(ma_couleur.toString());
