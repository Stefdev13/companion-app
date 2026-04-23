import { useGetUserData } from "@/hooks/useGetUserData";
import { useUserDataStore } from "@/stores/UserDataStore";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Alert } from "react-native";

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    "text-regular": require("../assets/fonts/Nunito-Regular.ttf"),
    "text-italic": require("../assets/fonts/Nunito-Italic.ttf"),
    "text-light": require("../assets/fonts/Nunito-Light.ttf"),
    "text-light-italic": require("../assets/fonts/Nunito-LightItalic.ttf"),
    "text-semibold": require("../assets/fonts/Nunito-SemiBold.ttf"),
    "text-semibold-italic": require("../assets/fonts/Nunito-SemiBoldItalic.ttf"),
    "text-extrabold": require("../assets/fonts/Nunito-ExtraBold.ttf"),
    "text-extrabold-italic": require("../assets/fonts/Nunito-ExtraBoldItalic.ttf"),
    heading: require("../assets/fonts/Vollkorn-Bold.ttf"),
    "logo-semibold": require("../assets/fonts/JosefinSlab-SemiBold.ttf"),
    "logo-light": require("../assets/fonts/JosefinSlab-Regular.ttf"),
  });
  const { user, isLoaded, error } = useGetUserData();
  const userDataStore = useUserDataStore();

  SplashScreen.preventAutoHideAsync();

  useEffect(() => {
    if (isLoaded && fontsLoaded) {
      // isLoaded already checks !loading && !error && user !== null -> user! is okay here
      userDataStore.setUserData(user!);

      SplashScreen.hide();
    } else if (error) {
      Alert.alert(
        "Couldn’t load your data",
        "Check your connection or try again later.",
        [{ text: "OK", style: "cancel" }],
      );
    }
  }, [isLoaded, error]);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
