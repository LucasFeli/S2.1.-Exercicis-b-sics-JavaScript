//Ejercicio 1
let nombres = ['Anna', 'Bernat', 'Clara'];
nombres.forEach(cada => console.log(cada))

/*-------------------------------------------------------------------------------------------------------------------------------*/
//Ejercicio 2
let noms = ['Anna', 'Bernat', 'Clara'];

for(let nom of noms){
  console.log(nom)
}

/*-------------------------------------------------------------------------------------------------------------------------------*/
//Ejercicio 3
let numeros = [1, 2, 3, 4, 5, 6]
numeros.filter(pares => pares%2 === 0)

/*-------------------------------------------------------------------------------------------------------------------------------*/
//Ejercicio 4
let obj = { nombre: 'Ola', edad: 25, ciudad: 'Barcelona' };

for (let key in obj){
  let value = obj[key]
  console.log(`${key}: ${value}`)
}

/*-------------------------------------------------------------------------------------------------------------------------------*/
//Ejercicio 5
let numbers = [1, 2, 3, 4, 5, 6]

for(let mayor of numbers){
  if(mayor === 5 ){
    break;
  }
}
//console.log(mayor)

/*-------------------------------------------------------------------------------------------------------------------------------*/
//Ejercicio 6

let nomes = ['Anna', 'Bernat', 'Clara']

for(let[index,value] of nomes.entries()){
  console.log(`Indice: ${index}, Valor: ${value}`)
}



