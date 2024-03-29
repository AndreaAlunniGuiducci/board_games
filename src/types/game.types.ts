export type Category =
  | "filler"
  | "party_game"
  | "cards"
  | "war_game"
  | "euro"
  | "american"
  | "kids"
  | "management"
  | "investigatives"
  | "cooperative";

export interface Game {
  id?: string;
  image: string;
  name: string;
  playTime: number;
  minPlayer: number;
  maxPlayer: number;
  playerAge: number;
  description: string;
  categories: Category[];
}
