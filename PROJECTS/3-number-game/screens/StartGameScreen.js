import { TextInput, View } from "react-native";
import PrimaryButtons from "../components/PrimaryButtons";
export default function StartGameScreen() {
    return (
        <View>
            <TextInput />
            <PrimaryButtons>Reset</PrimaryButtons>
            <PrimaryButtons>Confirm</PrimaryButtons>
        </View>
    );
}