//* 
/*Crear un programa en Javascript que realice lo siguiente:
3
0, 1, 1.
10
0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
/*Debe solicitar al usuario un número por prompt o por input y guardarlo.
Debe imprimir la serie de fibonacci dependiendo del número recibido, es decir, si el programa recibe un 8, debe mostrar 8 números de la serie de Fibonacci.
Debe imprimir el resultado por consola o por el DOM.
Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.
Prueba tu programa con las siguientes combinaciones para asegurarte que funcione correctamente:
Entrada: 
Salida: 
Entrada: 
Salida: 
/*Pruébalo con los números que se te ocurran.*/

    function obtenerSerieFibonacci(cantidad) {
        if (cantidad < 1) return [];
        if (cantidad === 1) return [0];
    
        let serie = new Array(cantidad); 
        serie[0] = 0; 
        serie[1] = 1; 
    
        for (let i = 2; i < cantidad; i++) {
            serie[i] = serie[i - 1] + serie[i - 2]; // 
        }
    
        return serie;
    }

    function pedirNumero() {
        let numero;
        do {
            let entrada = prompt("Ingrese un número entero no negativo para la serie de Fibonacci:");
            numero = parseInt(entrada);
            if (isNaN(numero) || numero < 0) {
                alert("Entrada inválida. Intente nuevamente.");
            }
        } while (isNaN(numero) || numero < 0);
        return numero;
    }
    function iniciarPrograma() {
        let cantidad = pedirNumero();
        let resultado = obtenerSerieFibonacci(cantidad);
        console.log(`Serie de Fibonacci (${cantidad}):`, resultado);
        let divResultado = document.createElement("div");
        divResultado.textContent = `Serie de Fibonacci (${cantidad}): ${resultado.join(", ")}`;
        document.body.appendChild(divResultado);
    }
    
    iniciarPrograma();