import BackBtnComponent from "@/components/shared/BackBtn";
import * as theme from "@/constants/theme";
import { useGetQuestionById } from "@/hooks/useGetQuestionById";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Params = {
  surveyCategoryId: string;
  questionId: string;
};

export default function QuestionScreen() {
  const { surveyCategoryId, questionId } = useLocalSearchParams<Params>();
  const question = useGetQuestionById(surveyCategoryId, questionId);
  const insets = useSafeAreaInsets();

  if (question !== null) {
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
        <BackBtnComponent callbackFunc={() => {}}></BackBtnComponent>
        <Text>{question.questionName}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 20,

    backgroundColor: "#fff",
  },
  question: {
    ...theme.fonts.question,
  },
});
