import axios from "axios";
import styles from "./Home.module.scss";
import { useEffect } from "react";
import { addGames, getFilteredGames, getGames } from "../../services";
import games from "../../utils/games_list/games_list";

const Home = ({ className }: any) => {
  const filteredGames = async () => {};

  useEffect(() => {
    filteredGames();
  }, []);
  return <div className={styles.home + " " + className}>Home</div>;
};

export default Home;
