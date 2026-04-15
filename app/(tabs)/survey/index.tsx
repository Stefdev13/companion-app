import { LoadingSpinner } from "@/components/survey/LoadingSpinner";
import { SurveyCategoryComponent } from "@/components/survey/SurveyCategory";
import SurveyHeaderComponent from "@/components/survey/SurveyHeader";
import { useGenerateSurveyModel } from "@/hooks/useGenerateSurveyModel";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SurveyScreen() {
  const insets = useSafeAreaInsets();
  const { surveyModel, loading, error } = useGenerateSurveyModel({
    version: "1",
    country: "Belgium",
  });

  return (
    <ScrollView>
      <SurveyHeaderComponent />
      <View style={[styles.content, { paddingBottom: insets.bottom + 10 }]}>
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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#fff",

    paddingHorizontal: 20,
    paddingTop: 20,

    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,

    justifyContent: "flex-start",
  },
});
