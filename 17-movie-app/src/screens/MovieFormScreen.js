import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MovieForm from "../components/MovieForm";
import MovieTitle from "../components/MovieTitle";
import { API_URL } from "../utils/constants";

const MovieFormScreen = () => {

  const token = localStorage.getItem("token");
  const authHeader = `Bearer ${token}`;
  const navigate = useNavigate();
  const [movieEdit, setMovieEdit] = useState(null);

  const { idMovie } = useParams();
  
  useEffect(() => {
    if(idMovie) {
      axios.get(`${API_URL}/peliculas/${idMovie}`, { headers: { authorization: authHeader } })
        .then(response => {
          const { data } = response;
          const { pelicula } = data;
          setMovieEdit(pelicula);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, []);

  const onCreateMovie = (movie) => {
    const data = {
      ...movie,
      genero: movie.genero.split(", "),
      duracion: Number(movie.duracion),
    }
    axios.post(`${API_URL}/peliculas`, data, {
      headers: { authorization: authHeader }
    })
    .then(response => {
      const { data } = response;
      const { message } = data;
      alert(message);
      navigate("/home");
    })
    .catch(error => console.log(error));
  }

  const onUpdateMovie = (movie) => {
    const data = {
      ...movie,
      genero: movie.genero.split(", "),
      duracion: Number(movie.duracion),
    }
    axios.put(`${API_URL}/peliculas/${idMovie}`, data, {
      headers: { authorization: authHeader }
    })
    .then(response => {
      const { data } = response;
      const { message } = data;
      alert(message);
      navigate("/home");
    })
    .catch(error => console.log(error));
  }

  const onDeleteMovie = () => {
    axios.delete(`${API_URL}/peliculas/${idMovie}`, {
      headers: { authorization: authHeader }
    })
    .then(response => {
      const { data } = response;
      const { message } = data;
      alert(message);
      navigate("/home");
    })
    .catch(error => console.log(error));
  }

  return (
    <div className="min-h-screen flex justify-center bg-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center">
      <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
        <div className="grid  gap-8 grid-cols-1">
          <div className="flex flex-col ">
            <MovieTitle>Crear película</MovieTitle>
            <MovieForm onSubmit={ idMovie ? onUpdateMovie : onCreateMovie}  handleDelete={onDeleteMovie} editMovie={movieEdit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieFormScreen;
