import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Card, Spinner, Text } from 'tamagui';
import { useDebounce } from 'use-debounce';

import { Container, InputSearch } from '~/components';
import Results from '~/components/home/Results';
import { APP_TITLE, EMPTY_STRING, ZERO } from '~/constants';
import { ApiResult } from '~/models';
import { getSearchResults, getTrends } from '~/services/api';
import { Subtitle, Title } from '~/tamagui.config';

const Home = () => {
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
          <Title color="$orange8" enterStyle={{ opacity: 0, scale: 1.5, y: -10 }} animation="quick">
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
      <Subtitle p="$3" enterStyle={{ opacity: 0 }} animation="lazy">
        Trending
      </Subtitle>
      {(trendsQuery.isLoading || searchQuery.isLoading) && (
        <Spinner size="large" color="$orange9" py="$10" />
      )}
      {trendsQuery.isError && <Text>{JSON.stringify(trendsQuery.error)}</Text>}
      {!trendsQuery.isLoading && !trendsQuery.isError && trendsQuery.data && (
        <Results data={trendsQuery.data.results} />
      )}
    </Container>
  );
};

export default Home;
