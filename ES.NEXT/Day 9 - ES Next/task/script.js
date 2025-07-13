var StudentAttendance = new Map();
StudentAttendance.set("Ali",true)
StudentAttendance.set("Sara",false)
console.log(StudentAttendance);
StudentAttendance.set("Abdallah", 150)
console.log(StudentAttendance);
console.log(StudentAttendance.get('Ali'))
console.log(StudentAttendance.get('Sara'))
console.log(StudentAttendance.get('Abdallah'))
for (var [k,v] of StudentAttendance)
{
    console.log(k + " : " + v)
}
StudentAttendance.clear()
console.log(StudentAttendance);





// var NationalID = new Set()
// arr = [30509012404691,12455325,66666666,1244556,30509012404691]
// NationalID.add(30509012404691)
// NationalID.add(12455325)
// NationalID.add(66666666)
// NationalID.add(1244556)
// NationalID.add(30509012404691)
// console.log(NationalID);


// for (var NID of NationalID)
// {
//     console.log(NID)
// }

// console.log("The National IDs are : " + [...NationalID])





async function RecieveProducts()
{
    var bring = await fetch("https://dummyjson.com/products")
    // console.log(fetch);

    var response = await bring.json()
    // console.log(response.products)
    for (var obj of response.products)
    {
        var div = document.createElement("div")
        div.style.display = "inline-Block"
        div.style.border = "1px solid black"
        div.style.borderRadius = "10px"
        var img = document.createElement("img")
        img.src = obj.image
        img.style.width = "200px"
        img.style.height = "200px"
        var title = document.createElement("h2")
        title.innerHTML = obj.title
        var price = document.createElement("h3")
        price.innerHTML = "Price : $" + obj.price
        div.appendChild(img)
        div.appendChild(title)
        div.appendChild(price)
        document.body.appendChild(div)
    }
}

RecieveProducts()