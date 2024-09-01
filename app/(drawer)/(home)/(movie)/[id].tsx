import { Ionicons } from '@expo/vector-icons';
import { useQuery } from '@tanstack/react-query';
import { Stack, useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect, useMemo } from 'react';
import { Pressable } from 'react-native';
import { Spinner } from 'tamagui';

import { ScrollContainer } from '~/components';
import { MovieDetail } from '~/components/home/MovieDetail';
import { ZERO } from '~/constants';
import { useFavorites } from '~/hooks/useFavorites';
import { Favorite, MediaType, MovieDetail as Movie } from '~/models';
import { getMovieDetails } from '~/services/api';
import { isValid } from '~/utils/common';

const MoviePage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const movie = useQuery<Movie, Error>({
    queryKey: ['movie', id],
    queryFn: () => getMovieDetails(+id, MediaType.MOVIE),
  });

  useEffect(() => {
    navigation.setOptions({
      title: movie.data?.title || 'Movie detail',
    });
  }, [movie.data]);

  const isFavorite = useMemo(() => isIdInFavorites(favorites, id), [favorites, id]);

  function handleToggleFavorite(favorite: Favorite) {
    return function () {
      if (isFavorite) {
        removeFavorite(favorite);
        return;
      }
      addFavorite(favorite);
    };
  }

  return <ScrollContainer>{renderBody()}</ScrollContainer>;

  function renderBody() {
    if (movie.isLoading) {
      return <Spinner size="large" color="$orange9" py="$10" />;
    }

    const { poster_path, title } = movie.data!;
    return (
      <>
        <Stack.Screen
          options={{
            headerRight: () => (
              <Pressable
                onPress={handleToggleFavorite({
                  id,
                  mediaType: MediaType.MOVIE,
                  name: title,
                  thumb: poster_path,
                })}>
                <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={28} color="white" />
              </Pressable>
            ),
          }}
        />
        <MovieDetail movie={movie.data!} />
      </>
    );
  }
};

export default MoviePage;

function isIdInFavorites(favorites: Favorite[] | null, favoriteId: string) {
  if (!favorites) return false;
  return isValid(favorites.find(({ id }) => id.localeCompare(favoriteId) === ZERO));
}
