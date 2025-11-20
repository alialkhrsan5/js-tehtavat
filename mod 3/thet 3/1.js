const target = document.querySelector("#target");
const names = ["John", "Paul", "Jones"];

let html = "";

for (let name of names) {
  html += `<li>${name}</li>`;
}

target.innerHTML = html;
