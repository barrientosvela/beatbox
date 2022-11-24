var user = JSON.parse(localStorage.getItem('user'));

$(document).ready(function () {
    if (localStorage) {
        if (user.precio != 0) {
            window.location.href = "../html/premium.html";
        } else {
            window.location.href = "../html/normal.html";
        }
    }
});
$("#titulo").append("Hola "+user.nombre);

$(".btn-registro").click(() => {
    $(location).attr('href', 'html/registro.html')
});
