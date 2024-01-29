//Filter

const numbers1 = [1, 2, 3, 4, 5, 6, 7]

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0
})

console.log(evenNumbers) // [2, 4, 6]


const strings1 = ['hola', 'adiós', 'casa', 'coche', 'perro', 'gato']

// en las cadenas de texto podemos usar el método `includes`
// para saber si una cadena contiene otra:
const stringsWithA = strings1.filter(string => string.includes('a'))

console.log(stringsWithA) // ['hola', 'adiós', 'casa', 'gato']



//Map

const numbers2 = [1, 2, 3]

const doubleNumbers = numbers2.map((number) => {
  return number * 2
})

console.log(doubleNumbers) // [2, 4, 6]


const strings2 = ['hola', 'javascript', 'midu', 'programación']

const stringsLength = strings2.map((string) => string.length)

console.log(stringsLength) // [4, 10, 4, 12]



//Map+Filter


const numbers3 = [1, 2, 3, 4, 5, 6, 7]

const numsGreaterThanFive = numbers3
  .map(number => number * 2) // [2, 4, 6, 8, 10, 12, 14]
  .filter(number => number > 5) // [6, 8, 10, 12, 14]

console.log(numsGreaterThanFive) // [6, 8, 10, 12, 14]


const numbers4 = [1, 2, 3, 4, 5, 6, 7]

const doubleEvenNumbers1 = numbers4
  .filter(number => number % 2 === 0) // [2, 4, 6]
  .map(number => number * 2) // [4, 8, 12]

console.log(doubleEvenNumbers) // [4, 8, 12]



//Reduce
const numbers5 = [1, 2, 3]

const sum = numbers5.reduce((accumulator, currentNumber) => {
  return accumulator + currentNumber
}, 0) // <- el 0 es el valor inicial

console.log(sum) // 6



const numbers6 = [1, 2, 3, 4, 5, 6, 7]

const doubleEvenNumbers2 = numbers6.reduce((accumulator, currentNumber) => {
  const isEven = currentNumber % 2 === 0
  const doubled = currentNumber * 2
  const isGreaterThanFive = doubled > 5

  // si es par y mayor que 5, lo añadimos al array
  if (isEven && isGreaterThanFive) {
    // para ello devolvemos un nuevo array con el valor actual
    return accumulator.concat(doubled)
  } else {
    // si no, devolvemos lo que ya teníamos, se tiene que devolver obligatoriamente
    return accumulator
  }
}, []) // <- el array vacío es el valor inicial

console.log(doubleEvenNumbers) // [8, 12]



//El siguiente codigo hace lo mismo pero sin usar el .reduce y creando una nueva constante
const doblarNumerosPares = []

function doblarNumerosPare(numbers) {
  for(let i = 0; i < numbers.length; i++) {
    console.log("Ahora le toca al numero: " + numbers[i])
    if (numbers[i] % 2 === 0 && numbers[i] * 2 >= 5) {
      doblarNumerosPares.push(numbers[i]*2)
      console.log("Este numero es pusheado: " + numbers[i]*2)
    }
  }
  return doblarNumerosPares
}