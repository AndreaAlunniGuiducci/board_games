import axios from "axios";
import { Game } from "../types/game.types";

axios.defaults.baseURL = "http://localhost:4000";

export const getGames = () => {
  return axios.get("/getgames");
};

export const addGames = (game: Game) => {
  return axios.post("/addgame", game);
};

export const getFilteredGames = (filter: any) => {
  return axios.post("/searchgames", filter);
};
