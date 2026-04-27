import { Pressable, StyleSheet, Text, View } from "react-native";
export default function CategoryGridTile({ title }) {
  return (
    <View>
      <Pressable>
        <View style={styles.innerContainer}>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
