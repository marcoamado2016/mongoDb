//Ejemplo 1
/*
console.log("----------Ejemplo 1----------");
let variableLet=5;
//var variableLet=3; //No puede declarar dos variables de tipo Let en el mismo ambito
                     //Si lo puedo hacer en un metodo o otro bloque 

function Metodo1(){


    let  variableLet=3;
    console.log("VariableLetLocal "+variableLet)
}
Metodo1();
console.log("varibleLet global=>"+variableLet);

var variableVar=100;
//var variableVar=200;
function Metodo2(){


    var variableVar=300;
}
Metodo2();
console.log("variableVar global "+variableVar);

*/
//Ejemplo 2
/*
console.log("----------Ejemplo 2----------");
let variable1=5;
var variable2=10

function Metodo3(){
    let variable1=4;
    var variable2=1;
    console.log("Variable1 "+variable1);
    console.log("Variable2 "+variable2);
}

Metodo3(); //Las variables dejan de existir al terminar de ejecutar el metodo
console.log("Variable1 "+variable1);
console.log("Variable2 "+variable2);
*/
//Ejemplo 3

/*
console.log("----------Ejemplo 3----------");

let a = 5;
var b = 10;
if (a === 5) {
  let a = 4; // El alcance es dentro del bloque if
  var b = 1; // El alcance es global
  console.log("a "+a);  // 4
  console.log("b "+b);  // 1
} 
console.log("a "+a);  // 5
console.log("b "+b);  // 1

*/
//Ejemplo 4
/*
console.log("----------Ejemplo4----------");
var a = 5;
var b = 10;
let a = 4; 
var b = 1;

console.log("a "+a);  // 5
console.log("b "+b);  // 1

*/