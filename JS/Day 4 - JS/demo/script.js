// var subject = undefined;
// var x = undefined;
// var isStudent = undefined;
// function display() {
//   console.log("hello world");
// }

//scope in js
//global scope
// var student = "mohammed"; //any variable declared in the script page outside {} is called global scope  global variable can be used anywhere in the page
// console.log(student);

// function display() {
//   console.log(student);
// }
// display();
//function scope
// function hello() {
//   var y = "ahmed"; //any variable declared  inside the function only the function can use it cant use it outside in the global
//   console.log(y);
// }
// // console.log(y);
// hello();
// function display() {
//   var z = 10;
//   function hello() {
//     if (z > 5) {
//       console.log(z); //this will print 10 because z is declared inside the function
//     }
//   }
//   hello();
// }

// // {}
// display();
// //block scope

// if (true) {
//   let x = 10;
//   console.log(x);
// }

// console.log(x);

//hoisting

// console.log(subject);
// console.log(x);
// console.log(isStudent);

// display();
// // var subject = "math";
// // var x = 10;
// // var isStudent = true;
// function display() {
//   console.log("hello world");
// }

// display();

//-------------------------------------------------------------------//
//primitive data types in js
// var string = "mohammed"; //literal creation of string
// //string => object
// // console.log(typeof string);
// // var str = new String("ahmed"); //object creation of string
// // console.log(str);
// console.log(string.length); // length of the string
// //methods
// var x = "              I love           JavaScript.         ";
// // console.log(string.charAt(2)); //charAt gives me the character of the index i pass to it
// // console.log(string.indexOf("h")); //indexOf gives me the index of the character i need to find
// // console.log(x.substring(2, 6)); //substring gives me piece of the string i need to find
// // console.log(x.substring(2)); //if i pass one parameter it will print from the index to the end of the string
// // // console.log(x.replace("love", "hate"));
// // //chaining
// // var start = "Do you";
// // console.log(start + " " + x.substring(2).replace(".", "?"));
// console.log(x.toUpperCase());
// console.log(x.toLowerCase());
// // console.log(x.split(" "));
// // console.log(string.split(""));
// // var hoppy = "i,love,reading";
// // console.log(hoppy.split(","));
// console.log(x.trim());

//---------------------------------------------//
//array methods in js
// var arr = [1, 2, 3]; //literal creation of array
// console.log(typeof arr);
// var arr2 = new Array(1, 2, 3); //constructor creation of array
// console.log(arr2);

// console.log(arr.length); => property of the array not a method
// console.log(arr[1]);
//looping over an array
// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]); //loop over the array
// }
// for (var piece of arr) {
//   console.log(piece); //loop over the values of the array
// }
// for (var index in arr) {
//   console.log(index); //loop over the indices of the array
// }

//methods
// console.log(arr.push(2)); //push to add a value to the end of the array
// console.log(arr);
// console.log(arr.pop());//pop to remove a value from the end of the array
// console.log(arr);
// console.log(arr.unshift(0));
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);

var arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.join("-"));
// console.log(arr.toString());
// console.log(arr.reverse());
// console.log(arr);
console.log(arr.slice(1, 4));
var grades = [18, 20, 3, 5, 16, 2];
//bonus task search how to sort an array
