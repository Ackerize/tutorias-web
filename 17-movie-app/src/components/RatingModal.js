import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

const RatingModal = ({ show, onRating, setShow }) => {
  const [rating, setRating] = useState(0);
  if(!show) return null;

  return (
    <div className="fixed inset-0 w-full h-full z-20 bg-black bg-opacity-50 duration-300 overflow-y-auto">
      <div className="py-3 sm:max-w-xl sm:mx-auto">
        <div className="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg">
          <div className="px-12 py-5">
            <h2 className="text-gray-800 text-3xl font-semibold">
            ¡Tu opinión nos importa!
            </h2>
          </div>
          <div className="bg-gray-200 w-full flex flex-col items-center">
            <div className="flex flex-col items-center py-6 space-y-3">
              <span className="text-lg text-gray-800">
              ¿Cómo fue la calidad de la película?
              </span>
              <div className="flex space-x-3">
                <ReactStars size={60} isHalf={true}  onChange={setRating} />
              </div>
            </div>
            <div className="w-3/4 flex flex-col">
              <button
                className="py-3 my-8 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white"
                onClick={() => onRating(rating)}
              >
                Calificar ahora
              </button>
            </div>
          </div>
          <div className="h-20 flex items-center justify-center">
            <span className="text-gray-600 cursor-pointer hover:underline" onClick={() => setShow(false)}>
              Tal vez más tarde
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingModal;
