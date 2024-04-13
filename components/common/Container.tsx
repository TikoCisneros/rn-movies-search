import { PropsWithChildren } from 'react';
import { YStack, StackProps } from 'tamagui';

type PropsContainer = PropsWithChildren<StackProps>;

export const Container = ({ children, ...restProps }: PropsContainer) => {
  return (
    <YStack flex={1} {...restProps}>
      {children}
    </YStack>
  );
};
