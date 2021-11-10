const Pelicula = require('../models/Pelicula');
/* Obtener todas las películas */
module.exports.getPeliculas = function(req, res) {
    Pelicula.find({ })
    .then((peliculas) => res.status(200).json({ peliculas }))
    .catch((error) => res.status(500).json({ error }));
}
/* Obtener una película */
module.exports.getPelicula = async function(req, res) {
    const { idPelicula } = req.params;
    Pelicula.findById(idPelicula)
    .then((pelicula) => res.status(200).json({ pelicula }))
    .catch((error) => res.status(500).json({ error }));
}

/* Crear una película */
module.exports.createPelicula = async function(req, res) {
    try {
        // req.body
        console.log(req.body)
        const nuevaPelicula = new Pelicula({ ...req.body });

        const response = await nuevaPelicula.save()
        res.status(200).json({ response, message: "La pelicula se ha creado con exito" });
    } catch (error) {
        res.status(500).json({ error })
    }
}

/* Actualizar una película */

module.exports.updatePelicula = function(req, res) {
    const { idPelicula } = req.params;
    const peliculaActualizada = req.body;

    /*
     {
         titulo: "Nuevo titulo"
     }
    */
    Pelicula.findByIdAndUpdate(idPelicula, peliculaActualizada, { new: true })
    .then((pelicula) => res.status(200).json({ pelicula, message:"La pelicula se ha actualizado con exito" }))
    .catch((error) => res.status(500).json({ error }));
}

/* Eliminar una película */

module.exports.deletePelicula = function(req, res) {
    const { idPelicula } = req.params;
    Pelicula.findByIdAndDelete(idPelicula)
    .then((pelicula) => res.status(200).json({ message:"La pelicula se ha eliminado con exito" }))
    .catch((error) => res.status(500).json({ error }));
}
