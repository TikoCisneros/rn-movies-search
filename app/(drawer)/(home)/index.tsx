import React from 'react';
import { Card, useTheme } from 'tamagui';

import { Container, InputSearch } from '~/components';
import { Title } from '~/tamagui.config';

const Home = () => {
  const theme = useTheme();
  return (
    <Container>
      <Card paddingVertical="$4">
        <Card.Header space="$2.5">
          <Title color={theme.orange8}>Welcome</Title>
          <InputSearch size="$4" placeholder="Search movie by name..." />
        </Card.Header>
      </Card>
    </Container>
  );
};

export default Home;
