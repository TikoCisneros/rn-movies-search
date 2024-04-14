import { Ionicons } from '@expo/vector-icons';
import { Input, SizeTokens, XStack, useTheme } from 'tamagui';

type InputSearchProps = {
  placeholder: string;
  size: SizeTokens;
  value?: string;
  onChangeText?: (text: string) => void;
};
export function InputSearch(props: InputSearchProps) {
  const theme = useTheme();

  return (
    <XStack
      alignItems="center"
      space="$0.5"
      backgroundColor={theme.orange2}
      borderRadius={8}
      paddingLeft={10}>
      <Ionicons name="search" size={24} color="gray" />
      <Input flex={1} placeholderTextColor={theme.gray11} borderWidth={0} {...props} />
    </XStack>
  );
}
