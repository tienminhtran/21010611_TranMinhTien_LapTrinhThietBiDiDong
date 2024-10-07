import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, FlatList, Button } from 'react-native';

const imageMap = {
  's1': require('./assets/s1.png'),
  's2': require('./assets/s2.png'),
  's3': require('./assets/s3.png'),
  's4': require('./assets/s4.png'),
  's5': require('./assets/s5.png'),
  's6': require('./assets/s5.png'),
  's7': require('./assets/s5.png'),
};

const Item = ({ item }) => (
  <View style={styles.itemContainer}>
    <Image source={imageMap[item.id]} style={styles.itemImage} />
    <View style={styles.listitemContainer}>
      <Text style={styles.itemText}>{item.nameShop}</Text>
      <Text style={styles.messageShop}>{item.shop}</Text>
    </View>
    <View style={styles.buttonContainer}>
      <Button 
        title="Chat" 
        color="#F31111" 
        onPress={() => alert(`Chat with ${item.nameShop}`)} 
      />
    </View>
  </View>
);

export default function App() {
  const [data, setData] = useState([]);  // State không cần kiểu ItemData[]
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://66fa5778afc569e13a9b5421.mockapi.io/api/lab4/food')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('./assets/ant-design_arrow-left-outlined.png')}
          style={styles.image}
        />
        <Text style={styles.headerText}>Chat</Text>
        <Image 
          source={require('./assets/bi_cart-check.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
        </Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  header: {
    flex: 1,
    backgroundColor: '#1BA9FF',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flex: 8,
  },
  listitemContainer: {
    flex: 1,
    paddingLeft: 8,
  },
  messageText: {
    margin: 24,
    fontSize: 15,
    textAlign: 'center',
  },
  messageShop: {
    fontSize: 15,
    color: 'red',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  itemImage: {
    width: 94,
    height: 94,
    marginRight: 16,
  },
  itemText: {
    fontSize: 16,
  },
  image: {
    width: 24,
    height: 24,
  },
  buttonContainer: {
    backgroundColor: '#F31111',
    borderRadius: 5, 
  },
});



/*
import React, { useState, useEffect } from 'react';

import { Text, SafeAreaView, StyleSheet, View, Image, FlatList, Button } from 'react-native';

type ItemData = {
  id: string;
  nameShop: string;
  shop: string;
  img: string;
};

const DATA: ItemData[] = [
  {
    id: 's1',
    nameShop: 'Cá Nấu Lẩu, Nấu Mì Mini',
    shop: 'Shop Devang',
    img: 's1.png',
  },
  {
    id: 's2',
    nameShop: 'Bánh Mì Thịt Nướng',
    shop: 'Shop Minh Long',
    img: 's2.png',
  },
  {
    id: 's3',
    nameShop: 'Mì Quảng',
    shop: 'Shop Food',
    img: 's3.png',
  },
  {
    id: 's4',
    nameShop: 'Bún Chả Hà Nội',
    shop: 'Shop ABC',
    img: 's4.png',
  },
  {
    id: 's5',
    nameShop: 'Phở Bò',
    shop: 'Shop Thu Ha',
    img: 's5.png',
  },
  {
    id: 's6',
    nameShop: 'Phở Bò',
    shop: 'Shop Thu Ha',
    img: 's5.png',
  },
  {
    id: 's7',
    nameShop: 'Phở Bò',
    shop: 'Shop Thu Ha',
    img: 's5.png',
  },
];

const imageMap = {
  's1': require('./assets/s1.png'),
  's2': require('./assets/s2.png'),
  's3': require('./assets/s3.png'),
  's4': require('./assets/s4.png'),
  's5': require('./assets/s5.png'),
  's6': require('./assets/s5.png'),
  's7': require('./assets/s5.png'),
};

const Item = ({ item }: { item: ItemData }) => (
  <View style={styles.itemContainer}>
    <Image source={imageMap[item.id]} style={styles.itemImage} />
    <View style={styles.listitemContainer}>
      <Text style={styles.itemText}>{item.nameShop}</Text>
      <Text style={styles.messageShop}>{item.shop}</Text>
    </View>
    <View style={styles.buttonContainer}>
      <Button 
        title="Chat" 
        color="#F31111" 
        onPress={() => alert(`Chat with ${item.nameShop}`)} 
      />
    </View>
  </View>
);

export default function App() {
  // API


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('./assets/ant-design_arrow-left-outlined.png')}
          style={styles.image}
        />
        <Text style={styles.headerText}>Chat</Text>
        <Image 
          source={require('./assets/bi_cart-check.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
        </Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={DATA}
          renderItem={Item}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  header: {
    flex: 1,
    backgroundColor: '#1BA9FF',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flex: 8,
  },
  listitemContainer: {
    flex: 1,
    paddingLeft: 8,
  },
  messageText: {
    margin: 24,
    fontSize: 15,
    textAlign: 'center',
  },
  messageShop: {
    fontSize: 15,
    color: 'red',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  itemImage: {
    width: 94,
    height: 94,
    marginRight: 16,
  },
  itemText: {
    fontSize: 16,
  },
  image: {
    width: 24,
    height: 24,
  },
  buttonContainer: {
    backgroundColor: '#F31111',
    borderRadius: 5, 
  },
});
*/