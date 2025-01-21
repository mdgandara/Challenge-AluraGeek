import { productosServices } from "../service/productos-service.js";

console.log(productosServices);

const nuevoProducto = (id, nombre, categoria, precio, url) =>{

    const tarjeta = document.createElement("div");
    const contenido =`  
    <img class="productosCard__imagen" src="${url}" alt="${categoria}" alt="" onerror="imgErrorHTML(this)">
    <div class="productosCard__contenido">
        <p class="productosCard__categoria">Categoría: ${categoria}</p>
        <h4 class="productosCard__titulo">${nombre}</h4>
        <p class="productosCard__descripcion">${precio}</p>
        <div class="productosCard__actions--box">
            <a class="productosCard__product-edit" href="editar-producto.html?id=${id}"><i class="fa-solid fa-pen-to-square"></i></a>
            <button id=${id} class="productosCard__product--delete"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    </div>
    `;
    tarjeta.innerHTML = contenido;
    tarjeta.classList.add("productosCard");
    const btn = tarjeta.querySelector("button");
    btn.addEventListener("click", ()=>{
      const id = btn.id;
      productosServices.eliminarProductos(id).then( respuesta =>{
        console.log(respuesta);
      }).catch(err => alert("Ocurrio un error",err));
    });   
    return tarjeta;
  };
  
 var productos = document.querySelector("[datosProductos]");
  
  const render = async () =>{
    try {      
      const listaProductos = await productosServices.leerProductos();
      listaProductos.forEach(({ id, nombre, categoria, precio, url}) => {  
        productos.appendChild(nuevoProducto(id, nombre, categoria, precio, url));
      });  
    } catch (error) {
      console.log(error);
    }
  }
  
  render();