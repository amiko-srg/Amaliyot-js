let bgColor = prompt("Enter body backgroundColor:");
let textColor = prompt("Enter text color:");

document.body.style.backgroundColor = bgColor;

let textElement = document.body.querySelector('lorem');

textElement.style.color = textColor;

