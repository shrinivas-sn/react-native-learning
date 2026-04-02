import React, { useState, createContext, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// 1. Create a Context to share data between our tabs (Just like React Web!)
const AppContext = createContext();
const Tab = createBottomTabNavigator();

// --- SCREEN 1: HOME ---
function HomeScreen() {
  const { logs } = useContext(AppContext);
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.card}>
        <Text style={styles.metricText}>Total Entries: {logs.length}</Text>
        <Text style={styles.subText}>Keep up the great work!</Text>
      </View>
    </SafeAreaView>
  );
}

// --- SCREEN 2: LOG ACTIVITY ---
function LogScreen({ navigation }) {
  const { addLog } = useContext(AppContext);
  const [mood, setMood] = useState('');
  const [notes, setNotes] = useState('');

  const handleSave = () => {
    if (mood && notes) {
      addLog({ id: Date.now().toString(), mood, notes });
      setMood('');
      setNotes('');
      alert('Saved Successfully!');
      navigation.navigate('History'); // Auto-navigate to History tab
    } else {
      alert('Please fill out both fields.');
    }
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      {/* KeyboardAvoidingView prevents the keyboard from hiding the inputs */}
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ width: '100%', alignItems: 'center' }}>
        <Text style={styles.title}>New Entry</Text>
        <View style={styles.card}>
          <Text style={styles.label}>Mood (e.g., Happy, Tired):</Text>
          <TextInput style={styles.input} value={mood} onChangeText={setMood} placeholder="How are you feeling?" />
          
          <Text style={styles.label}>Journal Notes:</Text>
          <TextInput style={[styles.input, styles.textArea]} value={notes} onChangeText={setNotes} placeholder="What did you do today?" multiline />
          
          <TouchableOpacity style={styles.primaryButton} onPress={handleSave}>
            <Text style={styles.buttonText}>Save Entry</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// --- SCREEN 3: HISTORY (Introducing FlatList!) ---
function HistoryScreen() {
  const { logs } = useContext(AppContext);

  // This function tells FlatList how to render ONE item
  const renderItem = ({ item }) => (
    <View style={styles.historyCard}>
      <Text style={styles.historyMood}>Mood: {item.mood}</Text>
      <Text style={styles.historyNotes}>{item.notes}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text style={styles.title}>Your History</Text>
      {logs.length === 0 ? (
        <Text style={styles.subText}>No entries yet. Go log one!</Text>
      ) : (
        // FlatList replaces .map() for mobile lists
        <FlatList
          data={logs} // The array of data
          keyExtractor={(item) => item.id} // The unique key
          renderItem={renderItem} // The component to render
          contentContainerStyle={{ paddingBottom: 20, width: '100%' }}
        />
      )}
    </SafeAreaView>
  );
}

// --- MAIN APP COMPONENT ---
export default function App() {
  // Global State
  const [logs, setLogs] = useState([]);

  const addLog = (newLog) => {
    setLogs([newLog, ...logs]); // Adds new log to the top of the array
  };

  return (
    <AppContext.Provider value={{ logs, addLog }}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#2e7d32', headerShown: false }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Log" component={LogScreen} />
          <Tab.Screen name="History" component={HistoryScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

// --- STYLES ---
const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: '#f5f5f5', alignItems: 'center', paddingTop: 40 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  card: { width: '90%', backgroundColor: '#fff', padding: 20, borderRadius: 15, elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1 },
  metricText: { fontSize: 24, fontWeight: 'bold', color: '#007AFF', marginBottom: 10, textAlign: 'center' },
  subText: { fontSize: 16, color: '#666', textAlign: 'center' },
  label: { fontSize: 14, color: '#333', marginBottom: 5, alignSelf: 'flex-start' },
  input: { width: '100%', borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 15, fontSize: 16 },
  textArea: { height: 80, textAlignVertical: 'top' },
  primaryButton: { backgroundColor: '#007AFF', paddingVertical: 12, borderRadius: 25, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  historyCard: { backgroundColor: '#fff', padding: 15, borderRadius: 10, width: 350, marginBottom: 15, alignSelf: 'center', elevation: 2 },
  historyMood: { fontSize: 18, fontWeight: 'bold', color: '#2e7d32', marginBottom: 5 },
  historyNotes: { fontSize: 16, color: '#555' }
});