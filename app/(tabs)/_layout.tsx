import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
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
        }}
      />
      <Tabs.Screen
        name="emissions"
        options={{
          title: "My Emissions",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bar-chart" size={size ?? 24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size ?? 24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="reductions"
        options={{
          title: "Reductions",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trending-down" size={size ?? 24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
