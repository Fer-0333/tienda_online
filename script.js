document.addEventListener('DOMContentLoaded', () => {

    // Datos de los productos
    const productos = [
        { id: 1, nombre: 'Computador Asus', precio: 2300000 },
        { id: 2, nombre: 'Computador HP', precio: 1800000 },
        { id: 3, nombre: 'Auriculares Gamer', precio: 85000 },
        { id: 4, nombre: 'Mouse Gamer', precio: 65000 },
        { id: 5, nombre: 'Mouse Genius', precio: 45000 },
        { id: 6, nombre: 'Parlante Steren', precio: 38000 },
        { id: 7, nombre: 'Teclado y Mouse', precio: 25000 },
        { id: 8, nombre: 'Teclado Logitech', precio: 50000 },
        { id: 9, nombre: 'USB 16GB', precio: 30000 },
        { id: 10, nombre: 'USB 8GB', precio: 30000 },
    ];

    // Selectores del DOM (elementos de la página)
    const productosContainer = document.getElementById('productos'); // CORREGIDO: 'productos' en plural
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarritoElement = document.getElementById('total-carrito');
    const btnComprar = document.getElementById('btn-comprar');
    const facturaSection = document.getElementById('factura');
    const itemsFacturaDiv = document.getElementById('items-factura');
    const totalFacturaElement = document.getElementById('total-factura');
    const btnNuevaCompra = document.getElementById('btn-nueva-compra');
    const btnVolverComprar = document.getElementById('btn-volver-comprar');
    const carritoSection = document.getElementById('carrito');

    // Estado de la aplicación
    let carrito = [];
    let totalCarrito = 0;

    // Función para agregar un producto al carrito
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
            totalCarrito += producto.precio;
        });
        
        // CORREGIDO: Usar acentos graves (``) y la variable correcta 'totalCarrito'
        totalCarritoElement.textContent = `Total: $${totalCarrito.toLocaleString()}`;
    }

    // Función para mostrar la factura
    function mostrarFactura() {
        itemsFacturaDiv.innerHTML = '';
        let totalFactura = 0;

        carrito.forEach(producto => {
            const itemDiv = document.createElement('div');
            itemDiv.innerHTML = `
                   <span>${producto.nombre}</span>
                   <span>$${producto.precio.toLocaleString()}</span>
            `;
            itemsFacturaDiv.appendChild(itemDiv);
            totalFactura += producto.precio;
        });

        // CORREGIDO: Usar acentos graves (``) y la variable correcta 'totalFactura'
        totalFacturaElement.textContent = `Total Factura: $${totalFactura.toLocaleString()}`;
        
        // Ocultar productos y carrito, mostrar factura
        facturaSection.style.display = 'block';
        productosContainer.style.display = 'none';
        carritoSection.style.display = 'none';
    }

    // Función para limpiar todo y empezar de nuevo
    function limpiarParaNuevaCompra() {
        carrito = [];
        actualizarCarrito();
        
        // Mostrar productos y carrito, ocultar factura
        facturaSection.style.display = 'none';
        productosContainer.style.display = 'flex'; // 'flex' porque así está en el CSS
        carritoSection.style.display = 'block';
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
        if (carrito.length > 0) {
            mostrarFactura();
        } else {
            alert("El carrito está vacío. Por favor, agregue productos antes de comprar.");
        }
    });

    // Eventos para volver a comprar (limpian el estado)
    btnNuevaCompra.addEventListener('click', limpiarParaNuevaCompra); // CORREGIDO: Evento añadido
    btnVolverComprar.addEventListener('click', limpiarParaNuevaCompra);
});