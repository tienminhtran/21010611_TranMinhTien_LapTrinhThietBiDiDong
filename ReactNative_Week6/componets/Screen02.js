import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';

const Screen02 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('https://66fa5558afc569e13a9b465c.mockapi.io/api/week6/dbweek6');
      const json = await response.json();
      setData(json);
      setLoading(false); 
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'column', width: '50%', height: 200, justifyContent: 'center', alignItems: 'center' }}>

      {/* Image - Product */}
      <Image source={{ uri: item.image }} style={{ width: '90%', height: '60%' }} resizeMode='contain' />

      <Text style={{ fontSize: 18, color: 'black' }}>{item.name}</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../assets/icons/Star 1.png')} style={{ width: 13, height: 13 }} />
        <Image source={require('../assets/icons/Star 1.png')} style={{ width: 13, height: 13 }} />
        <Image source={require('../assets/icons/Star 1.png')} style={{ width: 13, height: 13 }} />
        <Image source={require('../assets/icons/Star 1.png')} style={{ width: 13, height: 13 }} />
        <Image source={require('../assets/icons/Star 5.png')} style={{ width: 13, height: 13 }} />
        <Text style={{ fontSize: 15 }}>(15)</Text>
      </View>

      <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>{item.price}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* View - 1 */}
      <View style={{ flex: 1, backgroundColor: '#1BA9FF', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Image source={require('../assets/icons/Vector.png')} style={{ marginLeft: 10 }} />
        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Chat</Text>
        <Image source={require('../assets/icons/bi_cart-check.png')} style={{ marginRight: 10 }} />
      </View>

      {/* View - 2 - Text */}
      <View style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
        <Text style={{ fontSize: 18, marginLeft: 10, marginRight: 10, justifyContent: 'center', alignItems: 'center' }}>
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
        </Text>
      </View>

      {/* View - 3 - Product */}
      <View style={{ flex: 8, backgroundColor: 'white' }}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
          />
        )}
      </View>

      {/* View - 4 */}
      <View style={{ flex: 1, backgroundColor: '#1BA9FF', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Image source={require('../assets/icons/Group 10.png')} style={{ marginLeft: 10 }} />
        <Image source={require('../assets/icons/Vector (Stroke).png')} />
        <Image source={require('../assets/icons/Vector 1 (Stroke).png')} style={{ marginRight: 10 }} />
      </View>
    </SafeAreaView>
  );
};

export default Screen02;

const styles = StyleSheet.create({});
