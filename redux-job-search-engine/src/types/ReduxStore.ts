import { FavouritesCart } from "./FavouritesCart";
import { Results } from "./Results"

export interface ReduxStore {
  favourites: {
    companies: FavouritesCart[],
  },
  categorySearch: {
    results: Results[],
    errorStatus?: boolean,
  },
  home: {
    displayGoodluck: boolean,
  },
};