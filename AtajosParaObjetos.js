//
//Atajos para trabajar con objetos
//


//Trabajar con objetos es muy común en JavaScript. En esta clase vamos a ver algunos atajos que nos permiten trabajar con ellos de forma más cómoda, tanto a la hora de crearlos como a la hora de recuperar sus propiedades.
//
//Atajo al crear un objeto
//Imagina que quieres crear un objeto y que algunas de sus propiedades usen como valor algunas variables que ya tenemos.

const name1 = 'Spidey'
const universe1 = 42

const spiderman1 = {
  name1: name1,
  universe1: universe1,
  powers1: ['web', 'invisibility', 'spider-sense']
}
//En este caso, podemos usar un atajo para crear el objeto.
//Si la propiedad y la variable tienen el mismo nombre,
//podemos omitir el valor y dejar solo el nombre de la propiedad.

const name2 = 'Spidey'
const universe2 = 42

const spiderman2 = {
  name2, // <- automáticamente asigna el valor de la variable name
  universe2, // <- automáticamente asigna el valor de la variable universe
  powers3: ['web', 'invisibility', 'spider-sense']
}
//Fíjate que si tuvieramos powers fuera del objeto, podríamos crear el objeto en la misma línea:

const name3 = 'Spidey'
const universe3 = 42
const powers3 = ['web', 'invisibility', 'spider-sense']

const spiderman3 = { name3, universe3, powers3 }



//
//Destructuración: el atajo al recuperar propiedades
//



//En la anterior clase hemos visto que para recuperar una propiedad
//de un objeto podemos usar la notación de corchetes o la notación de punto:

const spiderman4 = {
  name4: 'Spidey',
  universe4: 42,
  powers4: ['web', 'invisibility', 'spider-sense']
}

console.log(spiderman4['name4']) // Spidey
console.log(spiderman4.name4) // Spidey
//A veces queremos recuperar el valor de la propiedad y guardarlo en una variable, para usarlo más adelante. Haríamos algo así:


const universe4 = spiderman4.universe4
console.log(universe) // 42

const powers4 = spiderman['powers'][1]
console.log(powers4) // 'invisibility'

//spiderman4['powers4'][1] de nuevo puede parecer un poco confuso, pero hay que separarlo en partes.
//spiderman4 es el objeto.
//Accedemos a la propiedad powers4 y como es un array, podemos acceder a su segundo elemento con [1].
//Y ahí está el valor que queremos: invisibility.


//A la hora de acceder a las propiedades existe un atajo llamado desestructuración (o destructuring en inglés)
//muy interesante que nos permite recuperar el valor de una propiedad y guardarlo en una variable de una.

//Lo importante es que tengamos en cuenta
//que la variable que se creará tendrá el mismo nombre que la propiedad que estamos recuperando.

const { universe5 } = spiderman5
console.log(universe5) // 42

//Además, puedes recuperar tantas propiedades como quieras, separándolas por comas.

const { universe6, name6, powers6 } = spiderman
console.log(universe6) // 42
console.log(name6) // 'Spidey'
console.log(powers6) // ['web', 'invisibility', 'spider-sense']




//
//Renombrar variables y valores por defecto
//



//Si quieres que la variable que se crea tenga un nombre diferente al de la propiedad, puedes hacerlo así:

const { universe7: universeNumber7 } = spiderman7
console.log(universeNumber7) // 42


//Lo que estamos haciendo es recuperar la propiedad universe pero crear la constante con el nombre universeNumber.

//Si la propiedad no existe, podemos asignarle un valor por defecto:

const { name8, isAvenger8 = false } = spiderman8
console.log(name8) // 'Spidey'
console.log(isAvenger8) // false

//El objeto que hemos creado antes no tenía la propiedad isAvenger,
//pero al recuperarla le hemos asignado un valor por defecto de false.
//Si no le hubiéramos asignado un valor por defecto, la variable isAvenger sería undefined.

//Así que si recuperamos una propiedad que no existe,
//la variable que se creará tendrá el valor por defecto que le hayamos asignado.
//Y lo hacemos usando el operador =.

//Esto es muy útil, por ejemplo,
//para recuperar opciones o configuración del usuario que quizás no ha definido todos los valores
//pero tenemos claro qué comportamiento queremos que tenga nuestra aplicación por defecto.


//
//Objetos anidados y atajo
//



//Ya sabemos que podemos tener un objeto dentro de un objeto:

const spiderman9 = {
  name9: 'Spidey',
  universe9: 42,
  powers9: ['web', 'invisibility', 'spider-sense'],
  partner9: {
    name9: 'Mary Jane',
    universe9: 42,
    powers9: ['red hair', 'blue eyes']
  }
}


//Para acceder a las propiedades de un objeto anidado, podemos usar la notación de corchetes o la notación de punto:

console.log(spiderman9.partner9.name9) // 'Mary Jane'
console.log(spiderman9['partner9']['name9']) // 'Mary Jane'


//Si queremos recuperar la propiedad name del objeto partner y guardarla en una variable, podemos hacerlo así:

const { partner10 } = spiderman10
const { name10 } = partner10
console.log(name10) // 'Mary Jane'


//Pero también podemos hacerlo en una sola línea:

const { partner11: { name11 } } = spiderman11
console.log(name11) // 'Mary Jane'

//Lo que estamos haciendo es: del objeto spiderman extrae la propiedad partner,
//y de esta, extrae la propiedad name. Como resultado sólo crearemos la variable name con el valor 'Mary Jane'.