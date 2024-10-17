import { ThemedText } from "@/components/ThemedText";
import { Link, Stack } from "expo-router";
import { Button, Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome!</Text>
      <Link href="/login" asChild>
        <Pressable>
          <ThemedText type="link">Get Started</ThemedText>
        </Pressable>
      </Link>
    </View>
  );
}


