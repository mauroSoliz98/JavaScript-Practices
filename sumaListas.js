/*
Porfavor escribe una función que sume una lista, pero que quitecualquier elemento duplicado 
dentro de la lista
Para la lista [3,4,3,6] el resultado de la fución debería ser 10
mientras que para [1,10,3,10,10] el resultado deberia ser 4
 */

function sumNoDuplicates(numList) {
    let noDuplicados = [] 
    numList.map(item => 
        numList.indexOf(item) === numList.lastIndexOf(item) ? noDuplicados.push(item) : null
    )
    let sumaArray = noDuplicados.reduce((acumulador, numero) => acumulador + numero, 0);
    return console.log(sumaArray);
}

sumNoDuplicates([3, 4, 3, 6])