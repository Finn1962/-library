class steuerungEingabefläche {    

    static eingabecontainerAnzeigen(eingabeAutor, eingabeTitel, eingabeSeiten, eingabeCheckbox){
        document.getElementById("buttonAbbrechen").style.display="inline";
        document.getElementById("buttonErstellen").style.width = "72px";
        document.getElementById("buttonErstellen").textContent = "Erstellen";
        document.getElementById("eingabeContainer").style.visibility = "visible";
        document.getElementById("autor").value = eingabeAutor;
        document.getElementById("titel").value = eingabeTitel;
        document.getElementById("seiten").value = eingabeSeiten;
        document.getElementById("checkbox").checked = eingabeCheckbox;

    }
    
    static eingabecontainerVerbergen(){
        document.getElementById("eingabeContainer").style.visibility = "hidden";

    }
}

export { steuerungEingabefläche };