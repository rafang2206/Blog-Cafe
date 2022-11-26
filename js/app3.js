
const cliente = {
    nombre: '',
    email: '',
    mensaje: ''
}

const formulario = document.querySelector('.formulario');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', clienteValidacion);
email.addEventListener('input', clienteValidacion);
mensaje.addEventListener('input', clienteValidacion);

formulario.addEventListener('submit', e => {
    e.preventDefault();
    const { nombre, email, mensaje} = cliente;
    if(nombre === "" || email === "" || mensaje === ""){
        mensajeAlerta('debes llenar los datos', 'error');
        return;
    }
    mensajeAlerta('asdasd', 'enviado')
});


function clienteValidacion(e) {
    cliente[e.target.id] = e.target.value;
    console.log(cliente)
}

function mensajeAlerta(mensaje, style){
    const parrafo = document.createElement('P');
    parrafo.textContent = mensaje;
    parrafo.classList.add(style)
    formulario.appendChild(parrafo);
    setTimeout(() => {
        parrafo.remove();
    }, 3000);
    
}

