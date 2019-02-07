const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    title: { type: mongoose.Schema.Types.String, required: true },
    content: { type: mongoose.Schema.Types.String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    date: { type: mongoose.Schema.Types.Date, required: true }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;