/*
let toggle = 0;
const ar = ['beast', 'diamond'];
const div = document.querySelector('div');
div.addEventListener('click', function () {
  div.innerHTML = 'Clickey';
});

let interval1 = null;

const button = document.querySelector('button');
button.addEventListener('click', function () {
  interval1 = window.setInterval(function () {
      div.innerHTML = ar[toggle];
      toggle ^= 1;
  }, 500);
});

const p = document.querySelector('p');
p.addEventListener('click', function () {
  window.clearInterval(interval1);
});

console.log(stuff);

for (let i = 0; i < 5; i++) {
  const G = i;
  console.log(G);
}

const divvy = document.createElement('div');
divvy.setAttribute('id', 'one');
document.body.appendChild(divvy);
const divvy2 = document.createElement('div');
divvy2.setAttribute('id', 'two');
divvy.appendChild(divvy2);
*/

let x = 0;
const names = ['Bobby', 'Frankie', 'Mikey', 'Ronaldoozle'];
let nameId = 0;
for (let i = 250; i <= 1000; i += 250) {
  window.setTimeout(function () {
    const func = function () {
      if (nameId < 4) {
        console.log(names[nameId++]);
      } else {
        nameId = 0;
      }
    };
    window.setInterval(func, 1000);
    console.log(x);
  }, i);
}
