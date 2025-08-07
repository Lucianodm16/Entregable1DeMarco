const productos = [
    { id: 0, nombre: "Lentejas Enlatadas", precio: 800, categoria: "Almacen", imagen: "https://arcorencasa.com/wp-content/uploads/2024/10/20241008-13244.webp" },
    { id: 1, nombre: "Arroz", precio: 100, categoria: "Almacen", imagen: "https://super-uno.com.ar/wp-content/uploads/2024/05/7790070433114-jpg.webp" },
    { id: 2, nombre: "Fideos", precio: 80, categoria: "Almacen", imagen: "https://http2.mlstatic.com/D_NQ_NP_632227-MLA51761933428_092022-O.webp" },
    { id: 3, nombre: "Pollo", precio: 50, categoria: "Carnes", imagen: "https://www.cclataurina.com/wp-content/uploads/2024/05/pollo.webp" },
    { id: 4, nombre: "Cerdo", precio: 60, categoria: "Carnes", imagen: "https://frigorifico25demayo.com.ar/wp-content/uploads/2024/12/Huesito-Cerdo.webp" },
    { id: 5, nombre: "Banana", precio: 30, categoria: "Frutas", imagen: "https://greenshop.ar/wp-content/uploads/2024/06/A.2.6-500GR.jpg" },
    { id: 6, nombre: "Manzana", precio: 40, categoria: "Frutas", imagen: "https://andreuprados.com/wp-content/uploads/2017/01/apple_0.jpg.webp" },
    { id: 7, nombre: "Pera", precio: 30, categoria: "Frutas", imagen: "https://frutaseloy.com/wp-content/uploads/2014/05/pera-agua-300x270.png.webp" },
    { id: 8, nombre: "Leche", precio: 20, categoria: "Lacteos", imagen: "https://polardistribuciones.com.ar/332-large_default/leche-larga-vida-descremada-1-lt--milkaut.webp" },
    { id: 9, nombre: "Queso", precio: 70, categoria: "Lacteos", imagen: "https://http2.mlstatic.com/D_NQ_NP_798461-MLA70437426042_072023-O.webp" },
    { id: 10, nombre: "Pan", precio: 25, categoria: "Panaderia", imagen: "https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/media/0d/temas/pan_0.jpg.webp" },
    { id: 11, nombre: "Galletitas", precio: 15, categoria: "Panaderia", imagen: "https://distribuidorafresh.com.ar/wp-content/uploads/2024/01/CHIPSDECHOCOLATE.webp" }
];

const carroCompras = [];

const abrirCarrito = document.getElementById("card-button");
const contenedor = document.querySelector(".contenedorBoxes");
const carrito = document.getElementById("carrito");
const cerrar = document.getElementById("cerrar-carrito");
const contenedorCarrito = document.getElementById("carrito-items");
const totalCarrito = document.getElementById("total-carrito");

abrirCarrito.addEventListener("click", () => {
    carrito.classList.add("mostrar");
});

cerrar.addEventListener("click", () => {
    carrito.classList.remove("mostrar");
});

// Renderizador
productos.forEach((producto) => {
    contenedor.innerHTML += `
        <section class="productosContainer" id="${producto.id}">
            <img src="${producto.imagen}" alt="imagen de ${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p>Categoria: ${producto.categoria}</p>
            <p>Precio: $${producto.precio}</p>
            <button class="agregar-carrito">Agregar al carrito</button>
        </section>`;
});

// Agregar productos al carrito
document.querySelectorAll(".agregar-carrito").forEach(boton => {
    boton.addEventListener("click", () => {
        const id = parseInt(boton.parentElement.id);
        const productoSeleccionado = productos.find(p => p.id === id);
        agregarAlCarrito(productoSeleccionado);
    });
});

function agregarAlCarrito(producto) {
    const existe = carroCompras.find(item => item.id === producto.id);
    if (existe) {
        existe.cantidad += 1;
    } else {
        carroCompras.push({ ...producto, cantidad: 1 });
    }
    actualizarCarrito();
}

function actualizarCarrito() {
    // Limpiar carrito
    contenedorCarrito.innerHTML = "";

    let total = 0;
    let cantidadTotal = 0;

    carroCompras.forEach(producto => {
        const subtotal = producto.precio * producto.cantidad;
        const item = document.createElement("div");
        item.innerHTML = `<p>${producto.nombre} x${producto.cantidad} - $${subtotal}</p>`;
        contenedorCarrito.appendChild(item);

        total += subtotal;
        cantidadTotal += producto.cantidad;
    });

    totalCarrito.textContent = `Total: $${total}`;

    // Actualizar contador
    contadorCarrito.textContent = cantidadTotal;

    // ocultar el contador si está vacío
    if (cantidadTotal === 0) {
        contadorCarrito.style.display = "none";
    } else {
        contadorCarrito.style.display = "inline-block";
    }
}

const limpiar = document.getElementById("limpiar-carrito");

limpiar.addEventListener("click", () =>{
    carroCompras.length = 0;
    actualizarCarrito();
})

const contadorCarrito = document.getElementById("contador-carrito");