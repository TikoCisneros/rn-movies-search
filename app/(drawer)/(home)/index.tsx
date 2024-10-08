import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Card, Spinner } from 'tamagui';
import { useDebounce } from 'use-debounce';

import { Container, InputSearch, Results } from '~/components';
import { APP_TITLE, EMPTY_ARRAY, EMPTY_STRING, ZERO } from '~/constants';
import { ApiResult, Item } from '~/models';
import { getSearchResults, getTrends } from '~/services/api';
import { Title } from '~/tamagui.config';

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
      {trendsQuery.isLoading || searchQuery.isLoading ? (
        <Spinner size="large" color="$orange9" py="$10" />
      ) : (
        <Results
          data={getResults(searchQuery.data, trendsQuery.data)}
          isResults={!!searchQuery?.data?.results}
        />
      )}
    </Container>
  );
};

function getResults(queryResults?: ApiResult, trendsResults?: ApiResult): Item[] {
  if (queryResults) return queryResults.results;
  if (trendsResults) return trendsResults.results;
  return EMPTY_ARRAY;
}

export default Home;
