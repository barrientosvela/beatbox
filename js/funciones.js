let precio = 0;
let sub=0;

console.log(sub)
$("#plan1").click(() => {
    $("#plan1img").css({"border" : "solid 5px red", "trancition" : "0"});
    $("#plan1back").css({"border" : "solid 5px red", "trancition" : "0"});
    $("#plan2img, #plan2back, #plan3img, #plan3back").css("border", "none");
    precio = 0;
    sub=true;
});
$("#plan2").click(() => {
    $("#plan1img").css("border", "none");
    $("#plan1back").css("border", "none");
    $("#plan2img").css({"border" : "solid 5px red", "trancition" : "0"});
    $("#plan2back").css({"border" : "solid 5px red", "trancition" : "0"});
    $("#plan3img").css("border", "none");
    $("#plan3back").css("border", "none");
    precio = 10;
    sub=true;
});
$("#plan3").click(() => {
    $("#plan1img").css("border", "none");
    $("#plan1back").css("border", "none");
    $("#plan2img").css("border", "none");
    $("#plan2back").css("border", "none");
    $("#plan3img").css({"border" : "solid 5px red", "trancition" : "0"});
    $("#plan3back").css({"border" : "solid 5px red", "trancition" : "0"});
    precio = 50;
    sub=true;
});