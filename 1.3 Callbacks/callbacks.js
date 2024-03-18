//Ejercicio 1

function modify(number, callback){
    callback(number)
 }
 modify(100,function(number){
  console.log(`Soy un numero callback ${number}`)
 })
 
/*-------------------------------------------------------------------------------------------------------------------------------*/
 //Ejercicio 2
 
 function calculadora(num1,num2, callback){
   return callback(num1,num2)
 }
 let resultado = calculadora(2,4,function(num1,num2){
   return num1 + num2
 })
 
 console.log(resultado)
 
 /*-------------------------------------------------------------------------------------------------------------------------------*/
 //Ejercicio 3
 
 function esperarIsaludar(name,callback){
   setTimeout(function(){
     callback(name);
   },2000)
 }
  
 let saludo = esperarIsaludar('Hero', function(name){
    console.log(`Hola, ${name}`)
   })
 
   /*-------------------------------------------------------------------------------------------------------------------------------*/
 //Ejercicio 4

 const procesarElements = (arr, callback)=> {
  arr.forEach(nums => callback(nums))
}

let numbers = [25,27,33,45]

procesarElements(numbers, function(nums){
  console.log(nums)
})
 
/*-------------------------------------------------------------------------------------------------------------------------------*/ 
 //Ejercicio 5
 
 function procesarElements(arr,callback){
   arr.forEach(nums => callback(nums) )
 }
 const numeros = [1, 2, 3, 4, 5];
 
 procesarElements(numeros, function(num){
   console.log(num)
 })
 
 