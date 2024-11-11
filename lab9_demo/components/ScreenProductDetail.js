import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';

const ScreenProductDetail = ({ route }) => {
  const { product } = route.params;

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.img }} style={styles.productImage} />
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.price}>
          ${product.price}
          <Text style={styles.originalPrice}> 449$</Text>
        </Text>

        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.descriptionTitle}>          Sử dụng các kỹ thuật tiên tiến ở khu vực phía bắc, chuyên về nhiều ứng dụng khác nhau.
</Text>

        <Text style={styles.descriptionText}>
          
        </Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.actionContainer}>
          <TouchableOpacity>
            <Image source={require('../assets/akar-icons_heart.png')} style={styles.icon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.addToCartText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 400,
    height: 400,
    borderRadius: 20,
  },
  detailsContainer: {
    marginVertical: 20,
  },
  productName: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: '#333',
  },
  originalPrice: {
    color: '#888',
    textDecorationLine: 'line-through',
    marginLeft: 10,
  },
  descriptionTitle: {
    fontSize: 25,
    fontWeight: '600',
    color: '#333',
    marginVertical: 15,
  },
  descriptionText: {
    fontSize: 18,
    color: '#555',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  addToCartButton: {
    backgroundColor: '#FF6347',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ScreenProductDetail;
