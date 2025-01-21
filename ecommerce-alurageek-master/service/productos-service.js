
const leerProductos = () => fetch(" https://fake-server-json-alura.herokuapp.com/productos").then( respuesta => respuesta.json());

const crearProducto =(nombre, categoria, precio, url, descripcion) =>{
  return fetch("https://fake-server-json-alura.herokuapp.com/productos",{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({id: uuid.v4(), nombre, categoria, precio, url, descripcion})
  })
  .then(respuesta =>{
    if(respuesta.ok){
      return respuesta.body;
    }
    throw new Error('No fue posible crear el producto')
  })
}

const eliminarProductos = (id) =>{
  console.log("Eliminar a ---->",id);
  return fetch(`https://fake-server-json-alura.herokuapp.com/productos/${id}`,{
    method:"DELETE"
  })
}

const detalleProducto = (id) =>{
  return fetch(`https://fake-server-json-alura.herokuapp.com/productos/${id}`).then(respuesta => 
  respuesta.json()
  );
}
const actualizarProducto = ( id, nombre, categoria, precio, url, descripcion) =>{
  return fetch(`https://fake-server-json-alura.herokuapp.com/productos/${id}`,{
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ id, nombre, categoria, precio, url, descripcion })
})
  .then(respuesta => respuesta)
  .catch(err => console.log(err));
}

export const productosServices = {
  leerProductos,
  crearProducto,
  eliminarProductos,
  detalleProducto,
  actualizarProducto,
};