import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  // in our slice, we provided the name property as 'counter'
  // and the initialState with a 'value' property
  // thus to read our data, we need useSelector to return the state.counter.value

  const dispatch = useDispatch();
  // gets the dispatch function to dispatch our actions'

  console.log("COUNT: ", count)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
      <Button onPress={() => dispatch(increase())} title="Increase" />
      <Text style={{ fontSize: 16 }}>{count}</Text>
      <Button onPress={() => dispatch(decrease())} title="Decrease" />
    </View>
  );
}
