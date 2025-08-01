
const superMercado = [
    {producto : "Arroz", precio: 100, stockDisponible: 15 , subTotal: 1500 ,categoria: "Almacen"},
    {producto : "Fideos", precio: 80, stockDisponible: 10 , subTotal: 800, categoria: "Almacen"},
    {producto : "Pollo", precio: 50, stockDisponible: 40 , subTotal: 2000, categoria: "Carnes"},
    {producto : "Cerdo", precio: 60, stockDisponible: 30 , subTotal: 1800, categoria: "Carnes"},
    {producto : "Banana", precio: 30, stockDisponible: 20 , subTotal: 600, categoria: "Frutas"},
    {producto : "Manzana", precio: 40, stockDisponible: 28 , subTotal: 1120, categoria: "Frutas"},
    {producto : "Leche", precio: 20, stockDisponible: 56 , subTotal: 1120, categoria: "Lacteos"},
    {producto : "Queso", precio: 70, stockDisponible: 75 , subTotal: 5250, categoria: "Lacteos"},
    {producto : "Pan", precio: 25, stockDisponible: 63 , subTotal: 1575, categoria: "Panaderia"},
    {producto : "Galletitas", precio: 15, stockDisponible: 17 , subTotal: 255, categoria: "Panaderia"},
];



function buscador(){  
    let bandera = true;

    while (bandera) {
        let opcion = Number(prompt("Ingrese una opción:\n1. Buscar por nombre\n2. Buscar productos mayor o igual que\n3. Buscar por categoría\n4. Listar productos"));
        switch (opcion) {   
            case 1:
                buscarPorNombre();
                break;
            case 2:
                buscarPorPrecio();
                break;
            case 3:
                buscarPorCategoria();
                break;
            case 4:
                listarProductos();
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