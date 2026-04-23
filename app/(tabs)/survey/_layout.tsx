import { Stack } from "expo-router";

export default function SurveyLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="surveycategory"
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
    </Stack>
  );
}
