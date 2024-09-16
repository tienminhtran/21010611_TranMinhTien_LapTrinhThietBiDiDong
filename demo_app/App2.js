import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function appPage2() {
  return (
    <LinearGradient
      colors={['#C7F4F6', '#D1F4F6', '#D1F4F6','#D1F4F6','#D1F4F6',
        '#D1F4F6','#D1F4F6','#D1F4F6','#D1F4F6','#E5F4F5', '#37D6F8', '#00CCF9']}
      style={styles.container}
    >
      <View style={styles.container}>

        <View style={styles.hinh}>
          {/* // hình */}
          <Image
            source={require('./assets/Ellipse8.png')}
          />
        </View>

        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 25 }}> GROW </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 25 }}>
            YOUR BUSINESS
            
          </Text>
        </View>

        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>
            We will help you to grow your business using online server
          </Text>
        </View>


        <View style={{ flex: 1, flexDirection: 'row',justifyContent: 'space-around'}}>
          <View style={{ backgroundColor: 'yellow', width: 110, height: 50, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Login</Text>
          </View>
          <View style={{ backgroundColor: 'yellow', width: 110, height: 50, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>SIGN UP</Text>
          </View>
        </View>

        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>
            HOW WE WORK?
          </Text>
        </View>
      </View>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ecf0f1',

    // background: linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #37D6F8 96.5%, #00CCF9 100%);

    // background: 'linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #37D6F8 96.5%, #00CCF9 100',
    alignItems: 'row',
    //            background: linear-gradient(to right, #fdfbfb, #ebedee); /* Gradient background */
  
  },
  hinh: {
    flex: 3.5, alignItems: 'center', justifyContent: 'center',

  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});

