const form = document.querySelector("#form");
const input = document.querySelector("#query");
const results = document.querySelector("#results");

form.addEventListener("submit", async (evt) => {
  evt.preventDefault();

  results.innerHTML = '';   ''

  const value = input.value;
  const url = `https://api.tvmaze.com/search/shows?q=${value}`;

  const response = await fetch(url);
  const data = await response.json();

  for (let item of data) {
    const tvShow = item.show;

    const article = document.createElement("article");

    const title = document.createElement("h2");
    title.textContent = tvShow.name;
    article.appendChild(title);


    const link = document.createElement("a");
    link.href = tvShow.url;
    link.target = "_blank";
    link.textContent = "Details";
    article.appendChild(link);


    const img = document.createElement("img");
    img.src = tvShow.image?.medium || "";   // optional chaining
    img.alt = tvShow.name;
    article.appendChild(img);


    const summary = document.createElement("div");
    summary.innerHTML = tvShow.summary || "No summary available";
    article.appendChild(summary);

    results.appendChild(article);
  }
});
