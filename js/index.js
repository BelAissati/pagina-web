function validarForm() {
    // Evitar que el formulari s'enviï per defecte
    event.preventDefault();

    // Obtenir valors del formulari
    var nom = document.getElementById("nom").value;
    var nif = document.getElementById("NIF").value;
    var correu = document.getElementById("email").value;
    var contrasenya = document.getElementById("password").value;
    var missatgeError = "";

    // Validar camps
    if (nom === "") {
        missatgeError += "El nom és obligatori.\n";
    }
    if (nif === "") {
        missatgeError += "El NIF és obligatori.\n";
    }
    if (correu === "") {
        missatgeError += "El correu electrònic és obligatori.\n";
    }
    if (contrasenya === "") {
        missatgeError += "La contrasenya és obligatòria.\n";
    }

    // Mostrar missatge d'error o enviar formulari
    if (missatgeError !== "") {
        alert(missatgeError);
    } else {
        // Aquí pots afegir la lògica per enviar el formulari
        alert("Formulari enviat amb èxit.");
    }
}
