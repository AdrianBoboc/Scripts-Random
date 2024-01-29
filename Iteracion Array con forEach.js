let frutas = ['manzana','platano','pera']

frutas.forEach((el, index) => {
  console.log('index: ' + index)
  console.log(el)
})

//La anterior funcion se puede resumie en o siguiente:

frutas.forEach(el => console.log(el))