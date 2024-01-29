//
//    Algoritmo para encontrar el número mayor
//

/*
El primer algoritmo que vamos a ver es el de encontrar el número mayor de un array.
Para ello, vamos a crear una función que reciba un array de números y devuelva el número mayor.
*/

function findMaxAlgorithm(array) {
  let max = array[0] // recuperamos el primer elemento del array

  // recorremos el array desde el segundo elemento
  for (let i = 1; i < array.length; i++) {
    // ¿es el elemento actual mayor que el máximo?
    if (array[i] > max) {
      // si es así, lo guardamos como nuevo máximo
      max = array[i]
    }
  }

  // devolvemos el máximo número que hemos encontrado
  return max;
}

/*
En JavaScript podríamos usar el método Math.max para encontrar el número mayor de un array.
Se usaría así: Math.max(...array).
Pero por motivos didácticos, hemos creado nuestro propio algoritmo.
Siempre que puedas, te recomiendo usar Math.max en su lugar.
*/


//
//    Busqueda binaria
//

/*
Imagina que tienes un array de números ordenados de menor a mayor.
Por ejemplo, [11, 18, 23, 25, 48, 55, 88, 111, 120].
Si te pido que busques el número 55 en el array, ¿cómo lo harías?.

Una forma de hacerlo sería recorrer el array desde el principio hasta el final
y comprobar si el número que estamos buscando es igual al número actual.
Si es así, hemos encontrado el número. Si no, seguimos buscando.
*/

function findNumber(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return true
    }
  }

  return false
}


/*
Obviamente, podríamos usar el método .includes() para comprobar si un array contiene un elemento.
Pero por motivos didácticos, hemos creado nuestro propio algoritmo.
Siempre que puedas, te recomiendo usar .includes() en su lugar.
*/



//
//    Implementacion de la busqueda binaria
//

//Para aplicar la búsqueda binaria, tenemos que tener en cuenta que el array tiene que estar ordenado de menor a mayor. Si no, no funcionará.

/*
La idea de la búsqueda binaria es ir dividiendo el array en dos mitades.
Si el elemento que estamos buscando es mayor que el elemento de la mitad del array,
tenemos que buscar en la mitad derecha.
Si el elemento que estamos buscando es menor que el elemento de la mitad del array,
tenemos que buscar en la mitad izquierda.
Y así sucesivamente hasta encontrar el elemento que estamos buscando.
*/

function busquedaBinaria(array, elemento) {
  let index = 0 // primer elemento del array
  let final = array.length - 1 // último elemento del array a buscar
  
  // mientras el índice sea menor o igual que el final
  // seguiremos buscando
  while (index <= final) {
    // calculamos la mitad del array
    // como puede ser impar, usamos Math.floor para redondear hacia abajo
    const mitad = Math.floor((index + final) / 2)
    
    // si el elemento de la mitad es igual al elemento que estamos buscando
    // entonces hemos encontrado el elemento
    if (array[mitad] === elemento) {
      return mitad
    } else if (array[mitad] < elemento) {
      // si el elemento de la mitad es menor que
      // el elemento que estamos buscando
      // entonces tenemos que buscar en la mitad derecha
      index = mitad + 1
    } else {
      // si el elemento de la mitad es mayor que
      // el elemento que estamos buscando
      // entonces tenemos que buscar en la mitad izquierda
      final = mitad - 1
    }
  }
  
  // si llegamos hasta aquí, es que no hemos encontrado el elemento
  // devolvemos -1, para indicar que no se ha encontrado
  return -1
}

//Es lo mismo pero sin los comentarios
function busquedaBinaria(array, elemento) {
  let index = 0 
  let final = array.length - 1

  while (index <= final) {
    const mitad = Math.floor((index + final) / 2)
    if (array[mitad] === elemento) {
      return mitad
    } else if (array[mitad] < elemento) {
      index = mitad + 1
    } else {
      final = mitad - 1
    }
  }
  return -1
}

/*
En JavaScript podríamos usar el método Array.prototype.indexOf para encontrar el índice de un elemento en un array.
Se usaría así: array.indexOf(elemento).
Pero por motivos didácticos, hemos creado nuestro propio algoritmo.
Siempre que puedas, te recomiendo usar Array.prototype.indexOf en su lugar.
*/



//Ejercicio interactibo

/*
En una biblioteca queremos saber qué libro es el que menos páginas tiene y el que más páginas.
Por suerte, no hay dos libros con el mismo número de páginas.
Necesitamos que la función reciba un array de números, sin ordenar,
y que devuelva un array de dos posiciones con el índice del libro con menos páginas y el índice del libro con más páginas.
*/

const words = [2, 1, 3, 4, 5, 6, 7, 8, 9]

function minAndMaxWord(words) {
  // tu código aquí
  const min = Math.min(...words)
  const max = Math.max(...words)

  return [words.indexOf(min), words.indexOf(max)]
}