import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import { API_URL } from "../utils/constants";

const HomeScreen = ({ setToken, type }) => {
  const [movies, setMovies] = useState([]);
  const [oldMovies, setOldMovies] = useState([]);
  const token = localStorage.getItem("token");
  const authHeader = `Bearer ${token}`;

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/peliculas`, {
        headers: { authorization: authHeader },
      })
      .then((response) => {
        const { data } = response;
        const { peliculas } = data;
        setMovies(peliculas);
        setOldMovies(peliculas);
      })
      .catch((error) => console.log(error));
  }, []);

  const onLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
  }

  const onSearch = (event, search) => {
    event.preventDefault();
    if(search.length > 0){
      axios
      .get(`${API_URL}/peliculas/search/${search}`, {
        headers: { authorization: authHeader },
      })
      .then((response) => {
        const { data } = response;
        const { peliculas } = data;
        setMovies(peliculas);
      })
      .catch((error) => console.log(error));
    }else {
      setMovies(oldMovies);
    }
  }

  const onAddMovie = () => navigate('/movie/new');

  return (
    <div>
      <div className="flex justify-center items-center">
        <SearchBar onSubmit={onSearch} />
        {type === "admin" && (
          <div className="mr-8 mt-4">
            <PrimaryButton color="bg-green-500" onClick={onAddMovie}>
              New
            </PrimaryButton>
          </div>
        )}
        <div className="mr-8 mt-4">
          <PrimaryButton onClick={onLogout}>Logout</PrimaryButton>
        </div>
      </div>

      <MovieList movies={movies} />
    </div>
  );
};

export default HomeScreen;
