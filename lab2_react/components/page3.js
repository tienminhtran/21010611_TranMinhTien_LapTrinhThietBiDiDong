import * as React from 'react';
import { Text, View, Pressable, StyleSheet, TextInput,Image, Button,TouchableOpacity, ViewBase } from 'react-native';

// Use the local styles object defined below
export default function Page3({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
            <View>
                <Image source={require('../assets/usb.png')} style={{ width: '70px', height: '70px' }} />
            </View>
            <View>
                <Text style={{fontSize:'16px'}}> <b>USB Bluetooth Music Receiver</b> </Text>
                <Text style={{fontSize:'16px'}}> <b>HJX-001- Biến loa thường thành loa</b> </Text>
                <Text style={{fontSize:'16px'}}> <b>bluetooth</b> </Text>
            </View>
        </View>

        <View style={{marginTop:'60px'}}>
            <View >       
                 <Text style={{fontSize: '18px', textAlign:'center'}}> <b>Cực kỳ hài lòng</b></Text>
            </View>
            <View style={{flexDirection: 'row',justifyContent:'center' }}> 
                <Image source={require('../assets/Star.png')} style={{ width: '39px', height: '39px', marginRight: '15px' }} />
                <Image source={require('../assets/Star.png')} style={{ width: '39px', height: '39px', marginRight: '15px' }} />
                <Image source={require('../assets/Star.png')} style={{ width: '39px', height: '39px', marginRight: '15px' }} />
                <Image source={require('../assets/Star.png')} style={{ width: '39px', height: '39px', marginRight: '15px' }} />
                <Image source={require('../assets/Star.png')} style={{ width: '39px', height: '39px', marginRight: '15px' }} />

            </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20,borderWidth: 1, padding: 15  }}>
            <Image source={require('../assets/camera.png')} style={{ width: 39, height: 32 }} />
            <Text style={{ fontSize: 18, height: 32, textAlign: 'center', fontWeight: 'bold', marginTop:'5px', marginLeft: '10px'}}>Thêm hình ảnh</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10,borderWidth: 1, borderColor:'#C4C4C4', padding: 15  }}>
             <TextInput style={{ height: 150, borderColor: 'gray', width: '100%', marginTop: 10 , textAlignVertical:'top'}} placeholder="Hãy chi sẻ những điều mà bạn thích về sản phẩm" multiline={true}  />
        </View>

        <View style={{marginTop:'14px'}}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.button}>Gửi</Text>
            </TouchableOpacity>
        </View>



      





      {/* Back to Home Button */}
      <View style={styles.section}>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#ddd' : 'blue',
              borderColor: '#ddd',
            },
          ]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>
            <u>
              <i>Back to Home</i>
            </u>
            
            
          </Text>
        </Pressable>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: 'white',
  },
  section: {
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35
    
  },

  button: {
    padding: 10,
    width: '100%',
    height: 41,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'hsla(212, 87%, 38%, 1)',
    color: 'white', 
    fontWeight: 'bold',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff', 
    fontWeight: 'underline'
  },
  

});
