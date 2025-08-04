import Producto from "./Producto.js";
export default class SuperMercado{
    // Clase para representar el supermercado
    constructor(productos){
        this.productos = productos || [];
    }

    agregarProducto() {
        const nombre = prompt("Ingrese el nombre del producto:");
        
        let precio, cantidad, categoria;

        // Valido precio
        do {
            precio = parseFloat(prompt("Ingrese el precio del producto:"));
            if (precio <= 0 || isNaN(precio)) {
                alert("Precio no válido. Debe ser un número mayor a 0.");
            }
        } while (precio <= 0 || isNaN(precio));

        // Valido cantidad
        do {
            cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));
            if (cantidad <= 0 || isNaN(cantidad)) {
                alert("Cantidad no válida. Debe ser un número mayor a 0.");
            }
        } while (cantidad <= 0 || isNaN(cantidad));

        // Valido categoría
        const categoriasValidas = ["Almacen", "Carnes", "Frutas", "Lacteos", "Panaderia"];
        do {
            categoria = prompt("Ingrese la categoría del producto:");
            if (!categoriasValidas.includes(categoria)) {
                alert("Categoría no válida. Las categorías permitidas son: Almacen, Carnes, Frutas, Lacteos, Panaderia.");
            }
        } while (!categoriasValidas.includes(categoria));

        const nuevo = new Producto(nombre, precio, cantidad, categoria);
        this.productos.push(nuevo);
        alert(`Agregado: ${nuevo.nombre}, subtotal: $${nuevo.subTotal}`);
    }


    buscarPorNombre() {
        let nombre = prompt("Ingrese el nombre del producto que desea buscar:");
        const productoEncontrado = this.productos.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
        if(productoEncontrado){
            alert(`Producto encontrado: ${productoEncontrado.nombre}, Precio: ${productoEncontrado.precio}, Categoría: ${productoEncontrado.categoria}`);
            return;
        } else {
            alert("Producto no encontrado.");
        }
    }

    buscarPorPrecio() {
        let precio;
        do {
            precio = Number(prompt("¿A partir de qué precio desea ver los productos?"));
            if (isNaN(precio) || precio < 0) {
                alert("Por favor, ingrese un precio válido.");
            }
        } while (isNaN(precio) || precio < 0);

        const productosFiltrados = this.productos.filter(producto => producto.precio >= precio);

        if (productosFiltrados.length > 0) {
            let mensaje = `Productos encontrados a un precio mayor o igual de ${precio}:\n`;
            productosFiltrados.forEach(producto => {
                mensaje += `Producto: ${producto.nombre}, Categoría: ${producto.categoria}\n`;
            });
            alert(mensaje);
        } else {
            alert(`No se encontraron productos con un precio mayor o igual a ${precio}.`);
        }
    }

    listarProductos() {
        let mensaje = "Lista de productos:\n";
        const productosLista = this.productos.forEach(producto => {
            mensaje += `Producto: ${producto.nombre}, Precio: ${producto.precio}, Categoría: ${producto.categoria}\n`;
        });
        alert(mensaje);
    }

    buscarPorCategoria() {
        let categoria = prompt("Ingrese la categoría que desea buscar:");
        const productosFiltrados = this.productos.filter(
            producto => producto.categoria.toLowerCase() === categoria.toLowerCase()
        );

        if (productosFiltrados.length > 0) {
            let mensaje = `Productos en la categoría "${categoria}":\n`;
            productosFiltrados.forEach(producto => {
                mensaje += `Producto: ${producto.nombre}, Precio: ${producto.precio}\n`;
            });
            alert(mensaje);
        } else {
            alert("No se encontraron productos en esa categoría.");
            const confirmarNuevoIntento = confirm("¿Desea buscar otra categoría?");
            if (confirmarNuevoIntento) {
                this.buscarPorCategoria();
            } else {
                alert("La operación ha sido cancelada. Volviendo al menú principal.");
            }
        }
    }

    actualizarPrecioConIVA(){
       const productosActualizados = this.productos = this.productos.map(producto => {
            producto.precio = (producto.precio * 1.21).toFixed(2); // Aplicar IVA del 21%
            return producto;
        });
        alert(`Precios actualizados con IVA: ${productosActualizados.map(p => `${p.nombre}: $${p.precio}`).join('\n')}`);
    }

}