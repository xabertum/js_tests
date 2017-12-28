var sFrase = prompt("introduce una frase...");
var sChar = /[aeiou]/;

function count(main_str, sub_str) {

    return main_str.match(new RegExp(sub_str, 'gi')).length;

};

document.write(count(sFrase, sChar));