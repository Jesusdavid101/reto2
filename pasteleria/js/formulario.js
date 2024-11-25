const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !correo || !mensaje) {
        event.preventDefault();
        alert("Todos los campos son obligatorios.");
        return;
    }

    if (!/\S+@\S+\.\S+/.test(correo)) {
        event.preventDefault();
        alert("Por favor, introduce un correo válido.");
        return;
    }

    alert("Formulario enviado con éxito.");
});
