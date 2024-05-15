// JAVASCRIPT PARA LA PAGINA DE INICIO
// JavaScript para controlar el carrusel de noticias
document.addEventListener('DOMContentLoaded', function() {
    const noticias = document.querySelectorAll('.noticia');
    let indiceNoticiaActual = 0;

    function mostrarNoticia(indice) {
        noticias.forEach((noticia, i) => {
            if (i === indice) {
                noticia.style.display = 'block';
            } else {
                noticia.style.display = 'none';
            }
        });
    }

    function mostrarNoticiaSiguiente() {
        if (indiceNoticiaActual < noticias.length - 1) {
            indiceNoticiaActual++;
        } else {
            indiceNoticiaActual = 0;
        }
        mostrarNoticia(indiceNoticiaActual);
    }

    function mostrarNoticiaAnterior() {
        if (indiceNoticiaActual > 0) {
            indiceNoticiaActual--;
        } else {
            indiceNoticiaActual = noticias.length - 1;
        }
        mostrarNoticia(indiceNoticiaActual);
    }

    mostrarNoticia(indiceNoticiaActual);

    const botonSiguiente = document.querySelector('.siguiente');
    const botonAnterior = document.querySelector('.anterior');

    botonSiguiente.addEventListener('click', mostrarNoticiaSiguiente);
    botonAnterior.addEventListener('click', mostrarNoticiaAnterior);
});



const formularioReporte = document.getElementById('formulario-reporte');

formularioReporte.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const descripcion = document.getElementById('descripcion').value.trim();

    if (nombre === '' || correo === '' || descripcion === '') {
        alert('Por favor, complete todos los campos antes de enviar el formulario.');
        return;
    }

    // Aquí podrías agregar código para enviar los datos del formulario al servidor, por ejemplo, mediante AJAX
    alert('El formulario se envió correctamente.');
    formularioReporte.reset();
});