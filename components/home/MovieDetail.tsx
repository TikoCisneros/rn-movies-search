import { ImageBackground } from 'react-native';
import { H1, Image, Paragraph, Text, YStack } from 'tamagui';

import { ONE_HALF, SCREEN_WIDTH, TW0 } from '~/constants';
import { MovieDetail as Movie } from '~/models';

const POSTER_DIMENSIONS = {
  width: SCREEN_WIDTH / TW0,
  height: SCREEN_WIDTH / ONE_HALF,
};

type MovieDetailProps = {
  movie: Movie;
};

export function MovieDetail(props: MovieDetailProps) {
  const { backdrop_path, poster_path, title, tagline, release_date, overview } = props.movie;
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
