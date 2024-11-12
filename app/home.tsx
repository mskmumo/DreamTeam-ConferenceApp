import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For icons
import Greeting from "./Greeting";
import Carousel from "./Carousel";
import HamburgerMenu from "./HamburgerMenu";
import BottomNavigationBar from "./BottomNavigationBar";


export default function HomeScreen() {
  const [user, setUser] = useState({ name: "John" }); // Example user data
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    // Dynamic greeting based on time
    const currentHour = new Date().getHours();
    if (currentHour < 12) setGreeting("Good Morning,");
    else if (currentHour < 18) setGreeting("Good Afternoon,");
    else setGreeting("Good Evening,");
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Greeting Section */}
      <Greeting greeting={greeting} userName={user.name} />

      {/* Carousel */}
      <Carousel />

      {/* Hamburger Menu */}
      <HamburgerMenu />

      {/* Bottom Navigation Bar */}
      <BottomNavigationBar />

      {/* Calendar */}
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
});
