import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieButton from "./Buttons/MovieButton";
import Checkbox from "./Inputs/Checkbox";
import MovieInput from "./Inputs/MovieInput";
import MovieTextArea from "./Inputs/MovieTextArea";

const MovieForm = ({ onSubmit, handleDelete, editMovie }) => {
  const [movie, setMovie] = useState({
    titulo: "",
    descripcion: "",
    duracion: "",
    genero: [],
    director: "",
    fechaLanzamiento: "",
    posterURL: "",
    adulto: false,
  });

  useEffect(() => {
    if (editMovie) {
      const {
        _id,
        __v,
        createdAt,
        updatedAt,
        conteoVotos,
        calificacion,
        ...rest
      } = editMovie;
      setMovie({
        ...rest,
        genero: editMovie.genero.join(", "),
      });
    }
  }, [editMovie]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setMovie({
        ...movie,
        adulto: checked,
      });
    } else {
      setMovie({
        ...movie,
        [name]: value,
      });
    }
  };

  const onBack = () => navigate("/home");

  return (
    <div className="mt-5">
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(movie);
        }}
      >
        <MovieInput
          label="Nombre"
          required
          placeholder="Nombre de la película"
          name="titulo"
          value={movie.titulo}
          onChange={handleChange}
        />
        <MovieInput
          label="Director"
          required
          placeholder="Nombre del director"
          name="director"
          value={movie.director}
          onChange={handleChange}
        />
        <MovieTextArea
          label="Descripcion"
          required
          placeholder="Ingrese la descripción de la película"
          name="descripcion"
          value={movie.descripcion}
          onChange={handleChange}
        />
        <MovieInput
          label="Año de lanzamiento"
          required
          placeholder="Año de lanzamiento de la película"
          name="fechaLanzamiento"
          value={movie.fechaLanzamiento}
          onChange={handleChange}
        />
        <MovieInput
          label="Géneros"
          required
          placeholder="Géneros de la película"
          name="genero"
          value={movie.genero}
          onChange={handleChange}
        />
        <MovieInput
          label="Duración (en minutos)"
          required
          placeholder="Duración en minutos de la película"
          name="duracion"
          type="number"
          value={movie.duracion}
          onChange={handleChange}
        />
        <MovieInput
          label="URL Poster"
          required
          placeholder="URL del poster de la película"
          name="posterURL"
          value={movie.posterURL}
          onChange={handleChange}
        />
        <Checkbox
          name="adulto"
          label="Adulto?"
          activeLabel="SÍ"
          inactiveLabel="NO"
          value={movie.adulto}
          onChange={handleChange}
        />
        <p className="text-xs text-red-500 text-right my-3">
          Campos requeridos están marcados con un asterisco{" "}
          <abbr title="Required field">*</abbr>
        </p>
        <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
          <MovieButton onClick={onBack}>Regresar</MovieButton>

          {editMovie && (
            <MovieButton
              bgColor="bg-red-400"
              hoverColor="bg-red-500"
              textColor="text-white"
              onClick={handleDelete}
            >
              Eliminar
            </MovieButton>
          )}
          <MovieButton
            bgColor="bg-green-400"
            hoverColor="bg-green-500"
            textColor="text-white"
            type="submit"
          >
            Guardar
          </MovieButton>
        </div>
      </form>
    </div>
  );
};

export default MovieForm;
