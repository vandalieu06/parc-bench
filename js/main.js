// Menú hamburguesa para mobile
document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.header');
  var nav = document.querySelector('.nav-links');
  var btn = document.querySelector('.header .btn-primary');

  var hamburger = document.createElement('button');
  hamburger.innerHTML = '<span></span><span></span><span></span>';
  hamburger.className = 'hamburger';
  hamburger.setAttribute('aria-label', 'Menú');
  header.querySelector('.container').insertBefore(hamburger, nav);

  hamburger.addEventListener('click', function () {
    nav.classList.toggle('nav-open');
    hamburger.classList.toggle('hamburger-active');
  });
});

// ERROR #17: Validación del formulario con mensajes de error vagos
(function () {
  var form = document.querySelector('.register-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var message = document.getElementById('form-message');

    // ERROR #17: Mensaje de error genérico sin especificar qué campo falla
    var nombre = document.getElementById('nombre');
    var correo = document.getElementById('correo');
    var contrasena = document.getElementById('contrasena');

    if (!nombre.value || !correo.value || !contrasena.value) {
      message.className = 'form-message error';
      // ERROR #17: Mensaje vago - no indica qué campos faltan ni qué formato se espera
      message.textContent = 'Error: Datos inválidos. Por favor, revise el formulario.';
      return;
    }

    if (correo.value.indexOf('@') === -1) {
      message.className = 'form-message error';
      message.textContent = 'Error: Datos inválidos. Por favor, revise el formulario.';
      return;
    }

    message.className = 'form-message success';
    message.style.display = 'block';
    message.textContent = 'Registro completado con éxito. Bienvenido a ParcBench!';
  });
})();
