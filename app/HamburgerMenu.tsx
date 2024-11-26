import React, { useState } from "react";
import { View, Pressable, Text, StyleSheet, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Icons for the menu
import { signOut } from "firebase/auth";
import { auth } from "./firebase_conf";
import { NavigationProp } from ".";
import { useNavigation } from "@react-navigation/native";

export default function HamburgerMenu() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const navigation = useNavigation<NavigationProp>();

  function logout() {
    signOut(auth)
      .then((value) => {
        navigation.navigate("Login");
        setMenuVisible(false);
      });
  }

  return (
    <View style={styles.menuContainer}>
      <Pressable onPress={toggleMenu}>
        <Ionicons name="menu" size={28} color="black" />
      </Pressable>
      {menuVisible && (
        <Modal
          transparent={true}
          visible={menuVisible}
          animationType="fade"
          onRequestClose={() => setMenuVisible(false)}
        >
          <Pressable style={styles.transparentBackground} onPress={toggleMenu}>
            <View style={styles.menuOptions}>
              <Pressable
                onPress={() => alert("Account Settings")}
                style={({ pressed }) => [
                  styles.menuItem,
                  pressed && styles.pressedItem,
                ]}
              >
                <Text style={styles.menuItemText}>Account Settings</Text>
              </Pressable>
              <Pressable
                onPress={() => alert("Select Language")}
                style={({ pressed }) => [
                  styles.menuItem,
                  pressed && styles.pressedItem,
                ]}
              >
                <Text style={styles.menuItemText}>Select Language</Text>
              </Pressable>
              <Pressable
                onPress={() => logout()}
                style={({ pressed }) => [
                  styles.menuItem,
                  pressed && styles.pressedItem,
                ]}
              >
                <Text style={styles.menuItemText}>Logout</Text>
              </Pressable>
            </View>
          </Pressable>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  transparentBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    justifyContent: "center",
    alignItems: "center",
  },
  menuOptions: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    width: "80%",
    alignItems: "center",
  },
  menuItem: {
    backgroundColor: "#f8f9fa", // Light background for menu items
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15, // Added margin for vertical spacing
    width: "100%",
    alignItems: "center",
  },
  pressedItem: {
    backgroundColor: "#e0e0e0", // Slightly darker background on press
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
});
