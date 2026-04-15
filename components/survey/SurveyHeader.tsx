import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as theme from "../../constants/theme";

export default function SurveyHeaderComponent() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.header, { paddingTop: insets.top + 5 }]}>
      <View style={styles.topBar}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoEik}>eik</Text>
          <Text style={styles.logoCo}>co</Text>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Survey</Text>
        <Text style={styles.description}>
          Tap on a category to change your answers for the survey.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    gap: 10,

    backgroundColor: theme.appColours.backgroundColour,

    paddingHorizontal: 25,
    paddingBottom: 25,

    borderBottomColor: theme.appColours.lightGrey,
    borderBottomWidth: 2,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "center",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 0,
  },
  logoEik: {
    ...theme.fonts.logoSemiBold,
  },
  logoCo: {
    ...theme.fonts.logoLight,
  },
  titleContainer: {},
  title: {
    ...theme.fonts.heading,
  },
  description: {
    ...theme.fonts.text,
  },
});
