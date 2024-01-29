//
//    Objetos
//

/*
Los objetos en JavaScript son una colección de propiedades y métodos que definen un elemento a través de una clave y un valor.
Por ejemplo, si pensamos en una persona, podemos definir sus propiedades como
su nombre, su edad, su altura, su peso, etc.
Y sus métodos como caminar, correr, saltar, etc.
*/



//
//    Declaración y asignación de objetos
//

/*
Para declarar un objeto usamos las llaves {} y dentro las propiedades y métodos separados por comas ,.
Cada propiedad o método se define con una clave y un valor separados por dos puntos :.

Por ejemplo, vamos a crear un objeto que represente a una persona:

Las propiedades y métodos de un objeto pueden ser de cualquier tipo de JavaScript, incluso otros objetos o arrays.
Y, claro, como hemos comentado antes, también podemos tener funciones. Cuando una función es parte de un objeto se le llama método.
*/

const persona = {
  name: 'Dani',
  'full name': 'Dani Gutierrez',
  age: 30,
  isWorking: true,
  family: ['Miguel', 'María'],
  address: {
    street: 'Calle la piruleta',
    number: 13,
    city: 'Barcelona'
  },
  walk: function() {
    console.log('Estoy caminando')
  }
}


//Para acceder a las propiedades y métodos de un objeto usamos el punto . y el nombre de la propiedad o método.
console.log(persona.name)

//Si intentamos acceder a una propiedad o método que no existe, nos devolverá undefined.
console.log(persona.username)

//Puedes usar variables para acceder a las propiedades y métodos de un objeto.
//Para ello, tienes que usar la notificación por corchetes [].
let property = "name";
console.log(persona[property])

//También necesitas usar los corchetes si la clave de la propiedad o método tiene espacios o caracteres especiales.
console.log(persona['full name'])

//Siempre que puedas, evita usar espacios o caracteres especiales en las claves de las propiedades y métodos de un objeto.
//Aunque se puede, es más complicado de leer y de escribir.



//Igual que las propiedades, puedes acceder a los métodos de un objeto usando cualquiera de las dos formas anteriormente comentadas:
persona.walk() // -> Estoy caminando

let method = 'walk'
persona[method]() // -> Estoy caminando

//persona[method]() parece un poco raro, pero si lo separas parte por parte, verás que tiene sentido.
//persona es el objeto.
//Accedemos a la propiedad method del objeto persona con persona[method].
//Y, finalmente, ejecutamos la función con persona[method]().
//Es decir, estamos ejecutando persona.walk().


//
//    Añadir y modificar propiedades de un objeto
//

//Igual que podemos acceder a las propiedades de un objeto, podemos añadir nuevas propiedades o modificar las existentes.
persona.age = 18
console.log(persona.age) // -> 18
//Dará como resultado 18 en lugar de 30 debido a que ha sido modificada la edad
//En caso de que no tuviese la edad especificada, se añadirá a dicha persona
delete persona.age
//Esto borra la propiedad age de la persona






//Ejercicio interactivo

/*
Tenemos una función que recibe dos parámetros. name y subs. Haz que la función devuelva un objeto con la siguiente información:

  name con el valor del parámetro name
  subscribers con el valor del parámetro subs
  hash, con el valor de la longitud del string name multiplicado por el parámetro subs
  Un método getStatus que devuelva el texto El canal de <name> tiene <subs> suscriptores.
    Por ejemplo, para name = 'Dani' y subs = 100, el método getStatus devolvería El canal de Dani tiene 100 suscriptores.

¡Ojo! El método getStatus debe devolver el texto, NO imprimirlo por consola.
*/

function createObject(name, subs) {
  // tu código aquí
  return {
    name: name,
    subscribers: subs,
    hash: name * subs,
    getStatus: function() {
      return "El canal de " + name + " tiene " + subs + " suscriptores"
    }
  }
}