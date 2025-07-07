alert("Welcome to my first website")

symbol = prompt("Enter the type of currency you want to exchange (Dollar, Euro):");
Egymoney = prompt("Enter the amount of egyptian money you want to exchange:");

function exchangeEgyPound(Egymoney,symbol) 
{
    if (symbol == '$')
    {
        alert(Egymoney / 47.6);
    }
    else if (symbol == '€')
    {
        alert(Egymoney / 51.2);
    }
    else
    {
        alert("Invalid currency symbol. Please enter either $ for Dollar or € for Euro.");
    }
}

exchangeEgyPound(Egymoney, symbol);



var first_name = prompt("Enter your first name ")
var mobile_number = prompt("Enter your mobile number ")
var birth_year = prompt("Enter your birth year ")

function valid_name(first_name)
{
    if (typeof first_name != "string")
    {
        alert("Invalid name. Please enter a valid name.");
    }
}

function valid_number(mobile_number)
{
    if (isNaN(mobile_number))
    {
        alert("Invalid number. Please enter a valid number.");
    }
}

function valid_year(birth_year)
{
    if (birth_year < 2000)
    {
        alert("invalid birth year")
    }
}


valid_name(first_name);
valid_number(mobile_number);
valid_year(birth_year);

document.write("<h1>Welcome Dear " + first_name + " </h1>");
document.write("<h1>your age is " + (2025-birth_year) + " </h1>");
document.write("<h1>your phone number is " + mobile_number + " </h1>");

