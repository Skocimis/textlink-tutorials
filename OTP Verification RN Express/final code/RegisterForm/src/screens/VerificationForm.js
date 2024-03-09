import { useState } from "react";
import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";

export default function VerificationForm({ navigation }) {
    const [code, setCode] = useState("")

    const onSignUpClick = async () => {
        try {
            const result = await fetch("http://192.168.1.81:2000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
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
        <Text style={styles.header}>Phone Verification</Text>

        <TextInput style={styles.textinput}
            placeholder="Code"
            value={code}
            onChangeText={setCode}
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
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#36485f",
        paddingLeft: 60,
        paddingRight: 60,
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