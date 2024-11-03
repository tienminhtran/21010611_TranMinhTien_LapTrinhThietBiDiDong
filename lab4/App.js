import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,Image, TextInput,FlatList, ScrollView } from 'react-native';
import React,{useEffect, useState} from 'react';
import { Rating } from 'react-native-elements';

// render item list
const Item = ({title, price, discount, image, rating, quanlityRating}) => (
  <View style={styles.searchItem}>
        <Image source={{uri: image}} style={{width: '100%', height: 100}}/>

        <View style={{paddingHorizontal:10, paddingTop:10}}>
          <Text style={styles.searchItemTitle}>{title}</Text>

          <View style={{flexDirection:'row'}}>
            <Rating style={{backgroundColor:'#E5E5E5', marginRight:10}} imageSize={15} readonly startingValue={rating}/>        
            <Text style={styles.textQuanlityRate}>({quanlityRating})</Text>     
          </View>

          <View style={styles.viewPrice}>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.discount}>{discount}</Text>
          </View>
        </View>
        
  </View>
);

export default function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://671e74d61dfc429919825dfc.mockapi.io/product_lab4_react')
      .then((response) => response.json()) 
      .then((json) => {
        setData(json); 
        setLoading(false); 
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.search}>
        {/* header-nav */}
        <View style={styles.navBar}>
          <Image source={require('./assets/ant-design_arrow-left-outlined.png')} style = {{resizeMode:'cover'}}/>

          <View style={styles.inputSearch}>
            <Image source={require('./assets/whh_magnifier.png')} />
            <TextInput placeholder="Dây cáp USB" style={styles.textInput}/>
          </View>

          <View>
            <Image source={require('./assets/bi_cart-check.png')} style = {{resizeMode:'cover'}}/>
            <View style={styles.iconRed}></View>
          </View>

          <Image source={require('./assets/Group 2....png')} style = {{resizeMode:'cover'}}/>
        </View>
      
      {/* display product */}
        <View style={{ flex: 1 }}>
          <FlatList
            data={data}
            renderItem={({item}) => <Item title={item.title} price={item.price} discount={item.discount} image={item.image} rating={item.rating} quanlityRating={item.quanlityRating} />}
            keyExtractor={item => item.id}
            scrollEnabled={true}
            numColumns={2}
          />
        </View>
  
      </View>

      {/* footer */}
      <View style={{justifyContent:'flex-end'}}>
            <View style={styles.navBar}>
              <Image source={require('./assets/menu.png')} style = {{resizeMode:'cover'}}/>
              <Image source={require('./assets/home.png')} style = {{resizeMode:'cover'}}/>
              <Image source={require('./assets/back.png')} style = {{resizeMode:'cover'}}/>
            </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#E5E5E5',
    marginTop: 40,
  },
  search:{
    flex:1,
  },
  navBar: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'#1BA9FF',
    height: 42,
    paddingHorizontal: 15,
  },
  inputSearch:{
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor:'white',
    width: '65%',
    height: 30,
    borderRadius: 5,
    paddingLeft: 10,
  },
  textInput: {
    width: '90%',
    height: 30,
    paddingLeft: 10,
  },
  iconRed:{width:17, height:17, backgroundColor:'#E93838', position:'absolute', left:10, top:-6, borderRadius: 15},
  searchItem : {
    width: '48%',
    borderRadius: 10,
    backgroundColor: '#fff',
    padding:10,
    margin: 5,
  },
  searchItemTitle:{
    fontSize: 15,
    color: '#00000',
    marginBottom: 10,
  },
  textQuanlityRate: { fontSize: 12, color: 'black', fontWeight: 'bold' },
  viewPrice: {flexDirection:'row', alignItems:'center', marginVertical:10},
  price:{fontFamily: 'Roboto',fontSize: 18,fontWeight: 'bold',lineHeight: 21.09, marginRight:25},
  discount:{fontFamily: 'Roboto',fontSize: 15,fontWeight: 'bold',lineHeight: 17.58, color:'#b5b5b5', textDecorationLine:'line-through'}

});
