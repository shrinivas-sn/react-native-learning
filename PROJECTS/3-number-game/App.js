import { View, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.rootScreen}>
      <LinearGradient colors={["#ddb52f", "#72063c"]} style={styles.rootScreen}>
        <ImageBackground source={require("./assets/images/background.png")}
          style={styles.rootScreen}
          imageStyle={styles.image}
          resizeMode="cover">
          <StartGameScreen />
        </ImageBackground>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: "#ddb52f",
    flex: 1,
  },
  image: {
    opacity: 0.5,
  }
});