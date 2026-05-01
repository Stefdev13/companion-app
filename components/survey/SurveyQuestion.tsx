import * as theme from "@/constants/theme";
import { Question } from "@/types/survey-model-types";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  question: Question;
  surveyCategoryId: string;
};

export default function SurveyQuestionComponent({
  question,
  surveyCategoryId,
}: Props) {
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        router.push({
          pathname: "/(tabs)/survey/question",
          params: {
            surveyCategoryId: surveyCategoryId,
            questionId: question.id,
          },
        })
      }
    >
      <View style={styles.titleAndAnswer}>
        <Text style={styles.title}>{question.shortQuestionName}</Text>
        <Text style={styles.answer}>This is a placeholder</Text>
      </View>
      <Ionicons
        style={styles.icon}
        name={theme.iconNames.forwardBtn}
        size={24}
      />
    </Pressable>
  );
}

// If QuestionOption is selected, add the name to the display list

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,

    paddingVertical: 15,

    borderBottomColor: theme.appColours.grey,
    borderBottomWidth: 1,
  },
  titleAndAnswer: { width: "85%", gap: 0 },
  icon: { width: "12%" },
  title: {
    ...theme.fonts.smallHeading,
  },
  answer: {
    ...theme.fonts.textItalic,
    color: theme.appColours.eikcoMain,
  },
});
