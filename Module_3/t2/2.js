const names = [
  'first item',
  'second item',
  'third item',
];
let li;
names.map((name) => {
  li = document.createElement('li');
  document.querySelector('#target').innerHTML += `<li>${name}</li>`;
});
