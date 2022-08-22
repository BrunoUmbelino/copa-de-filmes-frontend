import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function ResultPage({ champions }) {
  const champion = champions[0];
  const vice = champions[1];

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="ResultPage pt-5">
            <div className="ResultPage-Header">
              <div>
                <p>CAMPEONATO DE FILMES</p>
                <h1 className="">Resultado Final</h1>
                <span>---</span>
                <p>
                  Veja o resultado final do campeonato de filmes de forma
                  simples e rápida
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-end my-3">
              <Link to="/">
                <button className="btn btn-secondary">Voltar</button>
              </Link>
            </div>
            <div className="ResultPage-Content">
              <div className="row">
                <div className="col-12">
                  <div className="ResultPage-Content-Film">
                    <div className="ResultPage-Content-Placing">
                      <span>1º</span>
                    </div>
                    <div className="ResultPage-Content-Title">
                      <h3>{champion?.titulo}</h3>
                    </div>
                  </div>
                  <div className="ResultPage-Content-Film">
                    <div className="ResultPage-Content-Placing">
                      <span>2º</span>
                    </div>
                    <div className="ResultPage-Content-Title">
                      <h3>{vice?.titulo}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
