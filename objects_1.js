function persona (nombre, edad, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.altura = altura;
    this.changeEdad = function (edad) {
        this.edad = edad;
    }
}

var persona1 = new persona("David", 21, 1.88);

document.write (persona1.edad);

persona1.changeEdad(25);

document.write (persona1.edad);



