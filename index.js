import { buchobjekt } from "./objektkonstruktor.js";

let bibliotek = [];

document.addEventListener("DOMContentLoaded", () => {
    const autor = "J.K. Rowling";
    const titel = "Der Hobbit";
    const seitenzahl = 320;
    const id = crypto.randomUUID();
    const buch = new buchobjekt(autor, titel, seitenzahl, id);
    bibliotek.push(buch);
    console.log(bibliotek);
});
document.addEventListener("DOMContentLoaded", () => {
    const autor = "Klaus";
    const titel = "Harry Potter";
    const seitenzahl = 504;
    const id = crypto.randomUUID();
    const buch = new buchobjekt(autor, titel, seitenzahl, id);
    bibliotek.push(buch);
    console.log(bibliotek);
});

