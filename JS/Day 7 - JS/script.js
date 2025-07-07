// task 1
// function startTimer(e)
// {
//     if(e.key === "Enter")
//     {
//         var count = 5;
//         var time = document.createElement("h2")
//         var timer = setInterval
//         (
//             function()
//             {
//                 time.innerHTML = count
//                 document.body.appendChild(time)
//                 count--
//                 if (count < 0)
//                     clearInterval(timer)
//             },1000
//         )
//     }
// }



// task 2

var xhr = new XMLHttpRequest()
xhr.open("GET","https://fakestoreapi.com/products/")
xhr.send()

xhr.addEventListener("readystatechange",
    function()
    {
        if(xhr.readyState == 4 && xhr.status == 200)
        {
            var res = JSON.parse(xhr.response)
            console.log(res)
            for(var obj of res)
            {
                console.log(obj)
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
    }
)