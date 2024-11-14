import { ThemedText } from "@/components/ThemedText";
import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";
import type { NavigationProp } from ".";


export default function Start() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome!!</Text>
      <Pressable onPress={() => navigation.navigate("Login")}>
        <ThemedText type="link">Get-Started!</ThemedText>
      </Pressable>
    </View>
  );
}