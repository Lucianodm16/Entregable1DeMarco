const productos = [
    {nombre : "Arroz", precio: 100, categoria: "Almacen", imagen: "https://super-uno.com.ar/wp-content/uploads/2024/05/7790070433114-jpg.webp"},

    {nombre : "Fideos", precio: 80, categoria: "Almacen", imagen: "https://http2.mlstatic.com/D_NQ_NP_632227-MLA51761933428_092022-O.webp"},

    {nombre : "Pollo", precio: 50, categoria: "Carnes", imagen: "https://www.cclataurina.com/wp-content/uploads/2024/05/pollo.webp"},

    {nombre : "Cerdo", precio: 60, categoria: "Carnes", imagen: "https://frigorifico25demayo.com.ar/wp-content/uploads/2024/12/Huesito-Cerdo.webp"},

    {nombre : "Banana", precio: 30 , categoria: "Frutas", imagen: "https://greenshop.ar/wp-content/uploads/2024/06/A.2.6-500GR.jpg"},

    {nombre : "Manzana", precio: 40 ,categoria: "Frutas", imagen: "https://andreuprados.com/wp-content/uploads/2017/01/apple_0.jpg.webp"},

    {nombre : "Pera", precio: 30 ,categoria: "Frutas", imagen: "https://frutaseloy.com/wp-content/uploads/2014/05/pera-agua-300x270.png.webp"},

    {nombre : "Leche", precio: 20, categoria: "Lacteos", imagen: "https://polardistribuciones.com.ar/332-large_default/leche-larga-vida-descremada-1-lt--milkaut.webp"},

    {nombre : "Queso", precio: 70,  categoria: "Lacteos", imagen: "https://http2.mlstatic.com/D_NQ_NP_798461-MLA70437426042_072023-O.webp"},

    {nombre : "Pan", precio: 25 , categoria: "Panaderia", imagen: "https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/media/0d/temas/pan_0.jpg.webp"},

    {nombre : "Galletitas", precio: 15 , categoria: "Panaderia", imagen: "https://distribuidorafresh.com.ar/wp-content/uploads/2024/01/CHIPSDECHOCOLATE.webp"},
];

const carritoBoton = document.getElementById("card-button");
const contenedor = document.querySelector(".contenedorBoxes");

contenedor.innerHTML = "";

productos.forEach((producto) => {
    contenedor.innerHTML += `
        <section class="productosContainer">
            <img src="${producto.imagen}" 
            alt="imagen de ${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p>Categoria: ${producto.categoria}</p>
            <p>Precio: $${producto.precio}</p>
            <button>Agregar al carrito</button>
        </section>`;
});


renderizador();