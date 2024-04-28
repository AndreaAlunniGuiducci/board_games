import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Filter } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import Input from "../../components/atoms/Input/Input";
import Modal from "../../components/atoms/Modal/Modal";
import Accordion from "../../components/organisms/Accordion/Accordion";
import GameCard from "../../components/organisms/GameCard/GameCard";
import { getFilteredGames, getGames } from "../../services";
import styles from "./GamesList.module.scss";
import { Alert } from "../../components/atoms/Alert/Alert";
import { useAppDispatch } from "../../store/storeHooks";
import { addError } from "../../store/slices/errorSlice";

interface GameFilter {
  name: string | undefined;
  age: number | undefined;
  numberPlayer: number | undefined;
  gameTime: number | undefined;
}

const GamesList = ({ className }: any) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [gameFilter, setGameFilter] = useState<GameFilter>({
    name: undefined,
    age: undefined,
    gameTime: undefined,
    numberPlayer: undefined,
  });
  const [gamesList, setGamesList] = useState<any[]>([]);
  const [gamesListLoading, setGamesListLoading] = useState<boolean>(false);

  const getGamesList = async () => {
    setGamesListLoading(true);
    getGames()
      .then((response) => {
        setGamesListLoading(false);
        setGamesList(response.data);
      })
      .catch((err) => {
        setGamesListLoading(false);
        dispatch(
          addError({ error: { errorMessage: err.message, errorTitle: "" } })
        );
        console.error(err);
      });
  };

  useEffect(() => {
    getGamesList();
  }, []);

  useEffect(() => {
    setGamesList([]);
    const filterTheGame = async () => {
      setGamesListLoading(true);
      getFilteredGames(gameFilter)
        .then((response) => {
          setGamesListLoading(false);
          setGamesList(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
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
      {gamesListLoading ? (
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
