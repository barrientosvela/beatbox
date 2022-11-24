var user = JSON.parse(localStorage.getItem('user'));

if (user.precio == 0) {
    $("#titulo").append("Hola " + user.nombre + " eres Principiante");
} else {
    if (user.precio == 10) {
        $("#titulo").append("Hola " + user.nombre + " eres Avanzado");
    } else {
        $("#titulo").append("Hola " + user.nombre + " eres Profesional");
    }
}

