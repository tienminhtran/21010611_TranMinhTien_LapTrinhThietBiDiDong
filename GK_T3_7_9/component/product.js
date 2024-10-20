
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView,Image, TouchableOpacity, TextInput} from 'react-native';


const imageData = [
    { img: require('../data/Image 7 (1).png'), label: 'dao', price: 2.99 },
    { img: require('../data/Image 7 (2).png'), label: 'keo' , price: 1.99},
    { img: require('../data/Image 7 (4).png'), label: 'banh' , price: 4.99},
    { img: require('../data/Image 7.png'), label: 'chery' , price: 3.99},
];



export default function product({navigation}) {
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(2.99);

    const [selectedImage, setSelectedImage] = useState(imageData[0]);




    const increaseQuantity = () => {
      setQuantity(prevQuantity => prevQuantity + 1);
    };
  
    const decreaseQuantity = () => {
      if (quantity > 1) {
        setQuantity(prevQuantity => prevQuantity - 1);
      }
    };

    const totalPrice = () => {
        return quantity * selectedImage.price;
    };

    const handleImageSelect = (item) => {
        setSelectedImage(item); // Set the selected image based on user choice

    };


  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.sp}>
            <View style={{width: '100%', backgroundColor: '#F7EFF0', borderRadius:10, justifyContent: 'center', alignItems: 'center'}}>
                {/* <Image style={{width: 200, height: 200}} source={require('../data/Image 7 (4).png')}  /> */}
                <Image style={{width: 200, height: 200}} source={selectedImage.img} />

            </View>
            <br></br>
            <View  style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                {/* <TouchableOpacity>
                    <Image style={{backgroundColor: '#F7EFF0', borderRadius:10,  marginRight: 10}} source={require('../data/Image 7 (1).png')}  />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={{backgroundColor: '#F7EFF0', borderRadius:10,  marginRight: 10}} source={require('../data/Image 7 (2).png')}  />
                </TouchableOpacity>


                <TouchableOpacity>
                    <Image style={{backgroundColor: '#F7EFF0', borderRadius:10,  marginRight: 10}} source={require('../data/Image 7 (4).png')}  />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={{backgroundColor: '#F7EFF0', borderRadius:10, marginRight: 10}} source={require('../data/Image 7.png')}  />
                </TouchableOpacity> */}
                {imageData.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => handleImageSelect(item)}>
                        <Image style={{backgroundColor: '#F7EFF0', borderRadius:10,  marginRight: 10}} source={item.img} />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
        <View style={styles.info} >

            <Text style={{fontSize: 30, color: '#25C3D9', fontStyle: 'bold',  alignSelf: 'flex-start' }}>${selectedImage.price.toFixed(2)} </Text>
            <TouchableOpacity style={{ backgroundColor: '#F7EFF0', padding: 10, borderRadius: 10, height: 50,alignItems: 'center', justifyContent: 'center' }} >
                <Text style={{ color: 'red' }}>Buy 1 get 1</Text>
            </TouchableOpacity>
        
         </View>
         <View style={styles.proname} >
            <View >
                <Text style={{fontSize: 30, color: '#25C3D9', fontStyle: 'bold',  alignSelf: 'flex-start' }}>Product name </Text>
                <Text style={{fontSize: 15,  alignSelf: 'flex-start' }}>Occact est tempor off </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Image source={require('../data/Rating 3.png')}  />
                <Text style={{fontSize: 15, fontStyle: 'bold', alignSelf: 'flex-start' }}>4.5 </Text>
            </View>              
        </View>
         <View style={styles.size_sl} >
            <View style={{ alignSelf: 'flex-start' }}>
                 <br></br>

                <Text style={{fontSize: 25, fontStyle: 'bold',   alignSelf: 'flex-start' }}>Size </Text>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{ backgroundColor: '#F7EFF0', padding: 10, borderRadius: 10, width: 50, height: 50,alignItems: 'center', justifyContent: 'center', marginRight: 10 }} >
                        <Text style={{ color: 'red' }}>XS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#F7EFF0', padding: 10, borderRadius: 10, width: 50, height: 50,alignItems: 'center', justifyContent: 'center', marginRight: 10 }} >
                        <Text style={{ color: 'red' }}>S</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#F7EFF0', padding: 10, borderRadius: 10, width: 50, height: 50,alignItems: 'center', justifyContent: 'center' , marginRight: 10}} >
                        <Text style={{ color: 'red' }}>M</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#F7EFF0', padding: 10, borderRadius: 10,width: 50,  height: 50,alignItems: 'center', justifyContent: 'center', marginRight: 10 }} >
                        <Text style={{ color: 'red' }}>I</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#F7EFF0', padding: 10, borderRadius: 10, width: 50, height: 50,alignItems: 'center', justifyContent: 'center' , marginRight: 10}} >
                        <Text style={{ color: 'red' }}>XL</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <br></br>                   
            <Text style={{fontSize: 25, fontStyle: 'bold',   alignSelf: 'flex-start' }}>Quantity </Text>
            <View style={{ alignItems: 'center',   justifyContent: 'space-between', width: '90%', flexDirection:'row'}}>
          
                    <View style={{flexDirection: 'row' , alignItems: 'center',  justifyContent: 'center', }}>
                        <TouchableOpacity  onPress={decreaseQuantity} >
                            <Image source={require('../data/Button 5 (1).png')}  />
                        </TouchableOpacity>
                        <Text style={{fontSize: 25, fontStyle: 'bold'}}>{quantity} </Text>
                        <TouchableOpacity onPress={increaseQuantity}  >
                            <Image source={require('../data/Button 5.png')}  />
                        </TouchableOpacity>
                    </View>      
        
                <View style={{flexDirection: 'row',    alignItems: 'center',  justifyContent: 'center', }}>
                    <Text style={{fontSize: 25, fontStyle: 'bold',   }}>Tổng </Text>
                    <Text style={{fontSize: 35, fontStyle: 'bold', }}>{totalPrice()}</Text>
                </View> 
            </View>    



        </View>
        <View style={styles.detail} >
                
        </View>
        <View style={styles.btn} >
        <TouchableOpacity style={{ backgroundColor: '#25C3D9', padding: 10, borderRadius: 10, height: 50,width:'100%',alignItems: 'center', justifyContent: 'center' }}  onPress={() => navigation.navigate('info')}>
                <Text style={{ color: 'white' }}>Xem thông tin các tài khoản</Text>
            </TouchableOpacity>
         </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  sp:{
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
    info:{
       flexDirection: 'row',
        width: '90%',
    },
    proname:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        flexDirection: 'row',
    },
    size_sl:{
        flex: 3,
        alignItems: 'center',

        width: '90%',

    },
    detail:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: 'green',
    },

    btn:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: 'yellow',
    }


});
