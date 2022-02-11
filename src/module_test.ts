import { Produit } from "./classe";

export class Patate {
    poid: number = 0;
    // export type?: string;  // pas possible
}

export interface Truc {
    machin:any;
}

export enum Direction {
    SUD,
    NORD,
    EST,
    OUEST
}

export let produit1: Produit;
export const produit2: Produit | null = null;
export var produit3: Produit;

export function func(){
    console.log("salut");
}