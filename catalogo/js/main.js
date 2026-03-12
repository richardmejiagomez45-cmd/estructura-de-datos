// Cargar Header
fetch("./components/header/header.html")
.then(res => res.text())
.then(data => {
  document.getElementById("header").innerHTML = data;
});

// Cargar Footer
fetch("./components/footer/footer.html")
.then(res => res.text())
.then(data => {
  document.getElementById("footer").innerHTML = data;
});


// WEB COMPONENT
class ProductCard extends HTMLElement {

  connectedCallback(){

    const nombre = this.getAttribute("nombre");
    const precio = this.getAttribute("precio");
    const descripcion = this.getAttribute("descripcion");

    this.innerHTML = `
      <div class="card">
        <h3>${nombre}</h3>
        <p>${descripcion}</p>
        <strong>$${precio}</strong>
      </div>
    `;
  }

}

customElements.define("product-card", ProductCard);


// ARRAY DE PRODUCTOS
const productos = [
  {
    nombre: "Laptop",
    precio: 2500,
    descripcion: "Laptop para trabajo"
  },
  {
    nombre: "Mouse",
    precio: 50,
    descripcion: "Mouse inalámbrico"
  },
  {
    nombre: "Teclado",
    precio: 120,
    descripcion: "Teclado mecánico"
  }
];


// MOSTRAR PRODUCTOS
const catalogo = document.getElementById("catalogo");

productos.forEach(producto => {

  const card = document.createElement("product-card");

  card.setAttribute("nombre", producto.nombre);
  card.setAttribute("precio", producto.precio);
  card.setAttribute("descripcion", producto.descripcion);

  catalogo.appendChild(card);

});