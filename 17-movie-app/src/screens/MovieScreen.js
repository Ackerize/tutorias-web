import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import RatingModal from "../components/RatingModal";
import { IoArrowBack } from "react-icons/io5";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../utils/constants";

const MovieScreen = ({ type = "user" }) => {
  const token = localStorage.getItem("token");
  const authHeader = `Bearer ${token}`;

  const { idMovie } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get(`${API_URL}/peliculas/${idMovie}`, {
        headers: { authorization: authHeader },
      })
      .then((res) => {
        const { data } = res;
        const { pelicula } = data;
        setMovie(pelicula);
      })
      .catch((err) => console.log(err));
  }, []);

  const onShow = () => setShow(true);
  const onBack = () => navigate("/home");

  const onEdit = () => navigate(`/movie/edit/${idMovie}`);

  if (!movie) return null;

  const {
    _id,
    calificacion,
    fechaLanzamiento,
    titulo,
    descripcion,
    genero,
    posterURL,
    director,
    duracion,
    adulto,
    conteoVotos,
  } = movie;


  const onRating = (rating) => {
    const data = {
      calificacion: rating,
    };

    axios
      .patch(`${API_URL}/peliculas/${_id}`, data, {
        headers: { authorization: authHeader },
      })
      .then((res) => {
        const { data } = res;
        alert(data.message);
        setShow(false);
      })
      .catch((err) => console.log(err));
  }
  

  return (
    <section className="text-gray-700 body-font overflow-visible bg-white h-screen">
      <RatingModal show={show} onRating={onRating} setShow={setShow} />
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full object-contain object-center  border border-gray-200 rounded-3xl shadow-lg"
            src={posterURL}
            style={{ height: "700px" }}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
              {genero.join(", ")}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {titulo}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <ReactStars
                  size={30}
                  value={calificacion}
                  edit={false}
                  isHalf={true}
                />
                <span className="text-gray-600 ml-3">{
                  conteoVotos > 1 ? `${conteoVotos} reviews` : `${conteoVotos} review` 
                }</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                {director}
              </span>
            </div>
            <p className="leading-relaxed">{descripcion}</p>

            <div className="flex items-center mt-4">
              <p className="leading-relaxed py-2">{duracion} min</p>
              <p className="leading-relaxed ml-3 pl-3 py-2 border-l-2 border-gray-200">
                {fechaLanzamiento}
              </p>
              <p className="leading-relaxed ml-3 pl-3 py-2 border-l-2 border-gray-200">
                {adulto ? "Mayores de 18 años" : "Todo público"}
              </p>
            </div>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
            <div className="flex justify-between">
              <PrimaryButton onClick={onBack}>
                <IoArrowBack size={20} className="mr-2" />
                Regresar
              </PrimaryButton>
              <PrimaryButton onClick={type === "admin" ? onEdit : onShow}>{
                type === "admin" ? "Editar" : "Calificar"
              }</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieScreen;
