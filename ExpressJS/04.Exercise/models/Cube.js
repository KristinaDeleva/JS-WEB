const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cubeShema = new Schema({
    name: {type: Schema.Types.String, required: true},// validate: /^\s*(?:\S\s*){3,15}$/},
    description: {type: Schema.Types.String, required: true}, //validate: /^\s*(?:\S\s*){20,300}$/},
    imageUrl: {type: Schema.Types.String, required: true}, //validate: /^https:\/\/.*\.(png|jpg)$/},
    difficulty: {type: Schema.Types.Number, required: true}// validate: /^\d{1,6}/}
});

cubeShema.path('name')
    .validate(function () {
        return this.name.length >= 3 && this.name.length <= 15
    }, 'Name must be between 3 and 15 symbols!');

cubeShema.path('description')
    .validate(function () {
        return this.description.length >= 20 && this.description.length <= 300
    }, 'Description must be between 20 and 300 symbols');

cubeShema.path('imageUrl')
    .validate(function () {
        let regex = '^https:\/\/.*\.(png|jpg)$';
        return new RegExp(regex).test(this.imageUrl);
    }, 'Image URL must start with https://');

cubeShema.path('difficulty')
    .validate(function () {
        return this.difficulty >= 1 && this.difficulty <= 6
    }, 'Difficulty should be between 1 and 6');

const Cube = mongoose.model('Cube', cubeShema);
module.exports = Cube;