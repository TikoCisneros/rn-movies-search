import { Redirect } from 'expo-router';

// Workaround correct initialRouteName solution: https://github.com/expo/router/issues/428
const Index = () => {
  return <Redirect href="/(drawer)/(home)" />;
};
export default Index;
