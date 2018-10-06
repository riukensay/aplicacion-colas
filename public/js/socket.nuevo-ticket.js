var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', () => {
    console.log('Conectado al server');
});

socket.on('disconnect', () => {
    console.log('Desconectado del server');
});

socket.on('estadoActual', (ticketActual) => {
    label.text(ticketActual.actual);
});

$('button').on('click', () => {
    socket.emit('siguienteTicket', null, (siguienteTicket) => {
        label.text(siguienteTicket);
    });
});