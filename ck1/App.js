import React, { useEffect } from 'react';

import { Text, View, StyleSheet, Image, SafeAreaView, TextInput,FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../redux/slices/todoSlice';

export default function AssetExample() {

  const dispatch = useDispatch();
  const dulich = useSelector((state) => state.dulich.dulich);

  useEffect(()=>{
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* Thanh tìm kiếm */}
        <View style={styles.headerRow}>
          <Image style={styles.logo} source={require('../Pola.png')} />
          <TextInput
            placeholder="Search here"
            style={styles.searchInput}
          />
        </View>

        {/* Phần chào mừng */}
        <View style={styles.welcomeSection}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={styles.logo} source={require('../Avatar.png')} />
            <Text style={styles.welcomeText}>Welcome! </Text>
          </View>
          <Image style={styles.logo} source={require('../Pola.png')} />
        </View>
      </View>

      {/* Phần danh mục */}
      <View style={styles.categorySection}>
        <Text style={styles.categoryTitle}>Category</Text>
        <Image style={styles.logo} source={require('../Pola.png')} />
      </View>

     <FlatList
  data={dulich}
  renderItem={({ item }) => (
    <View style={{ alignItems: 'centen', marginLeft:3}}>
      <Image style={styles.logo1} source={{ uri: item.img }} />
      <Text style={styles.paragraph}>{item.name}</Text>
    </View>
  )}
  keyExtractor={(item) => item.id.toString()} // Đảm bảo `item.id` là chuỗi
  numColumns={4}
/>

    <View style={{flexDirection: 'row'}}> 
      <Image style={styles.logo} source={require('../Pola.png')} />
      <Image style={styles.logo} source={require('../Pola.png')} />
      <Image style={styles.logo} source={require('../Pola.png')} />
      <TouchableOpacity onPress={() => navigation.navigate('add')} >
      <Image style={styles.logo} source={require('../Pola.png')} />
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F5F5', // Nền xám nhạt
    padding: 16,
  },
  header: {
    height: '30%',
    backgroundColor: '#2C539E',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  searchInput: {
    width: '70%',
    borderColor: '#FFFFFF',
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 14,
    backgroundColor: '#FFF',
  },
  logo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
    logo1: {
    height: 60,
    width: 60,
    
  },
  welcomeSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 10,
  },
  categorySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginTop: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C539E',
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    width: '100%',
  },
  categoryItem: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryIcon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#E5E5E5',
  },
  paragraph: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
});
