import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const {
    _id,
    calificacion,
    fechaLanzamiento,
    titulo,
    descripcion,
    genero,
    posterURL,
  } = movie;

  return (
    <div className=" py-6 flex flex-col justify-center sm:py-12 mb-8">
      <div className="py-3 sm:max-w-xl sm:mx-auto">
        <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
          <div className="h-48 overflow-visible w-1/2">
            <img className="rounded-3xl shadow-lg" src={posterURL} alt="" />
          </div>
          <div className="flex flex-col w-1/2 space-y-4">
            <Link
              to={`/movie/${_id}`}
              className="flex justify-between items-start"
            >
              <h2 className="text-3xl font-bold mr-4 hover:underline">{titulo}</h2>
              <div className="bg-yellow-400 font-bold rounded-xl p-2">
                {calificacion.toFixed(1)}
              </div>
            </Link>
            <div>
              <div className="text-sm text-gray-400">{genero.join(", ")}</div>
              <div className="text-lg text-gray-800">{fechaLanzamiento}</div>
            </div>
            <p className=" text-gray-400 max-h-40 overflow-y-hidden line-clamp">
              {descripcion}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
