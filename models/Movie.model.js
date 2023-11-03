const { Schema, model } = require('mongoose');

const PopiSchema = new Schema(
    {
        title: String,
        director: String,
        stars: [String],
        image: String,
        description: String,
        showtimes: [String],
    },
    {
        timestamps: true
    }
);

module.exports = model('movies', PopiSchema)