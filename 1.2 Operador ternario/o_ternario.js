//Ejercicio 1

const puedeConducir = (edad) => {
  return edad >= 18 ? "Puedes conducir" : "No puedes conducir";
};

/*-------------------------------------------------------------------------------------------------------------------------------*/
//Ejercicio 2

let num1 = 1;
let num2 = 2;

num1 > num2 ? "num1 es mayor" : "num2 es mayor";

/*-------------------------------------------------------------------------------------------------------------------------------*/
//Ejercicio 3
const encontrarMaximo = (a, b, c) => {
  return a > b
    ? a > c
      ? "a es mayor"
      : "c es mayor"
    : b > c
    ? "b es mayor"
    : "c es mayor";
};

/*-------------------------------------------------------------------------------------------------------------------------------*/
//Ejercicio 4

const parOImpar = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 == 0 ? console.log("es par") : console.log("es impar");
  }
};
