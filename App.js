import "react-native-gesture-handler";
import { Provider } from "react-redux";
import store from "./src/store";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StateCounter } from "./src/screens/StateCounter";
import { ReduxCounter } from "./src/screens/ReduxCounter";

const Stack = createStackNavigator();

//Screen A uses global state to keep count (Redux Toolkit)
//Screen B uses local state to keep count (useState)
function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ScreenA" component={ReduxCounter} />
        <Stack.Screen name="ScreenB" component={StateCounter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    /**the provider allows the state to be available to the whole app */
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
