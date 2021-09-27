'use strict';

/* var a; 
var b;
var c;
var d;
 */


/* for (let i = 0; i < 2; i++) {
            var a = prompt("Один из последних просмотренных фильмов?", "");

            if (a === "") {
                i--;
            } else if (a === null) {
                i--;
            } else if (a.length > 50) {
                i--;    
            } else {
                console.log('Всё верно!!!')
                
            }
            
            var b = prompt("На сколько оцените его?", "");

            var c = prompt("Один из последних просмотренных фильмов?", "");

            if (c === "") {
                i--;
            } else if (c === null) {
                i--;
            } else if (c.length > 50) {
                i--;    
            } else {
                console.log('Всё верно!!!')
                
            }

            var d = prompt("На сколько оцените его?", "");
    

} */


/* let i = 0;
while (i < 2) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');


    if (a != null && b !=null && a !='' && b !='' && a.length < 50 ) {
        personalMovieDB.movies[a] = b ;
        console.log('DONE');
    } else {
        i--;
        console.log('Ошибка');
    }
    i++;
}


do {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');


    if (a != null && b !=null && a !='' && b !='' && a.length < 50 ) {
    personalMovieDB.movies[a] = b ;
    console.log('DONE');
    } else {
    i--;
    console.log('Ошибка');
    }
    i++;

}while (i < 2); */



/* let num = 20;
 */
/* function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage("Hello World");
console.log(num); */
/* 
function calc (a, b) {
    return (a + b);

}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6)); */

/* function ret () {
    let num = 50;
    return num;
}

const anotherNum = ret();

console.log(anotherNum);
console.log(num);


const calc = (a, b) => a + b; */
/* 
const str = "test";

console.log(str.length);

const fruit = "Some fruit";

console.log(fruit.indexOf("e"));

const logg = "Hello world";

console.log(logg.slice(4, 9));


console.log(logg.substring(4, 9));

console.log(logg.substr(4, 9)); */


/* const num = 12.2;

console.log(Math.round(num)); */







let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    }

}

start();



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
    
        if (a != null && b !=null && a !='' && b !='' && a.length < 50 ) {
            personalMovieDB.movies[a] = b ;
            console.log('DONE');
        } else {
            i--;
            console.log('Ошибка');
        }
             
    }

}

rememberMyFilms();



function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    }   else if  (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    }  else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();




function showMyDB () {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB); 
    } else {
        console.log('Ошибка в showMyDB');
    }

}

showMyDB();

function writeYourGenres () {
    for (let i = 0; i < 3; i++ ) {
        personalMovieDB.genres[i] = prompt('Ваш любимый жанр под номером ' + `${i}`, '');
        
    }

}

writeYourGenres();