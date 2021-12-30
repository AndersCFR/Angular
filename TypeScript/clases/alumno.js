var Alumno = /** @class */ (function () {
    function Alumno() {
        this.nombre = "Nombre default";
        this.apellido = "Apellido default";
        this.peso = 11111;
    }
    Alumno.prototype.mostrarMensaje = function () {
        console.log("Te saluda", this.nombre);
    };
    Alumno.prototype.asignar = function (nonbre, apellido, peso) {
        this.nombre = nonbre;
        this.apellido = apellido;
        this.peso = peso;
    };
    return Alumno;
}());
var alumno1 = new Alumno();
alumno1.mostrarMensaje();
alumno1.asignar("Juan", "Armen", 58);
alumno1.mostrarMensaje();
