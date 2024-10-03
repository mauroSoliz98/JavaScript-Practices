//La serie numerica de Fibonacci es un conjunto de numeros susecibos cuyo numero es la resultante
//de la suma de los dos anteriores.
//Ej: 0,1,1,2,3,5......
const fiboRecursivo = (limit) =>{
    const arrFibo = [0,1]
    /*Quien es "i" y porque los inicializamos en 2. El indice o "i" hace referencia a la posicion
    del array, NO a los elementos dentro del array siendo que el elemnento 0 se encuentra en la 
    posicion 0 y el elemento 1 se encuentra en la posicion 1 ya que en los arreglos la posición 
    inicial es la posicion 0. Entoces a la hora de estabecer nuestro inidice "i" le estamos 
    dicientdo que inicie en la tercera posicion siendo que la primera y la segunda ya estan ocupadas*/
    for(let i = 2; i <= limit; i++ ){
        arrFibo.push(arrFibo[i-1] + arrFibo[i-2])
    }
    return arrFibo
}
//En este pequeño ejercicio estamos empleando lo que se llama recurcividad
//console.log(fiboRecursivo(20));

const fiboBurbuja = (limit) => {

    let suma = 0
    let valor1 = 0
    let valor2 = 1
    const arr = [0]

    if( limit == 0 || limit == 1 ) return limit
        for( let i = 2; i <= limit; i++ ){
            suma = valor1 + valor2 // 0,1,suma -> 0,1,1
            valor1 = valor2// 1,1
            valor2 = suma
            arr.push(suma)
        }
        return arr  
}
console.log(fiboBurbuja(20));
