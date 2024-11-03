import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, StyleSheet, ActivityIndicator, Alert, SafeAreaView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

// Component Task để hiển thị mỗi công việc
const Task = ({ taskId, jobName, navigation, onDelete, textName }) => (
  <View style={[styles.task, styles.elevation]}>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TouchableOpacity style={{ marginRight: 10 }}>
        <Image source={require('../assets/tickl.png')} style={{ resizeMode: 'cover', width: 27, height: 27 }} />
      </TouchableOpacity>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{jobName}</Text>
      </View>
    </View>

    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate({
          name: 'Screen3',
          params: { specify: 'EDIT', jobName: jobName, taskId: taskId, textName: textName },
        })}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={onDelete}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  </View>
);

// Component chính để quản lý danh sách công việc
const Screen2 = ({ navigation, route }) => {
  const [data, setData] = useState([]); // Dữ liệu danh sách công việc
  const [loading, setLoading] = useState(true); // Trạng thái tải
  const [searchQuery, setSearchQuery] = useState(''); // Trạng thái truy vấn tìm kiếm

  // Gọi API khi màn hình được hiển thị
  useFocusEffect(
    useCallback(() => {
      fetchApi();
    }, [])
  );

  // Hàm gọi API để lấy danh sách công việc
  const fetchApi = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://645843230c15cb14821a978d.mockapi.io/tieniuhweb/lab7_api_task');
      const json = await response.json();
      setData(json);
    } catch (e) {
      console.error(e);
      Alert.alert('Error', 'Failed to load data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Hàm xóa công việc
  const deleteTask = async (id) => {
    try {
      await fetch(`https://645843230c15cb14821a978d.mockapi.io/tieniuhweb/lab7_api_task/${id}`, { method: 'DELETE' });
      fetchApi();
    } catch (e) {
      console.error(e);
      Alert.alert('Error', 'Failed to delete task. Please try again later.');
    }
  };

  // Dữ liệu đã được lọc dựa trên truy vấn tìm kiếm
  const filteredData = data.filter(task =>
    task.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.navInfo}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../assets/muiten.png')} style={{ resizeMode: 'cover', width: 22, height: 22 }} />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../assets/userimage.png')} style={{ resizeMode: 'cover', marginRight: 10 }} />
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontSize: 20, lineHeight: 30, color: '#000', fontWeight: 'bold', paddingLeft: 10 }}>{route.params?.textName}</Text>
              <Text style={{ fontSize: 14, lineHeight: 22, color: '#171a1f' }}>Have a great day ahead</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 3 }}>
          <View style={styles.inputEmail}>
            <Image source={require('../assets/iconSearch.png')} style={{ resizeMode: 'cover', width: 27, height: 27, marginHorizontal: 10 }} />
            <TextInput
              placeholder="Search"
              style={styles.textInput}
              value={searchQuery}
              onChangeText={setSearchQuery} // Cập nhật trạng thái tìm kiếm
            />
          </View>
        </View>
      </View>

      <View style={styles.list}>
        {loading ? (
          <ActivityIndicator size="large" color="#00BDD6" />
        ) : (
          <FlatList
            data={filteredData} // Sử dụng dữ liệu đã lọc
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
            keyExtractor={item => item.id.toString()} // Đảm bảo key là một chuỗi
            scrollEnabled={true}
          />
        )}

        <View style={{ flex: 2, justifyContent: 'flex-start' }}>
          <TouchableOpacity style={styles.buttonAdd}
            onPress={() => navigation.navigate({
              name: 'Screen3',
              params: { specify: 'ADD', textName: route.params?.textName },
            })}>
            <Image source={require('../assets/iconPlus.png')} style={{ resizeMode: 'cover', width: 27, height: 27 }} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// Các kiểu dáng
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 40,
  },
  header: {
    flex: 3,
  },
  navInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    alignItems: 'center',
    width: '90%',
  },
  inputEmail: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingVertical: 10,
    width: '90%',
    borderRadius: 10,
    marginLeft: 20,
  },
  list: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(222, 225, 230, 0.47)",
    padding: 15,
    borderRadius: 24,
    margin: 10,
    width: '85%',
    marginLeft: 30,
  },
  textWrapper: {},
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  delete: {
    color: "red",
  },
  elevation: {
    elevation: 20,
    shadowColor: 'black',
  },
  button: {
    backgroundColor: '#00BDD6',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 80, // Ensure minimum width for long text
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonAdd: { 
    backgroundColor: '#00BDD6', 
    marginTop: 25, 
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    justifyContent: 'center', 
    alignItems: 'center' 
  }
});

export default Screen2;
