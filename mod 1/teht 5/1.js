'use strict';

const vuosi = parseInt(prompt('Anna vuosi:'));
let viesti;

if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || (vuosi % 400 === 0)) {
  viesti = `${vuosi} is a leap year.`;
} else {
  viesti = `${vuosi} is not a leap year.`;
}

document.getElementById('tulos').innerHTML = viesti;
