import { useQuery } from '@tanstack/react-query';
import { Link } from 'expo-router';
import React from 'react';
import { Card, ScrollView, Text, useTheme } from 'tamagui';

import { Container, InputSearch } from '~/components';
import { getTrends } from '~/services/api';
import { Title } from '~/tamagui.config';

const Home = () => {
  const theme = useTheme();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['trends'],
    queryFn: () => getTrends(),
  });

  return (
    <Container>
      <Card paddingVertical="$4">
        <Card.Header space="$2.5">
          <Title color={theme.orange8}>Welcome</Title>
          <InputSearch size="$4" placeholder="Search movie by name..." />
        </Card.Header>
      </Card>
      <Link href="/(drawer)/(home)/(movie)/1" asChild>
        <Text>Navigate to movie 1</Text>
      </Link>
      <Link href="/(drawer)/(home)/(movie)/2" asChild>
        <Text>Navigate to movie 2</Text>
      </Link>
      {isPending && <Text>Loading</Text>}
      {isError && <Text>{JSON.stringify(error)}</Text>}
      {!isPending && !isError && (
        <ScrollView>
          <Text>{JSON.stringify(data)}</Text>
        </ScrollView>
      )}
    </Container>
  );
};

export default Home;
