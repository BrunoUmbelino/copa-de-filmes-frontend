import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import { getAllFilms, FilmCompetition } from "./Services/api";

import "./App.css";
import ResultPage from "./Pages/ResultPage/";
import SelectionPage from "./Pages/SelectionPage/";

function App() {
  const [allFilms, setAllFilms] = useState([]);
  const [selectedFilms, setSelectedFilms] = useState([]);
  const [champions, setChampions] = useState([]);
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function handleFilms() {
      const films = await getAllFilms();
      setAllFilms([...films]);
      if (films[0] !== null) setLoading(false);
    }
    handleFilms();
  }, []);

  function handleSelectedFilms(filmId) {
    let itemExists = selectedFilms.findIndex((fId) => fId === filmId) !== -1;

    if (itemExists) {
      const newSelectedFilms = selectedFilms.filter((fId) => fId !== filmId);
      setSelectedFilms(newSelectedFilms);
      setCounter(counter - 1);
    } else {
      setSelectedFilms([...selectedFilms, filmId]);
      setCounter(counter + 1);
    }
  }

  async function submitSelectedFilms() {
    const newChampions = await FilmCompetition(selectedFilms);
    if (newChampions[0] != null) setChampions([...newChampions]);

    setSelectedFilms([]);
    setCounter(0);
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <SelectionPage
            allFilms={allFilms}
            counter={counter}
            loading={loading}
            handleSelectedFilms={handleSelectedFilms}
            submitSelectedFilms={submitSelectedFilms}
          />
        </Route>
        <Route path="/results">
          <ResultPage champions={champions} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
