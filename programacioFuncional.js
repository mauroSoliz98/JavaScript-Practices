/*
                                        PROGRAMACIÓN FUNCIONAL
    ¿Qué es?
    La programación funcional es un paradigma de programción, cuyo enfoque esta en el 'que se nesecita'
    a diferencia de la programción imperativa que se centra en el 'como'. A la programción funcional
    tambien se le denomina programcion declarativa, ya que la manera en la que se pasa a programar es 
    con funciones, otra caracteristica muy importante a la hora de habla de la programación funcional
    es la inmutabilidad de las variables, cuando decimos que una variable es inmutable hacemos referecia
    a que esta no sufrirá cambios de estado.
 */
const progFun = () => {
//Funcion de primer orden: una funcion de primer orden es una funcion que puede mandarse como 
//parametro a otra función.
    const fn = (a) => `soy un funcion ${a}`;
    console.log(fn("llamada fn"));
//Función de orden superior: una funcion de orden superior es aquella que recive como parametro
//otras funciones.
    const fn2 = (funcion, valor) => {
        console.log("algo pasa aquí");
        console.log(funcion(valor));
    }
    fn2(fn,"que se llama desde otra función")
//Funciones puras: una funcion pura es aquella fucinon que no tiene efectos colaterales, osea que
//siempre van a tener el mismo resultado.
    let beer = {
        name: "Taquiña"
    }
    function insertAlcohol( b, quantity ){
        /*ANTES:
        b.alcohol = quantity;
        return b;*/
        let beer = structuredClone(b)//clona un objeto a profundidad
        beer.alcohol = quantity;
        return beer; //Ya no hay efectos colaterales
    }
    console.log(beer);//<--los objetos van por referencia
    console.log(insertAlcohol(beer, 7.6));//<-- en esto punto estamos modificando el objeto (YA NO)
    console.log(beer);//<---- el objeto a mutado

    console.log("OBTENER LA FECHA DE MAÑANA:");
    const getTomorrow = () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow;
    }
    const getTomorrowPure = (date) => {
        const tomorrow = new Date(date);
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow;
    }
    const myDate = new Date('2021-01-01 00:00:01')
    console.log(getTomorrow());
    console.log(getTomorrowPure(myDate));

    console.log('IMPERATIVA VS DECLARATIVA:');
    //forma imperativa
    const numeros=[1,2,3,4,5,3,6,7,3,3,3];
    const number = 3;
    let quantity = 0;
    for(const n of numeros){
        if(n == number){
            quantity++;
        }
    }
    console.log(`el numero 3 se repite ${quantity} veces`);
    //forma declarativa
    let quantity2 = numeros.filter(n => n === number).length
    console.log(`el numero 3 se repite ${quantity2} veces`);

    //forma imperativa
    const numbersX2 = [];
    for(const n of numeros){
        numbersX2.push(n*2);
    }
    console.log(numbersX2);
    //forma declarativa
    const numbersX2D = numeros.map(n => n * 2)
    console.log(numbersX2D);
}

module.exports.progFun = progFun;