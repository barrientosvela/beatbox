let precio = -1;

$("#plan1").click(() => {
    $("#plan1img, #plan1back").css({"border" : "solid 5px red", "trancition" : "0"});
    $("#plan2img, #plan2back, #plan3img, #plan3back").css("border", "none");
    precio = "GRATIS";
});
$("#plan2").click(() => {
    $("#plan1img, #plan1back, #plan3img, #plan3back").css("border", "none");
    $("#plan2img, #plan2back").css({"border" : "solid 5px red", "trancition" : "0"});
    precio = 2.99;
});
$("#plan3").click(() => {
    $("#plan1img, #plan1back, #plan2img, #plan2back").css("border", "none");
    $("#plan3img, #plan3back").css({"border" : "solid 5px red", "trancition" : "0"});
    precio = 19.99;
});