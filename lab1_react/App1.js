import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image  } from 'react-native';

export default function appPage1() {
  return (
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
        <View style={{ backgroundColor: 'yellow', width: 110, height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Login</Text>
        </View>
        <View style={{ backgroundColor: 'yellow', width: 110, height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>SIGN UP</Text>
        </View>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(191, 100%, 49%)',
    alignItems: 'row',
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

