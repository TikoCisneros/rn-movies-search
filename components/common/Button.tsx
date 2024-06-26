import { forwardRef } from 'react';
import { ButtonProps, TouchableOpacity } from 'react-native';

import { Button as TButton, ButtonText } from '../../tamagui.config';

export const Button = forwardRef<TouchableOpacity, ButtonProps>(({ onPress, title }, ref) => {
  return (
    <TButton onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </TButton>
  );
});
