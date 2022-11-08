const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
  } else {
    movieList.classList.add('visible');
  }
  // 객체를 공부하는 단계라 간단하게 하기 이해 이 방법을 사용
  movieList.innerHTML = '';

  const filteredMovies = !filter ? movies : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement('li');
    // 객체 구조 분해 - movie에 있는 info안에 있는 모든 프로퍼티를 빼냄
    // 따라서 기존에 movie.info로 접근을 했던걸 info 만으로도 접근 가능
    const { info, ...otherProps } = movie;
    console.log(otherProps);
    // const { title: movieTitle } = info;
    let { getFormattedTitle } = movie;

    // this 가 올바른 값은 참조할 수 있도록 bind를 사용 - bind 는 나중에 실행할 함수를 준비하고 마지막에는 새로운 함수 객체를 반환
    // getFormattedTitle = getFormattedTitle.bind(movie);

    // bind와 다르게 call은 함수를 바로 실행
    // apply는 call 과 마찬가지로 바로 실행하지만 첫번째 인자를 this로 받고 다음인자를 하나만 받을수 있다. 그 인자는 배열이어야한다.
    let text = movie.getFormattedTitle.call(movie) + ' - ';
    // let text = movie.getFormattedTitle.apply(movie, []) + ' - ';
    // 객체의 key,value 를 다루는 반복문
    for (const key in info) {
      if (key !== 'title') {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
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
    id: Math.random().toString(),
    getFormattedTitle() {
      return this.info.title.toUpperCase();
    },
  };

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = function () {
  console.log(this);
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
