import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameCard from "../../components/organisms/GameCard/GameCard";
import { Game } from "../../types/game.types";
import games from "../../utils/games_list/games_list";
import styles from "./GameDescription.module.scss";
import { EmptyState } from "../../components/organisms/EmptyState/EmptyState";

const GameDescription = ({ className }: any) => {
  const params = useParams();
  const { gameId } = params;
  const [game, setGame] = useState<Game | undefined>(undefined);

  useEffect(() => {
    const selectedGame = games.find((g) => g.id === gameId);
    setGame(selectedGame);
  }, [gameId]);

  return (
    <div className={styles.gameDescription + " " + className}>
      {game ? <GameCard {...game} soloCard /> : <EmptyState />}
    </div>
  );
};

export default GameDescription;
