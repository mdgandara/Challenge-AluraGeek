import { productosServices } from "../service/productos-service.js";

console.log(productosServices);

const Producto = (nombre, categoria, precio, url, descripcion) =>{

    const producto = document.createElement("div");
    const contenido =`  
    <img src="${url}" class="detallesImg" alt="" onerror="imgErrorHTML(this)"></img>
    <div class="detallesContenido">
        <p class="detallesCategoria">Categoria: ${categoria}</p>
        <h2 class="detallesProducto">${nombre}</h2>
        <h3 class="detallesPrecio">${precio}</h3>
        <P class="detallesDescripcion--titulo">Descripción del producto:</P>
        <p class="detallesDescripcion--descripcion">${descripcion}Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam soluta sint blanditiis iusto libero autem corporis voluptates odit nisi esse aperiam excepturi, dicta quisquam dignissimos ab commodi corrupti nulla quidem dolorum unde, obcaecati ullam explicabo facilis. Maiores reiciendis amet quo pariatur quibusdam inventore minus molestias? Dolores quibusdam magnam delectus cupiditate?</p><br><br>
        <button class="detallesBoton">Tienda<i class="fa-solid fa-store"></i></button>
    </div>
    `;
    producto.innerHTML = contenido;
    producto.classList.add("detallesContenedor");
    const btn = producto.querySelector(".detallesBoton");
    btn.addEventListener("click", ()=>{
        window.location.href = "index.html"
    });   
    return producto;
  };
  
 var productos = document.querySelector("[datosProducto]");
  
  const render = async () =>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    try { 
       const producto = await productosServices.detalleProducto(id);
       console.log(producto);          
       productos.appendChild(Producto(producto.nombre, producto.categoria, producto.precio, producto.url, producto.descripcion));
      
    } catch (error) {
      console.log(error);
    }
  }
  
  render();