document.getElementById("Registrarse").addEventListener("click", function(event){
    // Evita el comportamiento predeterminado del botón de enviar (enviar el formulario)
    event.preventDefault();

    // Recoger los valores de los campos del formulario
    const nombre = document.querySelector("#nombre input").value.trim();
    const email = document.querySelector("#email input").value.trim();
    const password = document.querySelector("#password input").value.trim();
    const tel = document.querySelector("#tel input").value.trim();
    const fecha = document.querySelector("#fecha input").value.trim();

    // Validaciones
    if (nombre === "") {
        alert("¡Por favor ingresa tu nombre!");
    } else if (email === "") {
        alert("El correo no puede estar vacío.");
    } else if (!email.includes("@")) {
        alert("No es un correo válido.");
    } else if (password === "") {
        alert("¡Por favor ingresa una contraseña!");
    } else if (password.length < 6) {
        alert("La contraseña debe ser al menos de 6 caracteres.");
    } else if (fecha === "") {
        alert("¡Por favor ingresa tu fecha de nacimiento!");
    } else if (tel === ""){
        alert("Coloca tu telefono");
    } else {
        alert("Registro completo, ¡bienvenido " + nombre + "!");
    }
});
