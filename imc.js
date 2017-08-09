var peso = document.forms[0].peso.value;
var altura = document.forms[0].altura.value;

var imc = (peso / Math.pow(altura, 2)).toFixed(2);

function calcular() {


    if (peso.length == 0) {
        alert("El peso no puede estar vacio");
    } else if (altura.length == 0) {
        alert("La altura no puede estar vacia");
    } else {

        if (imc > 16) {
            alert(imc);
            document.getElementById("1").style.color = "red";
        }

    }

}
