var opcion: number = 1;

// permite crear una enumeracion automatica
enum tipoMenu{
    canciones = 1,
    albums=2,
    perfil=3,
}

switch(opcion){
    case tipoMenu.canciones:{
        console.log('Cacniones');
        break;
    }
    case tipoMenu.albums:{
        console.log('Album');
        break;
    }
    case tipoMenu.perfil:{
        console.log('Perfil');
        break;
    }    
    default:{
        console.log('No asignado');
        break;
    }
}