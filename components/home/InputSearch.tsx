import { Ionicons } from '@expo/vector-icons';
import { Input, SizeTokens, XStack, useTheme } from 'tamagui';

export function InputSearch(props: { size: SizeTokens; placeholder: string }) {
  const theme = useTheme();

  return (
    <XStack
      alignItems="center"
      space="$0.5"
      backgroundColor={theme.orange2}
      borderRadius={8}
      paddingLeft={10}>
      <Ionicons name="search" size={24} color="gray" />
      <Input
        flex={1}
        size={props.size}
        placeholderTextColor={theme.gray11}
        borderWidth={0}
        placeholder={props.placeholder}
      />
    </XStack>
  );
}
