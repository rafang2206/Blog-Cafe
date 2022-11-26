const cliente = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const {nombre, email, mensaje} = cliente;
    if(nombre === "" || email === "" || mensaje === ""){
        mensajeAlert('no haz llenado correctamente el formulario', 'error')
        return;
    }

    mensajeAlert('formulario enviado', 'enviado');
});


function leerTexto(e){
    cliente[e.target.id] = e.target.value;
    console.log(cliente);
}


function mensajeAlert(mensaje, style){
    const alert = document.createElement('P');
    alert.textContent = mensaje;
    alert.classList.add(style);
    formulario.appendChild(alert);
    setTimeout(() =>{
        alert.remove();
    }, 3000);
};