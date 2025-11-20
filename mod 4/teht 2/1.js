const form = document.querySelector("#form");
const input = document.querySelector("#query");

form.addEventListener("submit", async (evt) => {
  evt.preventDefault();

  const value = input.value;
  const url = `https://api.tvmaze.com/search/shows?q=${value}`;

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
});
