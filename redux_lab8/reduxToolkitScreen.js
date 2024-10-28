
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';

const ReduxToolkitScreen = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redux Toolkit Counter</Text>
      <Text style={styles.counter}>{count}</Text>
      <TouchableOpacity style={styles.button} onPress={() => dispatch(increment())}>
        <Text style={styles.buttonText}>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.button, { opacity: count === 0 ? 0.5 : 1 }]}
        onPress={() => count > 0 && dispatch(decrement())}
        disabled={count === 0}
      >
        <Text style={styles.buttonText}>Decrease</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => dispatch(reset())}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  counter: {
    fontSize: 48,
    marginBottom: 20,
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ReduxScreen;
