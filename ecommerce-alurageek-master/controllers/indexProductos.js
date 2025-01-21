import { productosServices } from "../service/productos-service.js";
console.log(productosServices);

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

var productos;

const render = async () =>{
  try {
    
    const listaProductos = await productosServices.leerProductos();
    listaProductos.forEach(elemento => {      
        if(elemento.categoria == "Aventura"){
          productos = document.querySelector("[datosAventura]");
        }else if(elemento.categoria == "Romance"){
          productos = document.querySelector("[datosRomance]");
        }else if(elemento.categoria == "Clásicos"){
          productos = document.querySelector("[datosClasicos]");
        }else{
          console.log("Categoría inexistente")
        }      
      productos.appendChild(nuevoProducto(elemento.nombre, elemento.precio, elemento.url, elemento.id));
    });

  } catch (error) {
    console.log(error);
  }
}

render();


