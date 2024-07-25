//                              DECORATORS
/*
¿Qué son y para que siven?
Los son funciones especiales dentro de JavaScript que te va a permitir extender las clases, 
eso incluye sus metodos, propiedades de clase, los geters, los seters y los accesos, lo que nos permite añadir
funcionalidad, cambiar funcionalidades e incluso remplazar los valores que iban a dar las funciona-
lidades de dichas clases, en conclusión podemos decir que los decoradores estan ligados a las clases;
ya que las efectan  a sus metodos, propiedades y accesos.
*/
function logger(value, context) {
    console.log(value, context);
}

@logger //5. kind = class
class Persona {
    @logger
    weigth = 75 //1. kind = field

    @logger
    getWeigth() { //4. kind = method
        return this.weigth
    }

    @logger
    get peso() {return this.weigth} //3. kind = getter

    @logger
    set peso(value) {this.weigth = value} //2. kind = setter
}