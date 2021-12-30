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

for(let posicion in listaUsuarios){
    console.log(listaUsuarios[posicion].apellido);
}