import { steuerungBücher } from "./steuerung/steuerungBücher.js";
import { steuerungEingabefläche } from "./steuerung/steuerungEingabefläche.js";

//Eingabefläche für neues Buch öffen
document.getElementById("hinzufügenButton").addEventListener("click",()=>{
    steuerungEingabefläche.eingabecontainerAnzeigen("", "", 1, false);
});

//Button um um Eingabe zu bestätigen
document.getElementById("buttonErstellen").addEventListener("click",()=> {
    if (!(document.getElementById("autor").value == "" || document.getElementById("titel").value == "" || document.getElementById("seiten").value == "")) {
        steuerungBücher.buchHinzufügen();
        steuerungEingabefläche.eingabecontainerVerbergen();
    } else {
        alert("Alle Felder ausfüllen");
    };
}); 

//Button um Eingabe abzubrechen
document.getElementById("buttonAbbrechen").addEventListener("click",()=>{
    steuerungEingabefläche.eingabecontainerVerbergen();
});

//Buch Bearbeiten
document.addEventListener("click",(event)=> {
    const elementUnterMaus = event.target; 
    steuerungBücher.buchBearbeiten(elementUnterMaus);
});

//Buch Löschen
document.addEventListener("click",(event)=> {
    const elementUnterMaus = event.target; 
    steuerungBücher.buchEntfernen(elementUnterMaus);
});