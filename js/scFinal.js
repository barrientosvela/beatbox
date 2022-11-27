var user = JSON.parse(localStorage.getItem('user'));

if (user.precio == 0) {
    $("#titulo").append("Hola " + user.nombre + " eres Principiante").css({"text-align" : "center", "margin" : "100px"});
} else {
    if (user.precio == 2.99) {
        $("#titulo").append("Hola " + user.nombre + " eres Avanzado").css({"text-align" : "center", "margin" : "100px"});
    } else {
        $("#titulo").append("Hola " + user.nombre + " eres Profesional").css({"text-align" : "center", "margin" : "100px"});
    }
}

