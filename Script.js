    var numero = "";
    var numMuestra = "";
    var numero1 = 0;
    var numero2 = 0;
    var resultado = 0;
    var operador = "";

    function Sumar() {
    numero1 = Number(numero);
    operador = "+";
    numero ="";
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
    if (P_Numero == "+") {
        //num1.value = num1.value + "+";
    }    else {
        numero = numero + P_Numero;
    }

    numMuestra = numMuestra + P_Numero;
    num1.value = numMuestra;
    }


    function limpiar() {
    document.getElementById("num1").value = "";
    }

function Resultado() {
    numero2 = Number(numero);
    if (operador == "+") {
        resultado = numero1 + numero2;
        num1.value = resultado;
    }
}