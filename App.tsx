import { Poppins_500Medium, useFonts } from "@expo-google-fonts/poppins";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Home, Onboarding } from "./screens";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    "CircularStd-Black": require("./assets/fonts/CircularStd-Black.ttf"),
    "CircularStd-BlackItalic": require("./assets/fonts/CircularStd-BlackItalic.ttf"),
    "CircularStd-Bold": require("./assets/fonts/CircularStd-Bold.ttf"),
    "CircularStd-BoldItalic": require("./assets/fonts/CircularStd-BoldItalic.ttf"),
    "CircularStd-Book": require("./assets/fonts/CircularStd-Book.ttf"),
    "CircularStd-BookItalic": require("./assets/fonts/CircularStd-BookItalic.ttf"),
    "CircularStd-Medium": require("./assets/fonts/CircularStd-Medium.ttf"),
    "CircularStd-MediumItalic": require("./assets/fonts/CircularStd-MediumItalic.ttf"),
    Poppins_500Medium,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: "Search",
              headerTitleStyle: {
                fontFamily: "CircularStd-Book",
                fontSize: 16,
                color: "#9b9b9b",
              },
              headerSearchBarOptions: {
                headerIconColor: "#000",
                shouldShowHintSearchIcon: false,
              },
              headerBackButtonMenuEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
