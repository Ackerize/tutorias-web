const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const PeliculaSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    fechaLanzamiento: {
        type: String,
        required: true
    },
    genero: {
        type: [String],
        required: true
    },
    duracion: {
        type: Number,
        required: true
    },
    posterURL: {
        type: String,
        required: true
    },
    adulto: {
        type: Boolean,
        default: false
    },
    conteoVotos: {
        type: Number,
        default: 0
    },
    calificacion: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Pelicula', PeliculaSchema);