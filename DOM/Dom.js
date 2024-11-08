//Cuando buscamos modificar un valor de un input html, generalmente utilizamos la 
/* const inputOne= document.getElementById("inputText").value; */


// La estructura de como interactuamos con el Dom en el JS es la siguiente
// 1) La palabra reservada es: document
// 2) Utilizamos el metodo/Api -> getElementById()  que pertenece al document 
// #) Utilizamos el atributo del elemento que en este caso, conocemos previamnete que es un input
//Por este conocimiento previo value.

document.getElementById("registrarse").addEventListener("click", function () {

    const nombre = document.querySelector("#nombre input").value.trim();

    const password = document.querySelector("#password input").value.trim();

  /*   const invalid = document.querySelector("#msj input").value.trim(); */

    if (nombre === "") {

        alert("Por favor ingresa tu nombre, este campo no puede quedar vacio");

    } else if (password === "") {

        alert ("Contraseña incorrecta");

    } else if (password.length >= 8){

        const mensaje = document.getElementById("msj");
        mensaje.style.display="none"; //puede ser "block"

    }else{

            alert("Registrocompleto" + nombre + "!");

        }

});