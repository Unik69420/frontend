var fruits = ["mango", "apple", "orange", "kiwi"];
alert(Array.isArray(fruits));
document.write(fruits.valueOf());
var vegetables = ["potato", "ginger", "onion", "cabbage"];
document.write("<br/>" + fruits.concat(vegetables) + "<br/>");
var temp = fruits;
document.getElementById("res").innerText = temp;
function pop() {
  temp.pop();
  document.getElementById("res").innerText = temp;
}
function push() {
  let new_item = prompt("enter item");
  temp.push(new_item);
  document.getElementById("res").innerText = temp;
}
function slice() {
  let num_of_items = prompt("number of items");
  let x = temp.slice(num_of_items);
  document.getElementById("res").innerText = x;
}
function reverse() {
  temp.reverse();
  document.getElementById("res").innerText = temp;
}
function shift() {
  temp.shift();
  document.getElementById("res").innerText = temp;
}
