// see: https://aboutreact.com/example-of-gridview-using-flatlist-in-react-native/
import { FlatList } from 'react-native';

import MovieCard from '../MovieCard';

import { CARD_GAP } from '~/constants';
import { Item } from '~/models';

type Props = {
  data: Item[];
};

const Results = (props: Props) => {
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
    />
  );
};

export default Results;
