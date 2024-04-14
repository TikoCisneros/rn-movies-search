import { Ionicons } from '@expo/vector-icons';
import { colorTokens } from '@tamagui/themes';
import { Drawer } from 'expo-router/drawer';
import { Platform } from 'react-native';

import { APP_TITLE, FAVORITES_TITLE } from '~/constants';

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        drawerHideStatusBarOnOpen: Platform.OS === 'ios',
        drawerActiveBackgroundColor: colorTokens.light.orange.orange3,
        drawerActiveTintColor: colorTokens.light.orange.orange9,
        drawerInactiveTintColor: colorTokens.light.orange.orange1,
        drawerStyle: {
          backgroundColor: colorTokens.light.orange.orange8,
        },
        drawerLabelStyle: {
          marginLeft: -20,
          fontSize: 16,
        },
        headerShown: false,
      }}>
      <Drawer.Screen
        name="(home)"
        options={{
          title: APP_TITLE,
          drawerIcon: (props) => <Ionicons name="home-outline" {...props} />,
        }}
      />
      <Drawer.Screen
        name="(favorites)"
        options={{
          title: FAVORITES_TITLE,
          drawerIcon: (props) => <Ionicons name="star-outline" {...props} />,
        }}
      />
    </Drawer>
  );
}
