var output = []
var count = 1 //Este debe ser una variable global
//El orden en que se ejecutan las variables importa mucho
//la primera vez que se ejecuta la funcion count vale 1
//añade ese 1 al array y luego count incrementa en 1 teniendo
//El valor de 2......
function fizzBuzz(){
    if(count % 3 === 0) output.push("Fizz")
    else if(count % 5 === 0) output.push("Buzz")
    else if(count % 2 === 0 && count % 5 === 0) output.push("FizzBuzz")
    else output.push(count)
    count++
   
    console.log(output)
}

fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();