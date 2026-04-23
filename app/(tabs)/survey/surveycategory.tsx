import BackBtnComponent from "@/components/shared/BackBtn";
import SurveyQuestionComponent from "@/components/survey/SurveyQuestion";
import * as theme from "@/constants/theme";
import { useGetSurveyCategoryById } from "@/hooks/useGetSurveyCategoryById";
import { router, useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Params = {
  surveyCategoryId: string;
};

export default function SurveyCategoryScreen() {
  const { surveyCategoryId } = useLocalSearchParams<Params>();
  const surveyCategory = useGetSurveyCategoryById(surveyCategoryId);
  const insets = useSafeAreaInsets();

  if (surveyCategory !== null) {
    return (
      <ScrollView
        contentContainerStyle={[
          styles.page,
          {
            paddingBottom: insets.bottom + 10,
            paddingTop: insets.top + 10,
          },
        ]}
      >
        <View>
          <BackBtnComponent callbackFunc={() => router.back()} />
          <View style={styles.titleAndDescription}>
            <Text style={styles.title}>
              {surveyCategory.categoryName} data inputs
            </Text>
            <Text style={styles.description}>
              You only need to answer the questions relevant to you. Questions
              about things you never use or buy can be left blank.
            </Text>
          </View>
        </View>

        <View>
          {surveyCategory.questions.map((question) => (
            <SurveyQuestionComponent key={question.id} question={question} />
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 20,
    gap: 40,

    backgroundColor: "#fff",
  },

  titleAndDescription: {
    gap: 10,
  },
  title: {
    ...theme.fonts.question,
  },
  description: {
    ...theme.fonts.text,
  },
  contentContainer: {},
});
