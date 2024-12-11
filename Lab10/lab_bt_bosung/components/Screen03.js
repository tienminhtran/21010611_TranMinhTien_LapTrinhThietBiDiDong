import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity
  
} from 'react-native';

import IconAnt from 'react-native-vector-icons/AntDesign'

export default function Screen_03({navigation, route}) {
  const  dataBike  =  route.params?.dataBike;
  console.log('heello'+dataBike);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: '#E941411A',
          width: '100%',
          height: 388,
          borderRadius: 16,
          alignItems: 'center',
          justifyContent: 'center',
        }}>

        <Image
          source={{
            uri: dataBike.img,
          }}
          style={{ resizeMode: 'contain', width: '80%', height: 330 }}
        />
      </View>

      <View style={{marginBottom:20, marginTop:15}}>
        <Text style={{ fontSize: 26, fontWeight: 'bold' }}>{dataBike.name}</Text>
        <View style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
          <Text style={{ fontSize: 22, color:'#00000096' }}>{dataBike.discount}% OFF I {dataBike.price-dataBike.price*dataBike.discount/100}$</Text>
          <Text style={{ fontSize: 22, textDecorationLine:'line-through' }}>{dataBike.price}$</Text>
        </View>
      </View>

      <View style={{marginBottom:20}}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Description</Text>
        <Text style={{ fontSize: 18, color:'#00000096',marginTop:20, width:'90%'  }}>{dataBike.description}</Text>
      </View>

      <View style = {{display:'flex', flexDirection:'row', alignItems:'center', gap:20, marginTop:55}}>
        <IconAnt name='hearto' size={30} />
        <TouchableOpacity style ={{backgroundColor:'#E94141', borderRadius:32, width:'85%'}}>
           <Text style={{ fontSize: 22, fontWeight: 'bold', color:'white', paddingVertical:8, paddingHorizontal:10, textAlign:'center' }}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    margin: 10,
    
  },
});
