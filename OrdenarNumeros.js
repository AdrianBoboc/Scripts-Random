const numeros = [5,20,2,25,7]


//De forma ascen dente
numeros.sort(function (a, b) {
  return a - b
})

//Hace lo mismo que la anterior pero más simple
numeros.sort((a, b) => a - b)

console.log(numeros)

//De forma decendente
numeros.sort(function(a, b) {
  return b - a
})

//Hace lo mismo que la anterior pero más simple
numeros.sort((a, b) => b - a)

//Esta linea hace lo mismo pero sin alterar el string original
let numerosOrdenados = numeros.toSorted((a, b) => a-b)

//Aquí usé el operador de propagacion para hacer una copia del array y luego ordenarlo en la constante copiaNumeros
const copiaNumeros = [...numeros]
copiaNumeros.sort((a, b) => a-b)
console.log(copiaNumeros)