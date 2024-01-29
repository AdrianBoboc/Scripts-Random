const num = [1,2,3,4,[5,6,7,8,9]]



const mostrarArray = asd => num.forEach(array => {
  if (Array.isArray(array)) {
    array.forEach(arrayInterno => console.log(arrayInterno))
  }
  else {
    console.log(array1)
  }
})

/*
      Lo de arriba hace lo mismo que lo de abajo, solo que una es una funcion anonima metira en una constante y la otra es una funcion en si
*/

function mostrarArray() {
  num.forEach(array => {
  if (Array.isArray(array)) {
    array.forEach(arrayInterno => {
      console.log(arrayInterno)
    })
  }
  else {
    console.log(array)
  }
})}