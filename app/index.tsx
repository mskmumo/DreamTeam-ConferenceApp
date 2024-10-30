import { ThemedText } from "@/components/ThemedText";
import { Link, Stack } from "expo-router";
import { Button, Pressable, Text, View } from "react-native";
import { app } from "./firebase_conf";
import { NavigationContainer } from "@react-navigation/native";
import { auth } from "./firebase_conf";
import { useEffect } from "react";

export default function Index() {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}


