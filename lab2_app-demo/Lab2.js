// Lab2.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Lab2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Lab 2!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default Lab2;
