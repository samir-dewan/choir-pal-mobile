import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { StyleSheet, View } from "react-native";
import Piano from "./components/Piano/Piano";

export default function App() {
  return (
    <View style={styles.container}>
      <Piano />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
    borderColor: "#000000",
    borderWidth: 1
  },
});
