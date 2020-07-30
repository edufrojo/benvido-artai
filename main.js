var listArt = articulos;

var contenedor = document.getElementById('lista-articulos');
var articulo = document.createElement('div');

for (let index = 0; index < listArt.length; index++) {
    articulo.innerHTML += '<div class="col-xs-12 col-sm-6 col-md-4"><div class="articulo"><img class="img-responsive center-block" src="' + listArt[index].Imagen + '" alt="" /><h3 class="articulo__titulo text-center">' + listArt[index].Nombre + '</h3><label class="articulo__precio center-block text-center">' + listArt[index].Precio + '</label></div></div>';
    contenedor.appendChild(articulo);
}