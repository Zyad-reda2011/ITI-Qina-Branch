// task 1

var email = location.search.split("&")[0].split("=")[1];
var name = location.search.split("&")[1].split("=")[1];

var decodedEmail = decodeURIComponent(email);
console.log(decodedEmail);
console.log(name);

document.writeln("<h1>Welcome " + name + "</h1>");
document.writeln("<h1>with email  " + decodedEmail + "</h1>");

// task 2

var counter = 0;
function like()
{
    counter++;
    document.getElementById("container").innerHTML = counter
    document.getElementById("container").style.color = "black";
}

