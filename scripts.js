// Función para cambio de tema
const toggleTheme = () => {
    document.body.classList.toggle('dark-mode');
};

// Función para manejar el envío del formulario
document.getElementById('formulario-contacto').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Formulario enviado correctamente');
});