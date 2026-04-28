import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AddPlace from "./screens/AddPlace";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!!!!</Text>
      <StatusBar style="auto" />
      <AddPlace />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
