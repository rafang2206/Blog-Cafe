const cliente = {
    nombre: '',
    email: '',
    mensaje: ''
};

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

formulario.addEventListener('submit', e => {
    e.preventDefault();
    const {nombre, email, mensaje} = cliente;
    if(nombre === "" || email === "" || mensaje === ""){
        mensajeAlerta('datos incompletos', 'error');
        return;
    }
    mensajeAlerta('formulario enviado', 'enviado')
});

function leerTexto(e){
    cliente[e.target.id] = e.target.value;
    console.log(cliente)
}

function mensajeAlerta(mensaje, style) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add(style);
    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 2000)

}