import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal!" />
        <Button title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    color: "blue",
    backgroundColor: "#0000",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: 20,
    padding: 20,
    borderBottomWidth: 0.5,
  },

  textInput: {
    margin: 10,
    borderRadius: 10,
    width: "90%",
    borderWidth: 2,
    borderColor: "blue",
  },

  list: {
    width: "150",
    margin: 10,
  },

  goalsContainer: {
    margin: 10,
  },
});
