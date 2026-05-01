import { Stack } from "expo-router";

export default function SurveyLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#fff" },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="surveycategory"
        options={{ animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="question"
        options={{ animation: "slide_from_right" }}
      />
    </Stack>
  );
}
