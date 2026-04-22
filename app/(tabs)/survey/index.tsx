import { SurveyCategoryComponent } from "@/components/survey/SurveyCategory";
import SurveyHeaderComponent from "@/components/survey/SurveyHeader";
import { useUserDataStore } from "@/stores/UserDataStore";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SurveyScreen() {
  const insets = useSafeAreaInsets();
  const surveyModel = useUserDataStore((state) => state.user?.SurveyModel);

  return (
    <ScrollView>
      <SurveyHeaderComponent />
      <View style={[styles.content, { paddingBottom: insets.bottom + 10 }]}>
        {surveyModel &&
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
