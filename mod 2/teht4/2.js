const numbers = [];

while (true) {
  const n = Number(prompt("Anna numero (0 lopettaa):"));
  if (n === 0) break;
  numbers.push(n);
}

numbers.sort((a, b) => b - a);

console.log("Suurimmasta pienimpään:");
for (let num of numbers) {
  console.log(num);
}
