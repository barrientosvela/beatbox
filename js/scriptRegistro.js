const nombreExp = new RegExp("^[a-zA-Z]{4,15}$");
const apeExp = new RegExp("^[a-zA-Z ]{5,50}$");
const dniExp = new RegExp("^[0-9]{8}[- ]?[A-Z]{1}$");
const emailExp = new RegExp("^[a-zA-Z0-9]{1,64}\\S+@\\D\\S+\\.\\D\\S+$");
const tlfExp = new RegExp("^[0-9]{3}[\\s-]?[0-9]{3}[\\s-]?[0-9]{3}$");
const userExp = new RegExp("^[A-Za-z0-9]+$");
const ibanExp = new RegExp("^[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9 ]{4}[0-9 ]{7}([a-zA-Z0-9 ]?){0,16}$");

var valido = 0;

$("#nombre").blur(() => {
    let nombre = $("#nombre").val();

    if (!nombreExp.test(nombre)) {
        $("#checkNombre").prop("src", "../images/equis.png");
        valido--;
    } else {
        $("#checkNombre").prop("src", "../images/check.png");
        valido++;
    }
});
$("#apellidos").blur(() => {
    let apellidos = $("#apellidos").val();

    if (!apeExp.test(apellidos)) {
        $("#checkApellidos").prop("src", "../images/equis.png");
        valido--;
    } else {
        $("#checkApellidos").prop("src", "../images/check.png");
        valido++;
    }
});
$("#dni").blur(() => {
    let dni = $("#dni").val();

    if (!dniExp.test(dni)) {
        $("#checkDNI").prop("src", "../images/equis.png");
        valido--;
    } else {
        $("#checkDNI").prop("src", "../images/check.png");
        valido++;
    }
});
$("#email").blur(() => {
    let email = $("#email").val();

    if (!emailExp.test(email)) {
        $("#checkEmail").prop("src", "../images/equis.png");
        valido--;
    } else {
        $("#checkEmail").prop("src", "../images/check.png");
        valido++;
    }
});
$("#tlf").blur(() => {
    let tlf = $("#tlf").val();

    if (!tlfExp.test(tlf)) {
        $("#checkTlf").prop("src", "../images/equis.png");
        valido--;
    } else {
        $("#checkTlf").prop("src", "../images/check.png");
        valido++;
    }
});
$("#derecha1").click(() => {
    //if (valido == 5) {
        $("#datosPers").fadeOut(() => {
            $("#credenciales").fadeIn(1000);
        });
    //}
});
$("#usuario").blur(() => {
    let usuario = $("#usuario").val();

    if (!userExp.test(usuario)) {
        $("#checkUser").prop("src", "../images/equis.png");
        valido--;
    } else {
        $("#checkUser").prop("src", "../images/check.png");
        valido++;
    }
});
$("#password1").blur(() => {
    let contrasenia = $("#password1").val();

    if (!userExp.test(contrasenia)) {
        $("#checkPass").prop("src", "../images/equis.png");
        valido--;
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
        valido--;
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
    // if (valido == 5){
    $("#credenciales").fadeOut(() => {
        $("#cuenta").fadeIn(1000);
    });
    //}        
});

$("#iban").blur(() => {
    let iban = $("#iban").val();

    if (!ibanExp.test(iban)) {
        $("#checkIban").prop("src", "../images/equis.png");
        valido--;
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
    // if (valido == 5){
    $("#cuenta").fadeOut(() => {
        $("#subscricion").fadeIn(1000);
    });
    //}        
});

$("#atras3").click(() => {
    $("#subscricion").fadeOut(() => {
        $("#cuenta").fadeIn(1000);
    });
});

$("#plan1").click(()=> {
    $("#plan1img").css("border", "solid 5px red");
    $("#plan1back").css("border", "solid 5px red");
    $("#plan2img").css("border", "none");
    $("#plan2back").css("border", "none");
    $("#plan3img").css("border", "none");
    $("#plan3back").css("border", "none");
});
$("#plan2").click(()=> {
    $("#plan1img").css("border", "none");
    $("#plan1back").css("border", "none");
    $("#plan2img").css("border", "solid 5px red");
    $("#plan2back").css("border", "solid 5px red");
    $("#plan3img").css("border", "none");
    $("#plan3back").css("border", "none");
});
$("#plan3").click(()=> {
    $("#plan1img").css("border", "none");
    $("#plan1back").css("border", "none");
    $("#plan2img").css("border", "none");
    $("#plan2back").css("border", "none");
    $("#plan3img").css("border", "solid 5px red");
    $("#plan3back").css("border", "solid 5px red");
});

$("#enviar").click(function () {
    $("#cuenta").fadeOut(() => {
        $("#subscricion").fadeIn(1000);
    });
    // si campos correctos crea objeto y lo guarda en localstorage
    let nom = $("#nombre").val();
    var user = { 'nombre': nom }
        localStorage.setItem('user', JSON.stringify(user));
});

function genera_swift(entidad) {
    var swift = [];
    swift["0001"] = "BSABESBBXXX";
    swift["0003"] = "BDEPESM1XXX";
    swift["0004"] = "POPUESMMXXX";
    swift["0008"] = "BSABESBBXXX";
    swift["0009"] = "BBVAESMMXXX";
    swift["0010"] = "BBVAESMMXXX";
    swift["0013"] = "BSABESBBXXX";
    swift["0015"] = "BBVAESMMXXX";
    swift["0016"] = "BSCHESMMXXX";
    swift["0019"] = "DEUTESBBXXX";
    swift["0020"] = "BBVAESMMXXX";
    swift["0021"] = "BDEPESM1XXX";
    swift["0024"] = "POPUESMMXXX";
    swift["0029"] = "CSSOES2SXXX";
    swift["0030"] = "BSCHESMMXXX";
    swift["0031"] = "ETCHES2GXXX";
    swift["0035"] = "BBVAESMMXXX";
    swift["0036"] = "SABNESMMXXX";
    swift["0041"] = "CAIXESBBXXX";
    swift["0042"] = "BSABESBBXXX";
    swift["0043"] = "BSABESBBXXX";
    swift["0044"] = "BBVAESMMXXX";
    swift["0045"] = "BBVAESMMXXX";
    swift["0046"] = "GALEES2GXXX";
    swift["0049"] = "BSCHESMMXXX";
    swift["0050"] = "BBVAESMMXXX";
    swift["0053"] = "BSCHESMMXXX";
    swift["0056"] = "CAHMESMMXXX";
    swift["0057"] = "BVADESMMXXX";
    swift["0058"] = "BNPAESMMXXX";
    swift["0059"] = "MADRESMMXXX";
    swift["0061"] = "BMARES2MXXX";
    swift["0062"] = "BBVAESMMXXX";
    swift["0063"] = "CAHMESMMXXX";
    swift["0065"] = "BARCESMMXXX";
    swift["0067"] = "BSCHESMMXXX";
    swift["0068"] = "BBVAESMMXXX";
    swift["0069"] = "CAIXESBBXXX";
    swift["0072"] = "POPUESMMXXX";
    swift["0073"] = "OPENESMMXXX";
    swift["0075"] = "POPUESMMXXX";
    swift["0076"] = "BSABESBBXXX";
    swift["0077"] = "BBVAESMMXXX";
    swift["0078"] = "BAPUES22XXX";
    swift["0081"] = "BSABESBBXXX";
    swift["0082"] = "POPUESMMXXX";
    swift["0085"] = "BSCHESMMXXX";
    swift["0086"] = "NORTESMMXXX";
    swift["0087"] = "CAHMESMMXXX";
    swift["0093"] = "CAIXESBBXXX";
    swift["0094"] = "BVALESMMXXX";
    swift["0095"] = "POPUESMMXXX";
    swift["0097"] = "POPUESMMXXX";
    swift["0099"] = "AHCRESVVXXX";
    swift["0099"] = "CAHMESMMXXX";
    swift["0100"] = "BSCHESMMXXX";
    swift["0101"] = "CAIXESBBXXX";
    swift["0102"] = "BBVAESMMXXX";
    swift["0103"] = "BARCESMMXXX";
    swift["0104"] = "BBVAESMMXXX";
    swift["0107"] = "BNPAESMSXXX";
    swift["0108"] = "SOGEESMMXXX";
    swift["0109"] = "BSCHESMMXXX";
    swift["0112"] = "BSABESBBXXX";
    swift["0114"] = "CAIXESBBXXX";
    swift["0118"] = "BSABESBBXXX";
    swift["0119"] = "BSABESBBXXX";
    swift["0122"] = "CITIES2XXXX";
    swift["0124"] = "CESCESBBXXX";
    swift["0125"] = "BAOFESM1XXX";
    swift["0127"] = "BBVAESMMXXX";
    swift["0128"] = "BKBKESMMXXX";
    swift["0130"] = "CGDIESMMXXX";
    swift["0131"] = "BESMESMMXXX";
    swift["0133"] = "MIKBESB1XXX";
    swift["0136"] = "AREBESMMXXX";
    swift["0137"] = "BBVAESMMXXX";
    swift["0138"] = "BKOAES22XXX";
    swift["0142"] = "CAIXESBBXXX";
    swift["0149"] = "BNPAESMSXXX";
    swift["0151"] = "CHASESM3XXX";
    swift["0154"] = "BSUIESMMXXX";
    swift["0155"] = "BRASESMMXXX";
    swift["0156"] = "ABNAESMMXXX";
    swift["0159"] = "COBAESMXXXX";
    swift["0160"] = "BOTKESMXXXX";
    swift["0162"] = "MIDLESMMXXX";
    swift["0167"] = "GEBAESMMXXX";
    swift["0168"] = "BBRUESMXXXX";
    swift["0169"] = "NACNESMMXXX";
    swift["0182"] = "BBVAESMMXXX";
    swift["0184"] = "BEDFESM1XXX";
    swift["0185"] = "BSABESBBXXX";
    swift["0186"] = "BFIVESBBXXX";
    swift["0188"] = "ALCLESMMXXX";
    swift["0190"] = "BBPIESMMXXX";
    swift["0196"] = "WELAESMMXXX";
    swift["0198"] = "BCOEESMMXXX";
    swift["0200"] = "PRVBESB1XXX";
    swift["0202"] = "BBVAESMMXXX";
    swift["0205"] = "DEUTESBBXXX";
    swift["0208"] = "CSSOES2SXXX";
    swift["0209"] = "BSABESBBXXX";
    swift["0210"] = "GALEES2GXXX";
    swift["0216"] = "POHIESMMXXX";
    swift["0219"] = "BMCEESMMXXX";
    swift["0220"] = "FIOFESM1XXX";
    swift["0224"] = "SCFBESMMXXX";
    swift["0226"] = "UBSWESMMXXX";
    swift["0227"] = "BBVAESMMXXX";
    swift["0229"] = "POPLESMMXXX";
    swift["0230"] = "BSABESBBXXX";
    swift["0232"] = "INVLESMMXXX";
    swift["0233"] = "POPIESMMXXX";
    swift["0234"] = "CCOCESMMXXX";
    swift["0235"] = "PICHESMMXXX";
    swift["0237"] = "CSURES2CXXX";
    swift["0238"] = "PSTRESMMXXX";
    swift["0239"] = "EVOBESMMXXX";
    swift["0486"] = "CECAESMM086";
    swift["0487"] = "GBMNESMMXXX";
    swift["0490"] = "CAIXESBBXXX";
    swift["1001"] = "BBVAESMMXXX";
    swift["1004"] = "BBVAESMMXXX";
    swift["1005"] = "BBVAESMMXXX";
    swift["1301"] = "BBVAESMMXXX";
    swift["1302"] = "BBVAESMMXXX";
    swift["1460"] = "CRESESMMXXX";
    swift["1465"] = "INGDESMMXXX";
    swift["1469"] = "BBVAESMMXXX";
    swift["1474"] = "CITIESMXXXX";
    swift["1480"] = "VOWAES21XXX";
    swift["1484"] = "BSCHESMMXXX";
    swift["1485"] = "BOFAES2XXXX";
    swift["1490"] = "SELFESMMXXX";
    swift["1491"] = "TRIOESMMXXX";
    swift["1494"] = "BCITESMMXXX";
    swift["1513"] = "CGDIESMMXXX";
    swift["1524"] = "UBIBESMMXXX";
    swift["1534"] = "KBLXESMMXXX";
    swift["1544"] = "BACAESMMXXX";
    swift["1545"] = "AGRIESMMXXX";
    swift["2000"] = "CECAESMMXXX";
    swift["2001"] = "CECAESMM105";
    swift["2005"] = "BSABESBBXXX";
    swift["2006"] = "UCJAES2MXXX";
    swift["2007"] = "UCJAES2MXXX";
    swift["2010"] = "CECAESMM010";
    swift["2010"] = "CECAESMM086";
    swift["2011"] = "CAIXESBBXXX";
    swift["2012"] = "CAIXESBBXXX";
    swift["2013"] = "CESCESBBXXX";
    swift["2015"] = "BASKES2BXXX";
    swift["2016"] = "BASKES2BXXX";
    swift["2017"] = "CECAESMM017";
    swift["2017"] = "CECAESMM086";
    swift["2018"] = "CAIXESBBXXX";
    swift["2019"] = "CECAESMM099";
    swift["2020"] = "UCJAES2MXXX";
    swift["2021"] = "CAHMESMMXXX";
    swift["2022"] = "CAHMESMMXXX";
    swift["2024"] = "CSURES2CXXX";
    swift["2025"] = "CSURES2CXXX";
    swift["2028"] = "CECAESMM105";
    swift["2030"] = "CAIXESBBXXX";
    swift["2031"] = "CECAESMM031";
    swift["2032"] = "CAIXESBBXXX";
    swift["2033"] = "CAIXESBBXXX";
    swift["2034"] = "CAIXESBBXXX";
    swift["2035"] = "CSPAES2LXXX";
    swift["2037"] = "CAHMESMMXXX";
    swift["2038"] = "CAHMESMMXXX";
    swift["2039"] = "UCJAES2MXXX";
    swift["2040"] = "BBVAESMMXXX";
    swift["2041"] = "CESCESBBXXX";
    swift["2042"] = "CAHMESMMXXX";
    swift["2043"] = "CECAESMM043";
    swift["2045"] = "CECAESMM045";
    swift["2046"] = "CAGLESMMXXX";
    swift["2048"] = "CECAESMM048";
    swift["2049"] = "CSPAES2LXXX";
    swift["2051"] = "CECAESMM051";
    swift["2052"] = "CAHMESMMXXX";
    swift["2053"] = "CAIXESBBXXX";
    swift["2054"] = "CAIXESBBXXX";
    swift["2055"] = "CECAESMM099";
    swift["2056"] = "CECAESMM056";
    swift["2057"] = "CAGLESMMXXX";
    swift["2058"] = "UCJAES2MXXX";
    swift["2059"] = "BBVAESMMXXX";
    swift["2060"] = "CAHMESMMXXX";
    swift["2061"] = "CSSOES2SXXX";
    swift["2062"] = "BASKES2BXXX";
    swift["2063"] = "BASKES2BXXX";
    swift["2065"] = "CAIXESBBXXX";
    swift["2066"] = "CECAESMM066";
    swift["2068"] = "CAHMESMMXXX";
    swift["2069"] = "CAHMESMMXXX";
    swift["2070"] = "CAIXESBBXXX";
    swift["2071"] = "CAIXESBBXXX";
    swift["2072"] = "CSSOES2SXXX";
    swift["2073"] = "CESCESBBXXX";
    swift["2074"] = "BBVAESMMXXX";
    swift["2075"] = "CECAESMM105";
    swift["2076"] = "BSABESBBXXX";
    swift["2077"] = "CAHMESMMXXX";
    swift["2078"] = "CSPAES2LXXX";
    swift["2079"] = "CSPAES2LXXX";
    swift["2080"] = "CAGLESMMXXX";
    swift["2081"] = "BSABESBBXXX";
    swift["2082"] = "BASKES2BXXX";
    swift["2083"] = "BASKES2BXXX";
    swift["2084"] = "CSPAES2LXXX";
    swift["2085"] = "CAZRES2ZXXX";
    swift["2086"] = "CECAESMM086";
    swift["2088"] = "BBVAESMMXXX";
    swift["2089"] = "CECAESMM031";
    swift["2090"] = "BSABESBBXXX";
    swift["2091"] = "CAGLESMMXXX";
    swift["2092"] = "UCJAES2MXXX";
    swift["2093"] = "BSABESBBXXX";
    swift["2094"] = "CAHMESMMXXX";
    swift["2095"] = "BASKES2BXXX";
    swift["2096"] = "CSPAES2LXXX";
    swift["2097"] = "BASKES2BXXX";
    swift["2098"] = "CAIXESBBXXX";
    swift["2099"] = "CECAESMM099";
    swift["2100"] = "CAIXESBBXXX";
    swift["2101"] = "BASKES2BXXX";
    swift["2102"] = "BSABESBBXXX";
    swift["2103"] = "UCJAES2MXXX";
    swift["2104"] = "CSSOES2SXXX";
    swift["2105"] = "CECAESMM105";
    swift["2106"] = "CAIXESBBXXX";
    swift["2107"] = "BBVAESMMXXX";
    swift["3001"] = "BCOEESMM001";
    swift["3005"] = "BCOEESMM005";
    swift["3007"] = "BCOEESMM007";
    swift["3008"] = "BCOEESMM008";
    swift["3009"] = "BCOEESMM009";
    swift["3016"] = "BCOEESMM016";
    swift["3017"] = "BCOEESMM017";
    swift["3018"] = "BCOEESMM018";
    swift["3020"] = "BCOEESMM020";
    swift["3021"] = "BCOEESMM191";
    swift["3022"] = "BCOEESMM060";
    swift["3023"] = "BCOEESMM023";
    swift["3024"] = "BAOFESM1XXX";
    swift["3025"] = "CDENESBBXXX";
    swift["3029"] = "CCRIES2A029";
    swift["3035"] = "CLPEES2MXXX";
    swift["3045"] = "CCRIES2A045";
    swift["3054"] = "CCRIES2AXXX";
    swift["3056"] = "BCOEESMM190";
    swift["3057"] = "CCRIES2AXXX";
    swift["3058"] = "CCRIES2AXXX";
    swift["3059"] = "BCOEESMM059";
    swift["3060"] = "BCOEESMM060";
    swift["3061"] = "CCRIES2AXXX";
    swift["3062"] = "BCOEESMM190";
    swift["3063"] = "BCOEESMM063";
    swift["3064"] = "BCOEESMM190";
    swift["3065"] = "BCOEESMM187";
    swift["3066"] = "BCOEESMM191";
    swift["3067"] = "BCOEESMM067";
    swift["3068"] = "CAGLESMMXXX";
    swift["3069"] = "CAZRES2ZXXX";
    swift["3070"] = "BCOEESMM070";
    swift["3072"] = "CCRIES2AXXX";
    swift["3076"] = "BCOEESMM076";
    swift["3078"] = "BCOEESMM060";
    swift["3079"] = "BCOEESMM187";
    swift["3080"] = "BCOEESMM080";
    swift["3081"] = "BCOEESMM081";
    swift["3082"] = "CCRIES2AXXX";
    swift["3083"] = "CCRIES2AXXX";
    swift["3084"] = "CVRVES2BXXX";
    swift["3085"] = "BCOEESMM085";
    swift["3089"] = "BCOEESMM089";
    swift["3092"] = "BCOEESMM191";
    swift["3093"] = "BCOEESMM191";
    swift["3094"] = "CCRIES2AXXX";
    swift["3095"] = "CCRIES2A095";
    swift["3096"] = "BCOEESMM096";
    swift["3098"] = "BCOEESMM098";
    swift["3102"] = "BCOEESMM102";
    swift["3102"] = "CCRIES2A102";
    swift["3104"] = "BCOEESMM104";
    swift["3105"] = "CCRIES2A105";
    swift["3108"] = "CCRIES2AXXX";
    swift["3110"] = "CCRIES2A110";
    swift["3110"] = "BCOEESMM110";
    swift["3111"] = "BCOEESMM111";
    swift["3112"] = "CCRIES2A112";
    swift["3113"] = "BCOEESMM113";
    swift["3114"] = "CCRIES2AXXX";
    swift["3115"] = "BCOEESMM115";
    swift["3116"] = "BCOEESMM116";
    swift["3117"] = "BCOEESMM117";
    swift["3118"] = "CCRIES2A118";
    swift["3119"] = "CCRIES2A119";
    swift["3121"] = "CCRIES2A121";
    swift["3123"] = "CCRIES2A123";
    swift["3127"] = "BCOEESMM127";
    swift["3128"] = "BCOEESMM190";
    swift["3129"] = "BCOEESMM191";
    swift["3130"] = "BCOEESMM130";
    swift["3131"] = "CCRIES2AXXX";
    swift["3134"] = "BCOEESMM134";
    swift["3135"] = "CCRIES2A135";
    swift["3137"] = "CCRIES2AXXX";
    swift["3138"] = "BCOEESMM138";
    swift["3140"] = "BCOEESMM140";
    swift["3141"] = "CESCESBBXXX";
    swift["3144"] = "BCOEESMM144";
    swift["3146"] = "CCCVESM1XXX";
    swift["3147"] = "CCRIES2AXXX";
    swift["3150"] = "BCOEESMM150";
    swift["3152"] = "CCRIES2A152";
    swift["3157"] = "CCRIES2A157";
    swift["3159"] = "BCOEESMM159";
    swift["3160"] = "CCRIES2A160";
    swift["3161"] = "BCOEESMM060";
    swift["3162"] = "BCOEESMM162";
    swift["3163"] = "CCRIES2AXXX";
    swift["3165"] = "CCRIES2A165";
    swift["3166"] = "BCOEESMM166";
    swift["3167"] = "CCRIES2AXXX";
    swift["3171"] = "BCOEESMM191";
    swift["3172"] = "CCOCESMMXXX";
    swift["3174"] = "BCOEESMM174";
    swift["3177"] = "CCRIES2AXXX";
    swift["3177"] = "BCOEESMM177";
    swift["3179"] = "CCRIES2A179";
    swift["3181"] = "CCRIES2AXXX";
    swift["3183"] = "CASDESBBXXX";
    swift["3186"] = "CCRIES2A186";
    swift["3187"] = "BCOEESMM187";
    swift["3188"] = "CCRIES2AXXX";
    swift["3189"] = "BCOEESMM191";
    swift["3190"] = "BCOEESMM190";
    swift["3191"] = "BCOEESMM191";
    swift["9000"] = "ESPBESMMXXX";
    return swift[entidad];
}

