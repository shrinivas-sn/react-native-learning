import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import GoalItem from './components/GoalItem.js';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
        <GoalItem />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    color: "blue",
    backgroundColor: "#fff",
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
});
