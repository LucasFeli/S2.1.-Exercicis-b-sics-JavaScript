//Ejercicio 1
let saludo = "Hola, mundo";

function texto() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(saludo);
    }, 2000);
  });
}

/*-------------------------------------------------------------------------------------------------------------------------------*/
//Ejercicio 2

texto().then((response) => console.log(response));

/*-------------------------------------------------------------------------------------------------------------------------------*/
//Ejercicio 3

let input = "natural";

function getSaludo() {
  return new Promise((resolve, reject) => {
    if (input !== "Hola") {
      reject(new Error("Palabra no permitida"));
    }
    setTimeout(() => {
      resolve(input);
    }, 2000);
  });
}

getSaludo()
  .then((response) => console.log(response))
  .catch((err) => console.log(err.message));

/*-------------------------------------------------------------------------------------------------------------------------------*/
//Ejercicio 4

const otroSaludo = async () => {
  const saludo = await texto();
  console.log(saludo);
};

otroSaludo();

/*-------------------------------------------------------------------------------------------------------------------------------*/
//Ejercicio 5

const otroSaludo2 = async () => {
  try {
    const saludo = await texto();
    console.log(saludo);
  } catch (err) {
    console.log("!Ha ocurrido un error inesperado");
  }
};

/*-------------------------------------------------------------------------------------------------------------------------------*/
//Ejercicio 6

let frase1 = "Soy la primera promesa";

function promesa1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase1);
    }, 2000);
  });
}

let frase2 = "Soy la segunda promesa";

function promesa2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase2);
    }, 3000);
  });
}

Promise.all([promesa1(), promesa2()]).then((result) => console.log(result));
