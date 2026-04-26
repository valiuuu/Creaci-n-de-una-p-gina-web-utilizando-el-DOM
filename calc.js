// función principal
function manageForm(e){
    e.preventDefault();

    // obtener valores
    let P = Number(document.getElementById("monto").value);
    let n = Number(document.getElementById("plazo").value);
    let r = Number(document.getElementById("interes").value) / 100 / 12;
    let tipo = document.getElementById("tipo").value;

    let result;

    // calcular según tipo
    if (tipo === "pago-completo") {
        result = calcRepay(P, r, n);
    } else {
        result = calcIntereses(P, r);
    }

    // calcular total
    let total = result * n;

    // mostrar resultados
    document.getElementById("result-mens").textContent = result.toFixed(2);
    document.getElementById("result-total").textContent = total.toFixed(2);
}


// función repayment
function calcRepay(P, r, n){

    // caso especial sin interés
    if (r === 0){
        return P / n;
    }

    return P * (r * (1 + r)**n) / ((1 + r)**n - 1);
}


// función solo intereses
function calcIntereses(P, r){
    return P * r;
}


// evento del formulario
let formulario = document.getElementById("hipoteca");
formulario.addEventListener("submit", manageForm);