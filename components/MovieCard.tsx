import { Link } from 'expo-router';
import { Card, Image, Paragraph, Text, XStack } from 'tamagui';

import { CARD_GAP, ONE_HALF, SCREEN_WIDTH, TW0 } from '~/constants';
import { Item } from '~/models';

type MovieCardProps = {
  movie: Item;
};

const CARD_DIMENSIONS = {
  width: SCREEN_WIDTH / TW0 - CARD_GAP,
  height: SCREEN_WIDTH / ONE_HALF,
};

const MovieCard = ({
  movie: { id, title, name, release_date, first_air_date, poster_path },
}: MovieCardProps) => {
  const itemTitle = title || name;

  return (
    <Link key={id} href={`/(drawer)/(home)/(movie)/${id}`} asChild>
      <Card
        elevate
        width={CARD_DIMENSIONS.width}
        height={CARD_DIMENSIONS.height}
        backgroundColor="$orange7">
        <Card.Header padding="$2">
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w200${poster_path}` }}
            alt={itemTitle}
            style={{
              borderTopRightRadius: 8,
              borderTopLeftRadius: 8,
              width: CARD_DIMENSIONS.width - 14,
              height: CARD_DIMENSIONS.height - 46,
            }}
          />
        </Card.Header>
        <Card.Footer p={8}>
          <XStack flex={1} space="$1">
            <Text flex={1} numberOfLines={1} fontSize={18} color="#fff">
              {itemTitle}
            </Text>
            <Paragraph theme="alt2">
              {new Date(release_date || first_air_date).getFullYear()}
            </Paragraph>
          </XStack>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default MovieCard;
