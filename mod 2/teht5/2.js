const numbers = [];

while (true) {
  const n = Number(prompt("Anna numero:"));
  if (numbers.includes(n)) break;
  numbers.push(n);
}

numbers.sort((a, b) => a - b);

console.log("Numerot:");
for (let num of numbers) {
  console.log(num);
}
