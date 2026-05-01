import BackBtnComponent from "@/components/shared/BackBtn";
import * as theme from "@/constants/theme";
import { useGetQuestionById } from "@/hooks/useGetQuestionById";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
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

        <View style={styles.titleAndDescription}>
          <Text style={styles.question}>{question.questionName}</Text>
          <Text style={styles.description}>{question.description}</Text>
        </View>

        <View style={styles.tips}>
          <Text style={styles.tipsHeader}>Tips:</Text>
          {question.tips.map((tip) => (
            <Text style={styles.tip} key={tip}>
              - {tip}
            </Text>
          ))}
        </View>

        <View style={styles.questionOptions}></View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    gap: 10,

    paddingHorizontal: 20,

    backgroundColor: "#fff",
  },
  titleAndDescription: {
    gap: 5,
  },
  question: {
    ...theme.fonts.question,
  },
  description: {
    ...theme.fonts.text,
  },
  tips: {
    marginLeft: 5,
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,

    borderLeftWidth: 2,
    borderLeftColor: theme.appColours.grey,

    gap: 10,
  },
  tipsHeader: {
    ...theme.fonts.textExtraBold,
    color: theme.appColours.darkGrey,
  },
  tip: {
    ...theme.fonts.textItalic,
    color: theme.appColours.darkGrey,

    paddingLeft: 10,
  },
  questionOptions: {
    gap: 10,
  },
});
