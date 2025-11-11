'use strict';

const nimi = prompt('Anna nimesi:');

const numero = Math.floor(Math.random() * 4) + 1;

let tupa;

if (numero === 1) {
  tupa = 'Gryffindor';
} else if (numero === 2) {
  tupa = 'Slytherin';
} else if (numero === 3) {
  tupa = 'Hufflepuff';
} else {
  tupa = 'Ravenclaw';
}

document.getElementById('tulos').innerHTML = `${nimi}, you are ${tupa}.`;
