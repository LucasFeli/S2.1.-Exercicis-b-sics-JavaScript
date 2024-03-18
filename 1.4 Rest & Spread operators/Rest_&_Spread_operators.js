//Ejercicio 1
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];
//console.log(array3)
/*-------------------------------------------------------------------------------------------------------------------------------*/

//Ejercicio 2
function suma(...num) {
  return num.reduce((total, numero) => total + numero, 0);
}
//suma(1,2,3,4)
/*-------------------------------------------------------------------------------------------------------------------------------*/

//Ejercicio 3
let objeto1 = {
  ciudad: "Barcelona",
  grupo: 12,
  clima: "templado",
};
let objeto2 = { ...objeto1 };
objeto2.ciudad = "Londres";

//console.log(objeto2)
//console.log(objeto1)
/*-------------------------------------------------------------------------------------------------------------------------------*/

//Ejercicio 4
let destructuracion = ["agua", "lluvia", "fuego", 25, 86, 79];
const [primero, segundo, ...restoDeDatos] = destructuracion;
//console.log(primero)
//console.log(segundo)
//console.log(restoDeDatos)
/*-------------------------------------------------------------------------------------------------------------------------------*/

//Ejercicio 5

function spread(...arg) {
  return arg;
}
let element = [65, 45, 85];

spread(...element);
/*-------------------------------------------------------------------------------------------------------------------------------*/

//Ejercicio 6
let animales = {
  tierra: "oso",
  cantidad: 220.0,
  aire: "aguila",
};

let deportes = {
  categoria: "futbol",
  jugadores: 22,
};
const nuevo = { ...animales, ...deportes };
console.log(nuevo);
