$(document).ready(function(){

var firstBed = document.getElementById('#primeraCama');
var secondBed = document.getElementById('#segundaCama');
var thirdBed = document.getElementById('#terceraCama');

$( "#lowerHigh" ).click(function() {

  $('#primeraCama').addClass("order-3");
  $('#segundaCama').addClass("order-2");
  $('#terceraCama').addClass("order-1");

// configuraciones para remover en caso de que se active uno y despues el otro.

  $('#primeraCama').removeClass("order-1");
  $('#terceraCama').removeClass("order-3");

  });

$( "#highLower" ).click(function() {

  $('#primeraCama').addClass("order-1");
  $('#segundaCama').addClass("order-2");
  $('#terceraCama').addClass("order-3");

  // configuraciones para remover en caso de que se active uno y despues el otro.

    $('#primeraCama').removeClass("order-3");
    $('#terceraCama').removeClass("order-1");

  });

$( "#resetdefault" ).click(function(){

    $('#primeraCama').removeClass('order-3');
    $('#segundaCama').removeClass('order-2');
    $('#terceraCama').removeClass('order-1');

  // Se repiten en inversa debido a que habian algunos fallos de compatibilidad cuando se presionaban varios botones en un orden exacto.

    $('#primeraCama').removeClass('order-1');
    $('#segundaCama').removeClass('order-2');
    $('#terceraCama').removeClass('order-3');

  });

});

// class Productos {
//   constructor(idProducto, nombreProducto, precio) {
//     this.idProducto = idProducto;
//     this.nombreProducto = nombreProducto;
//     this.precio = precio;
//
//   }
//
// }
//
// //Objetos con los datos de los productos.
// const producto0 = new Productos(0, "Cama1", 450);
// const producto1 = new Productos(1, "Cama2", 358);
// const producto2 = new Productos(2, "Cama3", 180);
//
//
//
// //Estructura producto 0.
// let precioOriginalProducto0 = producto0.precio;
//
//
// //Estructura producto 1.
// let precioOriginalProducto1 = producto1.precio;
//
//
// //Estructura producto 2.
// let precioOriginalProducto2 = producto2.precio;
//
// //Creación del array que almacena los IDs de los productos.
// const numerodID = [producto0.idProducto, producto1.idProducto, producto2.idProducto];
//
// //Creación del array que almacena los precios de los productos.
// const preciosDeTodosLosProductos = [precioOriginalProducto0, precioOriginalProducto1, precioOriginalProducto2];
//
// //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// //Tienes que pasar la función a tu sort
// //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// preciosDeTodosLosProductos.sort(ordenar);
//
//
//
// //función para ordenar los productos del más barato al más caro.
// function ordenar(a, b) {
//   return a - b;
// }
// //si quieres ordenar los productos del màs caro al màs barato solo invierte "a, b" de forma que quedara "b - a"
//
// //For: utilizado para recorrer la arrayd en busca de los precios y ordenarlos.
// for (let i = 0; i < preciosDeTodosLosProductos.length; i++) {
//   console.log(preciosDeTodosLosProductos[i] + " ");
//  }
//
