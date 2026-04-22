import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function GoalItem(props) {
  return (
    <View>
      {props.goals.map((goal) => (
        <View key={goal.id} style={styles.goalItem}>
          <Text style={styles.goalText}>{goal.text}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
