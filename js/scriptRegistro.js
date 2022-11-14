
 $(".dni").onblur( () => {
    let valor = this.value;
    let dniExp = new RegExp('^[0-9]{8}[- ]?[A-Z]{1}$');

    if (!dniExp.test(valor)) {
        alert('DNI incorrecto');
    }
});