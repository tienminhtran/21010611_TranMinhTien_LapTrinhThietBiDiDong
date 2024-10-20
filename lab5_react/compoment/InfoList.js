import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, Button, FlatList} from 'react-native';

// data
const DATA = [
  {
    id: '1',
    fullname: 'John Smith',
    phone: '0123456789',
    email: 'john.smith@gmail.com',
  },
  {
    id: '2',
    fullname: 'Emily Johnson',
    phone: '0123456789',
    email: 'emily.johnson@gmail.com',
  },
  {
    id: '3',
    fullname: 'Michael Brown',
    phone: '0123456789',
    email: 'michael.brown@gmail.com',
  },
  {
    id: '4',
    fullname: 'Sophia Davis',
    phone: '0123456789',
    email: 'sophia.davis@gmail.com',
  },
  {
    id: '5',
    fullname: 'James Miller',
    phone: '0123456789',
    email: 'james.miller@gmail.com',
  },


];


// item
const Item = ({ fullname, phone, email }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{fullname}</Text>
    <Text style={styles.phone}>{phone}</Text>
    <Text style={styles.email}>{email}</Text>

  </View>
);


export default function InfoList() {
  return (
    <View style={styles.container}>
      
        <View style={styles.tren}>
           <View>
              <Image source={require('../assets/Avatar758.png')} style={styles.itemImage} />
           </View>
           <View>
              <Text>Hi Twewri</Text>
              <Text>Days hay a head</Text>
           </View>
        </View>
        <View style={styles.timkiem}>
          <TextInput style={styles.input} placeholder='Search' />
        </View>

        {/* // khu chức năng thêm */}
        <View style={styles.chucnang}>
          
          {/*  nút */}
          <Button title="Add" color="#F31111" onPress={() => alert('Add')} />
        </View>


        <SafeAreaView style={styles.list}>
         <SafeAreaView style={styles.info}>
            {/* triệu gọi data */}
            <FlatList
              data={DATA}
              renderItem={({ item }) => <Item fullname={item.fullname}  phone={item.phone} email={item.email} />}
              keyExtractor={item => item.id}
            />
         </SafeAreaView>
        </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  tren:{
    flex: 1,
    width: '90%',    // display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  timkiem:{
    flex: 1,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  input:{
    height: 40,
    borderColor: 'gray',
    borderRadius: 10,
    borderBlockColor:'red',
    borderWidth: 1,
    width: '90%',
  },
  chucnang:{
    flex: 1,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    width: '90%',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 16,
  },
  email: {
    fontSize: 16,
  },
});
