// const colors = ['red','green', 'blue', 'yellow']
// var otherColors = colors.slice(2)
// var [primary1, primary2,...restColors] = colors;

// function welcomeUser(name , role = 'Guest')
// {
//     console.log(`Welcome ${name} , your role is ${role}`)
// }
// welcomeUser('Ali')
// welcomeUser('Sara','Admin')


// var user =
// {
//     name: 'Zyad',
//     password: '1234',
// }
// console.log(user)


// function UpdateUserPassword(user, nPassword)
// {
//     user =
//     {
//         ...user,
//         password: nPassword,
//         updated: true
//     }
//     return user
// }

// var returnobject = UpdateUserPassword(user,'1870')


const Students = 
[
    {
        name : 'zyad',
        age : 20,
        grade : 80,
    },
    {
        name : 'Sally',
        age : 30,
        grade : 90,
    },
    {
        name : 'Samir',
        age : 29,
        grade : 70,
    },
    {
        name : 'fady',
        age : 24,
        grade : 50,
    },
    {
        name : 'Ali',
        age : 17,
        grade : 40,
    },
]
// var Upper =  Students.map((ele) => {
//     return ele.name.toUpperCase()
// })

// console.log(Upper);

// var filter = Students.filter((ele) => 
//     {
//         if(ele.grade >= 80)
//         {
//             return ele.name;
//         }
//     }
// )
// console.log(filter);

// var find = Students.find((ele) => 
// {
//     return ele.age == 20
// }
// )

// console.log(find);


// var some = Students.some((ele) =>
// {
//     if (ele.grade < 65)
//     {
//         return ele.name;
//     }
// }
// )
// console.log(some);

// var all = Students.every((ele) =>
// {
//     return ele.age >= 18;
// }
// )
// console.log(all);

// for (const element of Upper) {
//     console.log(element);
// }

// var print = Upper.forEach((ele) => {
//     console.log(ele)
// }
// )