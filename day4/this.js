function show() {
  var person = {
    firstName: "John",
    lastName: "Doe",
    fullname: function () {
      return this.firstName + " " + this.lastName;
    },
  };
  document.getElementById("res").innerText = person.fullname();
}
function color(element) {
  element.style.background = "red";
}
