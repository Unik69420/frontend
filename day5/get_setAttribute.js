color = (col) => {
  // console.log(res);
  var res = col.getAttribute("class");
  if (res == "red") {
    col.style.background = "blue";
    col.setAttribute("class", "blue");
  } else {
    col.style.background = "red";
    col.setAttribute("class", "red");
  }
};
