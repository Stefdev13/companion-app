import { getColourForCategory } from "@/utils/getColourForCategory";
import { getIconNameForCategory } from "@/utils/getIconForCategory";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import * as theme from "../../constants/theme";
import { SurveyCategory } from "../../types/survey-model-types";

type Props = {
  surveyCategory: SurveyCategory;
};

export function SurveyCategoryComponent({ surveyCategory }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.headingContainer}>
          <View
            style={[
              styles.iconContainer,
              {
                backgroundColor: getColourForCategory(
                  surveyCategory.categoryName,
                  "Light",
                ),
              },
            ]}
          >
            <Ionicons
              name={getIconNameForCategory(surveyCategory.categoryName)}
              size={20}
              color={getColourForCategory(
                surveyCategory.categoryName,
                "ExtraDark",
              )}
            />
          </View>
          <Text
            style={[
              styles.categoryName,
              {
                color: getColourForCategory(
                  surveyCategory.categoryName,
                  "ExtraDark",
                ),
              },
            ]}
          >
            {surveyCategory.categoryName}
          </Text>
        </View>

        <Text style={styles.description}>{surveyCategory.description}</Text>
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          {surveyCategory.questions.length} question(s)
        </Text>
        <Ionicons
          name={theme.iconNames.forwardBtn}
          size={15}
          // color={theme.appColours.darkGrey}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "47%",
    height: 200,
    padding: 10,

    justifyContent: "space-between",

    backgroundColor: "#ffffff",

    borderColor: theme.appColours.backgroundColour,
    borderWidth: 2,
    borderRadius: 20,

    boxShadow: [
      {
        offsetX: 4,
        offsetY: 4,
        blurRadius: "0px",
        spreadDistance: "0px",
        color: theme.appColours.backgroundColour,
        inset: false,
      },
    ],
  },
  textContainer: {
    gap: 10,
  },
  headingContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  iconContainer: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  categoryName: {
    ...theme.fonts.textExtraBold,
    flexShrink: 1,
  },
  description: {
    ...theme.fonts.text,
  },
  button: {
    width: "100%",
    height: 40,
    paddingLeft: 15,
    paddingRight: 12,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: theme.appColours.backgroundColour,
    borderRadius: 12,
  },
  buttonText: {
    ...theme.fonts.textItalic,
  },
});
