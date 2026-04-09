import { appColours } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function RootLayout() {
  const insets = useSafeAreaInsets();
  const bottomInset = Math.max(insets.bottom + 30, 12);

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: bottomInset + 40,
          paddingHorizontal: 8,
          paddingBottom: bottomInset,
          paddingTop: 8,
          backgroundColor: appColours.eikcoMain,
        },
        tabBarActiveTintColor: appColours.generalMid,
        tabBarInactiveTintColor: appColours.backgroundAccent,
      }}
    >
      <Tabs.Screen
        name="survey"
        options={{
          title: "Survey",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="clipboard-outline"
              size={size ?? 24}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="emissions"
        options={{
          title: "My Emissions",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="pie-chart-outline"
              size={size ?? 24}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" size={size ?? 24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="reductions"
        options={{
          title: "Reductions",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trending-down" size={size ?? 24} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
