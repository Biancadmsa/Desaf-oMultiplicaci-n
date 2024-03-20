
const ingresarNumero = parseInt(prompt("Ingresa un número del 1 al 20 para realizar operaciones aritméticas"));

const multiplicar = (numero) => {
    let resultado = "";
    let factorial = 1; // Parte el factorial en 1
    if (numero >= 1 && numero <= 20) {
        // Calculo de  multiplicaciones
        for (let i = 1; i <= 20; i++) {
            resultado += i + " x " + numero + " = " + (i * numero) + "<hr>" + "<br>";
        }

        // Calculo el factorial 
        for (let j = 1; j <= numero; j++) {
            factorial *= j;
        }
        
        // Mostrar el factorial
        resultado +=  "El Factorial del " + numero + " es " + factorial + "<hr>" + "<br>";
    } else {
        resultado = "Número fuera de rango";
    }
    return resultado;
};

document.write(multiplicar(ingresarNumero));
