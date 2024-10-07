import * as React from 'react';
import { Text, View, Image, SafeAreaView, Pressable, FlatList, TouchableOpacity  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Styles from './assets/stylesheets/styles';
import { FontAwesome } from '@expo/vector-icons';

import StarRating from './components/StarRating';

const data = {
  phoneId: 'vs',
  phoneName: 'Điện Thoại Vsmart Joy - Hàng Chính Hãng',
  price: '1.790.000 đ',
  rating: {
    star: 4,
    quantity: 850
  },
  provider: 'Tiki trading',
  colors: [
    {
      name: 'Red',
      colorCode: '#ee0a0a',
      src: require('./assets/images/red.png') 
    },
    {
      name: 'Blue',
      colorCode: '#234896',
      src: require('./assets/images/blue.png') 
    },
    {
      name: 'Black',
      colorCode: '#000000',
      src: require('./assets/images/black.png') 
    },
    {
      name: 'Silver',
      colorCode: '#c0c0c0',
      src: require('./assets/images/silver.png') 
    },
  ]
};

function HomeScreen({ navigation, route }) {

  const [selectedPhoneColor, setSelectedPhoneColor] = React.useState(data.colors.find(color => color.name === "Red"));

  React.useEffect(() => {
    if (route.params?.selectedColor) {
      const newSelectedColor = data.colors.find(color => color.name === route.params.selectedColor);
      if (newSelectedColor) {
        setSelectedPhoneColor(newSelectedColor);
      }
    }
  }, [route.params?.selectedColor]);

  return (
    <View style={Styles.container}>

      <View style={[ Styles.section, { padding: '0px 20px' } ]}>
        <Image source={ selectedPhoneColor.src } style={Styles.phoneImage} resizeMode="contain"></Image>
      </View>

      <View style={ Styles.section }>
        <Text>{ data.phoneName }</Text>
      </View>

      <View style={[ Styles.section, { flexDirection: 'row', justifyContent: 'center' } ]}>
        <StarRating rating={ data.rating.star }></StarRating>
        <Text>{`(Xem ${data.rating.quantity} đánh giá)`}</Text>
      </View>

      <View style={[ Styles.section, {flexDirection: 'row'} ]}>
        <Text style={{ color: 'red', fontWeight: 'bold' }}>
          {'Ở đâu rẻ hơn hoàn tiền '}
        </Text>
        <FontAwesome name="question-circle" size="20px" solid="false" color="#aaa"></FontAwesome>
      </View>

      <View style={ Styles.section }>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#eee' : 'white',
              borderColor: '#ddd'
            },
            Styles.button,
          ]}
          onPress={ () => navigation.navigate({
              name: 'ChoosingColor',
              params: { selectedColor: selectedPhoneColor.name }
            })
          }
        >
          <Text style={ Styles.buttonEndAddon }>
            <FontAwesome name="angle-right" size="20px" solid="false" color="#aaa"></FontAwesome>
          </Text>
          <Text style={ Styles.buttonText }>
            { `${data.colors.length} Màu - Chọn màu` }
          </Text>
        </Pressable>
      </View>

      <View style={ Styles.section }>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#4a1218' : 'red',
              borderColor: '#ddd'
            },
            Styles.button,
          ]}
          onPress={() => {}}
        >
          
          <Text style={[ Styles.buttonText, { color: '#fff', fontWeight: 'bold' } ]}>
            { `Chọn mua` }
          </Text>
        </Pressable>
      </View>

    </View>
  );
}

function ChoosingColorScreen({ navigation, route }) {
  
  if (route.params?.selectedColor === undefined) {
    route.params = { ...route.params, selectedColor: "Red" };
  }

  const selectedPhoneColor = data.colors.find(color => color.name === route.params.selectedColor)
  
  const [color, setColor] = React.useState('');

  const [imageSrc, setImageSrc] = React.useState('');

  React.useEffect(() => {
    if (selectedPhoneColor) {
      setColor(selectedPhoneColor.name);
      setImageSrc(selectedPhoneColor.src); 
    }
  }, [selectedPhoneColor]);

  const handleColorChange = (newColor) => {
    setColor(newColor.name);
    setImageSrc(newColor.src); 
    route.params.selectedColor = newColor.name;
  };

  return (
    <View style={ Styles.container }>

      <View style={[ Styles.section, {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        width: '100%'
      } ]}>
        <Image
          source={ imageSrc }
          style={[ Styles.phoneImage, {
            width: 90,
            height: 120
          }]}
          resizeMode="contain"
        ></Image>
        <View style={{
          display: 'flex',
          alignSelf: 'stretch',
          justifyContent: 'space-between',
          flexShrink: 1,
          paddingLeft: 10
        }}>
          <Text>{data.phoneName}</Text>
          <Text>
            {'Màu: ' + color} 
          </Text>
          <Text>
            {'Cung cấp bởi: ' + data.provider} 
          </Text>
          <Text style={{ fontWeight: 'bold' }}>{data.price}</Text>
        </View>
      </View>

      <View style={ Styles.section }>
        <Text style={{ marginBottom: 10 }}>{'Chọn màu khác:'}</Text>
        <FlatList
          data={data.colors}
          horizontal
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={{
                padding: 10,
                borderWidth: item.name === color ? 2 : 1,
                borderColor: item.name === color ? 'blue' : 'gray',
                marginRight: 10
              }}
              onPress={() => handleColorChange(item)}
            >
              <View style={{ backgroundColor: item.colorCode, width: 40, height: 40, borderRadius: 20 }} />
              <Text style={{ textAlign: 'center' }}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={ Styles.section }>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#b20000' : 'red',
              borderColor: '#b20000'
            },
            Styles.button,
          ]}
          onPress={ () => navigation.navigate({
              name: 'Home',
              params: { selectedColor: color },
              merge: true
            })
          }
        >
          <Text style={[ Styles.buttonText, { color: '#fff' } ]}>
            { 'Hoàn tất' }
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ChoosingColor" component={ChoosingColorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
