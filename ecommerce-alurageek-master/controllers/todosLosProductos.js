import { productosServices } from "../service/productos-service.js";
console.log(productosServices);

const nuevoProducto = (id, nombre, precio, url) =>{

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
  
 var productos = document.querySelector("[datosProductos]");
  
  const render = async () =>{
    try {
      
      const listaProductos = await productosServices.leerProductos();
      listaProductos.forEach(elemento => {  
        productos.appendChild(nuevoProducto(elemento.id, elemento.nombre, elemento.precio, elemento.url));
      });
  
    } catch (error) {
      console.log(error);
    }
  }
  
  render();