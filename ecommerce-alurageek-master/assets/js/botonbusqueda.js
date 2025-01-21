const botonbusqueda = document.querySelector('.barradebusqueda__boton');
const busqueda = document.querySelector('.barradebusqueda__input');

const searchProduct = () => {
    if(busqueda.value){
        window.location.href = `busqueda.html?search=${busqueda.value}`;
    }
}

botonbusqueda.addEventListener('click', searchProduct);
busqueda.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        searchProduct();
    }
});

