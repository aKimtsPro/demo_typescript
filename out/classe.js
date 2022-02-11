"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produit = void 0;
class Produit {
    constructor(nom, prix, marque) {
        this._nom = nom;
        this._marque = marque ? marque : 'inconnu';
        this._prix = prix;
    }
    get nom() {
        return this._nom;
    }
    get marque() {
        return this._marque;
    }
    set marque(value) {
        this._marque = value;
    }
    vendre(qtt) {
        const qttEffective = (qtt ? qtt : 1);
        console.log(qttEffective + " " + this._nom + " ont été vendu (total: " + (qttEffective * this._prix) + ")");
    }
}
exports.Produit = Produit;
class LivreAventure extends Produit {
    constructor(titre, marque, prix, nbrPage, genre) {
        super(titre, prix, marque);
        this.lire = () => {
            console.log("je lis");
        };
        this.titre = titre;
        this.nbrPage = nbrPage;
        this.genre = genre;
    }
    vendre() {
        console.log("je vends");
    }
}
let monProduit = new Produit("nom", 2, "marque");
monProduit.vendre(4);
let livre = new LivreAventure("titre", "editeur", 15, 100, "action");
// livre.vendre(4); // plus possible
livre.vendre();
let marque_bouquin = livre.marque;
// const func: FuncLivre = (param: LivreAventure) => {
//     return param.nbrPage;
// }; // Pas possible il faut que ce soit un livre
