function infoStr(str) {

    var resultado = "La cadena " + str;

    if (str == str.toUpperCase()) {
        resultado += " esta formada solo por mayusculas";

    } else if (str == str.toLowerCase()) {
        resultado += " esta formada solo por minusculas";

    } else {
        resultado += " esta formada por mayusculas y minusculas";
    }

    return resultado;
}


document.write(infoStr("HOLa"));
