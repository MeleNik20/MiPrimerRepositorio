var numero = "";
var numMuestra = "";
var numero1 = 0;
var numero2 = 0;
var resultado = 0;
var operador = "";

function Sumar() {
    numero1 = Number(numero);
    operador = "+";
    numero = "";
    Escribir('+');
}

function Resta() {
    numero1 = Number(numero);
    operador = "-";
    numero = "";
    Escribir('-');
}

function Multiplicar() {
    numero1 = Number(numero);
    operador = "*";
    numero = "";
    Escribir('*');
}

function Dividir() {
    numero1 = Number(numero);
    operador = "/";
    numero = "";
    Escribir('/');
}

function Escribir(P_Numero) {
    if (P_Numero == "+" || P_Numero == "-" || P_Numero == "*" || P_Numero == "/") {
        numMuestra = numMuestra + P_Numero;
    } else {
        numero = numero + P_Numero;
        numMuestra = numMuestra + P_Numero;
    }

    num1.value = numMuestra;
}

function limpiar() {
    numero = "";
    numMuestra = "";
    numero1 = 0;
    numero2 = 0;
    operador = "";
    document.getElementById("num1").value = "";
}

function Resultado() {
    numero2 = Number(numero);
    if (operador == "+") {
        resultado = numero1 + numero2;
    } else if (operador == "-") {
        resultado = numero1 - numero2;
    } else if (operador == "*") {
        resultado = numero1 * numero2;
    } else if (operador == "/") {
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
        } else {
            resultado = "Error";
        }
    }
    num1.value = resultado;
    numero = "";
    numMuestra = "";
    numero1 = 0;
    numero2 = 0;
    operador = "";
}

