const dnumbers = parseInt(prompt('Enter how many dices you want to roll:'));
const target = parseInt(
    prompt('Enter what is the sum of the eye numbers you want roll:'));
const nfround = 10000;
let targetreach = 0;
let sum = 0;
let x;
let h;
for (x = 0; x <= nfround; x++) {
  for (h = 0; h < dnumbers; h++) {
    sum = sum + Math.floor((Math.random() * 6) + 1);
  }
  if (sum === target) {
    targetreach++;
  }
  sum = 0;
}
document.querySelector('#w1').innerHTML =
    `Probability to get sum ${target} with ${dnumbers} 
    dice is ${((targetreach / nfround) * 100).toFixed(5)} %`;
