import { buchobjekt } from "./objektkonstruktor.js";

let bibliotek = [];

document.addEventListener("keydown", () => { // Achtung: war "keydownl", sollte "keydown" sein
    const autor = "J.K. Rowling";
    const titel = "Der Hobbit";
    const seitenzahl = 320;
    const id = crypto.randomUUID();
    const buch = new buchobjekt(autor, titel, seitenzahl, id);
    bibliotek.push(buch);
    console.log(bibliotek);
});
