import { productosServices } from "../service/productos-service.js";

var productos = document.querySelector("[datosBusqueda]"); 
const url = new URL(window.location);
var search = url.searchParams.get('search');

const title = document.querySelector('.productos__title');

title.textContent = `"${search}"`;
console.log(search);

const nuevoProducto = (nombre, precio, url, id) =>{

    const tarjeta = document.createElement("div");
    const contenido =`  
    <img class="productosCard__imagen" src="${url}" alt="" onerror="imgErrorHTML(this)">
    <div class="productosCard__contenido">
        <h4 class="productosCard__titulo">${nombre}</h4>
        <p class="productosCard__descripcion">${precio}</p>
        <a class="productosCard__ref" href="detalles-producto.html?id=${id}">Ver producto</a>
    </div>
    `;
    tarjeta.innerHTML = contenido;
    tarjeta.classList.add("productosCard");
    return tarjeta;
  };
  
 var productos = document.querySelector("[datosBusqueda]"); 
  
  const buscarProductos = async (search) =>{
    try {      
      const listaProductos = await productosServices.leerProductos();          
      findProducts(listaProductos, search); 
    } catch (error) {
      console.log(error);
    }
  }  

  const findProducts = (listaProductos, search) => {
    let coincidence = 0 ;
    listaProductos.forEach(product => {
        const nombre = product.nombre.toLowerCase();
        const categoria= product.categoria.toLowerCase();
        const regex = search.toLowerCase(); 
        if(nombre.includes(regex) || categoria.includes(regex)){
            showProduct(product);
            coincidence++;            
        }
    })
    if(coincidence == 0){
        noCoincidence();
    }
} 

const showProduct = (product) => {
  const card = nuevoProducto(product.nombre, product.precio, product.url, product.id);
  productos.appendChild(card);
};

const noCoincidence = () => {
  productos.innerHTML = `<div class="no-coincidence">
                              <i class="fa-brands fa-searchengin gigant-icon"></i>
                              <p>No se encontró ningún resultado que coincida con la búsqueda.</p>
                           </div>`;
}

buscarProductos(search);

  