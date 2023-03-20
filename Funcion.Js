// Seleccionar todos los enlaces de la barra de iconos
const enlaces = document.querySelectorAll('.barra_iconos a');

// Añado el "evento click" a cada enlace
enlaces.forEach(enlace => {
  enlace.addEventListener('click', e => {
    // Prevengo el comportamiento predeterminado del enlace
    e.preventDefault();

    // Obtener la sección objetivo del enlace
    const seccionObjetivo = enlace.getAttribute('href');

    // Desplazarse hacia la referencia
    document.querySelector(seccionObjetivo).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// Obtener los enlaces dentro de la barra de iconos
const link = document.querySelectorAll('.barra_iconos a');

// Iterar sobre cada enlace
link.forEach(function(enlace) {
  // Evento que detecta click en el enlace
  enlace.addEventListener('click', function() {
    // Remover clase activa
    link.forEach(function(enlace) {
      enlace.classList.remove('active');
    });
    // Agregar nueva clase la hacer click
    this.classList.add('active');
  });
});
