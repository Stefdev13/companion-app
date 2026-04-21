import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as theme from "../../constants/theme";

export default function SurveyHeaderComponent() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.header, { paddingTop: insets.top + 5 }]}>
      <View style={styles.topBar}>
        <View style={styles.logoContainer}>
          <Image
            source={require("@/assets/images/logo-light.png")}
            style={styles.logoImage}
            contentFit="contain"
          />
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
    gap: 0,

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
  logoImage: {
    width: 130,
    height: 42,
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
