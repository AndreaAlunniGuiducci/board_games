import { useNavigate } from "react-router-dom";
import GameCard from "../../components/organisms/GameCard/GameCard";
import styles from "./GamesList.module.scss";
import Accordion from "../../components/organisms/Accordion/Accordion";
import { Filter } from "react-bootstrap-icons";
import Input from "../../components/atoms/Input/Input";
import { useEffect, useState } from "react";
import { getFilteredGames, getGames } from "../../services";
import Modal from "../../components/atoms/Modal/Modal";
import { Spinner } from "react-bootstrap";

interface GameFilter {
  name: string | undefined;
  age: number | undefined;
  numberPlayer: number | undefined;
  gameTime: number | undefined;
}

const GamesList = ({ className }: any) => {
  const navigate = useNavigate();

  const [gameFilter, setGameFilter] = useState<GameFilter>({
    name: undefined,
    age: undefined,
    gameTime: undefined,
    numberPlayer: undefined,
  });
  const [gamesList, setGamesList] = useState<any>([]);

  const getGamesList = async () => {
    const response = await getGames();
    setGamesList(response.data);
  };

  useEffect(() => {
    getGamesList();
  }, []);

  useEffect(() => {
    setGamesList([]);
    const filterTheGame = async () => {
      const filteredGames = await getFilteredGames(gameFilter);
      setGamesList(filteredGames.data);
    };
    filterTheGame();
  }, [gameFilter]);

  return (
    <div className={styles.gamesList + " " + className}>
      <div className={styles.searchBar}>
        <Accordion
          items={[
            {
              body: (
                <div className={styles.inputWrapper}>
                  <Input
                    label="Nome"
                    placeholder="Nome gioco"
                    value={gameFilter.name}
                    onChange={(e) =>
                      setGameFilter({
                        ...gameFilter,
                        name: e.currentTarget.value,
                      })
                    }
                  />
                  <Input
                    label="Età"
                    placeholder="Età giocatore"
                    value={gameFilter.age}
                    onChange={(e) =>
                      setGameFilter({
                        ...gameFilter,
                        age: e.currentTarget.value,
                      })
                    }
                  />
                  <Input
                    label="Numero giocatori"
                    placeholder="Numero giocatori"
                    value={gameFilter.numberPlayer}
                    onChange={(e) =>
                      setGameFilter({
                        ...gameFilter,
                        numberPlayer: e.currentTarget.value,
                      })
                    }
                  />
                  <Input
                    label="Minuti di gioco"
                    placeholder="Minuti di gioco"
                    value={gameFilter.gameTime}
                    onChange={(e) =>
                      setGameFilter({
                        ...gameFilter,
                        gameTime: e.currentTarget.value,
                      })
                    }
                  />
                </div>
              ),
              eventKey: "0",
              header: (
                <div>
                  Filtri <Filter />
                </div>
              ),
            },
          ]}
        />
      </div>
      {gamesList.length < 1 ? (
        <Modal className={styles.loadingModal}>
          <Spinner />
        </Modal>
      ) : (
        <div className={styles.cardsWrapper}>
          {gamesList.map((g: any) => (
            <GameCard
              key={g.id}
              onClick={() => navigate("/gioco/" + g.id)}
              categories={g.categories}
              description={g.description}
              image={g.image}
              maxPlayer={g.maxPlayer}
              minPlayer={g.minPlayer}
              name={g.name}
              playTime={g.playTime}
              playerAge={g.playerAge}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default GamesList;
