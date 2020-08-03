var listArt = articulos;

var contenedor = document.getElementById("lista-articulos");

for (let i = 0; i < listArt.length; i++) {
  contenedor.innerHTML +=
    '<div class="articulo"><img class="articulo__imagen" src="' +
    listArt[i].Imagen +
    '" alt="" /><h3 class="articulo__titulo">' +
    listArt[i].Nombre +
    '</h3><div class="articulo__precio">' +
    listArt[i].Precio +
    "</div></div>";
}
