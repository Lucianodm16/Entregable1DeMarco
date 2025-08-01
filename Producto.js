class Producto{
    static idCounter = 0;

    constructor(nombre, precio, categoria,stockDisponible) {
        this.id = Producto.incrementarId();
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.stockDisponible = stockDisponible;
        this.subTotal = this.calcularSubTotal();
    }

    calcularSubTotal() {
        return this.precio * this.stockDisponible;
    }

    static incrementarId() {
        return Producto.idCounter++;
    }
}



