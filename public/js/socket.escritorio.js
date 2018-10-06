var socket = io();

var searchParams = new URLSearchParams(window.location.search);
var label = $('small');

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('el escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');

console.log(escritorio);

$('h1').text(`Escritorio ${escritorio}`);

$('button').on('click', () => {
    socket.emit('atenderTicket', { escritorio: escritorio }, (resp) => {
        if (resp == 'no hay tickets') {
            label.text('No hay mas tickets');
            alert(resp);
            return
        }
        label.text(`Ticket ${resp.numero}`);
    });
});