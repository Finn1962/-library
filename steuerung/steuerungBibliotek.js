import { bibliotek } from "../arrayBibliotek.js";

class steuerungBibliotek {
    static  bibliotekAktualisieren(){
        document.getElementById("container").innerHTML = "";
        for (let nummer = 0; nummer < bibliotek.length; nummer++){
            let gelesen = "Nein";
            let farbe = "red";
            if (bibliotek[nummer].gelesen == true) {
                gelesen = "Ja"
                farbe = "green"
            };
            const code =
                `<div class="buch">
                    <div style="display: flex; justify-content: space-between;">
                        <b><p style = "margin-bottom: 0;" >Autor</p></b>
                        <div>
                            <img src="../SVGs/pencil-edit-button-svgrepo-com.svg" width="15px" height="15px" draggable="false" style:"user-select: none;" class="buttonBearbeiten" id="${bibliotek[nummer].id}"">
                            <img src="../SVGs/icons8-löschen.svg" width="15px" height="15px" draggable="false" style:"user-select: none;" class="buttonLöschen" id="${bibliotek[nummer].id}">
                        </div>
                    </div>
                    <em><p>${bibliotek[nummer].autor}</p></em>
                    <hr>
                    <b><p>Titel</p></b>
                    <em><p>${bibliotek[nummer].titel}</p></em>
                    <hr>
                    <b><p>Seitenzahl</p></b>
                    <em><p>${bibliotek[nummer].seitenzahl}</p></em>
                    <hr>
                    <b><p>Gelesen</p></b>
                    <em><p style="color: ${farbe};" >${gelesen}</p></em>
                    <hr>
                </div>`
            ;
            document.getElementById("container").insertAdjacentHTML("beforeend", code);
        }
    }
}

export { steuerungBibliotek };