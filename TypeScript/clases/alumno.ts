
class Alumno{
    private nombre: string;
    private apellido: string;
    private peso: number;

    constructor(){
        this.nombre = "Nombre default";
        this.apellido = "Apellido default";
        this.peso = 11111;
    }

    mostrarMensaje() : void{
        console.log("Te saluda", this.nombre);
    }
    asignar(nonbre: string, apellido: string, peso: number){
        this.nombre = nonbre;
        this.apellido = apellido;
        this.peso = peso;
    }
}

var alumno1: Alumno = new Alumno();
alumno1.mostrarMensaje();
alumno1.asignar("Juan", "Armen", 58);
alumno1.mostrarMensaje();

