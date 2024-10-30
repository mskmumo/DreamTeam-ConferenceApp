import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./login";
import SignUp from "./signup";
import Home from "./home";
import Start from "./start";

/*
RootStackParamList strongly outlines the stack navigator.

This is not necessary for the app to run, but it is good practice. 

Define the types for your stack navigator

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
}; 

const Stack = createNativeStackNavigator<RootStackParamList>();

Then the rest of the code follows here.
*/

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <NavigationContainer>
      <></>
    </NavigationContainer>
  );
}
