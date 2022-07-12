/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (this.count == "" || this.count == null || isNaN(this.count)) {
      this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  writeYourGenres: function () {
    for (let i = 0; i < 3; i++) {
      let genres = prompt(`Ваш любимый жанр под номером ${i + 1}`);
      if (genres !== "" && genres !== null) {
        this.genres.push(genres);
        console.log("Genres add");
      } else {
        console.log("Genres error");
        i--;
      }
    }
    personalMovieDB.genres.forEach((elem, index) => {
      console.log(`Любимый жанр # ${index + 1} - это ${elem}`);
    });
  },
  writeYourGenres2: function () {
    for (let i = 0; i < 1; i++) {
      let genres = prompt(`Введите свои любимые жанры через запятую`);
      if (genres !== "" && genres !== null) {
        this.genres = genres.split(", ");
        console.log("Genres add");
      } else {
        console.log("Genres error");
        i--;
      }
    }
    personalMovieDB.genres.forEach((elem, index) => {
      console.log(`Любимый жанр # ${index + 1} - это ${elem}`);
    });
  },
  rememberMyFilm: function () {
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
  },
  filmCount: function () {
    if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
      alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      alert("Вы киноман");
    } else {
      alert("Произошла ошибка");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(this);
    }
  },
  toggleVisibleMyDB: function () {
    if (this.privat) {
      this.privat = false;
    } else {
      this.privat = true;
    }
  },
};

// personalMovieDB.start();

// console.log(personalMovieDB.count);

// personalMovieDB.writeYourGenres();

// personalMovieDB.rememberMyFilm();

// personalMovieDB.filmCount();

// personalMovieDB.showMyDB(personalMovieDB.privat);

// personalMovieDB.toggleVisibleMyDB();
