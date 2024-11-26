import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, TextInput, KeyboardAvoidingView, Button, Pressable } from "react-native"

import { createUserWithEmailAndPassword } from "firebase/auth";
import { User } from "firebase/auth";
import { auth } from "./firebase_conf";
import type { NavigationProp } from ".";
import { useNavigation } from "@react-navigation/native";
import { Snackbar } from "react-native-paper";


export default function SignUp() {
    const [email, changeEmail] = useState("");
    const [password, changePassword] = useState("");
    const [currentUser, updateUser] = useState<User>();

    const [snackbarVisible, setSnackbarVisible] = useState(false);

    function showSnackbar() {
        setSnackbarVisible(true);
    }

    function dismissSnackbar() {
        setSnackbarVisible(false);
    }

    const navigation = useNavigation<NavigationProp>();

    function signUpNewUser(email: string, password: string) {

        //firebase authentication
        createUserWithEmailAndPassword(auth, email, password)
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
        if (currentUser) {
            console.log("User created");
            navigation.navigate("App");
        } else {
            console.log("Nothing to do");
        }
    }, [currentUser]);

    return (
        <KeyboardAvoidingView style={styles.window} behavior="height">
            <Image source={require("@/assets/images/login-bg.png")} style={styles.bg_image} />
            <View style={styles.content}>
                <Text style={styles.title}>Sign Up</Text>
                <Text style={styles.caption}>Create new account</Text>

                <View style={{ height: 32 }} />

                <Text style={styles.label}>EMAIL</Text>
                <TextInput style={styles.input} value={email} onChangeText={changeEmail} />
                <Text style={styles.label}>PASSWORD</Text>
                <TextInput style={styles.input} secureTextEntry={true} value={password} onChangeText={changePassword} />

                <View style={{ height: 18 }} />

                <Pressable style={styles.login_button} onPress={() => signUpNewUser(email, password)}>
                    <Text style={styles.login_button_text}>Sign Up</Text>
                </Pressable>

                <View style={{ height: 24 }} />

                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.caption}>Go Back</Text>
                </Pressable>
                <Snackbar visible={snackbarVisible} onDismiss={dismissSnackbar} duration={5000}>
                    Error creating new user!
                </Snackbar>
            </View>
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