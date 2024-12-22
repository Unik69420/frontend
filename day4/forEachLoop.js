let cars = ["car1", "car2", "car3", "car4", "car5"];
cars.forEach(car1);
function car1(item, index, array) {
  //   document.write(index + "=>" + item + "<br/>");
  array[index] = item + "0";
}
cars.forEach(car2);
function car2(item, index, array) {
  document.write(index + "=>" + item + "<br/>");
}

let a = 1.2;
document.write("<h1>" + typeof a + "</h1>");
