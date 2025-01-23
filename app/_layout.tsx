import { Stack } from 'expo-router';

// Import your global CSS file
import "../global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false, headerTitle: "Home" }} />
          <Stack.Screen name="(pages)/newWorkout" options={{ headerShown: true, headerTitle: "New workout" }} />
          <Stack.Screen name="(pages)/savedWorkouts" options={{ headerShown: true, headerTitle: "Saved workouts" }} />
          <Stack.Screen name="(pages)/searchMovements" options={{ headerShown: true, headerTitle: "Search movements" }} />
    </Stack>
  );
}