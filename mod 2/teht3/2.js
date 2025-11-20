const dogs = [];

for (let i = 0; i < 6; i++) {
  const name = prompt("Anna koiran nimi:");
  dogs.push(name);
}

dogs.sort();
dogs.reverse();

let html = "<ul>";
for (let d of dogs) {
  html += `<li>${d}</li>`;
}
html += "</ul>";
document.getElementById("dogs").innerHTML = html;
