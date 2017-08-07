var respuesta = prompt("Please enter your age: ");

if (respuesta > 0 && respuesta < 12) {
    alert("Aún eres un niño!");

} else if (respuesta > 12 && respuesta < 26) {
    alert("Eres un jovenzuelo!");
} else if (respuesta > 26 && respuesta < 60) {
    alert('Ya eres adulto, comportate..');
} else if (respuesta > 60) {
    alert('Jubilado!')
} else {
    alert("Edad no valida");
}
