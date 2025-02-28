import "react-native-reanimated";

import HomeScreen from "./(tabs)/HomeScreen";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <HomeScreen />
    </>
  );
}
