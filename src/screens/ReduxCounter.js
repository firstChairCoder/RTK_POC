import { Button, SafeAreaView, Text, View } from "react-native";
import { Counter } from "../Counter";

export const ReduxCounter = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F8FBF9",
      }}
    >
      <Text
        style={{ textTransform: "uppercase", fontSize: 20 }}
      >
        Redux Counter Screen
      </Text>

      {/* the rtk counter */}
      <Counter />

      <View style={{ padding: 16 }} />

      <Button
        onPress={() => navigation.navigate("ScreenB")}
        title="Go to Screen B"
      />
    </SafeAreaView>
  );
};
