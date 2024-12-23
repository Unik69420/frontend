var num = document.getElementById("box1");
check = () => {
  var data = num.value;
  try {
    if (parseInt(data) < 0 || parseInt(data) > 100) throw "invalid number";
    else if (isNaN(data)) throw "wrong dataType";
    else {
      document.getElementById("box2").innerText = "valid number";
    }
  } catch (e) {
    document.getElementById("box2").innerText = e;
  } finally {
    num.value = "";
  }
};
