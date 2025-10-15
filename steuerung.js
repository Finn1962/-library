import { buchobjekt } from "./objektkonstruktor.js";
import { bibliotek } from "./index.js";

class steuerung {
    static buchHinzufügen() {
        const autor = prompt("Autor eingeben");
        const titel = prompt("Titel eingeben");
        const seitenzahl = prompt("Seitenzahl eingeben");
        const id = crypto.randomUUID();
        const buch = new buchobjekt(autor, titel, seitenzahl, id);
        bibliotek.push(buch);
        bibliotekAktualisieren();
        console.log(bibliotek)
    }

    static buchEntfernen(id) {
        const gesuchtesbuch = bibliotek.find(object => object.id == id);
        if (gesuchtesbuch) {
            const index = bibliotek.indexOf(gesuchtesbuch);
            bibliotek.splice(index, 1);
            bibliotekAktualisieren();
            console.log(bibliotek);
        }
    }

    static #bibliotekAktualisieren(){
        
    }
}

export { steuerung };