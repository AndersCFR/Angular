interface Alumno{
    nombre: string,
    edad: number,
}

var listadoNombres: Array<string> = ["Ander","Juan","Marco"];
var listadoNumero: Array<number> = [15,25,36,78];

console.log(listadoNombres);
console.log('Primer elemento:',listadoNombres[0]);
console.log('Números:', listadoNumero[3]);

var listadoAlumnos: Array<Alumno> = [
    {
        nombre: "Andy",
        edad: 22,
    },
    {
        nombre: "Faty",
        edad: 21
    }
]

console.log(listadoAlumnos);