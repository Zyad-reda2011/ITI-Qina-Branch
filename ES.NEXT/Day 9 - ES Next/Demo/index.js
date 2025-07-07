//sync async

// console.log("hello world");
// let userName="ahmed";
// console.log(userName);

// function second() {
//   setTimeout(() => {
//     console.log("second");
//   }, 2000);
// }

// function first() {
//   console.log("first");
//   second();
//   console.log("third");
// }

// first();

/////////////////

// var x;

// setTimeout(()=>{
//     x=10;
//     console.log(x);

// },2000)

//////////////////////

//call back hell
// setTimeout(function () {
//   var ids = [1, 2, 3, 4];
//   console.log(ids);
//   setTimeout(function () {
//     var user = {
//       id: ids[2],
//       name: "ali",
//     };
//     console.log(user);
//     setTimeout(function () {
//       var address = {
//         userName: user.name,
//         city: "qena",
//       };
//       console.log(address);
//     }, 1000);
//   }, 500);
// }, 2000);

////////////////////////////////

// var idpromise = new Promise(function (resolve, reject) {
//   // console.log(x);
//   setTimeout(function () {
//     var ids = [1, 2, 3, 4];
//     if (ids) {
//       resolve(ids);
//     } else {
//       reject("error in ids");
//     }
//   }, 2000);
// });

// // console.log(p);

// // idpromise.then(function (data) {
// //   console.log(data);
// //   return getUser(data[2]);
// // })
// //   .then(function (user) {
// //     console.log(user);
// //     return getAdress(user.name);
// //   })
// //   .then(function (address) {
// //     console.log(address);
// //   })
// //   .catch(function (err) {
// //     console.log(err);
// //   });

// // async await

// async function handlePromises() {
//   try {
//     var id = await idpromise;
//     console.log(id);

//     var user = await getUser(id[2]);
//     console.log(user);

//     var address = await getAdress(user.name);
//     console.log(address);
//   } catch (err) {
//     console.log(err);
//   }
// }

// handlePromises();

// function getUser(id) {
//   var getUserPromise = new Promise(function (res, rej) {
//     setTimeout(function () {
//       var user = {
//         id: id,
//         name: "ali",
//       };
//       if (user) {
//         res(user);
//       } else {
//         rej("error in user");
//       }
//     }, 500);
//   });
//   return getUserPromise;
// }

// function getAdress(name) {
//   var AddressPromise = new Promise(function (res, rej) {
//     setTimeout(function () {
//       var address = {
//         userName: name,
//         city: "qena",
//       };

//       if (address) {
//         res(address);
//       } else {
//         rej("error in address");
//       }
//     }, 1000);
//   });
//   return AddressPromise;
// }

// getUser(8)
//   .then(function (user) {
//     console.log(user);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

///////////////////////////////////////////

// fetch()

// console.log();

// fetch("https://dummyjson.com/users")
//   .then(function (response) {
//     // console.log(response.json());
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data.users);

//   })
//   .catch(function (err) {
//     console.log(err);
//   });
// //////////////////////////


// async function test(){
// var response= await fetch("https://dummyjson.com/users")
// // console.log(response);

// var data= await response.json()
// console.log(data.users);

// }
 
// test()

//////////////////////////////

//set map

// var arr=[1,2,3,2,1]


var z=new Set([1,2,3,2]);


z.add(5);
z.add(arr)
z.add([1,2,3,2,1])

var obj={a:1,b:2}
z.add(obj)
z.add({a:1,b:2})

// z.add({a:1,b:2})
// z.delete(obj)
// console.log(z.has(10));

// z.clear()


console.log(z);

//////////////////////////

//map

var m=new Map();

m.set(2,"ahmed");
m.set([1,2],"test")

// console.log(m);

// console.log(m.get(2));
// console.log(m.has(2));


for (const [k,v] of m) {
    console.log(k ,v);
    
    //key   value
    
}

