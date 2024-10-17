import { Stack } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="login" />
      <Stack.Screen name="details" />
    </Stack>
  );
}
