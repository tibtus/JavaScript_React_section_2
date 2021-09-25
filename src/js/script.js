'use strict';




const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};


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



if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
}   else if  (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
}  else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}




console.log(personalMovieDB); 