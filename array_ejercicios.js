var oArray = ['España', 'Irlanda', 'EE.UU', 'Alemania', 'Francia', 'Portugal'];

function onLength(arr) {
    return arr.length;
}

function OnWrite(arr) {
    return oArray;
}

function onSort(arr) {
    return arr.sort();
}

/*Añadir al final*/
function onPush(arr, str) {
    return arr.push(str);
}
/*Añadir al princicpio*/
function onUnshift(arr, str) {
    return arr.unshift(arr, str);
}

document.write('Longitud del array: ' + onLength(oArray) + '<br>');
document.write('Contenido del array: ' + OnWrite(oArray) + '<br>');
document.write('Contenido del array ordenado: ' + onSort(oArray) + '<br>');
document.write('Añadir al final ' + onPush(oArray, "Belgica") + '<br>');
document.write('Contenido del array: ' + OnWrite(oArray) + '<br>');
document.write('Añadir al principio ' + onUnshift(oArray, "Gibraltar") + '<br>');
document.write('Contenido del array: ' + OnWrite(oArray) + '<br>');