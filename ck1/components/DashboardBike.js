import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  SafeAreaView,
  TextInput,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { addTodo } from '../redux/slices/todoSlice';

const add = ({ navigation }) => {
  const [name, setName] = useState('');
  const [img, setImg] = useState('');

  const dispatch = useDispatch();
  const handleAdd = () => {
    const newDuLich = {name, img};
    dispatch(addTodo(newDuLich));
  }
  

  return (
    <SafeAreaView style={styles.container}>
      <View style ={{marign:20}}>
          <Text style={styles.label}> Name</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
          <Text style={styles.label}>Image URL</Text>
          <TextInput style={styles.input} value={img} onChangeText={setImg} />
          <Button title="Add" onPress={handleAdd} />
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#F7BA8326'
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default Dashboard;