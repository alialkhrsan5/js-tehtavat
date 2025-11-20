const numbers = [];
for (let i = 0; i < 5; i++) {
  const input = prompt("Anna numero:");
  numbers.push(Number(input));
}
console.log("Käänteinen järjestys:");

for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}
