import * as React from 'react';
import { Text, View, Pressable, StyleSheet, TextInput,Image, Button,TouchableOpacity } from 'react-native';

// Use the local styles object defined below
export default function Page1({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1,alignItems:'flex-start', display: 'flex',marginTop:'30px', marginLeft: '20px' }}>
        <Text style={{fontSize:'30px'}}> <b>LOGIN</b> </Text>
      </View>
      <View style={{flex: 8}}>
        {/* Nhap du lieu name */}
          <View style={{ 
             width: '100%',  
             padding: 10, 
             flexDirection: 'row', 
             alignItems: 'center', 
             backgroundColor: 'hsla(0, 0%, 77%, 0.3)', 
             borderWidth: 2,  
             borderColor: 'white' ,
             marginTop: '50px' 

         
            }}>
              {/* Hinh */}
              <View style={{ marginRight: 10,height:'54px', width:'54px',justifyContent: 'center', alignItems: 'center'  }}>          
                <Image source={require('../assets/avatar_user.png')} style={{ width: '32px', height: '32px' }} />
              </View>
              
              <View style={{ flex: 1, }}>
                <TextInput
                  style={{ height: '54px', borderColor: 'gray', width: '100%', paddingLeft: 10 }}
                  placeholder="Name"
                />
              </View>
          </View>



          {/* Nhap password */}
          <View style={{ 
            width: '100%',  
            padding: 10, 
            flexDirection: 'row', 
            alignItems: 'center', 
            backgroundColor: 'hsla(0, 0%, 77%, 0.3)', 
            borderWidth: 2,  
            borderColor: 'white' ,
            marginTop: '30px' 
          }}>
            {/* Hinh */}
            <View style={{ marginRight: 10,height:'54px', width:'54px',justifyContent: 'center', alignItems: 'center'  }}>          
              <Image source={require('../assets/lock.png')} style={{ width: '32px', height: '32px' }} />
            </View>
            
            <View style={{ flex: 1, }}>
              <TextInput
                style={{ height: '54px', borderColor: 'gray', width: '100%', paddingLeft: 10 }}
                placeholder="Password"
              />
            </View>
            <View style={{ marginRight: 10,height:'54px', width:'54px',justifyContent: 'center', alignItems: 'center'  }}>          
              <Image source={require('../assets/eye.png')} style={{ width: '32px', height: '32px' }} />
            </View>
        </View>

        {/* button login */}
        <View style={styles.section}>
          {/* <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#ddd' : 'blue',
                borderColor: '#ddd',
              },
              styles.button,
            ]}
            onPress={() => navigation.navigate('Page3')}
          >
            <Text style={[styles.buttonText, { color: '#fff', fontWeight: 'bold' }]}>
              Login
            </Text>
          </Pressable> */}

          <TouchableOpacity style={styles.button}>
            <Text style={styles.button}>LOGIN</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.section}>
          <Text >
            <b>Forgot your password?</b>
          </Text>
        </View>

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
    backgroundColor: 'hsla(49, 100%, 49%, 1)',
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
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'hsla(0, 0%, 0%, 1)',
    color: '#fff', 
    fontWeight: 'bold'
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff', 
    fontWeight: 'underline'
  },
  

});
