import {
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import React from 'react';
import {fetchTodos} from '../redux/slices/todoSlice'
import { useDispatch, useSelector } from 'react-redux';

export default function Screen_01({ navigation, route }) {

  const bikes = useSelector((state) => state.bikes.bikes);
    console.log(bikes);
    const dispatch = useDispatch();


  const [selectedCate, setSelecteCategory] = React.useState([]);
  const [filterCate, setFilterCategory] = React.useState([]);
  const [isFocus, setIsFocus] = React.useState('');
  

  React.useEffect(() => {
    dispatch(fetchTodos());
  },[dispatch]);

   React.useEffect(() => {
     let filterBike;
     if(selectedCate !== 'All') {
       filterBike = bikes.filter(item => item.category.includes(selectedCate));
     } else {
       filterBike = bikes;
     }
     setFilterCategory(filterBike);
   },[selectedCate, bikes])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#E94141' }}>
        The world’s Best Bike{' '}
      </Text>

      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginVertical:20
        }}>
        {['All','Roadbike', 'Mountain'].map((category, index) => (
      <TouchableOpacity
        key={index}
        style={{
          width: '30%',
          borderColor: '#E94141',
          borderRadius: 8,
          borderWidth: 1,
        }}
        onPress={() => {setSelecteCategory(category),setIsFocus(category)}}
      >
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            color: isFocus === category ? '#E94141' : '#C4C4C4',
          }}
        >
          {category}
        </Text>
      </TouchableOpacity>
    ))}
      </View>

      <FlatList
        data={filterCate}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: '#fef5ed',
              width: '47%',
              height: 200,
              marginRight: 20,
              marginBottom: 20,
              borderRadius: 16,
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                navigation.navigate('Screen03', {dataBike: item})
              }}
              >
              <Image
                source={{ uri: item.img }}
                style={{ resizeMode: 'contain', width: '70%', height: 127 }}
              />
              <Text
                style={{ fontSize: 20, textAlign: 'center', color: 'black' }}>
                {item.name}
              </Text>
              <Text
                style={{ fontSize: 20, textAlign: 'center', color: '#black' }}>
                ${item.price}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    margin: 20,
  },
});
