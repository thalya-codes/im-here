
import * as SplashScreen from "expo-splash-screen";
import { Text, View } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <View>
      <Text>HELLO WORLD</Text>
    </View>
  );
}
