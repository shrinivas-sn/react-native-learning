import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Hello world</Text>
      <Text style={styles.text2}>Second Line</Text>
      <Text style={styles.text3}>Third Line</Text>
      <Button title="Click Me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  text1: {
    width: "150",
    margin: 16,
    borderWidth: 2,
    borderColor: "red",
    padding: 20,
  },

  text2: {
    width: "150",
    margin: 16,
    borderWidth: 2,
    borderColor: "yellow",
    padding: 20,
  },

  text3: {
    width: "150",
    margin: 16,
    borderWidth: 2,
    borderColor: "blue",
    padding: 20,
  },
});
