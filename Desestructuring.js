//                              DESESTRUCTURACIÓN 
/*
La sintaxis de desestructuracion es una expresión de Java Script incluida con ES6, esta expresión
permite desempacar, desemvolver valores de arreglos o propiedades de objetos en dististas variables
osea que podemos introducir datos de arreglos y objetos a distintas variables. 
*/
const desestructuracion = () => {
    const arreglo=[1, 2, 3, 4, 5]
    
    const [valor1, valor2, valor3] = arreglo
    console.log(valor1);

    const dias = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]
    const [dia1, ...restoDias] = dias;
    console.log(dia1);
    console.log(restoDias)

    //Con objetos
    console.log("Desestructuracion de objetos:");
    const persona={
        id: 1,
        nombre: "Michael"
    }
    const {id, nombre} = persona
    console.log(nombre);
    
    //usando la desestructuracion para acceder a las propiedades y los valores del objeto
    console.log("Desestructuración para acceder a las propiedades y valores del objeto:");
    const cadena = "Hola mundo"
    const {length} = cadena
    console.log(length)

    //Otros ejemplos
    console.log("OTROS EJEMPLOS");
    const x = [1,2,3,4,5,6,7];
    const [y, z] = x;
    console.log(y);
    console.log(z); 

    const obj = { a: 1, b: 2 };
    const { a, b } = obj;
    // is equivalent to:
    // const a = obj.a;
    // const b = obj.b;
}
module.exports.desestructuracion = desestructuracion;