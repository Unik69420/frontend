var my;
function start() {
  my = setTimeout(function () {
    document.getElementById("res").innerText = "hello world";
  }, 3000);
}
function stop() {
  clearTimeout(my);
}
var interval;
var c = 0;
function startInt() {
  interval = setInterval(function () {
    document.getElementById("res2").innerText = c;
    c++;
  }, 1000);
}
function stopInt() {
  clearInterval(interval);
}
function reset() {
  c = 0;
  document.getElementById("res2").innerText = c;
}
