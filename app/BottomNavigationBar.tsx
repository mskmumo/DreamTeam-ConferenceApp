import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Icons for navigation

export default function BottomNavigationBar() {
  return (
    <View style={styles.navContainer}>
      <Pressable style={styles.navItem}>
        <Ionicons name="home-outline" size={24} color="black" />
        <Text>Home</Text>
      </Pressable>
      <Pressable style={styles.navItem}>
        <Ionicons name="bed-outline" size={24} color="black" />
        <Text>Accommodation</Text>
      </Pressable>
      <Pressable style={styles.navItem}>
        <Ionicons name="car-outline" size={24} color="black" />
        <Text>Transport!</Text>
      </Pressable>
      <Pressable style={styles.navItem}>
        <Ionicons name="calendar-outline" size={24} color="black" />
        <Text>Events</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  navItem: {
    alignItems: "center",
  },
});
