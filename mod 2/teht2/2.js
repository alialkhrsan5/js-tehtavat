const count = Number(prompt("Kuinka monta osallistujaa?"));
const names = [];

for (let i = 0; i < count; i++) {
  const n = prompt("Anna nimi:");
  names.push(n);
}

names.sort();

let html = "<ol>";
for (let name of names) {
  html += `<li>${name}</li>`;
}
html += "</ol>";

document.getElementById("list").innerHTML = html;
