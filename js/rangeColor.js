let red = document.getElementById("red");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
let paragraph = document.getElementById("p");


red.addEventListener("input", updateColor);
green.addEventListener("input", updateColor);
blue.addEventListener("input", updateColor);

function updateColor() {
  let redValue = red.value;
  let greenValue = green.value;
  let blueValue = blue.value;

  paragraph.style.color = `rgb(${redValue},${greenValue},${blueValue})`;
}
