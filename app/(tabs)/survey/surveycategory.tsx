import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native";
// import { FlatList, ScrollView, Text, View } from "react-native";

type Params = {
  surveyCategoryId: string;
};

export default function SurveyCategoryScreen() {
  const { surveyCategoryId } = useLocalSearchParams<Params>();

  return (
    <ScrollView>
      {/* <View>
        <Text></Text>
        <Text></Text>
      </View>
      <FlatList></FlatList> */}
    </ScrollView>
  );
}
