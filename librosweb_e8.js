var str;

function parOimpar(num) {

    if (num % 2 == 0)
        str = "par";
    else {
        str = "impar";
    }

    return str;

}

document.write (parOimpar(2));
