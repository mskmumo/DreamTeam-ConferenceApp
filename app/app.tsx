import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "./home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type AppTabParamList = {
    Home: undefined,
    Accomodation: undefined,
    Transport: undefined,
    Events: undefined,
};

export type AppNavigationProp = BottomTabNavigationProp<AppTabParamList>;

const Tab = createBottomTabNavigator<AppTabParamList>();

export default function App() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false , tabBarStyle: {height: 60}}}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ tabBarIcon: () => <Ionicons name="home-outline" size={20} /> }} />
            <Tab.Screen
                name="Accomodation"
                options={{ tabBarIcon: () => <Ionicons name="bed-outline" size={20} /> }}
                component={() => <View style={{ width: "100%", height: "100%", backgroundColor: "red" }} />} />
            <Tab.Screen
                name="Transport"
                options={{ tabBarIcon: () => <Ionicons name="car-outline" size={20} /> }}
                component={HomeScreen} />
            <Tab.Screen
                name="Events"
                options={{ tabBarIcon: () => <Ionicons name="calendar-outline" size={20} /> }}
                component={HomeScreen} />
        </Tab.Navigator>
    );
}