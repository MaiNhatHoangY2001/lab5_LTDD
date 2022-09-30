import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";

export default function App() {
  const [screen, setScreen] = useState(true);

  return (
    <>
      {screen ? <Screen1 /> : <Screen2 />}
      <TouchableOpacity
        style={styles.screenButton}
        onPress={() => setScreen(!screen)}
      >
        <Text style={{ color: "white", fontSize: 15 }}>
          {screen ? "Screen 2" : "Screen 1"}
        </Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  screenButton: {
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "red",
    padding: 18,
    margin: 10,
  },
});
