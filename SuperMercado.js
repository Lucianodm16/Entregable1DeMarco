class superMercado{
    // Clase para representar el supermercado
    constructor(productos){
        this.productos = productos || [];
    }

    agregarProducto(nombre, precio, categoria, stockDisponible) {
        const nuevo = new Producto(nombre, precio, categoria, stockDisponible);
        this.productos.push(nuevo);
        console.log(`Agregado: ${nuevo.nombre}, subtotal: $${nuevo.subTotal}`);
    }

    buscarPorNombre() {
        let nombre = prompt("Ingrese el nombre del producto que desea buscar:");
        let mensajeExito = `Producto encontrado: \n`;
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].nombre.toLowerCase() === nombre.toLowerCase()) {
                mensajeExito += `Producto: ${this.productos[i].nombre}, Precio: ${this.productos[i].precio}, Categoría: ${this.productos[i].categoria}`;
                alert(mensajeExito);
                return; // Salir de la función una vez encontrado el producto
            }
        }
        alert("Producto no encontrado.");
    }

    buscarPorPrecio() {
        let precio;
        do {
            precio = Number(prompt("¿A partir de qué precio desea ver los productos?"));
            if (isNaN(precio) || precio < 0) {
                alert("Por favor, ingrese un precio válido.");
            }
        } while (isNaN(precio) || precio < 0);

        let mensajeExito = `Productos encontrados a un precio mayor o igual de ${precio}:\n`;
        let encontrados = 0;

        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].precio >= precio) {
                mensajeExito += `Producto: ${this.productos[i].nombre}, Categoría: ${this.productos[i].categoria}\n`;
                encontrados++;
            }
        }

        if (encontrados > 0) {
            alert(mensajeExito);
        } else {
            alert(`No se encontraron productos con un precio mayor o igual a ${precio}.`);
        }
    }

    listarProductos() {
        let mensaje = "Lista de productos:\n";
        for (let i = 0; i < this.productos.length; i++) {
            mensaje += `Producto: ${this.productos[i].nombre}, Precio: ${this.productos[i].precio}, Categoría: ${this.productos[i].categoria}\n`;
        }
        alert(mensaje);
    }

    buscarPorCategoria() {
        let categoria = prompt("Ingrese la categoría que desea buscar:");
        let mensajeExito = `Productos en la categoría "${categoria}":\n`;
        let encontrados = false;

        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].categoria.toLowerCase() === categoria.toLowerCase()) {
                mensajeExito += `Producto: ${this.productos[i].nombre}, Precio: ${this.productos[i].precio}\n`;
                encontrados = true;
            }
        }

        if (encontrados) {
            alert(mensajeExito);
        } else {
            alert("No se encontraron productos en esa categoría.");
            let confirmacion = confirm("¿Desea buscar otra categoría?");
            if (confirmacion) {
                this.buscarPorCategoria();
            }
        }
    }

}