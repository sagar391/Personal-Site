function myIntro()
{
  document.getElementById("intro").innerHTML="This is my introduction";
}
document.write("I am using Java Script");
window.alert("Sorry!Wrong Web Page");
alert("OK Fine!");
const price1 = 5;
const price2 = 6;
let total = price1 + price2;
document.getElementById("demo1").innerHTML =
"The total is: " + total;
let person = "John Doe", carName = "Volvo", price = 200;
document.getElementById("demo2").innerHTML = carName;
let x = "5" + 2 + 3;
document.getElementById("demo3").innerHTML = x;
let y = 2 + 3 + "5";
document.getElementById("demo4").innerHTML = y;
carname = "Volvo";
document.getElementById("demo5").innerHTML = carname;
var carname;
const car = {type:"Fiat", model:"500", color:"white"};//Object Car is created

// Change a property:
car.color = "red";

// Add a property:
car.owner = "Johnson";

// Display the property:
document.getElementById("demo6").innerHTML = "Car owner is " + car.owner;
function toCelsius(f) {
  return (5/9) * (f-32);
}
document.getElementById("demo7").innerHTML = toCelsius;//return function object
