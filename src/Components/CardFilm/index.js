import React from "react";
import "./style.css";

function index({ Film, handleSelectedFilms, counter, loading }) {
  return (
    <>
      <div className="col-md-3 p-0">
        <div className="CardFilm m-2">
          <div className="CardFilm-Checkbox">
            <input
              type="checkbox"
              name="film"
              disabled={counter < 8 ? false : true}
              onClick={() => handleSelectedFilms(Film.id)}
            />
          </div>

          <h3 className="CardFilm-Title">{Film.titulo}</h3>
          <p className="CardFilm-year">{Film.ano}</p>
        </div>
      </div>
    </>
  );
}

export default index;
