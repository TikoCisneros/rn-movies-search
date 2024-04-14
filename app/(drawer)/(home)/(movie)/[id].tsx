import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Text } from 'react-native';

import { Container } from '~/components';

const Movie = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Movie ' + id,
    });
  }, []);

  return (
    <Container padding="$4">
      <Text>Movie</Text>
    </Container>
  );
};

export default Movie;
