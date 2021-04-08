let width = 50;

function setBar(value) {
  console.log(width);
  var elem = document.getElementById("myBar");
  elem.style.width = width + value + "%";
  width = width + value;
  console.log(width);
}
