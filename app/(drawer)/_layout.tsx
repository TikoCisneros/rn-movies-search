import { Ionicons } from '@expo/vector-icons';
import { colorTokens } from '@tamagui/themes';
import { Drawer } from 'expo-router/drawer';
import { Platform } from 'react-native';

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        drawerHideStatusBarOnOpen: Platform.OS === 'ios',
        drawerActiveBackgroundColor: colorTokens.light.orange.orange8,
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: colorTokens.light.orange.orange9,
        drawerStyle: {
          backgroundColor: colorTokens.light.orange.orange3,
        },
        drawerLabelStyle: {
          marginLeft: -20,
        },

        headerStyle: {
          backgroundColor: colorTokens.light.orange.orange3,
        },
        headerTintColor: colorTokens.light.orange.orange9,
      }}>
      <Drawer.Screen
        name="(home)"
        options={{
          title: 'Movies',
          drawerIcon: (props) => <Ionicons name="home-outline" {...props} />,
        }}
      />
      <Drawer.Screen
        name="(favorites)"
        options={{
          title: 'Favorite Movies',
          drawerIcon: (props) => <Ionicons name="star-outline" {...props} />,
        }}
      />
    </Drawer>
  );
}
