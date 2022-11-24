var user = JSON.parse(localStorage.getItem('user'));

$("#nombre").append(user.nom)
$("#dni").append(user.dni)
$("#dni").append(user.dni)
$("#pass").append(user.contrasenia.replace(/./g, '*'))
$("#iban").append('que termina en '+user.iban.substring(user.iban.length-3,user.iban.length))
$("#precio").append(user.precio+" euro")


$("#atras").click(()=>{
    if(confirm("Se perdera el progreso")){
        window.location.href = "../index.html";
    }
})