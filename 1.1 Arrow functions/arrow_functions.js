//Ejercicio 1

const add = (a, b) => a + b;
add(3, 5);

//Ejercicio 2

const randomNumber = () => Math.floor(Math.random() * 100);

randomNumber();

//Ejercicio 3

class Person {
  constructor(name) {
    this.name = name;
  }

  saludo() {
    console.log("Hola," + this.name);
  }
}

let nombre = new Person("John");
nombre.saludo();

//Ejercicio 4

const printNumbers = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
};

let numeros = [1, 2, 3, 4, 5];

printNumbers(numeros);

//Ejercicio 5

const presentacion = (nombre, apellido) => {
  console.log(`Hola mi nombre es ${nombre} y mi apellido es ${apellido}`);
};

setTimeout(presentacion, 3000, "Julian", "Solo");
