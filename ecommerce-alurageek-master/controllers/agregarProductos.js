import { productosServices } from "../service/productos-service.js";

const inputnombre = document.querySelector("[dataNombre]");
const inputcategoria = document.querySelector("[dataCategoria]");
const inputprecio = document.querySelector("[dataPrecio]");
const inputurl = document.querySelector("[dataUrl]");
const inputdescripcion = document.querySelector("[dataDescripcion]");
const formulario = document.querySelector("[data-form]");
var estado = false;
var txtNombre="";
var txtCategoria="";
var txtPrecio="";
var txtUrl="";
var txtDescripcion="";

const validaCampo = (expresion, input, campo) => {
    if(expresion.test(input)){      
        estado = true;
    }else{        
        estado = false;
    }
    return estado;
}

const expresiones = {
    /* SE CREAN EXPRESIONES REGULARES PARA VALIDAR CADA CAMPO */
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Se aceptan caracteres solo letras, minimo 3 y maximo 40
    precio: /^[0-9-$\s]{3,12}$/,
    url:/^[\s\S]{0,100}$/, // Se aceptan Todos los caracteres hasta 100.
    categoria: /^[a-zA-ZÀ-ÿ\s]{3,12}$/, // Se aceptan caracteres solo letras, de entre 3 y 40 caracteres
    descripcion: /^[a-zA-ZÀ-ÿ0-9\s]{3,400}$/ // Se aceptan letras y numeros y un mensaje maximo de 400 caracteres
}

function valida(event){
    event.preventDefault();
    txtNombre = inputnombre.value;
    txtCategoria = inputcategoria.value;
    txtPrecio = inputprecio.value;
    txtUrl = inputurl.value;
    txtDescripcion = inputdescripcion.value;
    validaCampo(expresiones.url,txtUrl,inputurl);    
    if(estado){
        validaCampo(expresiones.categoria,txtCategoria,inputcategoria);        
        if(estado && (txtCategoria == "Aventura" || txtCategoria == "Romance" || txtCategoria == "Clásicos")){
            validaCampo(expresiones.nombre,txtNombre,inputnombre);
            if(estado){
                validaCampo(expresiones.precio,txtPrecio,inputprecio);                
                if(estado){
                    validaCampo(expresiones.descripcion,txtDescripcion,inputdescripcion);                    
                if(estado){
                    console.log(txtNombre+txtCategoria+txtPrecio+txtPrecio+txtDescripcion);
                    registroProducto();
                }else{
                    alert("Error último campo Solo letras");
                    inputdescripcion.focus();
                }
            }else{
                alert("Error cuarto campo solo numeros y signo pesos");
                inputprecio.focus();
            }
            }else{
                alert(" Error tercer campo solo ingresar letras y numeros");
                inputnombre.focus();
            }
        }else{
            alert("Error segundo campo solo ingresar letras y/o categorías existentes Aventura, Romance o Clásicos ");
            inputcategoria.focus();
        }
    }else{
        alert("Error primer campo todos los caracteres hasta 100");
        inputurl.focus();
    }
}


formulario.addEventListener("submit",valida);

function registroProducto(){    
    const nombre = document.querySelector("[dataNombre]").value;
    const categoria = document.querySelector("[dataCategoria]").value;
    const precio = document.querySelector("[dataPrecio]").value;
    const url = document.querySelector("[dataUrl]").value;
    const descripcion = document.querySelector("[dataDescripcion]").value;
    console.log(nombre," - ", categoria," - ", precio," - ", url," - ", descripcion);
    productosServices.crearProducto(nombre, categoria, precio, url, descripcion).then( respuesta => {
           window.location.href ="../pantallas/registro_completado.html"     
    }).catch(err => console.log(err));
};
