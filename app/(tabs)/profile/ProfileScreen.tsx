// app/(tabs)/profile/ProfileScreen.tsx
import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import { ThemedText, ThemedView } from "@/components/Themed";

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>This is the Profile Screen</ThemedText>
      <Link href="/profile/Favorites"> Go to Favorites </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
