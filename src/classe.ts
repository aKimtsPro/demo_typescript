export class Produit {
    private readonly _nom: string;
    private _marque: string;
    private _prix: number;

    constructor(nom: string, prix: number, marque?: string){
        this._nom = nom;
        this._marque = marque ? marque : 'inconnu';
        this._prix = prix;
    }

    get nom(){
        return this._nom;
    }

    get marque(){
        return this._marque;
    }

    private set marque(value: string){
        this._marque = value;
    }



    vendre(qtt?: number){
        const qttEffective = (qtt ? qtt : 1);
        console.log(qttEffective + " " + this._nom + " ont été vendu (total: "+ (qttEffective* this._prix) + ")" );
    } 
}

class LivreAventure extends Produit implements Livre {
    titre: string;
    nbrPage: number;
    genre: 'action'|'romance';

    constructor(titre: string, marque: string, prix: number, nbrPage:number, genre: 'action'|'romance'){
        super(titre, prix, marque);
        this.titre = titre;
        this.nbrPage = nbrPage;
        this.genre = genre;
    }

    vendre(): void {
        console.log("je vends");
    }

    lire = () => {
        console.log("je lis");
    };

}

let monProduit: Produit = new Produit("nom", 2, "marque");
monProduit.vendre(4);

let livre = new LivreAventure(
    "titre", 
    "editeur",
    15,
    100,
    "action"
);
// livre.vendre(4); // plus possible
livre.vendre();
let marque_bouquin = livre.marque;
// livre.marque = 'nouvelle marque'; // impossible: set private


type FuncLivre = (param: Livre) => number;
// const func: FuncLivre = (param: LivreAventure) => {
//     return param.nbrPage;
// }; // Pas possible il faut que ce soit un livre