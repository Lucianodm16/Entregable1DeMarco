export default class Producto{
    static idCounter = 0;

    constructor(nombre, precio, cantidad,categoria) {
        this.id = Producto.incrementarId();
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
        this.subTotal = this.calcularSubTotal();
    }

    calcularSubTotal() {
        return this.precio * this.cantidad;
    }

    static incrementarId() {
        return Producto.idCounter++;
    }
}



