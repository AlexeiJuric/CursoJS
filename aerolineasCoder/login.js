document.getElementById("login").addEventListener("click",() => { 
    //Obtenemos los valores del html.
    var username = document.getElementById("username").value.toUpperCase();
    var clave = document.getElementById("key").value;

    //Si el id existe en el localStorage vamos a comprobar la clave
    if (username in localStorage) {
        //Si la clave coincide le permitimos el acceso.
        if (clave == localStorage.getItem(username)) {
            //setUsuarioActual(username);
            location.href="panel.html";
        } else {
            swal("La contraseña no es correcta!", "Pruebe otra vez...", "error");
        }
    } else { 
        //Si el username no se encuentra, le preguntamos si quiere agregarlo.
        var answer = confirm("Su Id y pass no se encuentran registrado desea guardarlos");
        if (answer) {
            localStorage.setItem(username,clave);
            //createUsuario(username, []);
            document.getElementById("username").value = "";
            document.getElementById("key").value = "";
        }
    }
})
