import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  SafeAreaView,
  TextInput,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { updateTodo } from '../redux/slices/todoSlice';

const Update = ({ navigation, route }) => {
  const { bike } = route.params;
  const [name, setName] = useState(bike?.name || '');
  const [price, setPrice] = useState(bike?.price?.toString() || '');
  const [discount, setDiscount] = useState(bike?.discount?.toString() || '');
  const [category, setCategory] = useState(bike?.category || '');
  const [description, setDescription] = useState(bike?.description || '');
  const [img, setImg] = useState(bike?.img || '');

  const dispatch = useDispatch();

  const handleUpdateBike = () => {
    const updatedBike = { id: bike.id, name, price, discount, category, description, img };
    dispatch(updateTodo(updatedBike)).then(() => {
      navigation.navigate('Screen_01');
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 32, textAlign: 'center' }}>Update Bike</Text>
      <View style={{ margin: 20 }}>
        <Text style={styles.label}>Bike Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />

        <Text style={styles.label}>Price</Text>
        <TextInput style={styles.input} value={price} onChangeText={setPrice} keyboardType="numeric" />

        <Text style={styles.label}>Discount</Text>
        <TextInput style={styles.input} value={discount} onChangeText={setDiscount} keyboardType="numeric" />

        <Text style={styles.label}>Category</Text>
        <TextInput style={styles.input} value={category} onChangeText={setCategory} />

        <Text style={styles.label}>Description</Text>
        <TextInput style={styles.input} value={description} onChangeText={setDescription} />

        <Text style={styles.label}>Image URL</Text>
        <TextInput style={styles.input} value={img} onChangeText={setImg} />

        <Button title="Update" onPress={handleUpdateBike} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7BA8326', padding: 20 },
  label: { fontSize: 16, marginVertical: 10 },
  input: { borderColor: '#ccc', borderWidth: 1, padding: 10, marginBottom: 10 },
});

export default Update;
