import * as React from 'react';
import { Text, View, Pressable, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

export default function Page4({ navigation }) {
  const [quantity, setQuantity] = React.useState(0);
  const unitPrice = 141800; // Giá đơn vị
  const [totalPrice, setTotalPrice] = React.useState(unitPrice);

  // ham tăng giá
  const increaseQuantity = () => {
    setQuantity(prev => {
      const newQuantity = prev + 1;
      setTotalPrice(newQuantity * unitPrice); // up tong gia
      return newQuantity;
    });
  };

  // Hàm giam gia
  const decreaseQuantity = () => {
    setQuantity(prev => {
      if (prev > 0) {
        const newQuantity = prev - 1;
        setTotalPrice(newQuantity * unitPrice); // Update tong gia
        return newQuantity;
      }
      return prev;
    });
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Image source={require('../assets/book.png')} style={{ width: 104, height: 127 }} />
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 12, marginTop: 5 }}> <b>Nguyên hàm tích phân và ứng dụng</b> </Text>
          <Text style={{ fontSize: 12, marginTop: 5 }}> <b>Cung cấp bởi Tiki Trading</b> </Text>
          {/* Giá */}
          <Text style={{ fontSize: 18, color: 'red', marginTop: 5 }}><b>141.800 đ</b> </Text>

          {/* Gạch ngang giá */}
          <Text style={{ fontSize: 12, color: 'gray', marginTop: 5 }}><b><del>141.800 đ</del></b> </Text>

          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <TouchableOpacity style={styles.button} onPress={decreaseQuantity}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 12, height: 25, width: 45, textAlign: 'center', marginTop: 5 }}>{quantity}</Text>

            <TouchableOpacity style={styles.button} onPress={increaseQuantity}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 12, color: 'blue', marginTop: 5, marginLeft: 55 }}> <b>Mua sau</b> </Text>
          </View>
        </View>
      </View>

      {/* Mã giảm giá */}
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Text style={{ fontSize: 12 }}> <b>Mã giảm giá đã lưu</b> </Text>
        <Text style={{ fontSize: 12, color: 'blue', marginLeft: 10 }}> <b>Xem tại đây</b> </Text>
      </View>
      
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <TextInput style={{ borderColor: 'blue', borderWidth: 1, padding: 10, flex: 1 }} placeholder="Mã giảm giá" />
        <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, justifyContent: 'center' }}>
          <Text style={{ color: 'white' }}>Áp dụng</Text>
        </TouchableOpacity>
      </View>

      {/* Tạm tính */}
      <View style={{ backgroundColor: 'gray', width: '100%', height: 10, marginTop: 20 }}> </View>

      <View style={{ width: '100%', flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 18 }}><b>Tạm tính</b> </Text>
        <Text style={{ fontSize: 18, color: 'red' }}><b>{totalPrice.toLocaleString()} đ</b> </Text>
      </View>

      {/* Thành tiền */}
      <View style={{ backgroundColor: 'gray', width: '100%', height: 120 }}> </View>

      <View style={{ width: '100%', flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 18 }}><b>Thành tiền</b> </Text>
        <Text style={{ fontSize: 18, color: 'red' }}><b>{totalPrice.toLocaleString()} đ</b> </Text>
      </View>

      <View style={{ marginTop: 14 }}>
        <TouchableOpacity style={styles.ok}>
          <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>TIẾN HÀNH ĐẶT HÀNG</Text>
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
    marginTop: 35,
  },
  button: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'gray',
    color: 'white',
    fontWeight: 'bold',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  ok: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'red',
    marginLeft: 10,
  },
});
