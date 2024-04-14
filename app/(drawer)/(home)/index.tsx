import { useQuery } from '@tanstack/react-query';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Card, ScrollView, Text, useTheme } from 'tamagui';
import { useDebounce } from 'use-debounce';

import { Container, InputSearch } from '~/components';
import { APP_TITLE, EMPTY_STRING, ZERO } from '~/constants';
import { ApiResult } from '~/models';
import { getTrends, getSearchResults } from '~/services/api';
import { Subtitle, Title } from '~/tamagui.config';

const Home = () => {
  const theme = useTheme();
  const [query, setQuery] = useState<string>(EMPTY_STRING);
  const [debQuery] = useDebounce(query, 500);

  const trendsQuery = useQuery<ApiResult, Error>({
    queryKey: ['trends'],
    queryFn: getTrends(),
  });

  const searchQuery = useQuery<ApiResult, Error>({
    queryKey: ['search', debQuery],
    queryFn: () => getSearchResults(debQuery),
    enabled: debQuery.length > ZERO,
  });

  return (
    <Container>
      <Card paddingVertical="$4">
        <Card.Header space="$2.5">
          <Title
            color={theme.orange8}
            enterStyle={{ opacity: 0, scale: 1.5, y: -10 }}
            animation="quick">
            {APP_TITLE}
          </Title>
          <InputSearch
            size="$4"
            placeholder="Search for a movie or tv show..."
            value={query}
            onChangeText={setQuery}
          />
        </Card.Header>
      </Card>
      <Link href="/(drawer)/(home)/(movie)/1" asChild>
        <Text>Navigate to movie 1</Text>
      </Link>
      <Link href="/(drawer)/(home)/(movie)/2" asChild>
        <Text>Navigate to movie 2</Text>
      </Link>
      <Subtitle pt={10} enterStyle={{ opacity: 0 }} animation="lazy">
        Tending
      </Subtitle>
      {(trendsQuery.isLoading || searchQuery.isLoading) && <Text>Loading</Text>}
      {trendsQuery.isError && <Text>{JSON.stringify(trendsQuery.error)}</Text>}
      {!trendsQuery.isLoading && !trendsQuery.isError && (
        <ScrollView>
          <Text>{JSON.stringify(trendsQuery.data)}</Text>
        </ScrollView>
      )}
    </Container>
  );
};

export default Home;
