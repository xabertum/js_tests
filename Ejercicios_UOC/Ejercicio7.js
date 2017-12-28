var sNumber = parseInt(prompt("Introduce un numero: "));
var sNumber2 = parseInt(prompt("Introduce otro numero: "));
var sNumber3 = parseInt(prompt("Introduce otro numero: "));

if (sNumber > sNumber2 && sNumber > sNumber3) document.write("El mayor es: " + sNumber);
else if (sNumber2 > sNumber3) document.write("El mayor es: " + sNumber2);
else document.write("El mayor es: " + sNumber3);