function validaContra(password) {
    if (password.length < 6) {
        alert("contrasenya massa curta");
        return false;
    } else {
        alert("contrasenya correcta");
        return true;
    }
}

function validaDOC(doc) {
    var docu = doc;
    var num, ultima_lletra, lletra;
    var expressio_regular_docu = /^[XYZ]?\d{7,8}[A-Z]$/;
    docu = docu.toUpperCase();
    if (expressio_regular_docu.test(docu)) {
        num = docu.substr(0, docu.length - 1);
        num = num.replace("X", 0);
        num = num.replace("Y", 1);
        num = num.replace("Z", 2);
        ultima_lletra = docu.substr(docu.length - 1, 1);
        alert("Ultima lletra" + ultima_lletra);
        num = num % 23;
        lletra = 'TRWAGYMFPDXBNJZSQVHLCKET';
        lletra = lletra.substring(num, num + 1);
        if (lletra !== ultima_lletra) {
            alert('DOCUMENT erroni, la lletra no es correspon');
            return false;
        } else {
            alert('Document correcte');
            return true;
        }
    } else {
        alert('DOCUMENT erroni, format no vàlid');
        return false;
    }
}

function validarForm() {
    var nom = document.getElementById("nom").value;
    var pass = document.getElementById("password").value;
    var doc = document.getElementById("NIF").value;
    alert("comencem a validar ...." + nom + " " + doc);
    if (validaContra(pass) && validaDOC(doc)) {
        alert("Tot correcte, envie'm el teu formulari. Gracies " + nom);
        
    }
}