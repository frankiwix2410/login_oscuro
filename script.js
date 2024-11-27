function mostrarDatos() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (nombre && apellido && username && email && password) {
        alert(`Nombre: ${nombre}\nApellido: ${apellido}\nUsuario: ${username}\nCorreo: ${email}`);
    } else {
        alert("Por favor, completa todos los campos.");
    }

    return false; // Previene que el formulario se envíe y se recargue la página
}

function toggleModoOscuro() {
    document.body.classList.toggle("dark-mode");
}
