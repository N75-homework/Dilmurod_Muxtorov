//------------------------------------

let $box = document.querySelector("#box");
let $form = document.getElementById("form");
let $elGenre = document.getElementsByName("genre")[0];

let KEY = "57bbab55";

async function getFilms(search, apikey, page = 1, sort = "a-z") {
  let fetchApi = await fetch(
    `http://www.omdbapi.com/?apikey=${apikey}&s=${search}&page=${page}`
  );
  
  let dataJson = await fetchApi.json();
  let data = await dataJson.Search;
  console.log(dataJson);

  if (sort === "a-z") {
    data.sort((a, b) =>
      a.Title.toLowerCase() > b.Title.toLowerCase() ? 1 : -1
    );
  } else {
    data.sort((a, b) =>
      a.Title.toLowerCase() > b.Title.toLowerCase() ? -1 : 1
    );
  }
  renderFilms(data, $box);
}
getFilms("hulk", KEY, 3);

let films = [];

function renderGenres(array, element) {
  let genres = [];
  array.forEach((film) => {
    film.genres.forEach((genre) => {
      if (!genres.includes(genre)) {
        genres.push(genre);
      }
    });
  });

  if (!genres) {
    return null;
  }

  let newOption = "";
  genres.forEach((item) => {
    value = item.split(" ").join("*");
    newOption += `<option value="${value}">${item}</option>`;
  });

  element.innerHTML += newOption;
}
renderGenres(films, $elGenre);

$form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let { search, sort } = evt.target.elements;

  getFilms(search.value, KEY, 1, sort.value);
});

function renderFilms(array, element) {
  element.innerHTML = null;
  let newLi = "";

  array.forEach((film) => {
    newLi += `
        <li style="width: 400px;">
        <img src='${
          film.Poster !== "N/A"
            ? film.Poster
            : "https://via.placeholder.com/380"
        }' width="380" height="380" alt="sjhas" >
        <h2>${film.Title}</h2>
        <p>${film.imdbID}</p>
        <a href='${film.Poster}' target="_blank">See video</a>
        </li>
        `;
  });
  element.innerHTML = newLi;
}
renderFilms(films, $box);
