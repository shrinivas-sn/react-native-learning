import { TextInput, View } from "react-native";
import PrimaryButtons from "../components/PrimaryButtons";
import { StyleSheet } from 'react-native';
export default function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} />
            <PrimaryButtons>Reset</PrimaryButtons>
            <PrimaryButtons>Confirm</PrimaryButtons>
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