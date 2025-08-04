import Producto from './Producto.js';
import SuperMercado from './SuperMercado.js';

const superProductos = [
    {producto : "Arroz", precio: 100, cantidad: 15 ,categoria: "Almacen"},
    {producto : "Fideos", precio: 80, cantidad: 10, categoria: "Almacen"},
    {producto : "Pollo", precio: 50, cantidad: 40 , categoria: "Carnes"},
    {producto : "Cerdo", precio: 60, cantidad: 30 ,  categoria: "Carnes"},
    {producto : "Banana", precio: 30, cantidad: 20 , categoria: "Frutas"},
    {producto : "Manzana", precio: 40, cantidad: 28 ,categoria: "Frutas"},
    {producto : "Leche", precio: 20, cantidad: 56 , categoria: "Lacteos"},
    {producto : "Queso", precio: 70, cantidad: 75 ,  categoria: "Lacteos"},
    {producto : "Pan", precio: 25, cantidad: 63 , categoria: "Panaderia"},
    {producto : "Galletitas", precio: 15, cantidad: 17 , categoria: "Panaderia"},
];
const productosInstanciados = superProductos.map(item => {
    return new Producto(item.producto, item.precio, item.cantidad, item.categoria);
});

const superMercado = new SuperMercado(productosInstanciados);

function buscador(){  
    let bandera = true;

    while (bandera) {
        let opcion = Number(prompt("Ingrese una opción:\n1. Buscar por nombre\n2. Buscar productos mayor o igual que\n3. Buscar por categoría\n4. Listar productos \n5. agregar Producto \n6. Actualizar precios con IVA"));
        switch (opcion) {   
            case 1:
                superMercado.buscarPorNombre();
                break;
            case 2:
                superMercado.buscarPorPrecio();
                break;
            case 3:
                superMercado.buscarPorCategoria();
                break;
            case 4:
                superMercado.listarProductos();
                break;
            case 5:
                superMercado.agregarProducto();
                break;
            case 6:
                superMercado.actualizarPrecioConIVA();
                break;
            default:
                alert("Opción no válida, por favor intente de nuevo.");
        }

        let quiereSalir = confirm("¿Desea seguir buscando productos?");
        if (!quiereSalir) {
            alert("Gracias por usar el buscador. ¡Hasta luego!");
            bandera = false; // Salir del bucle
        }
    }
}


buscador();