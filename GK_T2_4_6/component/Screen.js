import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView  } from 'react-native';

const dataPhone = [

    {name: 'Iphone 12', brand: 'Apple', price: 1, img: require('../Data/1.png'), loai: 'bestsales'},
    {name: 'Iphone 13', brand: 'Apple', price: 1, img: require('../Data/2.png'), loai: 'bestsales'},
    {name: 'Iphone 14', brand: 'Apple', price: 3, img: require('../Data/3.png'), loai: 'bestMatched'},
    {name: 'Iphone 15', brand: 'Apple', price: 2, img: require('../Data/4.png'), loai: 'Popular'},
]

const dataMacbook = [
    
    {name: 'Macbook Pro', brand: 'Apple', price: 1, img: require('../Data/macbook.png'), loai: 'bestsales'},
    {name: 'Macbook Pro', brand: 'Apple', price: 3, img: require('../Data/macbook.png'), loai: 'bestMatched'},
    {name: 'Macbook Pro', brand: 'Apple', price: 2, img: require('../Data/macbook.png'), loai: 'Popular'},
    {name: 'Macbook Pro', brand: 'Apple', price: 2, img: require('../Data/macbook.png'), loai: 'Popular'},
]

const dataIpad = [
        
    {name: 'Ipad Pro', brand: 'Apple', price: 1, img: require('../Data/ipad.png'), loai: 'bestsales'},
    {name: 'Ipad Pro', brand: 'Apple', price: 2, img: require('../Data/ipad.png'), loai: 'Popular'},
    {name: 'Ipad Pro', brand: 'Apple', price: 2, img: require('../Data/ipad.png'), loai: 'Popular'},
    {name: 'Ipad Pro', brand: 'Apple', price: 3, img: require('../Data/ipad.png'), loai: 'bestMatched'},
]
const dataAll = dataPhone.concat(dataMacbook, dataIpad);



const ProductItem = ({ item }) => (
    <View style={styles.ListProduct}>
        <View style={styles.proImg}>
            <Image source={item.img} style={{ width: 50, height: 50 }} />
        </View>
        <View style={styles.proInfo}>
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
            <Text>{item.brand}</Text>
        </View>
        <View style={styles.proPrice}>
            <Text style={{ fontWeight: 'bold' }}>${item.price}</Text>
        </View>
    </View>
);

export default function Screen() {

    const [data, setData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]); // Temporarily store the selected category's products

    const handleCategorySelection = (category) => {
        switch (category) {
            case 'phone':
                setData(dataPhone);  
                setSelectedCategory(dataPhone);
                break;
            case 'macbook':
                setData(dataMacbook);
                setSelectedCategory(dataMacbook);
                break;
            case 'ipad':
                setData(dataIpad);
                setSelectedCategory(dataIpad);
                break;
            case 'all':
                setData(dataAll);
            default:
                setData(dataPhone);
                setSelectedCategory(dataPhone);
                break;
        }
    }

    const handleFilterSelection = (filterType) => {
        const filteredData = selectedCategory.filter(item => item.loai === filterType);
        setData(filteredData); // Update the displayed products
    }

    const handleReset = () => {
        setData(dataAll); // Reset the displayed products
    }



  return (
    <SafeAreaView  style={styles.container}>
      <View style={styles.find}>
        <View style={styles.searchWrapper}>
          <View style={styles.TextInput}>
            <Image source={require('../Data/search.png')} style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#999"
            />
          </View>
        </View>
        <TouchableOpacity style={styles.loc}>
          <Text style={styles.locText}>All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.categories}>
        <View style={styles.Textcategories}>
            <Text style={{fontWeight: 'bold'}}>Category</Text>
            <Text style={{color: '#CCCCCC'}}>See all  </Text>
        </View>
      </View>
      <View style={styles.Listcategories}>
        <View>
            <TouchableOpacity style={{backgroundColor: '#D9CBF6', padding: 10, borderRadius: 10, }} onPress={() => handleCategorySelection('phone') }  >
                <Image source={require('../Data/smart.png')} />
                {/* lưu  thông tin vừa nhấn, vào 1 mảng loai_sp */}
                
            </TouchableOpacity>

            <TouchableOpacity style={{ padding: 20  }}  onPress={() => handleFilterSelection('bestsales')} >
                <Text>Best Sales</Text>
            </TouchableOpacity>
        </View>  
        
        <View>
            <TouchableOpacity style={{backgroundColor: '#C5D1F7', padding: 10, borderRadius: 10, }}  onPress={() => handleCategorySelection('macbook')}>
                <Image source={require('../Data/ipad.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={{ padding: 20 }} onPress={() => handleFilterSelection('bestMatched')}>
            <Text>Best Matched</Text>
            </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity style={{backgroundColor: '#F9D8C0', padding: 10, borderRadius: 10, }}  onPress={() => handleCategorySelection('ipad')}>
                <Image source={require('../Data/macbook.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={{ padding: 20 }} onPress={() => handleFilterSelection('Popular')}>
            <Text>Popular</Text>
            </TouchableOpacity>
        </View>

      </View>

      {/* <ScrollView  style={styles.list}>
        <View style={styles.ListProduct}>
            <View style={styles.proImg}>
                <Image source={require('../Data/1.png')} />
            </View>
            <View style={styles.proInfo}>
                <Text style={{fontWeight: 'bold'}}>Iphone 12</Text>
                <Text>Apple</Text>
            </View>
            <View style={styles.proPrice}>
                <Text style={{fontWeight: 'bold'}}>$999</Text>
            </View> 
        </View> 
        <View style={styles.ListProduct}>
            <View style={styles.proImg}>
                <Image source={require('../Data/2.png')} />
            </View>
            <View style={styles.proInfo}>
                <Text style={{fontWeight: 'bold'}}>Iphone 12</Text>
                <Text>Apple</Text>
            </View>
            <View style={styles.proPrice}>
                <Text style={{fontWeight: 'bold'}}>$999</Text>
            </View> 
        </View> 
        <View style={styles.ListProduct}>
            <View style={styles.proImg}>
                <Image source={require('../Data/3.png')} />
            </View>
            <View style={styles.proInfo}>
                <Text style={{fontWeight: 'bold'}}>Iphone 12</Text>
                <Text>Apple</Text>
            </View>
            <View style={styles.proPrice}>
                <Text style={{fontWeight: 'bold'}}>$999</Text>
            </View> 
        </View> 
        <View style={styles.ListProduct}>
            <View style={styles.proImg}>
                <Image source={require('../Data/4.png')} />
            </View>
            <View style={styles.proInfo}>
                <Text style={{fontWeight: 'bold'}}>Iphone 12</Text>
                <Text>Apple</Text>
            </View>
            <View style={styles.proPrice}>
                <Text style={{fontWeight: 'bold'}}>$999</Text>
            </View> 
        </View> 
        
      </ScrollView> */}


      {/* <ScrollView  style={styles.list}>
        
        <View style={styles.ListProduct} key={index}>

            <View style={styles.proImg}>
                <Image source={item.img} />
            </View>
            <View style={styles.proInfo}>
                <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                <Text>{item.brand}</Text>
            </View>
            <View style={styles.proPrice}>
                <Text style={{fontWeight: 'bold'}}>${item.price}</Text>
            </View>
        </View>
      </ScrollView> */}

    <ScrollView style={styles.list}>
        {data.map((item, index) => (
            <ProductItem item={item} key={index} />
        ))}
    </ScrollView>









      
      <View style={styles.baner}>    
        <TouchableOpacity style={styles.bttSeeAll} onPress={()=>handleReset('All')}>
            <Text>See all</Text>
        </TouchableOpacity>
        <Image style={{width:'100%'}} source={require('../Data/banner.png')}/>
      </View>
      <View style={styles.chan}>    
        <TouchableOpacity>
            <Image source={require('../Data/clarity_home-solid.png')} />
            <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../Data/search.png')} />
            <Text>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../Data/mdi_heart-outline.png')} />
            <Text>Favorite</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../Data/solar_inbox-outline.png')} />
            <Text>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../Data/codicon_account.png')} />
            <Text>Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 10,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  find: {
    // flex: 1,
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  searchWrapper: {
    flex: 1,
  },
  TextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
    width: '100%',
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#999',
  },
  searchInput: {
    flex: 1,
    height: '90%',
    paddingHorizontal: 10,
  },
  loc: {
    backgroundColor: '#00BDD6',
    width: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 10,
    marginLeft: 10,
  },
  locText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  categories: {
    // flex: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#ccc',    
  },
  Textcategories:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',

  },
  Listcategories:{
    // flex:2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',

  },
  bttListcategories:{
    backgroundColor: '#D9CBF6', 
    padding: 10, 
    borderRadius: 10, 
    margin: 5
  },
  ListProduct:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },



  list: {
    flex: 10,
    width: '90%',
  },
  ListProduct:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    marginBottom: 10,
  },
  baner:{
    flex: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bttSeeAll:{
    backgroundColor: '#ccc', 
    padding: 10, 
    borderRadius: 10, 
    margin: 5,
    width: '100%',
    alignItems: 'center',
    fontStyle:'bold',
  },
  chan:{
    flex: 1.2,
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  

});
