import * as theme from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  callbackFunc: () => void;
};

export default function BackBtnComponent({ callbackFunc }: Props) {
  return (
    <Pressable style={styles.container} onPress={callbackFunc} hitSlop={10}>
      <Ionicons
        name={theme.iconNames.backBtn}
        size={15}
        color={theme.appColours.eikcoMain}
      />
      <Text style={styles.text}>Back</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 10,

    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 20,
  },
  text: {
    color: theme.appColours.eikcoMain,

    ...theme.fonts.textExtraBold,
  },
});
