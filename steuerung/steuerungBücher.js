import { buchobjekt } from "../objektkonstruktor.js";
import { bibliotek } from "../arrayBibliotek.js";
import { steuerungBibliotek } from "./steuerungBibliotek.js";
import { steuerungEingabefläche } from "./steuerungEingabefläche.js";

class steuerungBücher {  
    
    static index = null;
    static indexÄnderung = null;

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
            this.index = bibliotek.indexOf(gesuchtesbuch);
            bibliotek.splice(this.index, 1);
            steuerungBibliotek.bibliotekAktualisieren();
        }
    }
    
    static buchBearbeiten(elementUnterMaus){
        const idVoneElement = elementUnterMaus.id;
        const classeVonElement = elementUnterMaus.className;
        const gesuchtesbuch = bibliotek.find(object => object.id == idVoneElement);
        this.index = bibliotek.indexOf(gesuchtesbuch);
        if (gesuchtesbuch && classeVonElement == "buttonBearbeiten") {
            this.indexÄnderung = this.index;
            steuerungEingabefläche.eingabecontainerAnzeigen(bibliotek[this.index].autor, bibliotek[this.index].titel, bibliotek[this.index].seitenzahl, bibliotek[this.index].gelesen);
            document.getElementById("buttonErstellen").style.display = "none"; 
            document.getElementById("buttonAbbrechen").style.display = "none";
            document.getElementById("buttonÄnderungen").style.display = "inline";
        }
    }

    static änderungenÜbernehmen() {
        console.log(this.indexÄnderung);
        bibliotek[this.indexÄnderung].autor = document.getElementById("autor").value;
        bibliotek[this.indexÄnderung].titel = document.getElementById("titel").value;
        bibliotek[this.indexÄnderung].seitenzahl = document.getElementById("seiten").value;
        bibliotek[this.indexÄnderung].gelesen = document.getElementById("checkbox").checked;
        steuerungBibliotek.bibliotekAktualisieren();
    }
}

export { steuerungBücher };