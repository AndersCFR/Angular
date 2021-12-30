var nombres = ["Ana", "Maria", "Pepa"];
console.log(nombres);
nombres.push("Carla");
console.log(nombres);
nombres.push("Juana");
console.log(nombres);
var alumnos = [];
alumnos.push({ nombre: "Ana", apellido: "garmendia" });
console.log(alumnos);
alumnos.push({ nombre: "Alumno retirar", apellido: "Eliminar" });
console.log(alumnos);
alumnos.splice(1, 1); // indica indice que empieza y cantidad de elementos que quiero eliminar
console.log(alumnos);
