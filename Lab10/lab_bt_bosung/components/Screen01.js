import { Text, SafeAreaView, StyleSheet, StatusBar,Image,View,TouchableOpacity } from 'react-native';

export default function Screen_01({navigation, route}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style ={{fontSize:26, fontWeight:'bold', textAlign:'center'}}>A premium online store for sporter and their stylish choice </Text>

        <View style={{backgroundColor:'#E941411A', width:'100%', height:388, borderRadius:50, alignItems:'center', justifyContent:'center', marginVertical:20}}>
          <Image source={{uri:'https://i.ibb.co/8YkJ5tK/bifour-removebg-preview.png'}} style={{resizeMode:'contain', width:'80%', height:270}}/>
        </View>
<Text style ={{fontSize:26, fontWeight:'bold', textAlign:'center', marginBottom:60}}>POWER BIKE {'\n'} SHOP </Text>

      {/** Button startget */}
      <TouchableOpacity style={{width:'100%', backgroundColor:'#E94141', borderRadius:25}}
        onPress={() => navigation.navigate('Screen02')}
      >
        <Text style ={{fontSize:22, fontWeight:'bold', textAlign:'center', paddingVertical:10, color:'white'}}>Get Started </Text>
      </TouchableOpacity>

    {/** Button dashboard */}
      <TouchableOpacity style={{width:'100%', backgroundColor:'#E94141', borderRadius:25, marginTop:20}}
        onPress={() => navigation.navigate('Dashboard')}
      >
        <Text style ={{fontSize:22, fontWeight:'bold', textAlign:'center', paddingVertical:10, color:'white'}}>Dashboard </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    marginTop: StatusBar.currentHeight || 0,
    margin: 20,
  },

});

