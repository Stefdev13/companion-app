import { useGenerateSurveyModel } from "@/hooks/useGenerateSurveyModel";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function SurveyScreen() {
  const { surveyModel, loading, error } = useGenerateSurveyModel({
    version: "1",
    country: "Belgium",
  });

  return (
    <ScrollView
      style={styles.content}
      contentContainerStyle={styles.contentContainer}
    >
      <Text>This is the Survey page</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#E7EEE9",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
