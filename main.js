var listArt = articulos;

var contenedor = document.getElementById("lista-articulos");

for (let index = 0; index < listArt.length; index++) {
  contenedor.innerHTML +=
    '<div class="articulo"><img class="articulo__imagen" src="' +
    listArt[index].Imagen +
    '" alt="" /><h3 class="articulo__titulo">' +
    listArt[index].Nombre +
    '</h3><div class="articulo__precio">' +
    listArt[index].Precio +
    "</div></div>";
}
