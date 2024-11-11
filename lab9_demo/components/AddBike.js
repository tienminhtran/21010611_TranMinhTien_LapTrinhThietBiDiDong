import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { addBike } from './features/bikes/bikesSlice';

const AddBike = ({ navigation }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [img, setImg] = useState('');
  const dispatch = useDispatch();

  const handleAddBike = () => {
    const newBike = { name, price, category, img };
    dispatch(addBike(newBike)).then(() => {
      navigation.navigate('List');
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Add New Bike</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Bike Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter bike name"
        />

        <Text style={styles.label}>Price</Text>
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
          placeholder="Enter bike price"
        />

        <Text style={styles.label}>Category</Text>
        <TextInput
          style={styles.input}
          value={category}
          onChangeText={setCategory}
          placeholder="Enter category"
        />

        <Text style={styles.label}>Image URL</Text>
        <TextInput
          style={styles.input}
          value={img}
          onChangeText={setImg}
          placeholder="Enter image URL"
        />

        <TouchableOpacity style={styles.button} onPress={handleAddBike}>
          <Text style={styles.buttonText}>Add Bike</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 20,
    color: '#343a40', 
  },
  formContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, 
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#495057', 
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#f1f1f1',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default AddBike;
