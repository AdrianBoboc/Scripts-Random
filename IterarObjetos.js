//
//Iterando Objetos en JavaScript
//

//El manejo de objetos es uno de los pilares en JavaScript
//y es crucial conocer cómo podemos iterar o recorrer los mismos.
//Existen varias formas de hacerlo y en esta clase vamos a revisar algunas de las más comunes:
//el bucle for...in y los métodos Object.keys(), Object.values() y Object.entries().


//
//Iterando con for...in
//

const spiderman1 = {
  name1: 'Spidey',
  universe1: 42,
  powers1: ['web', 'invisibility', 'spider-sense']
}
//El orden de las propiedades puede no respetarse
for (const property in spiderman1) {
  console.log(`${property}: ${spiderman1[property]}`);
}
//El bloque anterior dará el siguiente log:
// -> name: Spidey
// -> universe: 42
// -> powers: web,invisibility,spider-sense

//No confundas el bucle for...in con el de for...of que vimos en la sección de arrays.
//El primero itera sobre las propiedades enumerables de un objeto,
//mientras que el segundo itera sobre los elementos de un objeto iterable (como los elementos de un array, por ejemplo).



//
//Transformar un objeto en un array
//

//A veces queremos transformar un objeto en un array para poder iterar sobre él.
//Para esto podemos utilizar el método Object.keys(), Object.values() o Object.entries().

//Cada uno de estos métodos retorna un array,
//pero cada uno de ellos contiene elementos diferentes.
//Vamos a verlos uno por uno.



//
//Iterar con Object.keys()
//

//El método Object.keys() retorna un array con las propiedades enumerables de un objeto.

const spiderman2 = {
  name2: 'Spidey',
  universe2: 42,
  powers2: ['web', 'invisibility', 'spider-sense']
}

const properties2 = Object.keys(spiderman2)

console.log(properties2.length) // 3

properties2.forEach(property => {
  console.log(property)
})

// -> name
// -> universe
// -> powers

//Este código hace algo muy similar al anterior,
//pero utilizando Object.keys() para obtener las propiedades del objeto.

/*
  ¿Qué son las propiedades enumerables?
  Por defecto, cuando añadimos propiedades a un objeto, estas son enumerables,
  es decir, que se pueden iterar sobre ellas.
  Sin embargo, como veremos más adelante, podemos crear propiedades que, por lo que sea,
  nos interesa que no sean enumerables. A veces estas son más de uso interno,
  como métodos auxiliares que el propio lenguaje JavaScript tiene,
  y no queremos que aparezcan cuando iteramos sobre un objeto.
*/



//
//Iterando con Object.values()
//

//El método Object.values() retorna un array con los valores correspondientes a las propiedades enumerables de un objeto.

const values3 = Object.values(spiderman3)

values3.forEach(value => {
  console.log(value)
})

// -> Spidey
// -> 42
// -> [ 'web', 'invisibility', 'spider-sense' ]
//Como ves, la diferencia con Object.values() es que este método retorna los valores y Object.keys() retorna las propiedades.



//
//Iterando con Object.entries()
//

//El método Object.entries() retorna un array de arrays, donde cada subarray es un par [propiedad, valor] correspondiente a las propiedades enumerables de un objeto.

const entries4 = Object.entries(spiderman4)

entries4.forEach(entry => {
  console.log(entry)
})

// -> [ 'name', 'Spidey' ]
// -> [ 'universe', 42 ]
// -> [ 'powers', [ 'web', 'invisibility', 'spider-sense' ] ]


//Lo interesante es que este método nos da acceso tanto a las propiedades como a los valores.
//Lo puedes ver más claro en el siguiente ejemplo:

const entries5 = Object.entries(spiderman5)

entries5.forEach(entry => {
  const property5 = entry[0]
  const value5 = entry[1]

  console.log(`${property5}: ${value5}`)
})


//
//Ejercicio practico
//

//Tienes una función que recibe un objeto como parámetro.
//La función debe retornar un array con el nombre de las propiedades que su tipo sea boolean.

//Por ejemplo, para el objeto { a: true, b: 42, c: false }
//la función debe retornar ['a', 'c']
//ya que son las dos propiedades que tienen valores booleanos.

const obj1 = { "a":true, "b":true, "c":false }

const obj2 = { a: 1, b: 2, c: 3}

const obj3 = { a: true, b: 2, c: false }


function getKeysOfBooleanValues(obj) {
  // tu código aquí

  const booleanPropertys = []

  for (const property in obj) {
    if (obj[property] === true || obj[property] === false) {
      console.log("Utilizando el property: " + property)
      console.log("Utilizando el obj[property]: " + obj[property])
      booleanPropertys.push(property)
    }
  }
  
  return booleanPropertys
}

