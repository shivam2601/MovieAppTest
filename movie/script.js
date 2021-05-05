const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2d15d4104ac5dbff7dd334ab7a370050&pag=1";
const IMG_Path = "https://image.tmdb.org/t/p/w500";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?&api_key=2d15d4104ac5dbff7dd334ab7a370050&&query="';
getMovies(API_URL);
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}
function showMovies(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEle = document.createElement("div");
    movieEle.classList.add("movie");
    movieEle.innerHTML = ` <img
    src='${IMG_Path + poster_path}'
    alt=""
  />
  <div class="movie-info">
    <h3>${title}</h3>
    <span class=>${vote_average}</span>
  </div>
  <div class="overview">
    <h3>overview</h3>
    ${overview}
  </div>`;
    main.appendChild(movieEle);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
