import { appColours } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as theme from "../../constants/theme";

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
          backgroundColor: appColours.backgroundColour,
          boxShadow: [
            {
              offsetX: 0,
              offsetY: -4,
              blurRadius: "12px",
              spreadDistance: "2px",
              color: theme.appColours.shadow,
              inset: false,
            },
          ],
        },
        tabBarActiveTintColor: appColours.eikcoMain,
        tabBarInactiveTintColor: appColours.darkGrey,
      }}
    >
      <Tabs.Screen
        name="survey"
        options={{
          title: "Survey",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "clipboard" : "clipboard-outline"}
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
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "pie-chart" : "pie-chart-outline"}
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
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "grid" : "grid-outline"}
              size={size ?? 24}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="reductions"
        options={{
          title: "Reductions",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="trending-down" size={size ?? 24} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
