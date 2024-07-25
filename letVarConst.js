//                          VAR, LET Y CONST
/*
Las variables let y const se incorporaron al lenguaje JavaScript en la version de ES6(2015) a dife-
de var que ya se encontraba incorporado al lenguaje desde su salid, en este modulo veremos como 
funcionan var, let y const y que problemas soluciona.
*/
//Unos puede usar let como puede usar var pero al usar let, si nosotros no inicializamos la variable
//este sera por defecto "undifined", veamos algunos ejemplos

let x = 2
x += 40
console.log('Variable definida: ', x);

let a
console.log('Variable indefinida: ', a);

//Ahora echemos un vistaso a const 
const value = Math.random();
console.log(value < 0.5 ? "Heads":"Tails");
//const es una variable cuyo valor no puede ser cambiado y ademas este no tiene un valor
//predeterminado y es necesario inicializarlo.

//ALCANCES DE BLOQUE
//Las variables var tinen un alcanse mayor, ya que si tu declaras un var no solo tiene alcanse dentro
//de ese bloque si no que tambien fuera de el.

function jumpOut() {
    var a = [1,2,3]
    for(var i=0; i < a.length; ++i) {
        var value = a[i]
        console.log(value);
    }
    console.log('Outside loop ', value);//¿Por qué podemos usar value aquí?
}
jumpOut()

//Por el contrario const y let resuelven este problema teniendo un alcance de bloque 

function stayContained() {
    var a = [1,2,3]
    for(var i = 0; i < a.length; ++i) {
        let letvalue = a[i];
        console.log(letvalue);
    }
    console.log("Outside loop: ", letvalue);//ReferenceError: value no esta definido
}
stayContained()