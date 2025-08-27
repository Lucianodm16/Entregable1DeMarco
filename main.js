const carroCompras = [];

const abrirCarrito = document.getElementById("card-button");
const contenedor = document.querySelector(".contenedorBoxes");
const carrito = document.getElementById("carrito");
const cerrar = document.getElementById("cerrar-carrito");
const contenedorCarrito = document.getElementById("carrito-items");
const totalCarrito = document.getElementById("total-carrito");
const contadorCarrito = document.getElementById("contador-carrito");

abrirCarrito.addEventListener("click", () => {
    carrito.classList.add("mostrar");
});

cerrar.addEventListener("click", () => {
    carrito.classList.remove("mostrar");
});

let productos = [];

fetch("./productos.json")
    .then(res => res.json())
    .then(data => {
        productos = data;
        renderizarProductos(productos);
    })
    .catch(err => console.error("Error cargando productos:", err));

// Renderizador
function renderizarProductos(productos) {
    contenedor.innerHTML = "";
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

    // Agregar eventos a los botones
    document.querySelectorAll(".agregar-carrito").forEach(boton => {
        boton.addEventListener("click", () => {
            const id = parseInt(boton.parentElement.id);
            const productoSeleccionado = productos.find(p => p.id === id);
            agregarAlCarrito(productoSeleccionado);
        });
    });
}

function agregarAlCarrito(producto) {
    const existe = carroCompras.find(item => item.id === producto.id);
    if (existe) {
        existe.cantidad += 1;
    } else {
        carroCompras.push({ ...producto, cantidad: 1 });
    }
    actualizarCarrito();

    Swal.fire({
        icon: "success",
        title: "Producto agregado",
        text: `${producto.nombre} se agregó al carrito con éxito.`,
        timer: 1500,
        showConfirmButton: false
    });
}

function actualizarCarrito() {
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
    contadorCarrito.textContent = cantidadTotal;

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
});
