var user = JSON.parse(localStorage.getItem('user'));

$(document).ready(function () {
    if (localStorage.length != 0) {
        if (confirm("¿Quiere entrar con el usuario anterior?")){
            $("#userPass").css("display" , "block")
            $("#btn-registro").css("display", "none")
            $("#btn-accede").click(() => {
                if($("#user").val() == user.usuario && $("#pass").val() == user.contrasenia){
                    $(location).attr('href', 'html/userFinal.html')
                }else{
                    $("#btn-registro").css("display", "none")
                    $("#alert").append("Usuario o contraseña incorrecto")
                }
            })
        }else{
            $("#userPass").css("display" , "none")
        }
    }
});

$(".btn-registro, #btn-reg").click(() => {
    $(location).attr('href', 'html/registro.html')
});
