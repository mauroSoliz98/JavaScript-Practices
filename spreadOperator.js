//                          ESPREAD OPERATOR
/*
¿Qué es?
Es un operador que permite a un elemento tal como un arreglo o cadena ser expandido a un lugar donde
cero o más argumentos para llamadas de función o lementos para arrays iterables son esperados.
Tambien permite a un objeto ser expandido a lugares donde cero o más pares de valores clave para
iterar este tipo de objetos son esperados.

Los siguientes casos a continuación son algunos de muchos casos en los que podemos usar spread
operator
*/

//Pasar un arreglo como parametro de una función
const SpreadOperator = () => {

    const suma = (a, b, c) => {
        return c = a + b
    }
    let arreglo = [5,6]
    console.log(suma(...arreglo));

    //Fucionar dos o más arreglos

    let dias1 = ["Lunes", "Martes","Miercoles"]
    let dias2 = [...dias1,"Jueves", "Viernes", "Sabado", "Domingo"]
    console.log(dias2)

    //Fucionar objetos

    const objeto1 = {
        medolo: "Iphone 20 PRO MAX"
    }

    const objeto2 = {
        marca: "Apple"
    }

    const objeto3 = {
        ...objeto1,
        ...objeto2
    }
    console.log(objeto3);

    //Copiar un array
    const lista1 = [1,2,3]
    const lista2=[...lista1]
    console.log(lista2)

    //REST operator, esta no es nada más que la funcion inversa al spread operator
    const sumaRest = (...numeros) =>{
        const resultado = numeros.reduce((valor1,valor2) => valor1 + valor2, 0)
        return resultado
    }
    console.log(sumaRest(1,2,3));
    
    //Tambien podemos utilizar spread operator para modificar o actualizar algun atributo del objeto
    //esto nos puede ayudar mucho a la hora de manejar funciones puras e inmutables

    //Primero probemos el uso de spread en un objeto normal
    const coche = {
        marca: 'Toyota',
        modelo: 'Corolla',
        puertas: 4
    }
    const deportivo = {...coche, puertas:2}
    console.log(deportivo);
    
    //PROBANDO SPREAD EN OBJETOS INMUTABLES
    //Ahora en un objeto inmutabe (un objeto inmutable es aquel objeto cuyo valor inicial no debe
    //cambiar), esto es muy util para elaborar funciones puras
    const inmutableState = {
        manzana: 0,
        naranja: 0,
        uva: 0
    }
    let updateInmutableState = {
                                ...inmutableState, 
                                manzana: inmutableState.manzana + 10,
                                naranja: inmutableState.naranja + 20,
                                uva: inmutableState.uva + 15
                            }
    
    console.log(updateInmutableState);
    console.log(inmutableState);
}

SpreadOperator()