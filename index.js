import { buchobjekt } from "./objektkonstruktor.js";
import { steuerung } from "./steuerung.js";

let bibliotek = []

document.addEventListener("keydown", (event)=> {
    if (event.key != "n") return;
    steuerung.buchHinzufügen();
}); 

document.addEventListener("keydown", (event)=> {
    if (event.key != "l") return;
    steuerung.buchEntfernen(prompt("ID Eingeben"));
}); 

export { bibliotek }