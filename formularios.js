document.getElementById("registrarse").addEventListener("click", function(){
    const nombre = document.querySelector("#nombre input").value.trim();
    const email = document.querySelector("#email input").value.trim();
    const password = document.querySelector("#password input").value.trim();
    const tel = document.querySelector("#tel input").value.trim();
    const fecha = document.querySelector("#fecha input").value.trim();

    if(nombre==="") {
        alert("Porfavor ingresa tu nombre!");
    
    } else if (email==="") {
        alert("Correo no aceptado");
   
    }else if (!email.includes("@")){
        alert("No es un correo valido");
   
    }else if (password ===""){
        alert ("Contraseña incorrecta");
    
    }else if (password.lenght < 6){
        alert("La contraseña no es segura");
   
    }else if (fecha===""){
        alert("No hay fecha de nacimiento");
   
    }else {
        alert("Registro completo" + nombre + !);
    }
});