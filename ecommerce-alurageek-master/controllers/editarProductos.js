import { productosServices } from "../service/productos-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", async (evento) =>{
    evento.preventDefault();
    const dataurl = new URL(window.location);
    const id = dataurl.searchParams.get("id");

    const nombre = document.querySelector("[dataNombre]").value;
    const categoria = document.querySelector("[dataCategoria]").value;
    const precio = document.querySelector("[dataPrecio]").value;
    const url = document.querySelector("[dataUrl]").value;
    const descripcion = document.querySelector("[dataDescripcion]").value;  

    try {
       await productosServices.actualizarProducto(id, nombre, categoria, precio, url, descripcion);       
       if(id && nombre && categoria && precio && url && descripcion){
         window.location.href = "/pantallas/edicion_concluida.html"
       }else{
        throw new Error();
       }        
    } catch (error) {
        alert("Se ha producido el error",error);
    }
})

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    if(id == null){
       window.location.href = "/pantallas/error.html"
    }
    const nombre = document.querySelector("[dataNombre]");
    const categoria = document.querySelector("[dataCategoria]");
    const precio = document.querySelector("[dataPrecio]");
    const dataurl = document.querySelector("[dataUrl]");
    const descripcion = document.querySelector("[dataDescripcion]"); 

    try {
        const producto = await productosServices.detalleProducto(id);
        if(producto.nombre, producto.categoria, producto.precio, producto.url, producto.descripcion){
        nombre.value = producto.nombre;
        categoria.value = producto.categoria;
        precio.value = producto.precio;
        dataurl.value = producto.url;
        descripcion.value = producto.descripcion;
    }else{
        throw new Error();
    }        
    } catch (error) {   
        window.location.href = "/pantallas/error.html";
    }
};


obtenerInformacion();