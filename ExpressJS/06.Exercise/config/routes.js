const homeController = require('../controllers/home');
const userController = require('../controllers/user');
const articleController = require('../controllers/article');
const auth = require('../config/auth');

module.exports = (app) => {
    //Users
    app.get('/', homeController.index);
    app.get('/user/register', auth.isNotAuthed, userController.registerGet);
    app.post('/user/register', auth.isNotAuthed, userController.registerPost);

    app.get('/user/login', auth.isNotAuthed, userController.loginGet);
    app.post('/user/login', auth.isNotAuthed, userController.loginPost);

    app.get('/user/logout', auth.isAuthed, userController.logout);

    //Articles
    app.get('/article/create', auth.isAuthed, articleController.createGet);
    app.post('/article/create', auth.isAuthed, articleController.createPost);
    app.get('/article/details/:id', articleController.details);
    app.get('/article/edit/:id', auth.isAuthed, articleController.editGet);
    app.post('/article/edit/:id', auth.isAuthed, articleController.editPost);
    app.get('/article/delete/:id', auth.isAuthed, articleController.deleteGet);
    app.post('/article/delete/:id', auth.isAuthed, articleController.deletePost);
};

