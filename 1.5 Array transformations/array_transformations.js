//Ejercicio 1
const primerArr = [1, 2, 3, 4];
const segundoArr = primerArr.map((mult) => mult * 2);
//console.log(segundoArr)
/*-------------------------------------------------------------------------------------------------------------------------------*/

//Ejercicio 2
const numeros = [1, 2, 3, 4];
const pares = numeros.filter((par) => par % 2 === 0);
//console.log(pares)
/*-------------------------------------------------------------------------------------------------------------------------------*/

//Ejercicio 3
const variosNumeros = [1, 10, 8, 11];
const numerosAltos = variosNumeros.find((alto) => alto > 10);
//console.log(numerosAltos)
/*-------------------------------------------------------------------------------------------------------------------------------*/

//Ejercicio 4
const reducir = [13, 7, 8, 21];
const suma = reducir.reduce((num, total) => num + total, 0);
//console.log(suma)
/*-------------------------------------------------------------------------------------------------------------------------------*/

//Ejercicio 5
const arr5 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
const oneLine = arr5
  .filter((mayor) => mayor >= 10)
  .map((mayor) => mayor * 2)
  .reduce((mayor, total) => mayor + total * 2, 0);

//console.log(oneLine)
/*-------------------------------------------------------------------------------------------------------------------------------*/

//Ejercicio 6
const arr6 = [11, 12, 13, 14];
const todos = arr6.every((todo) => todo > 10);
//console.log(todos) //true
const algunos = arr6.some((alguno) => alguno > 10);
//console.log(algunos) //true
