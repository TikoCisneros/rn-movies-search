import { Ionicons } from '@expo/vector-icons';
import { useQuery } from '@tanstack/react-query';
import { Stack, useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect, useMemo } from 'react';
import { ImageBackground, Pressable } from 'react-native';
import { H1, Image, Paragraph, Spinner, Text, YStack } from 'tamagui';

import { ScrollContainer } from '~/components';
import { EMPTY_ARRAY, FAVORITES_KEY, ONE_HALF, SCREEN_WIDTH, TW0, ZERO } from '~/constants';
import useAsyncStorage from '~/hooks/useAsyncStorage';
import { Favorite, MediaType, MovieDetail } from '~/models';
import { getMovieDetails } from '~/services/api';
import { isValid } from '~/utils/common';

const POSTER_DIMENSIONS = {
  width: SCREEN_WIDTH / TW0,
  height: SCREEN_WIDTH / ONE_HALF,
};

const Movie = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();
  const [favorites, updateFavorites] = useAsyncStorage<Favorite[]>(FAVORITES_KEY);

  const movie = useQuery<MovieDetail, Error>({
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
        updateFavorites(
          (favorites ?? EMPTY_ARRAY).filter(
            (storedFavorite) => storedFavorite.id.localeCompare(favorite.id) !== ZERO
          )
        );
        return;
      }
      updateFavorites([...(favorites ?? EMPTY_ARRAY), favorite]);
    };
  }

  return <ScrollContainer>{renderBody()}</ScrollContainer>;

  function renderBody() {
    if (movie.isLoading) {
      return <Spinner size="large" color="$orange9" py="$10" />;
    }

    const { backdrop_path, poster_path, title, tagline, release_date, overview } = movie.data!;
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
        <ImageBackground
          height={POSTER_DIMENSIONS.height}
          source={{
            uri: `https://image.tmdb.org/t/p/w400${backdrop_path}`,
          }}>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w200${poster_path}` }}
            style={{
              ...POSTER_DIMENSIONS,
              margin: 12,
            }}
            borderRadius={6}
          />
        </ImageBackground>
        <YStack p="$3">
          <H1 color="$orange9" fontSize={38} mb="$2">
            {title}
            <Text
              fontSize={18}
              fontStyle="italic">{` (${new Date(release_date).getFullYear()})`}</Text>
          </H1>
          {tagline && (
            <Paragraph color="$gray11" textAlign="right" mb="$3">
              {tagline}
            </Paragraph>
          )}
          <Paragraph fontSize={18}>{overview}</Paragraph>
        </YStack>
      </>
    );
  }
};

export default Movie;

function isIdInFavorites(favorites: Favorite[] | null, favoriteId: string) {
  if (!favorites) return false;
  return isValid(favorites.find(({ id }) => id.localeCompare(favoriteId) === ZERO));
}
