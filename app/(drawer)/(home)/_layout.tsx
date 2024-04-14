import { DrawerToggleButton } from '@react-navigation/drawer';
import { colorTokens } from '@tamagui/themes';
import { Stack } from 'expo-router';

import { EMPTY_STRING, NAV_BACK } from '~/constants';

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
          title: EMPTY_STRING,
          headerLeft: (props) => <DrawerToggleButton {...props} />,
        }}
      />
      <Stack.Screen
        name="(movie)/[id]"
        options={{ title: EMPTY_STRING, headerBackTitle: NAV_BACK }}
      />
    </Stack>
  );
}
