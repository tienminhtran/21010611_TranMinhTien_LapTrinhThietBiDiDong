import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>LAB 2</Text>

        <Button
          title="Roll dice!"
          onPress={() => {
            setCount(count + 1);
            // setCount((prevCount) => prevCount + 1); 
          }} 
        />   
      <Text>{count}</Text>
      <StatusBar style="auto" />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,

  },
});
