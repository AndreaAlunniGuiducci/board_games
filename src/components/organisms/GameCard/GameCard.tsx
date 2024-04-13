import { Badge } from "react-bootstrap";
import { Game } from "../../../types/game.types";
import styles from "./GameCard.module.scss";
import {
  HourglassSplit,
  PeopleFill,
  PersonStanding,
} from "react-bootstrap-icons";
import getCategory from "../../../utils/getCategory";

interface GameCardProps extends Game {
  soloCard?: boolean;
  onClick?: () => void;
}

const GameCard = ({
  image,
  name,
  categories,
  description,
  maxPlayer,
  minPlayer,
  playTime,
  playerAge,
  soloCard,
  ...props
}: GameCardProps) => {
  return (
    <div
      className={`${soloCard ? styles.soloCard : styles.gameCard}`}
      {...props}
    >
      <img src={image} alt={name + " image"} className={styles.image} />
      <div className={styles.infoDescription}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.categories}>
          {categories.map((c, index) => (
            <Badge key={index}>{getCategory(c)}</Badge>
          ))}
        </div>
        {soloCard && <div className={styles.descriprion}>{description}</div>}
        <div className={styles.infoWrapper}>
          <div className={styles.playerAge}>
            <PersonStanding />
            da {playerAge} anni
          </div>
          <div className={styles.playerNumber}>
            <PeopleFill /> {minPlayer}
            {maxPlayer === 99 ? "+" : " - " + maxPlayer} giocatori
          </div>
          <div className={styles.playTime}>
            <HourglassSplit /> {playTime} min
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
