const Cube = require('../models/Cube');

function handleErrors(err, res, cubeBody) {
    let errors = [];

    for (const prop in err.errors) {
        errors.push(err.errors[prop].message);
    }
    res.locals.globalErrors = errors;
    res.render('create', cubeBody);
}

module.exports = {
    addCubePageGet: (req, res) => {
        res.render('create');
    },
    createPost: (req, res) => {
        const cubeBody = req.body;
        cubeBody.difficulty = Number(cubeBody.difficulty);
       
        Cube.create(cubeBody)
            .then((c) => {
                res.redirect('/');
            }).catch((err) => handleErrors(err, res, cubeBody));
    },
    details: (req, res) => {
        const id = req.params.id;

        Cube.findById(id)
            .then((cube) => {
                res.render('details', cube);
            }).catch((e) => handleErrors(e, res, cubeBody));
    }
}