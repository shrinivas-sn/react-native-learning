import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world</Text>
      <Text style={styles.text}>Second Line</Text>
      <Button title="Click Me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#11ff33",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    margin: 16,
    borderWidth: 2,
    borderColor: "red",
    padding: 20,
  },
});
