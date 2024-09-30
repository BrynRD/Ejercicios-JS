var operacionActual = null;
function seleccionarOperacion(operacion) {
    operacionActual = operacion;
}
function calcular() {
    var entrada1 = document.getElementById('entrada1');
    var entrada2 = document.getElementById('entrada2');
    var mostrarResultado = document.getElementById('resultado');
    if (!entrada1 || !entrada2 || !mostrarResultado) {
        console.error('No se encontraron las entradas o el resultado');
        return;
    }
    var num1 = parseFloat(entrada1.value);
    var num2 = parseFloat(entrada2.value);
    if (isNaN(num1) || isNaN(num2)) {
        mostrarResultado.textContent = 'Ingresa números válidos';
        return;
    }
    if (!operacionActual) {
        mostrarResultado.textContent = 'Seleccione una operación';
        return;
    }
    var resultado;
    switch (operacionActual) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                mostrarResultado.textContent = 'Error: división por cero';
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            mostrarResultado.textContent = 'Operación no válida';
            return;
    }
    mostrarResultado.textContent = "Resultado: ".concat(resultado.toFixed(2));
    operacionActual = null;
}
function limpiar() {
    var entrada1 = document.getElementById('entrada1');
    var entrada2 = document.getElementById('entrada2');
    var mostrarResultado = document.getElementById('resultado');
    if (!entrada1 || !entrada2 || !mostrarResultado) {
        console.error('No se encontraron las entradas o el resultado');
        return;
    }
    entrada1.value = '';
    entrada2.value = '';
    mostrarResultado.textContent = 'Resultado';
    operacionActual = null;
}
