import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
export default function GoalItem() {
  return (
    <View style={styles.goalsContainer}>
      <Text>List of goals... </Text>
      {courseGoals.map((goal) => (
        <Text key={goal} style={styles.goalList}>
          {goal}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  goalsContainer: {
    margin: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
  },

  goalList: {
    width: "150",
    margin: 10,
    color: "#fff",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 5,
    backgroundColor: "rgb(57, 45, 196)",
    borderRadius: 10,
  },
});
