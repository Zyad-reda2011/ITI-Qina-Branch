// var prName = prompt("Enter your name"); 
// var prAge = parseInt(prompt("Enter your age"))
// var prGrade = prompt("Enter your Grade")

// var obj =
// {
//     name :"",
//     age : 0,
//     grade : ""
// }

// var objectHandler = 
// {
//     set:function(target,prop,value)
//     {
//         if (prop in target)
//         {
//             if (prop == 'name')
//             {
//                 if(typeof value === 'string')
//                 {
//                     if(value.length < 10)
//                     {
//                         target[prop] = value
//                     }
//                     else
//                     {
//                         throw "name must be less than 10 characters long"
//                     }
//                 }
//                 else
//                 {
//                     throw "name must be a string"
//                 }
//             }
//             else if (prop == 'age')
//             {
//                 if(typeof value == 'number')
//                 {
//                     if(value >= 15 && value <= 25)
//                     {
//                         target[prop] = value
//                     }
//                     else
//                     {
//                         throw "age must be between 15 and 25"
//                     }
//                 }
//                 else
//                 {
//                     throw "age must be numerical"
//                 }
//             }
//             else if (prop == 'grade')
//             {
//                 if(typeof value == 'string')
//                 {
//                     if(value.length == 1)
//                     {
//                         if(value === 'A' || value === 'B' || value === 'C' || value === 'D' || value === 'F' )
//                         {
//                             target[prop]= value
//                         }
//                         else
//                         {
//                             throw "grade must be A,B,C,D or F"
//                         }
//                     }
//                     else
//                     {
//                         throw "grade must be a one character long"
//                     }
//                 }
//                 else
//                 {
//                     throw "grade must be A string"
//                 }
//             }
//         }
//         else
//         {
//             throw `${prop} does not exist`
//         }
//     }
// }

// var prox = new Proxy(obj,objectHandler)
// console.log(prox);


// try
// {
//     prox.name = prName
//     prox.age = prAge
//     prox.grade = prGrade
//     console.log(prox)
// }
// catch(error)
// {
//     console.log(error)
// }


//////////////////////////////////////


// var prName = prompt("Enter your name");
// var prAge = parseInt(prompt("Enter your age"))
// var position = prompt("Enter your position")
// var Salary = parseInt(prompt("Enter your Salary"))
// function Person(name,age)
// {
//         this.name = name
//         this.age = age
//         this.introduce = function() 
//         {
//             console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`)
//         }
// }
// // var person1 = new Person(prName,prAge)
// // person1.introduce()

// function Employee(name,age,position,salary)
// {
//     Person.call(this,name,age)
//     if(typeof position == 'string' && typeof salary == 'number')
//     {
//         this.position = position
//         this.salary = salary
//     }
    
// }
// Employee.prototype = Object.create(Person.prototype)
// Employee.prototype.constructor = Employee;
// Employee.prototype.work = function()
// {
//     console.log(`I am working as a ${this.position} and my salary is ${this.salary}.`)
// }

// var emp1 = new Employee(prName,prAge,position,Salary)
// emp1.introduce()
// emp1.work()


///////////////////////////
var t = prompt("Enter Title")
var d = parseInt(prompt("Enter Duration in weeks"))
var p = prompt("Enter platform")

import Course from "./Course";
import { OnlineCourse } from "./OnlineCourse";
var newObj = new OnlineCourse(t,d,p)
var obj = new Course(t,d)
newObj.display()
obj.display()