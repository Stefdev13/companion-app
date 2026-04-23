import BackBtnComponent from "@/components/shared/BackBtn";
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
        style={[
          styles.page,
          { paddingBottom: insets.bottom + 10, paddingTop: insets.top + 10 },
        ]}
      >
        <BackBtnComponent callbackFunc={() => router.back()} />
        <View style={styles.header}>
          <Text style={styles.title}>
            {surveyCategory.categoryName} data inputs
          </Text>
          <Text style={styles.description}>
            Tap on a source to see or change your answers.
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 20,
  },
  header: {
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
