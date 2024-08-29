import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { ImageBackground } from 'react-native';
import { H1, Image, Paragraph, Spinner, Text, YStack } from 'tamagui';

import { ScrollContainer } from '~/components';
import { ONE_HALF, SCREEN_WIDTH, TW0 } from '~/constants';
import { MediaType, MovieDetail } from '~/models';
import { getMovieDetails } from '~/services/api';

const POSTER_DIMENSIONS = {
  width: SCREEN_WIDTH / TW0,
  height: SCREEN_WIDTH / ONE_HALF,
};

const Movie = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();

  const movie = useQuery<MovieDetail, Error>({
    queryKey: ['movie', id],
    queryFn: () => getMovieDetails(+id, MediaType.MOVIE),
  });

  useEffect(() => {
    navigation.setOptions({
      title: movie.data?.title || 'Movie detail',
    });
  }, [movie.data]);

  console.log(JSON.stringify(movie.data));

  return <ScrollContainer>{renderBody()}</ScrollContainer>;

  function renderBody() {
    if (movie.isLoading) {
      return <Spinner size="large" color="$orange9" py="$10" />;
    }

    const { backdrop_path, poster_path, title, tagline, release_date, overview } = movie.data!;
    return (
      <>
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
            sharedTransitionTag={`movie-${id}`}
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
