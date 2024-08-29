// see: https://aboutreact.com/example-of-gridview-using-flatlist-in-react-native/
import { FlatList } from 'react-native';

import MovieCard from './MovieCard';

import { CARD_GAP } from '~/constants';
import { Item } from '~/models';
import { Subtitle } from '~/tamagui.config';

type Props = {
  data: Item[];
  isResults: boolean;
};

export const Results = (props: Props) => {
  return (
    <FlatList
      numColumns={2} // set number of columns
      columnWrapperStyle={{
        flex: 1,
        justifyContent: 'space-around',
        marginBottom: CARD_GAP,
      }} // space them out evenly
      data={props.data}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item: trend }) => <MovieCard key={trend.id} movie={trend} />}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <Subtitle p="$3" enterStyle={{ opacity: 0 }} animation="lazy">
          {props.isResults ? 'Search Results' : 'Trending'}
        </Subtitle>
      }
    />
  );
};
