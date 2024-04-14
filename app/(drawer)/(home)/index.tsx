import { Link } from 'expo-router';
import React from 'react';
import { Card, Text, useTheme } from 'tamagui';

import { Container, InputSearch } from '~/components';
import { Title } from '~/tamagui.config';

const Home = () => {
  const theme = useTheme();
  return (
    <Container>
      <Card paddingVertical="$4">
        <Card.Header space="$2.5">
          <Title color={theme.orange8}>Movieland</Title>
          <InputSearch size="$4" placeholder="Search movie by name..." />
        </Card.Header>
      </Card>
      <Link href="/(drawer)/(home)/(movie)/1" asChild>
        <Text>Navigate to movie 1</Text>
      </Link>
      <Link href="/(drawer)/(home)/(movie)/2" asChild>
        <Text>Navigate to movie 2</Text>
      </Link>
    </Container>
  );
};

export default Home;
