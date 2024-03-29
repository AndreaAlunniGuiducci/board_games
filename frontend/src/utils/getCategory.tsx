import { Category } from "../types/game.types";

const getCategory = (category: Category) => {
  switch (category) {
    case "filler":
      return "filler";
    case "american":
      return "american";
    case "cards":
      return "carte";
    case "euro":
      return "euro";
    case "investigatives":
      return "investigativo";
    case "kids":
      return "bambini";
    case "management":
      return "gestionale";
    case "party_game":
      return "party game";
    case "war_game":
      return "war game";
  }
};

export default getCategory
