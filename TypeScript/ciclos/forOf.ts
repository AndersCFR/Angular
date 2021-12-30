interface Usuario{
    nombre: string;
    apellido: string;
}

var listaUsuarios: Array<Usuario> = [
    {
        nombre: "Elmer",
        apellido: "Tobar"
    },
    {
        nombre: "Joaquin",
        apellido: "Ayala"
    },
    {
        nombre: "Ana",
        apellido: "Cristal"
    }
]

for(let usuario of listaUsuarios){
    console.log(usuario.nombre);
}


