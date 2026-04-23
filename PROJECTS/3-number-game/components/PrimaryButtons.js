import { StyleSheet, Text, View } from "react-native";

export default function PrimaryButtons({ children }) {
    return (
        <View style={styles.buttonContainer}>
            <Text>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "red",
        color: "black",
    }
})