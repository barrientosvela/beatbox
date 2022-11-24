var user = JSON.parse(localStorage.getItem('user'));
$("#userPass").css("display", "none")
$("#c1")

$(document).ready(function () {
    if (localStorage != "") {
        if (confirm("¿Quiere entrar en la sesión anterior?")){
            $("#userPass").css({"display" : "block", "width" : "40%"})
            $("#titulo").append("Ya hay un usuario registrado en este equipo")
        }else{
            window.location.href = "../index.html"; 
        }
    }
});

$(".btn-registro").click(() => {
    $(location).attr('href', 'html/registro.html')
});
