import { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView, ScrollViewProps } from 'tamagui';

type PropsContainer = PropsWithChildren<ScrollViewProps>;

export const ScrollContainer = ({ children, ...restProps }: PropsContainer) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView flex={1} {...restProps}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};
