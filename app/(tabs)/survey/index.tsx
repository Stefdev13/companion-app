import { LoadingSpinner } from "@/components/survey/LoadingSpinner";
import { SurveyCategoryComponent } from "@/components/survey/SurveyCategory";
import { useGenerateSurveyModel } from "@/hooks/useGenerateSurveyModel";
import { ScrollView, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SurveyScreen() {
  const insets = useSafeAreaInsets();
  const { surveyModel, loading, error } = useGenerateSurveyModel({
    version: "1",
    country: "Belgium",
  });

  return (
    <ScrollView
      style={[
        styles.content,
        { paddingTop: insets.top + 10, paddingBottom: insets.bottom + 10 },
      ]}
      contentContainerStyle={styles.contentContainer}
    >
      {loading && <LoadingSpinner />}
      {!loading && error && <Text>{error}</Text>}
      {!loading &&
        !error &&
        surveyModel &&
        surveyModel.surveyCategories.map((category) => {
          return (
            <SurveyCategoryComponent
              key={category.id ?? category.categoryName}
              surveyCategory={category}
            />
          );
        })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#fff",
    paddingHorizontal: 25,
  },
  contentContainer: {
    flexDirection: "row",
    flexWrap: "wrap",

    gap: 20,

    justifyContent: "flex-start",
  },
});
