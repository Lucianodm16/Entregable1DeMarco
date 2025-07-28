
const superMercado = [
    {producto : "Arroz", precio: 100, categoria: "Almacen"},
    {producto : "Fideos", precio: 80, categoria: "Almacen"},
    {producto : "Pollo", precio: 50, categoria: "Carnes"},
    {producto : "Cerdo", precio: 60, categoria: "Carnes"},
    {producto : "Banana", precio: 30, categoria: "Frutas"},
    {producto : "Manzana", precio: 40, categoria: "Frutas"},
    {producto : "Leche", precio: 20, categoria: "Lacteos"},
    {producto : "Queso", precio: 70, categoria: "Lacteos"},
    {producto : "Pan", precio: 25, categoria: "Panaderia"},
    {producto : "Galletitas", precio: 15, categoria: "Panaderia"},
];

function buscador(){
    let opcion = Number(prompt("Ingrese una opción:\n1. Buscar por nombre\n2. Buscar productos mayor o igual que\n3. Buscar por categoría\n4. Listar productos \n5. Salir"));
    if(opcion === 1){
        buscarPorNombre();
    } else if(opcion === 2){
        buscarPorPrecio();
    } else if(opcion === 3){
        buscarPorCategoria();
    } else if (opcion === 4){
        listarProductos();
    } else if (opcion === 5) {
        alert("Gracias por usar el buscador. ¡Hasta luego!");
        return; // Salir del programa
    } else {
        alert("Opción no válida, por favor intente de nuevo.");
        buscador();
    }
}

function buscarPorNombre() {
    let nombre = prompt("Ingrese el nombre del producto que desea buscar:");
    let mensajeExito = `Producto encontrado: \n`;
    for (let i = 0; i < superMercado.length; i++) {
        if (superMercado[i].producto.toLowerCase() === nombre.toLowerCase()) {
            mensajeExito += `Producto: ${superMercado[i].producto}, Precio: ${superMercado[i].precio}, Categoría: ${superMercado[i].categoria}`;
            alert(mensajeExito);
            buscador();
            return; // Salir de la función una vez encontrado el producto
        }
    }
    alert("Producto no encontrado.");
    buscador();
}

function buscarPorPrecio() {
    let precio = Number(prompt("¿A partir de qué precio desea ver los productos?"));
    
    if (isNaN(precio) || precio < 0 || precio === "") {
        alert("Por favor, ingrese un precio válido.");
        buscarPorPrecio();
        return;
    }

    let mensajeExito = `Productos encontrados a un precio mayor o igual de ${precio}:\n`;
    let encontrados = 0;

    for (let i = 0; i < superMercado.length; i++) {
        if (superMercado[i].precio >= precio) {
            mensajeExito += `Producto: ${superMercado[i].producto}, Categoría: ${superMercado[i].categoria}\n`;
            encontrados++;
        }
    }

    if (encontrados > 0) {
        alert(mensajeExito);
    } else {
        alert(`No se encontraron productos con un precio mayor o igual a ${precio}.`);
    }

    buscador();
}


function listarProductos() {
    let mensaje = "Lista de productos:\n";
    for (let i = 0; i < superMercado.length; i++) {
        mensaje += `Producto: ${superMercado[i].producto}, Precio: ${superMercado[i].precio}, Categoría: ${superMercado[i].categoria}\n`;
    }
    alert(mensaje);
    buscador();
}

function buscarPorCategoria() {
    let categoria = prompt("Ingrese la categoría que desea buscar:");
    let mensajeExito = `Productos en la categoría "${categoria}":\n`;
    let encontrados = false;

    for (let i = 0; i < superMercado.length; i++) {
        if (superMercado[i].categoria.toLowerCase() === categoria.toLowerCase()) {
            mensajeExito += `Producto: ${superMercado[i].producto}, Precio: ${superMercado[i].precio}\n`;
            encontrados = true;
        }
    }

    if (encontrados) {
        alert(mensajeExito);
        buscador();
    } else {
        alert("No se encontraron productos en esa categoría.");
        let confirmacion = confirm("¿Desea buscar otra categoría?");
        if (confirmacion) {
            buscarPorCategoria();
        } else {
            buscador();
        }
    }
}


buscador();