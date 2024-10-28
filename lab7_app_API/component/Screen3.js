// Screen3.js
import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, TextInput, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

const Screen3 = ({ navigation, route }) => {
  const [task, setTask] = useState({ content: '' });
  const isEditMode = route.params?.specify === 'EDIT';

  useEffect(() => {
    if (isEditMode && route.params?.jobName) {
      setTask({ content: route.params.jobName });
    }
  }, [route.params]);

  const handleSave = async () => {
    const url = isEditMode 
      ? `https://671e74d61dfc429919825dfc.mockapi.io/taks/${route.params.taskId}` 
      : 'https://671e74d61dfc429919825dfc.mockapi.io/taks';
    const method = isEditMode ? 'PUT' : 'POST';

    try {
      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
      });
      navigation.navigate('Screen2', { textName: route.params?.textName });
    } catch (error) {
      console.error('Failed to save task:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{isEditMode ? 'Edit' : 'Add'} Your Job</Text>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/listicon.png')} style={styles.icon} />
        <TextInput
          placeholder="Input your job"
          style={styles.textInput}
          value={task.content}
          onChangeText={(text) => setTask({ content: text })}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Finish</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', marginTop: 40 },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 20 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, padding: 10, borderRadius: 10, width: '90%' },
  textInput: { flex: 1, fontSize: 14 },
  button: { backgroundColor: '#00bbd6', padding: 10, borderRadius: 10, marginTop: 20 },
  buttonText: { color: '#fff', fontSize: 16 },
  icon: { width: 27, height: 27, marginHorizontal: 10 },
});

export default Screen3;
