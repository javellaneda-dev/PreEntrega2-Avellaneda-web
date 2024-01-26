// Array de productos
let productos = [
  {
    categoria: "comedor",
    imagen: "../img/productos/comedor.jpg",
    nombre: "Comedor 1",
    descripcion: "Detalle de Producto",
    precio: 10000,
  },
  {
    categoria: "comedor",
    imagen: "../img/productos/comedor.jpg",
    nombre: "Comedor 2",
    descripcion: "Detalle de Producto",
    precio: 20000,
  },
  {
    categoria: "comedor",
    imagen: "../img/productos/comedor.jpg",
    nombre: "Comedor 3",
    descripcion: "Detalle de Producto",
    precio: 30000,
  },
  {
    categoria: "living",
    imagen: "../img/productos/living.jpg",
    nombre: "Living 1",
    descripcion: "Detalle de Producto",
    precio: 40000,
  },

  {
    categoria: "living",
    imagen: "../img/productos/living.jpg",
    nombre: "Living 2",
    descripcion: "Detalle de Producto",
    precio: 50000,
  },
  {
    categoria: "living",
    imagen: "../img/productos/living.jpg",
    nombre: "Living 3",
    descripcion: "Detalle de Producto",
    precio: 55000,
  },
  {
    categoria: "dormitorio",
    imagen: "../img/productos/Dormitorio.jpg",
    nombre: "Dormitorio 1",
    descripcion: "Detalle de Producto",
    precio: 35000,
  },
  {
    categoria: "dormitorio",
    imagen: "../img/productos/Dormitorio.jpg",
    nombre: "Dormitorio 2",
    descripcion: "Detalle de Producto",
    precio: 45000,
  },
  {
    categoria: "dormitorio",
    imagen: "../img/productos/Dormitorio.jpg",
    nombre: "Dormitorio 3",
    descripcion: "Detalle de Producto",
    precio: 70000,
  },
  {
    categoria: "outlet",
    imagen: "../img/productos/Outlet.jpg",
    nombre: "Outlet 1",
    descripcion: "Detalle de Producto",
    precio: 13000,
  },
  {
    categoria: "outlet",
    imagen: "../img/productos/Outlet.jpg",
    nombre: "Outlet 2",
    descripcion: "Detalle de Producto",
    precio: 21000,
  },
  {
    categoria: "outlet",
    imagen: "../img/productos/Outlet.jpg",
    nombre: "Outlet 3",
    descripcion: "Detalle de Producto",
    precio: 18000,
  },
];

// ordenar los productos por categoría al cargar la página
function inicializarProductos() {
  productos.sort((a, b) => a.categoria.localeCompare(b.categoria));
}

// Función para renderizar los productos en el HTML
function renderizarProductos(categoriaSeleccionada) {
  let contenedorProductos = document.getElementById("contenedor-productos");

  // Limpiar el contenido del contenedor 
  contenedorProductos.innerHTML = "";

  // Filtrar los productos por categoría si elegi una categoria
  let productosFiltrados;
  if (categoriaSeleccionada === "all" || !categoriaSeleccionada) {
    // Si la categoría seleccionada es "all" o no se seleccionó ninguna categoría
    // mostrar todos los productos sin filtrar.
    productosFiltrados = productos;
  } else {
    // Filtrar los productos por la categoría seleccionada.
    productosFiltrados = productos.filter(
      (producto) => producto.categoria === categoriaSeleccionada
    );
  }
  // Ordenar los productos por precio si la categoría seleccionada es "all"
  if (categoriaSeleccionada === "all") {
    let ordenSeleccionado = document.getElementById("ordenar").value;
    if (ordenSeleccionado === "mayor-a-menor") {
      productosFiltrados.sort((a, b) => b.precio - a.precio);
    } else if (ordenSeleccionado === "menor-a-mayor") {
      productosFiltrados.sort((a, b) => a.precio - b.precio);
    } else if (ordenSeleccionado === "alfabeticamente") {
      productosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }
  }

  // generar el contenido HTML
  productosFiltrados.forEach((producto) => {
    let productoDiv = document.createElement("div");
    productoDiv.classList.add("espacio", producto.categoria);

    let cuadrosDiv = document.createElement("div");
    cuadrosDiv.classList.add("cuadros");

    let productoLink = document.createElement("a");
    productoLink.href = "pages/productos.html";

    let imagenProducto = document.createElement("img");
    imagenProducto.src = producto.imagen;
    imagenProducto.alt = producto.nombre;
    productoLink.appendChild(imagenProducto);

    let nombreProducto = document.createElement("span");
    nombreProducto.textContent = producto.nombre;
    productoLink.appendChild(nombreProducto);

    let descripcionProducto = document.createElement("span");
    descripcionProducto.textContent = producto.descripcion;
    productoLink.appendChild(descripcionProducto);

    let precioProducto = document.createElement("span");
    precioProducto.textContent = `$ ${producto.precio}`;
    productoLink.appendChild(precioProducto);

    let botonAgregar = document.createElement("button");
    botonAgregar.textContent = "Agregar al carrito";
    botonAgregar.classList.add("btn-add-cart");
    botonAgregar.addEventListener("click", () => {
      
      console.log("Producto agregado al carrito:", producto.nombre);
    });
    productoLink.appendChild(botonAgregar);
    cuadrosDiv.appendChild(productoLink);
    productoDiv.appendChild(cuadrosDiv);
    contenedorProductos.appendChild(productoDiv);
  });
}

// menú desplegable (select)
let selectCategorias = document.getElementById("categorias");
selectCategorias.addEventListener("change", () => {
  let categoriaSeleccionada = selectCategorias.value;
  renderizarProductos(categoriaSeleccionada);
});

// Crear el nuevo div de filtrado 
let nuevoDivFiltrado = document.createElement("div");
nuevoDivFiltrado.className = "filtroprod";

let nuevoLabel = document.createElement("label");
nuevoLabel.htmlFor = "ordenar";
nuevoLabel.textContent = "Ordenar por:";

let nuevoSelect = document.createElement("select");
nuevoSelect.name = "ordenar";
nuevoSelect.id = "ordenar";

let opcionesOrdenar = ["Mayor a Menor", "Menor a Mayor", "Alfabéticamente"];

opcionesOrdenar.forEach(function (opcion) {
  let nuevaOpcion = document.createElement("option");
  nuevaOpcion.value = opcion.toLowerCase().replace(/\s/g, "-");
  nuevaOpcion.textContent = opcion;
  nuevoSelect.appendChild(nuevaOpcion);
});

nuevoDivFiltrado.appendChild(nuevoLabel);
nuevoDivFiltrado.appendChild(nuevoSelect);

// Insertar el nuevo div de filtrado debajo del primer div "filtroprod"
let primerDivFiltrado = document.querySelector(".filtroprod");
primerDivFiltrado.parentNode.insertBefore(
  nuevoDivFiltrado,
  primerDivFiltrado.nextSibling
);

// cambio en el menú desplegable (select) para el ordenamiento
nuevoSelect.addEventListener("change", () => {
  let categoriaSeleccionada = selectCategorias.value;
  renderizarProductos(categoriaSeleccionada);
});

// ordenar los productos por categoría
inicializarProductos();

renderizarProductos("all");

// Obtener todos los productos en la página
const productosEnPagina = document.querySelectorAll(".cuadros a");

/* *************************************************************************************************************** */

let productosSeleccionados = [];
// Función para crear y posicionar el menú desplegable
function crearMenuDesplegable() {
  // Crear elementos del menú desplegable
  const dropdownMenu = document.createElement("div");
  dropdownMenu.classList.add("dropdown-menu");

  const ul = document.createElement("ul");
  const items = ["Producto 1", "Producto 2", "Producto 3"];

  // Crear las opciones del menú
  items.forEach((itemText) => {
    const li = document.createElement("li");
    li.textContent = itemText;
    ul.appendChild(li);
  });

  dropdownMenu.appendChild(ul);

  // Posicionar el menú desplegable dentro del contenedor
  const container = document.querySelector(".container-icon");
  container.appendChild(dropdownMenu);
}

// Función para mostrar el menú desplegable
function mostrarMenuDesplegable() {
  const dropdownMenu = document.querySelector(".dropdown-menu");
  dropdownMenu.style.display = "block";
}

// Función para ocultar el menú desplegable
function ocultarMenuDesplegable() {
  const dropdownMenu = document.querySelector(".dropdown-menu");
  dropdownMenu.style.display = "none";
}

// Función para agregar un producto seleccionado a la lista
function agregarProductoSeleccionado(nombreProducto, precioProducto) {
  productosSeleccionados.push({
    nombre: nombreProducto,
    precio: precioProducto,
  });
}

// Evento click en el carrito para mostrar/ocultar el menú desplegable
const cartIcon = document.querySelector(".container-cart-icon");
cartIcon.addEventListener("click", function (event) {
  event.stopPropagation();

  // Si el menú desplegable aún no ha sido creado, lo creamos antes de mostrarlo
  if (!document.querySelector(".dropdown-menu")) {
    crearMenuDesplegable();
  }

  mostrarMenuDesplegable();
});

// Evento click en los botones "Agregar al carrito" para agregar productos seleccionados
const addToCartButtons = document.querySelectorAll(".btn-add-cart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nombreProducto =
      button.parentElement.querySelector("span:nth-child(2)").textContent;
    const precioProducto =
      button.parentElement.querySelector("span:nth-child(4)").textContent;

    agregarProductoSeleccionado(nombreProducto, precioProducto);

    // Renderizar los productos seleccionados en el menú desplegable
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const ul = dropdownMenu.querySelector("ul");
    ul.innerHTML = ""; // Limpiar el contenido

    productosSeleccionados.forEach((producto) => {
      const li = document.createElement("li");
      li.textContent = `${producto.nombre}, ${producto.precio}`;
      ul.appendChild(li);
    });
  });
});

// ordenar los productos por categoría
inicializarProductos();

renderizarProductos("all");
