// si no especificamos de donde tiene que hacer la connexion: io(http://localhost:port),
// por defecto toma la actual del servidor
const socket = io({
    // auth: guardar datos personalizados por socket (por usuario conectado)
    // el auth envia y guarda informacion que siempre esta enlazada a todas las peticiones
    // serverOffset: (marca de posicion que genera el servidor)
    // y podemos pasarlo al emitirlo
    auth: {
        serverOffset: 0
    }
});

const form = document.getElementById('form')
const input = document.getElementById('input')
const messages  = document.getElementById('messages')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (input.value) {
        // 1. cliente: enviamos mensaje
        // envío de mensaje desde el cliente al servidor
        socket.emit('chat message', input.value)
        input.value = ''
    }
})

// 2. clientes: recibe mensaje de parte del servidor y lo mostramos
// envío de mensaje desde el servidor a clientes
socket.on('chat message', ({content, id, date}) => {
    const item = `<li>
        <p>${content}</p>
        <small>${date}</small>
      </li>`;
    messages.insertAdjacentHTML('beforeend', item)
    // al recibir un nuevo mensaje sabe donde quedo el último mensaje
    socket.auth.serverOffset = id
    // scroll to bottom of messages
    messages.scrollTop = messages.scrollHeight
})
