import { buchobjekt } from "../objektkonstruktor.js";
import { bibliotek } from "../arrayBibliotek.js";
import { steuerungBibliotek } from "./steuerungBibliotek.js";
import { steuerungEingabefläche } from "./steuerungEingabefläche.js";

class steuerungBücher {  
    
    static buchHinzufügen() {
        const autor = document.getElementById("autor").value;
        const titel = document.getElementById("titel").value;
        const seitenzahl = document.getElementById("seiten").value;
        const gelesen = document.getElementById("checkbox").checked;
        const id = crypto.randomUUID();
        const buch = new buchobjekt(autor, titel, seitenzahl, gelesen, id);
        bibliotek.push(buch);
        steuerungBibliotek.bibliotekAktualisieren();
    }

    static buchEntfernen(elementUnterMaus) {
        const idVoneElement = elementUnterMaus.id;
        const classeVonElement = elementUnterMaus.className;
        const gesuchtesbuch = bibliotek.find(object => object.id == idVoneElement);
        if (gesuchtesbuch && classeVonElement == "buttonLöschen") {
            const indexBuch = bibliotek.indexOf(gesuchtesbuch);
            bibliotek.splice(indexBuch, 1);
            steuerungBibliotek.bibliotekAktualisieren();
        }
    }
    
    static buchBearbeiten(elementUnterMaus){
        const idVoneElement = elementUnterMaus.id;
        const classeVonElement = elementUnterMaus.className;
        const gesuchtesbuch = bibliotek.find(object => object.id == idVoneElement);
        const indexBuch = bibliotek.indexOf(gesuchtesbuch);
        if (gesuchtesbuch && classeVonElement == "buttonBearbeiten") {
            steuerungEingabefläche.eingabecontainerAnzeigen(bibliotek[indexBuch].autor, bibliotek[indexBuch].titel, bibliotek[indexBuch].seitenzahl, bibliotek[indexBuch].gelesen);
            document.getElementById("buttonAbbrechen").style.display = "none"; 
            document.getElementById("buttonErstellen").style.width = "149px";
            document.getElementById("buttonErstellen").textContent = "Übernehmen";
            bibliotek.splice(indexBuch, 1);
        }
    }
}

export { steuerungBücher };