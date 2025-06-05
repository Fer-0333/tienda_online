document.addEventListener('DOMContentLoaded', () => {
const productos = [
{ id: 1, nombre: 'Computador 1', precio: 2300000 },
{ id: 2, nombre: 'Computador 2', precio: 1800000 },
{ id: 3, nombre: 'Auriculares 3', precio: 85000 },
{ id: 4, nombre: 'Mouse 1',  precio: 65000 },
{ id: 5, nombre: 'Mouse 2',  precio:45000 },
{ id: 6, nombre: 'Parlantes 1', precio: 38000 },
{ id: 7, nombre: 'Teclado 1', precio: 25000 },
{ id: 8, nombre: 'Teclado 2', precio: 50000 },
{ id: 9, nombre: 'USB 1',  precio: 30000 },
{ id: 10, nombre: 'USB 2', precio: 30000}
];
const productosContainer = document.getElementById('profuctos');
const listaCarrito = document.getElementById('lista-carrito');
const totalCarritoElement = documet.getElementById('total-carrito');
const btnComprar = document.getElementById('btn-comprar');
const facturaSection = document.getElementById('factura');
const itemsFacturaDiv = document.getElementById('items-factura');
const totalFacturaElement = document.getElementById('total-factura');
const btnNuevaCompra = document.getElementById('btn-nueva-compra');
const btnVolverComprar = document.getElementById('btn-volver-comprar');
let carrito = [];
let totalCarrito = 0;
//Función para agregar un producto al carrito
function agregarAlCarrito(id) {
const producto = productos.find(p => p.id === id);
if (producto) {
carrito.push(producto);
actualizarCarrito();
  }
}
// Función para actualizar la visualización del carrito
function actualizarCarrito() {
listaCarrito.innerHTML = '';
totalCarrito = 0;
carrito.forEach(producto => {
const li = document.createElement('li');
li.innerHTML = `
<span>${producto.nombre}</span>
<span>$${producto.precio.toLocaleString()}</span>
`;
listaCarrito.appendChild(li);
titalCarrito += producto.precio;
});
totalCarritoElement.textContent = `Total: $${totalCarrito.toLocaleString()}`;
}
// Función para mostrar la factura 
function mostrarFatura() {
itemsFacturaDiv.innerHTML = '';
let totalFactura = 0;
carrito.forEaCh(producto => {
const itemDiv = document.createElement('div');
itemDiv.innerHTML = `
<span>${producto.nombre}</span>
<span>$${producto.precio.toLocaleString()}</span>
`;
itemsFacturaDiv.appendChild(itemDiv);
totalFactura += producto.precio;
});
totalFacturaElement.textContent = `Total Fatura: $${totalFactura.toLocaleString()}`;
facturaSection.style.display = 'block';
// Función para limpiar el carrito
function limpiarCarrito() { 
carrito = 0;
actualizarCarrito();
facturaSection.style.display = 'none';
}
// Evento para agregar un producto al carrito
productosContainer.addEventListener('click', (event) => {
if (event.target.classList.contains('btn-agregar')) {
const id = parseInt(event.target.getAttribute('data-id'));
agregarAlCarrito(id);
 }
});
// Evento para comprar y generar la factura
btnComprar.addEventListener('click', () => {
if(carrito.length > 0) {
 mostrarFactura();
 } else {
 aler("El carrito está vacío. por favor, agregue productos antes de comprar.");
 }
});
// Evento para volver a comprar y limpiar el carrito
btnNuevaCompra.addEventListener('click', () => {
 limpiarCarrito();
});
btnVolverComprar.addEventListener('click', () => {
limpiarCarrito();
  });
});
