
var colour = ["red","blue","black","green"];
function colourme(){
document.getElementById("demo").innerHTML = colour;
var x=colour.length;
console.log(x);
}
function add_colour(){
var col = prompt("Enter your favourite colour");
colour.push(col);
document.getElementById("demo").innerHTML = colour;
var x=colour.length;
console.log(x);
}
function remove_colour(){
colour.pop();
document.getElementById("demo").innerHTML = colour;
var x=colour.length;
console.log(x);
}