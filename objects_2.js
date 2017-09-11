function coche (marca, modelo, edad, year) {
    this.marca = marca;
    this.modelo = modelo;
    this.edad = edad;
    this.year = bornYear;
}

function bornYear () {
    return 2017 - this.edad;
}

var coche1 = new coche ("Seat", "Altea", 2009, 2007);

document.write(coche1.marca);

