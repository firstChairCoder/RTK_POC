import { useState } from "react";
import { Button, Text, View } from "react-native";

export const StateCounter = ({ navigation }) => {
	const [count, setCount] = useState(0)

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
      }}
    >
      <Text
        style={{ textTransform: "uppercase", fontSize: 20, marginBottom: 24 }}
      >
        State Counter Screen
      </Text>
      
	  {/* the state counter */}
	  <Button onPress={() => setCount(count + 1)} title="Increase" />
	  <Text style={{ padding: 16 }}>{count}</Text>
	  <Button onPress={() => setCount(count - 1)} title="Decrease" />
	  <View style={{ padding: 16}} />

	  <Button onPress={() => navigation.navigate("ScreenA")} title="Go to Screen A" />
    </View>
  );
};
