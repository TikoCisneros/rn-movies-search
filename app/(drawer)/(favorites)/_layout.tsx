import { colorTokens } from '@tamagui/themes';
import { Stack } from 'expo-router';
export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colorTokens.light.orange.orange8,
        },
        headerTintColor: colorTokens.light.orange.orange3,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
      }}
    />
  );
}
