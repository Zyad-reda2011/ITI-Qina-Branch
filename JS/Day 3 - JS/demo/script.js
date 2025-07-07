//console.log("hamada");
// this is a comment
/*
console.log("Hello, World!");
console.log("This is a JavaScript file.");
*/
/* this is a multi line comment 
console.log("This is a multi-line comment.");
*/

//dataTypes in js
//primitive data types
// var name = "ahmed"; // string
// var age = 25; //number => integear
// var pi = 3.14; //number => float
// var isEmployee = true; //boolean
// var isAvailable = false; //boolean
// var nullDataType = null; //null
// var undifinedDataType; //undifined

// non-primitive data types reference types
// var hobbies = ["reading", "coding", "gaming"]; //array
// var ages = [25, 30, 35]; //array of numbers
// var arr =  [1, "hello" , boolean , [1, 2, 3]]; //array with mixed data types
// var person = {
//     name: "ahmed",
//     age:24,
//     isEmployee: true,
// }

//varaibles => container for data
// var x = "ahmed"; //string
//var => keyword to declare the variable
//x => variable name
//= => the right side is assigned to the left side
//"ahmed" => the value of the variable

//input and output
// console.log("Hello, World!"); //output to the console

// alert("hello to iti"); //alert box will appear in the browser window
// this will pause the execution of the script until the alert is closed
// console.log("Hello, World!"); //this will not be printed until the alert is closed

// var result = confirm("are you sure"); //confirm model will appear in the browser window and will return true or false
// console.log(result);
// alert(123); //alert will turn the number to string
// alert(true); //alert will turn the boolean to string
// alert(null); //alert will turn the null to string

// var name = prompt("enter your name", "enter your name");
// console.log(name); //this will print the name entered by the user in the console

// document.write("hello world");
// document.write("<h1>hello world</h1>");

//------------------------------------------------------------------------------

//operators
// arithmetic operators
// var sum = x + y; //addition output 7
// console.log(sum);
// var sub = x - y; //substraction  output 3
// var mul = x * y; //multiplication output 10
// var div = x / y; //division output 2.5
// var mod = 5 % 2;
// console.log(mod); //modulus output 0
// var exp = x ** y;
// console.log(exp); //exponentiation output 25
// var inc = x++; // => x = x +1
// console.log(inc); //output 5
// console.log(x); //output 6
// var inc = ++x;
// console.log(inc);
// console.log(x);
// var dec = --x; //decrement
// var dec2 = x--; //decrement

//assignment operators
// var a = 5;
// a += 2; //=> a = a + 2
// // console.log(a); //output 7
// a -= 2; // => a = a - 2
// // console.log(a); //output 5
// a *= 2; // => a = a * 2
// // console.log(a); //output 10
// a /= 2; // => a = a / 2
// // console.log(a); //output 5
// a %= 2; // => a = a % 2
// // console.log(a); //output 1
// a **= 2; // => a = a ** 2

//comparison operators

// var Equal = x == y;
// console.log(Equal); //output false
// var notEqual = x != y;
// console.log(notEqual); //output true
// var isGreater = x > y;
// console.log(isGreater); //output true
// var isLess = x < y;

// var isGreaterOrEqual = x >= y;
// var isLessOrEqual = x <= y;

// var strictEqual = x === y;
// console.log(strictEqual);
// var strictNotEqual = x !== y;

//logical operators
// var x = 5;
// var y = 2;
// var andOperator = x > y && x > 6;
// // console.log(andOperator);
// var orOperator = x < y || x > 6;
// console.log(orOperator);

// var name = "ahmed"; // string
// var age = 25; //number => integear
// var pi = 3.14; //number => float
// var isEmployee = true; //boolean
// var isAvailable = false; //boolean

// console.log(typeof name);
// console.log(typeof "hamada");
// console.log(typeof 25);
// console.log(typeof true);
// console.log(typeof null);

//coresion and concatenation
// var num = "5";
// var result = num + 5;
// console.log(result);
// //output "55" (string concatenation)
// var result2 = num - 3;
// var result3 = num * 2;
// console.log(result2); //output 2 (number subtraction)
// var name = "ahmed";
// console.log("hello " + name);

// control flow
//if statement
var x = 5;
var y = 2;
var z = 10;
// if (!false) {
//   console.log("X is bigger");
// }
//if => keyword to start
//() =>condition to check if true excute the code
//{} => code block to execute if the condition is true
//if else statement
// if (x > y) {
//   console.log("X is bigger");
// } else {
//   console.log("Y is bigger");
// }

// if (x > y) {
//   console.log("X is bigger");
// } else if (x < y) {
//   console.log("Y is bigger ");
// } else {
//   console.log("X is equal to Y");
// }

//switch statement
// switch (x) {
//   case x > y:
//     console.log("X is bigger");
//     break; //break to stop the execution of the switch statement

//   case x < y:
//     console.log("Y is bigger");
//     break;

//   case x == y:
//     console.log("X is equal to Y");
//     break;

//   case z > x:
//     console.log("Z is bigger than X");
//     break;

//   default:
//     console.log("No condition is met");
// }

//for loop
// for (var hamada = 0; hamada <= 5; hamada++) {
//   console.log(hamada);
// }
// for (var i = 5; i >= 0; i--) {
//   console.log(i);
// }
// while loop
// var i = 6;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// do while loop
// var j = 6;
// do {
//   console.log(j);
//   j++;
// } while (j <= 5);

//functions block of code that can be reused more than once
// function nameOfFunction(name) {
//   console.log("hello " + name);
// }
// console.log("hello ahmed")
// console.log("hello mohammed")
// nameOfFunction("ahmed");
// nameOfFunction("mohammed");

//built in objects
// console.log(isFinite(5));// used to check if its a number
// console.log(isNaN("666"));
// console.log(Number("123hello"));
// console.log(parseInt("hello123"));
// console.log(parseFloat("3.14"));
// console.log(String(66));
// console.log("ahmed");

//ternary operator
var result = 0 > 5 ? console.log("X is bigger") : console.log("Y is bigger");
