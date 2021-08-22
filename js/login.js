//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    document.getElementById("loginBtn").addEventListener("click", function () {

        //Validación para que los campos del login no queden vacios
        let password = document.getElementById("inputPassword");
        let email = document.getElementById("inputEmail");
        let camposCompletos = true;

        if (email.value === "" && password.value !== "") {
            camposCompletos = false;
            alert("El campo de email no puede ir vacío");
            document.getElementById("inputEmail")
                .setAttribute("style", "border-color: #dc3545; box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);");
        } else {
            document.getElementById("inputEmail").removeAttribute("style");
        }

        if (password.value === "" && email.value !== "") {
            camposCompletos = false;
            alert("El campo de contraseña no puede ir vacío");
            document.getElementById("inputPassword")
                .setAttribute("style", "border-color: #dc3545; box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);");
        } else {
            document.getElementById("inputPassword").removeAttribute("style");
        }

        if (email.value === "" && password.value === "") {
            camposCompletos = false;
            alert("Debe ingresar un email y contraseña");
            document.getElementById("inputEmail")
                .setAttribute("style", "border-color: #dc3545; box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);");
            document.getElementById("inputPassword")
                .setAttribute("style", "border-color: #dc3545; box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);");
        }

        if (camposCompletos) {
            window.location = "homepage.html";
        }
    });
});