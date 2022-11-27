
const apeExp = new RegExp("^[a-zA-Z ]{4,50}$");
const dniExp = new RegExp("^[0-9]{8}[- ]?[A-Z]{1}$");
const emailExp = new RegExp("^[a-zA-Z0-9]{1,64}\\S+@\\D\\S+\\.\\D\\S+$");
const tlfExp = new RegExp("^[0-9]{3}[\\s-]?[0-9]{3}[\\s-]?[0-9]{3}$");
const userExp = new RegExp("^[A-Za-z0-9]+$");
const ibanExp = new RegExp("^[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9 ]{4}[0-9 ]{7}([a-zA-Z0-9 ]?){0,16}$");
const nombreExp = new RegExp("^[a-zA-Z]{4,15}$");

var valido = false;

$("#nombre").blur(() => {
    let nombre = $("#nombre").val();

    if (!nombreExp.test(nombre)) {
        $("#checkNombre").prop("src", "../images/equis.png");
    } else {
        $("#checkNombre").prop("src", "../images/check.png");
        valido++;
    }
});

$("#apellidos").blur(() => {
    let apellidos = $("#apellidos").val();

    if (!apeExp.test(apellidos)) {
        $("#checkApellidos").prop("src", "../images/equis.png");
    } else {
        $("#checkApellidos").prop("src", "../images/check.png");
        valido++;
    }
});
$("#dni").blur(() => {
    let dni = $("#dni").val();

    if (!dniExp.test(dni)) {
        $("#checkDNI").prop("src", "../images/equis.png");
    } else {
        $("#checkDNI").prop("src", "../images/check.png");
        valido++;
    }
});
$("#email").blur(() => {
    let email = $("#email").val();

    if (!emailExp.test(email)) {
        $("#checkEmail").prop("src", "../images/equis.png");
    } else {
        $("#checkEmail").prop("src", "../images/check.png");
        valido++;
    }
});
$("#tlf").blur(() => {
    let tlf = $("#tlf").val();

    if (!tlfExp.test(tlf)) {
        $("#checkTlf").prop("src", "../images/equis.png");
    } else {
        $("#checkTlf").prop("src", "../images/check.png");
        valido++;
    }
});
$("#derecha1").click(() => {
    if (valido >= 5) {
        $("#datosPers").fadeOut(() => {
            $("#credenciales").fadeIn(1000);
        });
    }
});
$("#usuario").blur(() => {
    let usuario = $("#usuario").val();

    if (!userExp.test(usuario)) {
        $("#checkUser").prop("src", "../images/equis.png");
    } else {
        $("#checkUser").prop("src", "../images/check.png");
        valido++;
    }
});
$("#password1").blur(() => {
    let contrasenia = $("#password1").val();

    if (!userExp.test(contrasenia)) {
        $("#checkPass").prop("src", "../images/equis.png");
    } else {
        $("#checkPass").prop("src", "../images/check.png");
        valido++;
    }
});
$("#password2").blur(() => {
    let contrasenia1 = $("#password1").val();
    let contrasenia2 = $("#password2").val();
    if (contrasenia1 != contrasenia2) {
        $("#checkPass2").prop("src", "../images/equis.png");
    } else {
        $("#checkPass2").prop("src", "../images/check.png");
        valido++;
    }
});

$("#atras1").click(() => {
    $("#credenciales").fadeOut(() => {
        $("#datosPers").fadeIn(1000);
    });
});
$("#derecha2").click(() => {
    if (valido >= 8) {
        $("#credenciales").fadeOut(() => {
            $("#cuenta").fadeIn(1000);
        });
    }
});


$("#iban").blur(() => {
    let iban = $("#iban").val();

    if (!ibanExp.test(iban)) {
        $("#checkIban").prop("src", "../images/equis.png");
    } else {
        $("#checkIban").prop("src", "../images/check.png");
        var entidad_bancaria = iban.substring(4, 8);
        var swift = genera_swift(entidad_bancaria);
        var swiftinput = document.getElementById("swift");
        swiftinput.value = swift;
        valido++;
    }
});

$("#atras2").click(() => {
    $("#cuenta").fadeOut(() => {
        $("#credenciales").fadeIn(1000);
    });
});
$("#derecha3").click(() => {
    if (valido >= 9) {
        $("#cuenta").fadeOut(() => {
            $("#subscricion").fadeIn(1000);
        });
    }
});

$("#atras3").click(() => {
    $("#subscricion").fadeOut(() => {
        $("#cuenta").fadeIn(1000);
    });
});

$("#enviar").click(function () {
    // si campos correctos crea objeto y lo guarda en localstorage
    if (precio != -1) {
        let nom = $("#nombre").val();
        let apellidos = $("#apellidos").val();
        let dni = $("#dni").val();
        let email = $("#email").val();
        let tlf = $("#tlf").val();
        let usuario = $("#usuario").val();
        let contrasenia = $("#password1").val();
        let iban = $("#iban").val();

        var user = {
            'nombre': nom,
            'apellidos': apellidos,
            'dni': dni,
            'email': email,
            'telefono': tlf,
            'usuario': usuario,
            'contrasenia': contrasenia,
            'iban': iban,
            'precio': precio
        }
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = "../html/pago.html";
    } else {
        alert("Debe elegir una subscripción");
    }
});
