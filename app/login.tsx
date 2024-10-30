import { Link } from "expo-router";
import { View, StyleSheet, Text, SafeAreaView, Image, TextInput, KeyboardAvoidingView, Button, Pressable } from "react-native"

import { useState, useEffect } from "react";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { User } from "firebase/auth";
import { auth } from "./firebase_conf";

export default function Login({navigation}) {
    const [email, changeEmail] = useState("");
    const [password, changePassword] = useState("");
    const [currentUser, updateUser] = useState<User>();

    function signInUser(email: string, password: string) {
    
        //firebase authentication
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                console.log(userCredentials.user);
                updateUser(userCredentials.user);
            })
            .catch((error) => {
                console.log(error);
                updateUser(undefined);
            })
    }

    useEffect(() => {
        if (currentUser || auth.currentUser) {
            console.log("User signed in");
            navigation.navigate("home");
        } else {
            console.log("Nothing to do");
        }
    }, [currentUser]);

    return (
        <KeyboardAvoidingView style={styles.window} behavior="height">
            <Image source={require("@/assets/images/login-bg.png")} style={styles.bg_image} />
            <SafeAreaView style={styles.content}>
                <Text style={styles.title}>Login</Text>
                <Text style={styles.caption}>Sign in to continue</Text>

                <View style={{ height: 32 }} />

                <Text style={styles.label}>EMAIL</Text>
                <TextInput style={styles.input} value={email} onChangeText={changeEmail} />
                <Text style={styles.label}>PASSWORD</Text>
                <TextInput style={styles.input} secureTextEntry={true} value={password} onChangeText={changePassword} />


                <View style={{ height: 18 }} />

                <Pressable style={styles.login_button} onPress={() => signInUser(email, password)}>
                    <Text style={styles.login_button_text}>Log In</Text>
                </Pressable>

                <View style={{ height: 24 }} />

                <Pressable>
                    <Text style={styles.caption}>Forgot Password?</Text>
                </Pressable>

                <Link href="/signup" asChild>
                    <Pressable>
                        <Text style={styles.caption}>Sign Up!</Text>
                    </Pressable>
                </Link>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    window: {
        position: "relative",
        width: "100%",
        height: "100%",
    },

    bg_image: {
        position: "absolute",
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    },

    content: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },

    title: {
        fontSize: 48,
        fontWeight: "bold",
        padding: 12
    },

    caption: {
        padding: 6,
        color: "darkgrey"
    },

    label: {
        padding: 6,
        color: "darkgrey"
    },

    input: {
        padding: 6,
        backgroundColor: "#D4D3D3",
        width: "75%",
        height: 48,
        borderRadius: 16
    },

    login_button: {
        backgroundColor: "#000",
        height: 48,
        width: "75%",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center"
    },

    login_button_text: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 18
    }
});