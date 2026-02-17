import { Stack } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="about" options={{ title: 'About' }} />
      <Stack.Screen name="contact" options={{ title: 'Contact' }} />
    </Stack>
  );
}
