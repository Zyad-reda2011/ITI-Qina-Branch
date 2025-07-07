//events in js
//events actions that reponse to user interaction with the page
//events controlled by event handler that are  attached to html elements as attributes or by the addEventListner method
//event handler name consist of  event name / type with word "on" in front of it like click => onclick , mouseover => onmouseover etc
//event handler is a function called when the event happens occurs
//<tag onevent="functionName()|| javascript code"></tag>
//sometimes u pass event parameter to the function to get information about the event that occured
// function consoleThis(e) {
//   console.log(e);
//   console.log(e.type);
// }
//=============================================================//
//XML vs JSON
//JSON Structure
/* 
{
    "key1":value1,
    "key2":value2
    }
    */
// var response = `
// {
//     "products": [
//         {
//             "id": 1,
//             "color": "white",
//             "price": 20
//         },
//         {
//             "id": 2,
//             "color": "black",
//             "price": 30
//         }
//     ]
// }`;
// console.log(response); //json string cant use it in js
// //JSON => Valid JS
// var data = JSON.parse(response);
// console.log(data);
// console.log(data.products[0].color);
// //JS => JSON
// var jsonData = JSON.stringify(data);
// console.log(jsonData);
//===============================================//
//Async vs Sync
//Sync => block until the task is excuted , waiting for response
//Async => non blocking , no waiting for response
// var x;
// console.log("before all");//sync execution will print first ====> 1
// setTimeout(function () {
//   console.log("in Time out"); // async execution will be excuted later after 2 seconds =====> 4
//   x = 6;
//   console.log("in time out x", x);// =====>5
// }, 2000);
// console.log("out x", x);// =====>2
// console.log("after all"); //sync will be excuted before any async functions execution =====>3

// console.log("send request to server...");
// var response;
// setTimeout(function () {
//   response = "this is the data you requested";
//   console.log(response);
// }, 3000);
// setTimeout(function () {
//   console.log("after 2 seconds");
// }, 2000);
// console.log(response);
//=======================================================//
//xhttprequest => the XMLHttpRequest object in the browser used to exchange data with a server
//it is an object (consturctor creation ) that allows you to send http requests from javascript

// var xhr = new XMLHttpRequest(); //create object readystate = 0
// xhr.open("GET", "https://dummyjson.com/products"); // open method used to specify the http method and the url of the server readystate = 1
// xhr.send(); //send the request to the server readystate = 2

// xhr.addEventListener("readystatechange", function () {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     var res = JSON.parse(xhr.response);
//     for (const prd of res.products) {
//       console.log(prd);
//       var div = document.createElement("div");
//       div.style.display = "inline-block";
//       var img = document.createElement("img");
//       img.src = prd.images[0];
//       img.style.width = "200px";
//       img.style.height = "200px";
//       div.appendChild(img);
//       var h3 = document.createElement("h3");
//       h3.innerText = prd.title;
//       div.appendChild(h3);
//       div.setAttribute("class", "container");
//       document.body.appendChild(div);
//     }
//   }
// });
//=========================================//
//Math object
console.log(Math.round(3.4));
console.log(Math.ceil(3.4));
console.log(Math.floor(3.6));
console.log(Math.trunc(3.644));
var num = 3.6444444;
console.log(num.toFixed(3));
console.log(Math.random() * 11);
console.log(Math.sqrt(25));
