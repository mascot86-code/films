/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

console.log(personalMovieDB.count);

function writeYourGenres() {
  let count = 0;
  while (count < 3) {
    personalMovieDB.genres.push(
      prompt(`Ваш любимый жанр под номером ${count + 1}`),
    );
    count++;
  }
}

writeYourGenres();

function rememberMyFilm() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Один из последних просмотренных фильмов?", "");
    let b = +prompt("На сколько оцените его?", "");
    if (a !== "" && b !== "" && a !== null && b !== null && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("Done");
    } else {
      console.log("Error");
      i--;
    }
  }
}

rememberMyFilm();

function filmCount() {
  if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
  } else {
    alert("Произошла ошибка");
  }
}

filmCount();

function showMyDB(privat) {
  if (privat === false) {
    console.log(personalMovieDB);
  } else {
    console.log("This object is privat. Access denided!");
  }
}

showMyDB(personalMovieDB.privat);
