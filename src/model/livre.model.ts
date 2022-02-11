interface Livre {
    readonly titre: string,  // après initialisation plus de modif!
    nbrPage: number,
    genre: 'action' | 'romance',
    nomAuteur?: string,

    lire?: () => void;
}

interface LivrePoche extends Livre {
    reduction: number;
}

const autreLivre: Livre = {
    titre: 'mon autre livre',
    nbrPage: 165,
    genre: 'action'
}

const monLivre: LivrePoche = {
    titre: 'mon super livre',
    nbrPage: 165464,
    genre: 'romance',
    reduction: 15
}

monLivre.nomAuteur = 'un super auteur';
// monLivre.titre = 'mon super titre'; // Je ne peux pas; readonly