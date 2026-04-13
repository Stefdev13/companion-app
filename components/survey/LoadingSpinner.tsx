import {
  ActivityIndicator,
  type ActivityIndicatorProps,
  StyleSheet,
  View,
} from "react-native";

const SPINNER_COLOR = "#2D5A47";

type LoadingSpinnerProps = {
  size?: ActivityIndicatorProps["size"];
  color?: string;
};

export function LoadingSpinner({
  size = "large",
  color = SPINNER_COLOR,
}: LoadingSpinnerProps) {
  return (
    <View style={styles.wrap} accessibilityRole="progressbar">
      <ActivityIndicator
        size={size}
        color={color}
        accessibilityLabel="Loading"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
});
