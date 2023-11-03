const express = require('express');
const router = express.Router();

const MOVIE = require('../models/Movie.model')
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
    MOVIE
        .find()
        .then(movies => res.render('movies', { movies }))
        .catch(err => console.log(err))
})
router.get('/movies/:movies_id', (req, res) => {

    const { _id } = req.params

    MOVIE
        .findById(req.params._id)
        .then(movie => res.render('details', { movie }))
        .catch(err => console.log(err))

})
module.exports = router;

