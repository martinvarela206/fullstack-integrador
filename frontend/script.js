const form = document.getElementById('contactForm');
const imageInput = document.getElementById('image');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value;
    const source = document.querySelector('input[name="source"]:checked').value;
    const message = document.getElementById('message').value.trim();
    const imageFile = imageInput.files[0]; // Obtener el archivo seleccionado

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

    // Validación de la imagen
    if (imageFile) {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (!allowedTypes.includes(imageFile.type)) {
            alert('Por favor, selecciona un archivo de imagen válido (JPEG, PNG o GIF).');
            return;
        }
    }

    // Si todo está correcto, puedes enviar el formulario o realizar alguna otra acción
    alert('¡Formulario enviado correctamente!');
    form.reset();
});