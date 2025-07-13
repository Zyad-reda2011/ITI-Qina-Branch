// / var age =undefined
// let salary

// var test=undefined

// function sum(num1,num2){
//     console.log(num1+num2);

// }

// ----------------------
// / var let const

//redeclaration

// var userName="ali";
// var userName="aaaa";

// let age=20;
// let age=40//error

// const id=1;
// const id=2;

//inilization

// var x;
// x=10;
// let y;
// y=20;
// const z=10;
// // z=50;

// re assign

// var user="ahmed";
// user="aaaa"

// let userId=100;
// userId=200

// const userAge=20;
// userAge=30; //error

// hoisting

// console.log(age);
// var age=25;

// console.log(salary);

// let salary=1000;

// sum(20,10)
// function sum(num1,num2){
//     console.log(num1+num2);

// }

// test() ///error
// console.log(test);

// //expresion fun
// var test=function(){
//     console.log("test");

// }

// scope

// for(var i=0;i<5;i++){
//     console.log(i); //0 1 2 3 4

// }
// console.log(i); //5

// for(let i=0;i<5;i++){
//     console.log(i); //0 1 2 3 4

// }
// console.log(i); //error

// let ,const block scope

// {
//     let x=5;

// }

// console.log(x); //error

// var >>>>function scope

// function test(){
//     var num=50;

// }

// console.log(num); //error

// function test(){
//     let num=50;

// }

// console.log(num);//error

/////////////////////////

// template literal

// var name="ali";
// var id=5

// console.log("Welcome "+name+"your id is "+id);

// console.log(`Welcome ${name} your id is ${id}`);
// console.log(`Welcome ${20+6*10}`);
// console.log(`${sayHI()}`);

// function sayHI(){
//     return "Hello world"
// }

////////////////////////////////////

// string method

//startWith endWith  includes trimSTart trimEnd
// replaceALL padStart padEnd at()

// var str="Hello";

// console.log(str.startsWith("e",1));
//   console.log(str.endsWith("o",5));
//

// console.log(str.includes("l",1));

// trim()
// console.log("        aaaa        ".trimEnd());

// console.log(str.padEnd(10,"*"));

// console.log(str.replaceAll("l","_"));
// console.log(str.replaceAll(/l/g,"_"));

////////////////////////////

// destructuring

// var arr=[10,20,30,40];

// var ele1=arr[0];
// var ele2=arr[1];
// var ele3=arr[2];
// var ele4=arr[3];

// var [e1,e2,e3,e4]=arr;
// var [e1,,,e4]=arr;

// var obj={
//     userName:"Ali",
//     age:20
// }

// // console.log(obj.userName);

// var {age,userName:UN}=obj;

// var std={
//     stdName:"ali",
//     id:2,
//     track:{
//         trackName:"react js",
//         branch:"qena"
//     }
// }

// var {stdName,id,track:{trackName},track}=std;

/////////////////////

// function

//function statement

// function sum(num1,num2){
//     return num1+num2
// }

// var result= sum(2,5)
// console.log(result);

//anonymouns fun

// setTimeout(function(){
//     console.log("Hello World");

// },2000)

// var test=function(){
//     console.log("test");

// }

// test()

/////
// self invoked function IIEF

// (function(track){
// console.log(`hello from ${track}`);

// })("reactjs")

// var x=10

// var x="aaaa"

////////

// arrow function es6

// var test2=num=> num*10;

// console.log( test2(5));

// arguments

// function fun(){
// // console.log(arguments);

// // for(var i=0;i<arguments.length;i++){
// //     console.log(arguments[i]);
// // }

// for (const arg of arguments) {
//     console.log(arg);

// }

// }

// fun(10,20,30,40)
// fun(10,20,"hello")
// fun("ali")

// var x=()=>{
//     console.log(arguments); //error
// }
// x()

///////////////

// var emp = {
//   fName: "salma",
//   id: 50,
//   display: function () {
//     setTimeout(()=> {
//         console.log(this);    
//       console.log(this.fName, this.id);
//     }, 2000);
//   },
// };

// emp.display();


////

// closure

// function outer(){
//     var count=0;
//     return ()=>{
//         count++;
//         console.log(count);
        
//     }
// }

// var res=outer();
// res();


////////////////////////////

// rest paramters spread operator

// var arr=[1,2,3,4]
// var arr2=[5,6,7];

// var arr3=[...arr,...arr2] //


// var arr4= arr;

// arr[0]=50;
// console.log(arr4);

// var arr5=[...arr]
// arr[0]=50;
// console.log(arr5);

/////////////////////

// var arr=[1,2,3,4]

// arr.forEach(function(ele,index,a){
// console.log(ele);

// })



// function fun2(...numbers){
//     // console.log(numbers);
//     // console.log(arguments);
//     numbers.forEach(element => {
//         console.log(element);
        
//     });

// }

// fun2(10,20,30)
// fun2(50,60,80,90,50)




// var fun3=(...x)=>{
//     console.log(x);
    
//     // console.log(arguments);
    
// }
// fun3( 10,20,30)



////////////////////////////////

//call apply bind

// var emp1={
//     name:"ali",
//     age:50,
//     display:function(num){
//         console.log(this.name, this.age ,num);
        
//     }
// }

// // emp1.display();


// var emp2={
//     name:"mona",
//     age:30
// }

// // emp1.display.apply(emp2,[10])
// // emp1.display.call(emp2,50)
// var z= emp1.display.bind(emp2);
// // console.log(z);
// z(10)
// z(20)
// z(30)

// var arr=[1,2,3]

// arr.forEach((ele)=>{
// console.log(ele);

// })

// function test2(){

//     console.log(arguments);
//     // [].forEach((ele)=>{
//     //     console.log(ele);

//     // })

//     [].forEach.apply(arguments,[(ele)=>{
//         console.log(ele);

//     }])
    
// }

// test2(10,20,30)
// test2(10,20,30,50,60)

/////////////////////////////////

// array method

//find fillter findIndex inculdes map 

var arr=[2005,2010,1999,2002,1997]

// console.log(
//  arr.find((ele)=>{

//     return ele<2002;

// })
// );

// console.log( arr.filter((ele)=>{
// return ele<2002
// }));


// console.log( arr.findIndex((ele)=>ele==2010));
// console.log(arr.includes(2002));

// var newArr=arr.map((ele,index,a)=>
// {
// return 2025-ele
// })


// newArr.forEach((ele)=>{
// console.log(ele);

// })