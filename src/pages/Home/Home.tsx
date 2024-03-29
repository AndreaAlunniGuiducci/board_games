import styles from "./Home.module.scss";
import { useEffect } from "react";

const Home = ({ className }: any) => {
  const filteredGames = async () => {};

  useEffect(() => {
    filteredGames();
  }, []);
  return <div className={styles.home + " " + className}>Home</div>;
};

export default Home;
