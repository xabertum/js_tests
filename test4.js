var respuesta = prompt("Primer presidente de la democracia española:");

do {

    if (respuesta == "adolfo suarez") {
        alert("Enhorabuena");
    } else if (respuesta == "adolfo") {
        var respuesta = prompt("Te falta el apellido. Intentelo de nuevo");
    } else if (respuesta == "suarez") {
        var respuesta = prompt("Te falta el nombre. Intentelo de nuevo");
    }

} while (respuesta == "adolfo suarez" || respuesta == "adolfo" || respuesta == "suarez");
