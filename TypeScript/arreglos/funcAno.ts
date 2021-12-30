var nombres: string[] = ["Ana", "Maria", "Andrea"];

nombres.forEach((nombre)=>console.log(nombre));

interface Persona{
    alumnoId: number,
    nombre: string,
    edad: number
}
var personas: Persona[] = [];
personas.push({alumnoId: 1, nombre: "Pepe", edad: 27});
personas.push({alumnoId: 2, nombre: "Armando", edad: 27});

var personaEncontrada = personas.find((alumno)=>{
    return alumno.alumnoId == 2;
})

console.log(personaEncontrada);
