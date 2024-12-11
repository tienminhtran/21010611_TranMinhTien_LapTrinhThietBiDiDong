import React, { useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, deleteTodo } from '../redux/slices/todoSlice';

export default function Screen_01({ navigation }) {
  const dispatch = useDispatch();
  const bikes = useSelector((state) => state.bikes.bikes);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>The world’s Best Bike</Text>
      <FlatList
        data={bikes} // Sử dụng trực tiếp `bikes` mà không cần lọc
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('Screen03', { dataBike: item })}>
              <Image source={{ uri: item.img }} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>${item.price}</Text>
              <TouchableOpacity style={styles.actionButton}  onPress={() => dispatch(deleteTodo(item.id))} >
                <Text style={styles.actionText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#FFCF40' }]} onPress={() => navigation.navigate('Update', { bike: item })} >
                <Text style={styles.actionText}>Update</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: StatusBar.currentHeight || 0, margin: 20 },
  headerText: { fontSize: 26, fontWeight: 'bold', color: '#E94141' },
  card: {
    backgroundColor: '#fef5ed',
    width: '47%',
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 16,
    alignItems: 'center',
    padding: 10,
  },
  image: { resizeMode: 'contain', width: '70%', height: 127 },
  name: { fontSize: 20, textAlign: 'center', color: 'black' },
  price: { fontSize: 20, textAlign: 'center', color: 'black' },
  actionButton: {
    width: '60%',
    backgroundColor: '#0081F1',
    borderRadius: 8,
    paddingVertical: 5,
    marginVertical: 5,
  },
  actionText: { color: '#FBFCFD', textAlign: 'center', fontWeight: 'bold' },
});



// import React, { useEffect, useState } from 'react';
// import {
//   Text,
//   SafeAreaView,
//   StyleSheet,
//   StatusBar,
//   Image,
//   View,
//   TouchableOpacity,
//   FlatList,
// } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTodos, deleteTodo } from '../redux/slices/todoSlice';

// export default function Screen_01({ navigation }) {
//   const dispatch = useDispatch();
//   const bikes = useSelector((state) => state.bikes.bikes);
//   const [selectedCate, setSelectedCate] = useState('All');
//   const [filterCate, setFilterCate] = useState(bikes);

//   useEffect(() => {
//     dispatch(fetchTodos());
//   }, [dispatch]);

//   useEffect(() => {
//     setFilterCate(
//       selectedCate === 'All'
//         ? bikes
//         : bikes.filter((item) => item.category.includes(selectedCate))
//     );
//   }, [selectedCate, bikes]);

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.headerText}>The world’s Best Bike</Text>
//       <View style={styles.categoryContainer}>
//         {['All', 'Roadbike', 'Mountain'].map((category) => (
//           <TouchableOpacity
//             key={category}
//             style={[
//               styles.categoryButton,
//               { borderColor: selectedCate === category ? '#E94141' : '#C4C4C4' },
//             ]}
//             onPress={() => setSelectedCate(category)}
//           >
//             <Text
//               style={[
//                 styles.categoryText,
//                 { color: selectedCate === category ? '#E94141' : '#C4C4C4' },
//               ]}
//             >
//               {category}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//       <FlatList
//         data={filterCate}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <TouchableOpacity onPress={() => navigation.navigate('Screen03', { dataBike: item })} >
//               <Image source={{ uri: item.img }} style={styles.image} />
//               <Text style={styles.name}>{item.name}</Text>
//               <Text style={styles.price}>${item.price}</Text>
//               <TouchableOpacity style={styles.actionButton} onPress={() => dispatch(deleteTodo(item.id))}>
//                 <Text style={styles.actionText}>Delete</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#FFCF40' }]} onPress={() => navigation.navigate('Update', { bike: item })} >
//                 <Text style={styles.actionText}>Update</Text>
//               </TouchableOpacity>
//             </TouchableOpacity>
//           </View>
//         )}
//         keyExtractor={(item) => item.id}
//         numColumns={2}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, marginTop: StatusBar.currentHeight || 0, margin: 20 },
//   headerText: { fontSize: 26, fontWeight: 'bold', color: '#E94141' },
//   categoryContainer: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 },
//   categoryButton: { width: '30%', borderWidth: 1, borderRadius: 8 },
//   categoryText: { fontSize: 20, textAlign: 'center' },
//   card: {
//     backgroundColor: '#fef5ed',
//     width: '47%',
//     marginRight: 20,
//     marginBottom: 20,
//     borderRadius: 16,
//     alignItems: 'center',
//     padding: 10,
//   },
//   image: { resizeMode: 'contain', width: '70%', height: 127 },
//   name: { fontSize: 20, textAlign: 'center', color: 'black' },
//   price: { fontSize: 20, textAlign: 'center', color: 'black' },
//   actionButton: {
//     width: '60%',
//     backgroundColor: '#0081F1',
//     borderRadius: 8,
//     paddingVertical: 5,
//     marginVertical: 5,
//   },
//   actionText: { color: '#FBFCFD', textAlign: 'center', fontWeight: 'bold' },
// });
