import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.descriptionText}>
        A premium online store for sporters and their stylish choices
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/bifour_-removebg-preview.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.shopTitle}>POWER BIKE SHOP</Text>
      <TouchableOpacity
        style={styles.getStartedButton}
        onPress={() => navigation.navigate('List')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addBikeButton}
        onPress={() => navigation.navigate('AddBike')}>
        <Text style={styles.buttonText}>Add Bike</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
  },
  descriptionText: {
    fontFamily: 'VT323',
    textAlign: 'center',
    fontSize: 24,
    color: '#333',
    lineHeight: 30,
    paddingVertical: 40,
  },
  imageContainer: {
    width: 340,
    height: 340,
    backgroundColor: '#EDEDED',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 6,
    marginVertical: 20,
  },
  image: {
    width: 280,
    height: 260,
    resizeMode: 'contain',
  },
  shopTitle: {
    fontFamily: 'Ubuntu',
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '700',
    color: '#222',
    marginVertical: 20,
  },
  getStartedButton: {
    width: '90%',
    height: 60,
    backgroundColor: '#FF5A5A',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#FF5A5A',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 10,
    elevation: 10,
  },
  addBikeButton: {
    width: '90%',
    height: 60,
    backgroundColor: '#4A90E2',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#4A90E2',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 10,
    elevation: 10,
  },
  buttonText: {
    fontFamily: 'VT323',
    fontSize: 24,
    color: '#FFF',
  },
});

export default Home;
