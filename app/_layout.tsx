import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "text-regular": require("../assets/fonts/Nunito-Regular.ttf"),
    "text-italic": require("../assets/fonts/Nunito-Italic.ttf"),
    "text-light": require("../assets/fonts/Nunito-Light.ttf"),
    "text-light-italic": require("../assets/fonts/Nunito-LightItalic.ttf"),
    "text-semibold": require("../assets/fonts/Nunito-SemiBold.ttf"),
    "text-semibold-italic": require("../assets/fonts/Nunito-SemiBoldItalic.ttf"),
    "text-extrabold": require("../assets/fonts/Nunito-ExtraBold.ttf"),
    "text-extrabold-italic": require("../assets/fonts/Nunito-ExtraBoldItalic.ttf"),
    heading: require("../assets/fonts/Vollkorn-Bold.ttf"),
    "logo-semibold": require("../assets/fonts/JosefinSans-SemiBold.ttf"),
    "logo-light": require("../assets/fonts/JosefinSans-Light.ttf"),
  });

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
