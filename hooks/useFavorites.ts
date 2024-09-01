import useAsyncStorage from './useAsyncStorage';

import { EMPTY_ARRAY, FAVORITES_KEY, ZERO } from '~/constants';
import { Favorite } from '~/models';

type UseFavorite = {
  favorites: Favorite[] | null;
  addFavorite: (favorite: Favorite) => void;
  removeFavorite: (favorite: Favorite) => void;
};

export function useFavorites(): UseFavorite {
  const [favorites, updateFavorites] = useAsyncStorage<Favorite[]>(FAVORITES_KEY);

  function addFavorite(favorite: Favorite) {
    updateFavorites([...(favorites ?? EMPTY_ARRAY), favorite]);
  }

  function removeFavorite(favorite: Favorite) {
    updateFavorites(
      (favorites ?? EMPTY_ARRAY).filter(
        (storedFavorite) => storedFavorite.id.localeCompare(favorite.id) !== ZERO
      )
    );
  }

  return { favorites, addFavorite, removeFavorite };
}
