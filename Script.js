var numero = "";       
var numMuestra = "";   
var numero1 = 0;       
var numero2 = 0;       
var resultado = 0;
var operador = "";     

function Sumar() {
    if (numero !== "") {
        numero1 = Number(numero);  
    } else {
        numero1 = resultado; 
    }
    operador = "+";  
    numero = "";  
    numMuestra = numMuestra + "+";  
    num1.value = numMuestra;  
}

function Resta() {
    if (numero !== "") {
        numero1 = Number(numero);  
    } else {
        numero1 = resultado; 
    }
    operador = "-";
    numero = "";
    numMuestra = numMuestra + "-";
    num1.value = numMuestra;
}

function Multiplicar() {
    if (numero !== "") {
        numero1 = Number(numero); 
    } else {
        numero1 = resultado;
    }
    operador = "*";
    numero = "";
    numMuestra = numMuestra + "*";
    num1.value = numMuestra;
}

function Dividir() {
    if (numero !== "") {
        numero1 = Number(numero);  
    } else {
        numero1 = resultado; 
    }
    operador = "/";
    numero = "";
    numMuestra = numMuestra + "/";
    num1.value = numMuestra;
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

function Atras() {
    numMuestra = numMuestra.slice(0, -1);  
    numero = numero.slice(0, -1); 
    num1.value = numMuestra;  
}

function Percentage() {
    numero2 = Number(numero) / 100;  
    resultado = numero1 * numero2;  
    num1.value = resultado; 
}

function Apagar() {
    alert("Funciones desactivadas,hasta pronto");
    window.close();
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
    numero1 = resultado;  
    numero = "";  
    numMuestra = resultado.toString();  
    operador = "";  
}
