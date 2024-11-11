import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Item1 = ({ img, name, price }) => (
  <View style={styles.container}>
    <View style={styles.card}>
      <Image style={styles.heartIcon} source={require('../assets/heart.png')} />
      <Image style={styles.productImage} source={{ uri: img }} />
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.price}>
        <Text style={styles.currencySymbol}>$</Text>
        {price}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  card: {
    width: 167,
    height: 200,
    backgroundColor: '#E941411A',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  heartIcon: {
    position: 'absolute',
    top: 5,
    left: 10,
    zIndex: 1,
    width: 20, 
    height: 20, 
  },
  productImage: {
    width: 135,
    height: 127,
    borderRadius: 8,
  },
  productName: {
    fontFamily: 'Voltaire',
    textAlign: 'center',
    fontSize: 18,
    color: '#8c8681',
    lineHeight: 24,
  },
  price: {
    fontSize: 20,
    fontFamily: 'Voltaire',
    textAlign: 'center',
    color: '#000',
  },
  currencySymbol: {
    color: '#F7BA83',
  },
});

export default Item1;
