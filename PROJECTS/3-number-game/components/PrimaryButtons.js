import { StyleSheet, Text, View, Pressable } from "react-native";

export default function PrimaryButtons({ children }) {
    function pressHandler() {
        console.log("pressed");
    }
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable onPress={pressHandler}
                style={({ pressed }) => pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer}
                android_ripple={{ color: "brown" }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable >
        </View>
    );
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        overflow: "hidden",
        borderRadius: 28,
        margin: 4,
    },
    buttonInnerContainer: {
        backgroundColor: "#4e0329",
        borderRadius: 28,
        borderWidth: 1,
        borderColor: "white",
        Width: "100%",
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        margin: 5,
    }
})