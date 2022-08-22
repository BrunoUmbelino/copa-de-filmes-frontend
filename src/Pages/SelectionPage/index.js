import React from "react";
import { Link } from "react-router-dom";
import CardFilm from "../../Components/CardFilm/";
import "./style.css";
import Loading from "../../Components/Loading";

function SelectionPage({
  allFilms,
  counter,
  loading,
  handleSelectedFilms,
  submitSelectedFilms,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="SelectionPage py-5">
            <div className="SelectionPage-Header">
              <div>
                <p>CAMPEONATO DE FILMES</p>
                <h1 className="">Fase de Seleção</h1>
                <span>---</span>
                <p>
                  Selecione 8 filmes que você deseja que entrem na competição e
                  depois pressione o botão Gerar Meu Campeonato para prosseguir.
                </p>
              </div>
            </div>
            <div className="SelectionPage-Content">
              <div className="row">
                <div className="col d-flex align-items-center justify-content-between my-2">
                  <div className="SelectionPage-Counter">
                    <span>Selecionados</span>
                    <br />
                    <span>{counter} de 8 filmes</span>
                  </div>
                  <Link to="/results">
                    <button
                      className="btn btn-info"
                      disabled={counter < 8 ? true : false}
                      onClick={() => {
                        submitSelectedFilms();
                      }}
                    >
                      GERAR MEU CAMPEONATO
                    </button>
                  </Link>
                </div>
              </div>
              {loading ? (
                <div className="d-flex pt-5 justify-content-center">
                  <Loading />
                </div>
              ) : (
                <div className="SelectionPage-Films">
                  <div className="row">
                    {allFilms.map((Film, i) => {
                      return (
                        <CardFilm
                          key={i}
                          Film={Film}
                          handleSelectedFilms={handleSelectedFilms}
                          counter={counter}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectionPage;
