const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value;
    const source = document.querySelector('input[name="source"]:checked').value;
    const message = document.getElementById('message').value.trim();

    // Validación básica
    if (name === '' || email === '' || subject === '' || message === '') {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }

    // Validación de correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, ingresa una dirección de correo electrónico válida.');
        return;
    }

    // Si todo está correcto, puedes enviar el formulario o realizar alguna otra acción
    alert('¡Formulario enviado correctamente!');
    form.reset(); // Reinicia el formulario después de enviar
});