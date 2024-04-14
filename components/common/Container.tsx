import { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native';
import { YStack, StackProps } from 'tamagui';

type PropsContainer = PropsWithChildren<StackProps>;

export const Container = ({ children, ...restProps }: PropsContainer) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <YStack flex={1} {...restProps}>
        {children}
      </YStack>
    </SafeAreaView>
  );
};
