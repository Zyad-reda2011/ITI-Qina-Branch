//constructor function

// function Employee(id, name, sal) {
//   this.name = name;
//   this.id = id;
//   var salary = sal;

//   this.getSalary=function(){
//     return salary;
//   }

//   this.setSalary=function(val){
//     salary=val;

//   }

//   //method private
//   function calculateTax(){
//     console.log(salary*.2);

//   }
// calculateTax();

// ///
// ///x(1,2) sum
// //x(2,string) print
// //x() msg
// this.x=function(){
// if(arguments.length==2){
//     if(typeof arguments[0] =="number" && typeof arguments[1]=="number"){
//         console.log(arguments[0]+arguments[1]);
//     }else{
//         console.log(arguments[0] ,arguments[1]);

//     }
// }else{
//     console.log("no arguments");

// }
// }

///
//   this.print=function(){
//     console.log(this.name,this.salary);

//   }
// }

// Employee.prototype.print=function(){
//     console.log(this.name,this.salary);
// }

// var emp1=new Employee(1,"ali",1000)
// var emp2=new Employee(2,"karim",20000)
// console.log(emp1);

// {
//     id:1,
//     name:ali
//     sal:222,
//     print:function(){
//     console.log(this.name,this.salary);

//   }
// }

// {
//     id:2,
//     name:
//     sal:255552,
//     print:function(){
//     console.log(this.name,this.salary);

//   }
// }

// function test(n1,n2){
//  console.log(`first ${n1+n2}`);

// }

// function test(n1){
//     console.log(`second ${n1}`);

// }

// test(5,3)

////////////////////////////////////////

// function Person(nm,ag){
//     this.name=nm;
//     this.age=ag;
// }

// Person.prototype.print=function(){
//     console.log(this.name,this.age);
// }

// function Student(nm,ag,id,deg){
//     Person.call(this,nm,ag)
//     this.id=id;
//     this.degree=deg;
// }
// Student.prototype= Object.create(Person.prototype)
// Student.prototype.display=function(){
//     console.log(this.id,this.degree);

// }

// Student.prototype.constructor=Student;

// var p1=new Person("ahmed",20)
// var std1=new Student("mona",20,3,50)

//////////////////////////////////////////////

// class Book{
//     #id;
//     static count=0
//     constructor(title,author,id){
//         this.title=title;
//         this.author=author;
//         this.#id=id;
//         Book.count++;
//     }

//     set id(val){
//         this.#id=val;
//     }

//     get id(){
//         return this.#id
//     }

//     static getCount(){
//         console.log(Book.count);

//     }

//     printData(){
//         console.log(this.title,this.author);
//     }

// }

// let b1=new Book("js","aaaaa",1)
// let b2=new Book("design pattern","bbbbb",3)

//////////////////////////

import {DigitalProduct as dp ,test} from "./DigitalProduct.js"
import * as lib from "./DigitalProduct.js"



lib.test()

// var p=new Product("online course",100);
var DP=new lib.DigitalProduct("course",1000,60);
console.log(DP);
