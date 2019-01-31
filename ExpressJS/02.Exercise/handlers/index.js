const homeHandler = require('./home');
const staticFilesHandler = require('./static-files');
const allMoviesHandler = require('./all-movies');
const addMovieHandler = require('./add-movie');
const details = require('./details')

module.exports =  [homeHandler, staticFilesHandler, allMoviesHandler, addMovieHandler, details];
