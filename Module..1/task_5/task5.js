//task 5
const vuosiluku = parseInt(prompt("Enter a year: "))
if (vuosiluku % 4 === 0 && (vuosiluku % 100 !== 0 || vuosiluku % 400 === 0)) {
  document.querySelector('#v1').innerHTML = (vuosiluku + " is a leap year.")
}
else if (vuosiluku) {
  document.querySelector('#v1').innerHTML = (vuosiluku + " is not a leap year.")
}
