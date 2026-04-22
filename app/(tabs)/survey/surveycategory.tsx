import { useGetSurveyCategoryById } from "@/hooks/useGetSurveyCategoryById";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";

type Params = {
  surveyCategoryId: string;
};

export default function SurveyCategoryScreen() {
  const { surveyCategoryId } = useLocalSearchParams<Params>();
  const surveyCategory = useGetSurveyCategoryById(surveyCategoryId);

  return (
    <ScrollView>
      {surveyCategory != null && (
        <View>
          <Text>{surveyCategory.categoryName}</Text>
        </View>
      )}
    </ScrollView>
  );
}
