//Regex
//(.) dot => mantch any character except new line
//(*) asterisk => match any character 0 or more times
//(+) plus => match any character 1 or more times
//(?) question mark => make the preceeding character optional
//([]) square brackets => match anything inside the brackets [a-z] [0-9]
//(^)caret => match the start of the string
//($) dollar => match the end of a string
//{min,max} => match any character between min and max times {3,5}
//{min,} => match any character at least min times
//{,max} => match any character at most max times
//{min} => match any character exactly min times
//(|) pipe => match either or both sides of the pipe (0|1|2|5)
//shortcuts
//\d => [0-9] match only numbers
//\w => [a-zA-Z0-9] match any word character
//\s => match any space, tab, or new line character
//flags
//i => ignore case
//g => global match
//m => multi-line match
//how to write regex
// /pattern/flags => /[a-z]/i
//creation
// var regexMobile = new RegExp(/^01(0|1|2|5)[0-9]{8}$/); //constructor creation
// var regxMail = /^[a-zA-Z][0-9a-zA-Z._]{1,}@(gmail|yahho|outlook)\.com$/; //literal creation
// //methods
// //test()=> return true or false
// var result = regxMail.test("csac9@gmail.com");
// console.log(result);
// //toString() =>return patters
// console.log(regxMail.toString());
// //replace() =>replace any character
// var favHoppy = "I love playing football";
// console.log(favHoppy.replace(/o/g, "✅"));
// console.log(
//   favHoppy.replace(/o/g, "✅").replace(/✅/g, "🏀").replace(/🏀/g, "o")
// );

// var paragraph = `fire csaascasc fire
// scacsacsa fire
// asccasca fire`;
// console.log(paragraph.replace(/fire$/gm, "🔥"));

//------------------------------------------------------//
//Date in js
//creation
// var day = new Date();
// console.log(day);
//setting data manually
// var day2 = new Date(2025, 1, 27);
//notice 3 gave me april not march because months start from 0 not 1
//number conventions in date
// 0 => january
// 1 => February
// 2 => March
// 3 => April
// 4 => May
// 5 => June
// 6 => July
// 7 => August
// 8 => September
// 9 => October
// 10 => November
// 11 => December
//days start from 0 to 6
// 0 => sunday
// 1 => Monday
// 2 => Tuesday
// 3 => Wednesday
// 4 => Thursday
// 5 => Friday
// 6 => Saturday
//hours start from 0 to 23
//minutes start from 0 to 59
//seconds start from 0 to 59
// var day2 = new Date(2025, 4, 25, 20, 30, 40); //(year , month ,day ,hours , minutes , seconds)
// console.log(day2);
//methods in date
//getFullYear() =>return year
// console.log(day.getFullYear());
//getMonth() => return month
// console.log(day.getMonth());
// switch (3) {
//   case 0:
//     console.log("sunday");
//     break;
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//     break;
//   case 4:
//     console.log("thursday");
//     break;
//   case 5:
//     console.log("friday");
//     break;
//   case 6:
//     console.log("saturday");
//     break;
// }
//getDate() => return date
// console.log(day2.getDate());
//getHours() => return hours
// console.log(day.getHours());
//getMinutes() => return minutes
// console.log(day.getMinutes());
//getSeconds() =>return seconds
// console.log(day.getSeconds());

//setFullYear() => set the year
// day.setFullYear(2027);
// console.log(day);
// //setMonth() => sets the month
// day.setMonth(2);
// console.log(day);
// //setDate() => sets the date
// day.setDate(27);
// console.log(day);
// //setHours() => sets the hours
// day.setHours(20);
// console.log(day);
// //setMinutes() => sets the minutes
// day.setMinutes(30);
// console.log(day);
// //setSeconds() => sets the seconds
// day.setSeconds(40);
// console.log(day);

//methods to turn th date
// console.log(day.toUTCString());
// console.log(day.toLocaleString());
// console.log(day.toLocaleTimeString());
// console.log(day.toLocaleDateString());
// console.log(day.toString());
// console.log(day.toTimeString());
// console.log(day.toDateString());

//------------------------------------------------------//
//objects in js
// var arr = ["Ali", 20, [2, 4, 5]];
//key : value
//custom object
//creation
// var user = new Object({
//   name: "Ali",
//   age: 24,
//   grades: [2, 4, 6],
//   address: {
//     city: "alex",
//     street: "kahled bn elwaleed",
//   },
// });
// console.log(user);
// console.log(user.name);
// console.log(user["name"]);
// console.log(user.grades[0]);
// console.log(user.address.city);
// console.log(user["address"]["city"]);
// var product = {
//   name: "t-shirt",
//   price: 100,
//   inStock: 20,
//   colors: ["red", "blue"],
//   isSoldOut: false,
//   test: function () {
//     //anonymous function
//     console.log("this is " + this.name + " price is " + this.price);
//   },
// };
// product.test();
// console.log(product.colors[1]);

//-------------------------------------------//
//window object in js
// function Sum() {
//   console.log(this);
// }
// window.Sum();
//window object is the golbal object in js and its the parent of all functions in js , variables in js and objects in js some methods differs from browser to another
// console.log(window);
// console.log(window.innerHeight); //=> return the height of the window inside the browser = console.log(innerHeight);
// console.log(window.innerWidth); // return the width of the window inside the browser = console.log(innerWidth);
// console.log(window.outerHeight); // return the height of the window outside the browser = console.log(outerHeight);
// console.log(window.outerWidth); // return the width of the window outside the browser = console.log(outerWidth);

// console.log(window.screenX);
// console.log(window.screenLeft);
// console.log(window.screenY);
// console.log(screenTop);

//open new window
// var w = window.open(
//   "test.html",
//   "_blank",
//   "width=600,height=600,screenX=600,screenY=300"
// );
// function openNewWindow() {
//   w = window.open(
//     "test.html",
//     "_blank",
//     "width=600,height=600,screenX=600,screenY=300"
//   );
// }
// function closeWindow() {
//   w.close();
// }

//timing methods
// var timing = setTimeout(function () {
//   console.log("hello");
// }, 3000);
// // var id = setInterval(function () {
// //   console.log("hello world");
// // }, 2000);
// function stopTime() {
//   clearTimeout(timing);
// }

// // function stopInt() {
// //   clearInterval(id);
// // }

// function stopTimer() {
//   var counter = 10;
//   var id3 = setInterval(function () {
//     console.log(counter);
//     counter--;
//     if (counter == -1) {
//       clearInterval(id3);
//     }
//   }, 1000);
// }
