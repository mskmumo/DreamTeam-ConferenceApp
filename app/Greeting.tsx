import React from "react";
import { View, Text, StyleSheet } from "react-native";

type GreetingProps = {
  greeting: string;
  userName: string;
};

export default function Greeting({ greeting, userName }: GreetingProps) {
  return (
    <View style={styles.greetingContainer}>
      <Text style={styles.greetingText}>{greeting}</Text>
      <Text style={styles.userNameText}>{userName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  greetingContainer: {
    marginTop: 40,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  userNameText: {
    fontSize: 22,
    color: "gray",
  },
});
