"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.func = exports.produit3 = exports.produit2 = exports.produit1 = exports.Direction = exports.Patate = void 0;
class Patate {
    constructor() {
        this.poid = 0;
        // export type?: string;  // pas possible
    }
}
exports.Patate = Patate;
var Direction;
(function (Direction) {
    Direction[Direction["SUD"] = 0] = "SUD";
    Direction[Direction["NORD"] = 1] = "NORD";
    Direction[Direction["EST"] = 2] = "EST";
    Direction[Direction["OUEST"] = 3] = "OUEST";
})(Direction = exports.Direction || (exports.Direction = {}));
exports.produit2 = null;
function func() {
    console.log("salut");
}
exports.func = func;
