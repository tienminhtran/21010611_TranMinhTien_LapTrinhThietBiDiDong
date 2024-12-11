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

const Dashboard = ({ navigation }) => {
  
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');

  const dispatch = useDispatch();

  const handleAddBike = () => {
    const newBike = { name, price, discount,category, description,img };
    dispatch(addTodo(newBike)).then(() => {
      navigation.navigate('Screen02');
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:32, textAlign:'center', }}>Bike Name</Text>
      <View style ={{marign:20}}>
      {/** Name Bike */}
            <Text style={styles.label}>Bike Name</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />

          {/** Price */}
          <Text style={styles.label}>Price</Text>
          <TextInput
            style={styles.input}
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />

          {/** Discount */}
          <Text style={styles.label}>Discount</Text>
          <TextInput
            style={styles.input}
            value={discount}
            onChangeText={setDiscount}
            keyboardType="numeric"
          />

          {/** Category */}
          <Text style={styles.label}>Category</Text>
          <TextInput
            style={styles.input}
            value={category}
            onChangeText={setCategory}
          />

          {/** Description */}
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={setDescription}
          />
          
           {/** Image URL */}
          <Text style={styles.label}>Image URL</Text>
          <TextInput style={styles.input} value={img} onChangeText={setImg} />
          <Button title="Add Bike" onPress={handleAddBike} />
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