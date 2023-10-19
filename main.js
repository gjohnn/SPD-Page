// Obtén una referencia al botón de volver al inicio
var scrollToTopButton = document.getElementById("btnScrollToTop");

// Agrega un controlador de eventos para el evento "scroll" de la ventana
window.onscroll = function() {
  // Verifica la posición de desplazamiento vertical actual
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // Si el usuario ha desplazado más allá de 20 píxeles, muestra el botón
    scrollToTopButton.style.display = "block";
  } else {
    // De lo contrario, oculta el botón
    scrollToTopButton.style.display = "none";
  }
};

// Agrega un controlador de eventos para el clic en el botón de volver al inicio
scrollToTopButton.onclick = function() {
  // Haz scroll hacia la parte superior de la página suavemente
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Esto proporciona un desplazamiento suave
  });
};