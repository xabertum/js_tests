var oArray = ['España', 'Irlanda', 'EE.UU', 'Alemania', 'Francia', 'Portugal'];

function onLength(arr) {
    return arr.length;
}

function OnWrite(arr) {
    return oArray;
}


document.write('Longitud del array' + onLength(oArray) + '\n');
document.write('Contenido del array' + OnWrite(oArray) + '\n');