import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Item1 from './Item1';
import { fetchBikes } from './features/bikes/bikesSlice';

const ScreenListProduct = ({ navigation }) => {
  const dispatch = useDispatch();
  const { items: bikes, status } = useSelector((state) => state.bikes);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBikes());
    }
  }, [status, dispatch]);

  useEffect(() => {
    setFilteredData(
      selectedCategory === 'All'
        ? bikes
        : bikes.filter((item) => item.category === selectedCategory)
    );
  }, [selectedCategory, bikes]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textHeaderList}>MỘT SỐ SẢN PHẨM</Text>
      <View style={styles.buttonContainer}>
        {['All', 'Roadbike', 'Mountain'].map((category) => (
          <TouchableOpacity
            key={category}
            style={[


              styles.buttonList,


              selectedCategory === category && styles.buttonSelected,
            ]}
            onPress={() => setSelectedCategory(category)}>
            <Text
              style={[
                styles.textButtonList,


                { color: selectedCategory === category ? 'white' : '#beb6b6' },


              ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={[styles.buttonList, styles.addButton]}
          onPress={() => navigation.navigate('AddBike')}>
          <Text style={styles.textButtonList}>Thêm xe</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={filteredData}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => navigation.navigate('Detail', { product: item })}>
              <Image source={{ uri: item.img }} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa', // Light background for a modern look
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  buttonList: {
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#6c757d',
    backgroundColor: '#e9ecef',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonSelected: {
    backgroundColor: '#007bff',
  },
  addButton: {
    backgroundColor: '#28a745',
    borderColor: '#28a745',
  },
  textButtonList: {
    fontFamily: 'Voltaire',
    fontSize: 16,
    color: '#495057', // Neutral color for unselected buttons
  },
  textHeaderList: {
    fontFamily: 'Ubuntu',
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    padding: 15,
    color: '#007bff', // Blue for header to stand out
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  listContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 120,
    height: 120,
    marginBottom: 10,
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#007bff',
    fontWeight: '500',
    marginTop: 3,
  },
  flatListContent: {
    paddingHorizontal: 15,
  },
});

export default ScreenListProduct;
