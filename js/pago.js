var user = JSON.parse(localStorage.getItem('user'));
let p = user.precio
let dolar=p*1.1

$("#nombre").append(user.nombre)
$("#ape").append(user.apellidos)
$("#dni").append(user.dni)
$("#email").append(user.email)
$("#tlf").append(user.telefono)
$("#user").append(user.usuario)
$("#pass").append(user.contrasenia.replace(/./g, '*'))
$("#iban").append('Terminada en ' + user.iban.substring(user.iban.length - 4, user.iban.length))
$("#precio").append(p+"€")
$("#moneda").click(()=>{
    if($("#moneda").attr("src") == "../images/euro.png"){        
        $("#moneda").attr("src", "../images/dollar.png");
        $("#precio").empty()
        $("#precio").append(dolar.toFixed(2)+"$")
    }else{
        $("#moneda").attr("src", "../images/euro.png");
        $("#precio").empty()
        $("#precio").append(p.toFixed(2)+"€")
    }
})


$("#atras").click(() => {
    if (confirm("Se perdera el progreso")) {
        localStorage.removeItem('user');
        window.location.href = "../index.html";
    }
})
$("#imgPago").click(() => {
    window.location.href = "/html/userFinal.html";
})
