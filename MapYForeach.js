//                                      ITERADORES
/*
Es importante saber que ambas funciones cumplen el proposito de iterar un arreglo
*/

const ForeachYMap = () => {

    const numeros = [1,2,3,4,5,6,7];
    const repetidos = [1,1,2,3,4,4,4,5];
    const productos=[
        { id:'AQ1', nombre:'camiseta', precio: 500 },
        { id:'AQ2', nombre:'zapatos', precio: 2000 },
        { id:'AQ3', nombre:'pantalon', precio: 1500 },
    ];

    //Foreach
    /*SINTAXIS:
    arr.foreach(funcion callback(currentValue, index, array){
        tu iterador
    }[, thisArg]);*/
    console.log('ITERACION CON FOREACH');
    numeros.forEach(x => {
        console.log(x);
    })

    /*
    Map: Map a diferencia de forech, guarda los objetos dentro del array lo que nos permite guardarlos
    en una nueva variable. A la hora de utilizar map es recomentadable utilizar funciones puras, aunque
    JavaScript nos permite no hacerlo si queremos.  
    SINTAXIS:
    var nuevo_array = arr.map(function callback(currentValue, index, array) {
        // Elemento devuelto de nuevo_array
    }[, thisArg])
    */
    console.log('ITERACION CON MAP');
    numeros.map(x => {
        console.log(x);
    })
    console.log("DUPLICANDO EL ARRAY:");

    const dobles = numeros.map((num, index)=>{  //num = numero, index = posicion
        return num * 2
    });
    console.log(dobles);

    console.log('SACAR UN DESCUENTO DE PRODUCTOS MAYORES A MIL:');
    const productosConDescuento = productos.map(function(producto){
        if(producto.precio < 1000) return producto;
        return {
            ...producto, //utilizamos un spread operator para hacer una copia del array de productos
            precio: producto.precio * 0.9,
        };
    });
    console.log('productos originales: ',productos);
    console.log('productos con descuento: ', productosConDescuento);

    console.log('USANDO MAP PARA EXTRAER LOS DATOS DEL OBJETO (LOS IDS DEL OBJETO):')
    const idsProdutos = productos.map(({id}) =>  id );
//                                      ^------ Hacemos desestructuracion del objeto dentro del map
    console.log(idsProdutos);

    console.log('FILTER');
    /* 
    Filter es un metodo que va tomando los distintos elementos de un array y va decidiendo cual va a
    pasar y cuaul no va a pasar a un nuevo array, segun los criterios establecidos.
    SINTAXIS:
    var newArray = arr.filter(callback(currentValue[, index[, array]])[, thisArg])
    */
    console.log("REALIZAR CON FILTER UNA LISTA DE LOS PRODUCTOS BARATOS(MENORES A 1000)");
    const esBarato = producto => producto.precio < 1000;
    const productosBaratos = productos.filter(esBarato);
    console.log(productosBaratos);
    console.log("REALIZAR LA FUNCION INVERSA A LA ANTERIOR PETICIÓN");
    const esCaro = producto => !esBarato(producto);
    const productosCaros = productos.filter(esCaro);
    console.log(productosCaros);
    console.log('SACAR LOS NUMEROS REPETIDOS');
    const numerosUnicos = repetidos.filter((numero, posicion, numeros) => {
        //numero = el elemento, posicion = su posicion dentro el array, nuemros = el array en si
        return posicion === numeros.indexOf(numero);
    });
    console.log(`LISTA REPETIDOS: ${repetidos}`);
    console.log(numerosUnicos);

    console.log('REDUCE');
    /*
        El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo 
        como resultado un único valor. 
        SINTAXIS:
        arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])
     */
    let total = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    console.log(`EL TOTAL ES: ${total}`);

    console.log('OBTENER LOS DOBLES DE CADA NUMERO UTILIZANDO REDUCE:');
    const acumularDobles = (acumulador,numero) => [...acumulador, numero * 2]
    const dobleNuemros = numeros.reduce(acumularDobles, []);
    //Nuestro valor inicial va ser un nuevo array vacio
    console.log(dobleNuemros);
}

ForeachYMap();
