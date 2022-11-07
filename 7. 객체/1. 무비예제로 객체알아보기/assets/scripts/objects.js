const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = () => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
  } else {
    movieList.classList.add('visible');
  }
  // 객체를 공부하는 단계라 간단하게 하기 이해 이 방법을 사용
  movieList.innerHTML = '';

  movies.forEach(movie => {
    const movieEl = document.createElement('li');
    movieEl.textContent = movie.info.title;
    movieList.append(movieEl);
  });
};

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
  renderMovies();
};

addMovieBtn.addEventListener('click', addMovieHandler);
