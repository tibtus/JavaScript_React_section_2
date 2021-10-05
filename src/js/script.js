'use strict';


const personalMovieDB = {

    count: 0,

    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");    
        }    
    },

    movies: {},

    rememberMyFilms: function () {
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
    },

    actors: {},

    genres: [],

    writeYourGenres: function writeYourGenres () {
        for (let i = 1; i <= 3; i++ ) {
            let c = prompt(`Ваш любимый жанр под номером ${i}` , '');           
            if(c != '' && c !=null) {
                personalMovieDB.genres[i - 1] = c;
            } else {
                i--;
                console.log("Ошибка в writeYourGenres");
            }         
        }
    },

    

    privat: false,

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB); 
        }     
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        }   else if  (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        }  else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat === true ) {
            personalMovieDB.privat = false;
        } else if (personalMovieDB.privat === false ) {
            personalMovieDB.privat = true;
        } 
    },
   

    


    startMetod: function () {
        personalMovieDB.start();
        personalMovieDB.rememberMyFilms();
        personalMovieDB.toggleVisibleMyDB();  
        personalMovieDB.showMyDB(personalMovieDB.privat);
        personalMovieDB.detectPersonalLevel();
        personalMovieDB.writeYourGenres(); 

           
    }
};




personalMovieDB.startMetod();

personalMovieDB.genres.forEach( function (item, i, arr) {
    console.log(`Любимий жанр # ${i+1} - это название ${item} из массива ${arr}`)
} ); 





















