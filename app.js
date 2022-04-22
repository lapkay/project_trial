const numberOfFilms = +prompt('How many films do you watch?', '');

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

const a = prompt('Which film did you watch recently?', ''),
   b = prompt('how much estimate it is?', ''),
   c = ('Which film did you watch recently?', ''),
   d = prompt('How much estimate it is?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;