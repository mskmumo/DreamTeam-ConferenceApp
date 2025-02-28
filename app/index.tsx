import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./login";
import SignUp from "./signup";
import Home from "./home";
import Start from "./start";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/commonjs/src/types";
import App from "./app";

type RootStackParamList = {
  Start: undefined,
  Login: undefined;
  SignUp: undefined;
  App: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Index() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, headerTransparent: true, gestureEnabled: false} }>
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="App" component={App} />
    </Stack.Navigator>
  );
}
