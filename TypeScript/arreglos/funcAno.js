var nombres = ["Ana", "Maria", "Andrea"];
nombres.forEach(function (nombre) { return console.log(nombre); });
var personas = [];
personas.push({ alumnoId: 1, nombre: "Pepe", edad: 27 });
personas.push({ alumnoId: 2, nombre: "Armando", edad: 27 });
var personaEncontrada = personas.find(function (alumno) {
    return alumno.alumnoId == 2;
});
console.log(personaEncontrada);
