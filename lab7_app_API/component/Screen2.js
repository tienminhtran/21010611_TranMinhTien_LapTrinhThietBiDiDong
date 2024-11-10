// Screen2.js
import React, { useState, useCallback } from 'react';
import { View, SafeAreaView, Image, TextInput, FlatList, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const Screen2 = ({ navigation, route }) => {
  const [data, setData] = useState([]);
  
  useFocusEffect(
    useCallback(() => {
      fetchTasks();
    }, [])
  );

  const fetchTasks = async () => {
    try {
      const response = await fetch('https://671e74d61dfc429919825dfc.mockapi.io/taks');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`https://671e74d61dfc429919825dfc.mockapi.io/taks/${id}`, { method: 'DELETE' });
      setData(data.filter(task => task.id !== id));  // Optimized to update data without refetching
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* Header and Search */}
      </View>
      <View style={styles.list}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Task
              key={item.id}
              jobName={item.content}
              navigation={navigation}
              onDelete={() => deleteTask(item.id)}
              taskId={item.id}
              textName={route.params?.textName}
            />
          )}
          keyExtractor={item => item.id}
        />
        <TouchableOpacity
          style={styles.buttonAdd}
          onPress={() => navigation.navigate('Screen3', { specify: 'ADD', textName: route.params?.textName })}
        >
          <Image source={require('../assets/iconPlus.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', marginTop: 40 },
  header: { /* Header styling here */ },
  list: { flex: 7, alignItems: 'center' },
  buttonAdd: { backgroundColor: '#00BDD6', marginTop: 25, width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center' },
  icon: { width: 27, height: 27, resizeMode: 'cover' },
});

export default Screen2;
