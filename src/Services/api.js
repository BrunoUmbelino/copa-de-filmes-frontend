import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const getAllFilms = async () => {
  try {
    const response = await api.get("/Films");
    if (response.data != null) return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const FilmCompetition = async (selectedFilms) => {
  try {
    const response = await api.post("/Films", {
      Ids: selectedFilms,
    });
    if (response.data !== null) return response.data;
  } catch (error) {
    console.log(error);
  }
};
