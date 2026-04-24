import { TextInput, View } from "react-native";
import PrimaryButtons from "../components/PrimaryButtons";
import { StyleSheet } from 'react-native';
export default function StartGameScreen() {
    return (

        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButtons>Reset</PrimaryButtons>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButtons>Confirm</PrimaryButtons>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    inputContainer: {
        color: "black",
        backgroundColor: "#72063c",
        padding: 16,
        marginHorizontal: 16,
        marginTop: 100,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.5,
        alignItems: "center",
        justifyContent: "center",
    },

    buttonsContainer: {
        flexDirection: "row",

    },

    buttonContainer: {
        flex: 1,
    },

    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        width: 50,
        marginVertical: 8,
        textAlign: "center",
        fontWeight: "bold",
        color: "#ddb52f",
        padding: 8,
    }
})