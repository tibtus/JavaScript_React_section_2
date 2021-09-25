/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

/* 'use strict';


const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};


const a = prompt("Один из последних просмотренных фильмов?", "");
const b = prompt("На сколько оцените его?", "");

const c = prompt("Один из последних просмотренных фильмов?", "");
const d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b ;
personalMovieDB.movies[c] = d ;


console.log(personalMovieDB); */


/* if (4 == 9) {
    console.log("Ok!");

} else {
    console.log("NOOOOOO!!!!");

}

const num = 50;

if (num < 49) {
    console.log('сума больше чем 49');
} else if (num > 100) {
    console.log('сума меньше чем  100');
} else {
    console.log('сума ' + num);
}

(num ===50) ? console.log('Да верно') : console.log('НЕТ !!!'); */


const num = 50;

switch (num) {
    case 49: console.log('Неверно');
    break;
    case 100: console.log('Неверно');
    break;
    case 51: console.log('ВЕРНО!!!');
    break;
    default: console.log('Если всё выше не верно');
    break;
}