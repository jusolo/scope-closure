//Variables

var a; //Declarando
var b = "b"; //Declaramos y asignamos
b = "bb"; //Reasignacion
var a = "aa"; //Redeclaracion

//Global Scope
var fruit = 'Apple'; //Global

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = 'Colombia'; //Global
  console.log(country);
}

countries();
console.log(country);