let operacionActual: string | null = null;

function seleccionarOperacion(operacion: string) {
    operacionActual = operacion;
}

function calcular() {
    const entrada1 = document.getElementById('entrada1') as HTMLInputElement;
    const entrada2 = document.getElementById('entrada2') as HTMLInputElement;
    const mostrarResultado = document.getElementById('resultado');

    if (!entrada1 || !entrada2 || !mostrarResultado) {
        console.error('No se encontraron las entradas o el resultado');
        return;
    }

    const num1 = parseFloat(entrada1.value);
    const num2 = parseFloat(entrada2.value);

    if (isNaN(num1) || isNaN(num2)) {
        mostrarResultado.textContent = 'Ingresa números válidos';
        return;
    }

    if (!operacionActual) {
        mostrarResultado.textContent = 'Seleccione una operación';
        return;
    }

    let resultado: number;

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

    mostrarResultado.textContent = `Resultado: ${resultado.toFixed(2)}`;
    operacionActual = null;  
}

function limpiar() {
    const entrada1 = document.getElementById('entrada1') as HTMLInputElement;
    const entrada2 = document.getElementById('entrada2') as HTMLInputElement;
    const mostrarResultado = document.getElementById('resultado');

    if (!entrada1 || !entrada2 || !mostrarResultado) {
        console.error('No se encontraron las entradas o el resultado');
        return;
    }

    entrada1.value = '';
    entrada2.value = '';
    mostrarResultado.textContent = 'Resultado';
    operacionActual = null;  
}
