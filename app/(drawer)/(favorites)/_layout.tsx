import { DrawerToggleButton } from '@react-navigation/drawer';
import { colorTokens } from '@tamagui/themes';
import { Stack } from 'expo-router';

import { FAVORITES_TITLE } from '~/constants';

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
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: FAVORITES_TITLE,
          headerLeft: (props) => <DrawerToggleButton {...props} />,
        }}
      />
    </Stack>
  );
}
