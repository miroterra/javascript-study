const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
    return;
  }

  const newMovie = {
    // title: title // 키와 벨류값이 같은 경우 아래와 같이 표기가능
    info: {
      title,
      [extraName]: extraValue,
    },
    // 임시 id
    id: Math.random(),
  };

  movies.push(newMovie);
};

addMovieBtn.addEventListener('click', addMovieHandler);
