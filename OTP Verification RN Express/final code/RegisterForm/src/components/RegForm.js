import { useState } from "react";
import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";

export default function RegForm({ navigation }) {
    const [email, setEmail] = useState("my.email@gmail.com")
    const [phoneNumber, setPhoneNumber] = useState("+381690156360")
    const [password, setPassword] = useState("12345678")

    const onSignUpClick = async () => {
        try {
            const result = await fetch("http://192.168.1.81:2000/register", {
                method: "POST",
                body: JSON.stringify({
                    email, phoneNumber, password
                })
            })
            const data = await result.json();
            if (data.success) {
                navigation.navigate("Dashboard")
            }
            else {
                console.log(data);
                Alert.alert("Error", "Could not sign up");
            }
        }
        catch (e) {
            console.log(e);
            Alert.alert("Error", "Could not sign up");
        }
    }

    return <View style={styles.regform}>
        <Text style={styles.header}>Registration</Text>

        <TextInput style={styles.textinput}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
        ></TextInput>
        <TextInput style={styles.textinput}
            placeholder="Phone number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
        ></TextInput>
        <TextInput style={styles.textinput}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
        ></TextInput>

        <TouchableOpacity
            style={styles.button}
            onPress={onSignUpClick}>
            <Text style={styles.btntext}>Sign up</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    regform: {
        alignSelf: "stretch"
    },
    header: {
        fontSize: 24,
        color: "#fff",
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: "#199187",
        borderBottomWidth: 1
    },
    textinput: {
        alignSelf: "stretch",
        height: 40,
        marginBottom: 30,
        color: "#fff",
        borderBottomColor: "#f8f8f8",
        borderBottomWidth: 1
    },
    button: {
        alignSelf: "stretch",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#59cbbd",
        borderBottomWidth: 1
    },
    btntext: {
        color: "#fff",
        fontWeight: "bold"
    }
})