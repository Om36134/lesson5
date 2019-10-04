var a = +prompt ("first number", "");
if(isNaN(a)|| a == "")
{
    alert ("number please");
    a = +prompt ("first number", "");
};

var b = +prompt ('second number');
if(isNaN(b)|| b == "")
{
    alert ("number please");
    b = +prompt ('second number');
};

var option = prompt ("enter option (+,*,-,/)");
if(
    option !== "*"&&
    option !== "+"&&
    option !== "-"&&
    option !== "/")
{  alert("empty option");
    option = prompt ("enter option (+,*,-,/)");
};


var result;
if(option === "*" )
{  result = a*b;}
else if(option === "+" )
{  result = a+b;}
else if(option === "-" )
{ result = a-b;}
else if(option === "/" && b === 0 )
{  result= "На ноль делить нельзя"; }
else if(option === "/" )
{ result = a/b;} ;

alert(result);

document.getElementById("res").innerText = a +" "+option+" "+b +" = "+ result;
console.log(result);