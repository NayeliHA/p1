// Seleccionar todas las secciones
const secciones = document.querySelectorAll("section");

// Recorremos cada sección y le damos animación al pasar el cursor
secciones.forEach(seccion => {
  seccion.addEventListener("mouseenter", () => {
    seccion.classList.add("hover-animado");
  });

  seccion.addEventListener("mouseleave", () => {
    seccion.classList.remove("hover-animado");
  });
});

// Extra: botón de contacto con alerta kawaii 💖
const contactoBtn = document.getElementById("contactoBtn");
if (contactoBtn) {
  contactoBtn.addEventListener("click", () => {
    alert("💌 Gracias por querer contactarme! Pronto estaré en contacto contigo 🌸✨");
  });
}
