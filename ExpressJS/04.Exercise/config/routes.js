const {homeGet, aboutGet, search} = require('../controllers/home');
const {addCubePageGet, createPost, details} = require('../controllers/cube');

module.exports = app => {
    app.get('/', homeGet);
    app.get('/about', aboutGet);
    app.get('/create', addCubePageGet);
    app.post('/create', createPost)
    app.get('/details/:id', details);
    app.get('/search', search);
};