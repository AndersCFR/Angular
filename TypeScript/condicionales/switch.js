var opcion = 1;
// permite crear una enumeracion automatica
var tipoMenu;
(function (tipoMenu) {
    tipoMenu[tipoMenu["canciones"] = 1] = "canciones";
    tipoMenu[tipoMenu["albums"] = 2] = "albums";
    tipoMenu[tipoMenu["perfil"] = 3] = "perfil";
})(tipoMenu || (tipoMenu = {}));
switch (opcion) {
    case tipoMenu.canciones: {
        console.log('Cacniones');
        break;
    }
    case tipoMenu.albums: {
        console.log('Album');
        break;
    }
    case tipoMenu.perfil: {
        console.log('Perfil');
        break;
    }
    default: {
        console.log('No asignado');
        break;
    }
}
