import * as theme from "@/constants/theme";
import { Question } from "@/types/survey-model-types";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  question: Question;
};

export default function SurveyQuestionComponent({ question }: Props) {
  return (
    <Pressable style={styles.container}>
      <View style={styles.titleAndAnswer}>
        <Text style={styles.title}>{question.questionName}</Text>
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

    paddingVertical: 25,

    borderBottomColor: theme.appColours.grey,
    borderBottomWidth: 1,
  },
  titleAndAnswer: { width: "85%", gap: 5 },
  icon: { width: "12%" },
  title: {
    ...theme.fonts.smallHeading,
  },
  answer: {
    ...theme.fonts.textItalic,
    color: theme.appColours.eikcoMain,
  },
});
