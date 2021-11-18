const Pelicula = require("../models/Pelicula");
/* Obtener todas las películas */
module.exports.getPeliculas = function (req, res) {
  Pelicula.find({})
    .then((peliculas) => res.status(200).json({ peliculas }))
    .catch((error) => res.status(500).json({ error }));
};
/* Obtener una película */
module.exports.getPelicula = async function (req, res) {
  const { idPelicula } = req.params;
  Pelicula.findById(idPelicula)
    .then((pelicula) => res.status(200).json({ pelicula }))
    .catch((error) => res.status(500).json({ error }));
};

/* Crear una película */
module.exports.createPelicula = async function (req, res) {
  try {
    // req.body
    console.log(req.body);
    const nuevaPelicula = new Pelicula({ ...req.body });

    const response = await nuevaPelicula.save();
    res
      .status(200)
      .json({ response, message: "La pelicula se ha creado con exito" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

/* Actualizar una película */

module.exports.updatePelicula = function (req, res) {
  const { idPelicula } = req.params;
  const peliculaActualizada = req.body;

  /*
     {
         titulo: "Nuevo titulo"
     }
    */
  Pelicula.findByIdAndUpdate(idPelicula, peliculaActualizada, { new: true })
    .then((pelicula) =>
      res
        .status(200)
        .json({ pelicula, message: "La pelicula se ha actualizado con exito" })
    )
    .catch((error) => res.status(500).json({ error }));
};

/* Eliminar una película */

module.exports.deletePelicula = function (req, res) {
  const { idPelicula } = req.params;
  Pelicula.findByIdAndDelete(idPelicula)
    .then((pelicula) =>
      res.status(200).json({ message: "La pelicula se ha eliminado con exito" })
    )
    .catch((error) => res.status(500).json({ error }));
};

/* Buscar una pelicula */

module.exports.searchPelicula = function (req, res) {
  const { titulo } = req.params;
  /* water */
  Pelicula.find({ titulo: { $regex: titulo, $options: "i" } })
    .then((peliculas) => res.status(200).json({ peliculas }))
    .catch((error) => res.status(500).json({ error }));
};

/* Calificar una pelicula */
// 4.2, 5.0
module.exports.calificarPelicula = async function (req, res) {
  const { idPelicula } = req.params;
  const { calificacion } = req.body;

  const pelicula = await Pelicula.findById(idPelicula);
  const nuevoConteoVotos = pelicula.conteoVotos + 1;
  /* nuevoPromedio = viejoPromedio + ((nuevoValor - viejoPromedio)/ conteoVotos) */

  const nuevoPromedio =
   ( pelicula.calificacion +
    (calificacion - pelicula.calificacion) / nuevoConteoVotos).toFixed(1);

  Pelicula.updateOne(
    { _id: idPelicula },
    {
      calificacion: nuevoPromedio,
      conteoVotos: nuevoConteoVotos,
    }
  )
    .then(() =>
      res
        .status(200)
        .json({ message: "La pelicula se ha calificado con exito" })
    )
    .catch((error) => res.status(500).json({ message: "Ocurrió un error" }));
};
