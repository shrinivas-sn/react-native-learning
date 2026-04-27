# React Native Learning Repository

This repository contains my learning progress and projects from the Udemy course: **React Native - The Practical Guide** by Maximilian Schwarzmüller. 

## Projects Included
The `PROJECTS` directory contains the following applications built throughout the course:
1. **1-first-project:** A basic introduction to React Native UI components and architecture.
2. **2-goal-app1:** A foundational goal-tracking app demonstrating `FlatList`, overlays with `Modal`, and core React state management.
3. **3-number-game:** A dynamic number guessing game focusing on layouts, flexbox, and building custom components.
4. **4-navigation-project:** A multi-screen meals application demonstrating complex routing using React Navigation (Native Stack, Tabs, Drawers).
5. **5-native-features-project:** An application integrating device-native features like the camera, user location, or local database storage.

---

## How to Run the Projects
Follow these general steps to start any of the projects locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your computer. You will also need the **Expo Go** app installed on your physical mobile device.

### 1. Clone the Repository
Open your terminal and clone the repo, then enter the main directory:
```bash
git clone https://github.com/shrinivas-sn/react-native-learning.git
cd react-native-learning
```

### 2. Navigate to a Specific Project
Because each project has its own packages and setup, you must navigate into the specific project folder you wish to run. For example:
```bash
cd PROJECTS/3-number-game
```

### 3. Install Dependencies
Once inside the project folder, install all the required Node packages:
```bash
npm install
```

### 4. Start the Application
Start the Expo development server:
```bash
npx expo start
```
*(Note: Always use `npx expo` or `npm start` rather than the old global `expo` command).*

### 5. View the App
Once the server starts, a QR code will appear in your terminal. 
- **Physical Device:** Open the Expo Go app on your phone and scan the QR code.
- **Android Emulator:** Press `a` in your terminal.
- **iOS Simulator:** Press `i` in your terminal.
