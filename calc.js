
//funcion principal para el form
function manageForm(e){
    //para que no se recargue la página
    e.preventDefault();
    //esta variable es para llevar ese algo a la funcion que se necesite
    let result;
    let datos = obtDatos();


    //datos es para poder llamar los parámetros sin copiarlos todos

        if (datos.tipo === "pago-completo"){
        //usamos el repayment
        result = calcRepay(datos);
    } else {
        result = calcIntereses(datos);
    }
    //para poder calcular todo el total con números
    let total = result * datos.n;

    
    console.log(result);
    console.log(datos);

    //este es para mostrar el resultado mensual
    document.getElementById("result-mens").textContent = result.toFixed(2);
    //este es para mostrar el resultado total a pagar
    document.getElementById("result-total").textContent = total.toFixed(2);
}
    // 1.función para leer los datos

    function obtDatos(){
        let P = Number(document.getElementById("monto").value);
        let n = Number(document.getElementById("plazo").value);
        let r = Number(document.getElementById("interes").value)/12/100;
        let tipo = document.getElementById("tipo").value;

        return {P, n, r, tipo};
    }

    //calcular el repayment
    function calcRepay(datos){

        if (datos.r === 0){
            return (datos.P / datos.n);
        }

        let m = datos.P * (datos.r * (1 + datos.r)**datos.n) / ((1 + datos.r) ** datos.n - 1);
        return m

    }

    //calcular solo intereses

    function calcIntereses(datos){

        let pagoMens = (datos.P * datos.r);
        return pagoMens
}

let formulario = document.getElementById('hipoteca');
console.log(formulario);

formulario.addEventListener('submit', manageForm);


