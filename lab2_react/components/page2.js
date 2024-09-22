import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button,  } from "react-native";

export default function Page2({ navigation }) {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([1, 2, 3]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Yêu cầu của Thầy Tiến - Page 2</Text>
      
        <Text>LAB 2</Text>

          <Button
            title="Roll dice!"
            onPress={() => {
              setCount(count + 1);
              // setCount((prevCount) => prevCount + 1); 
            }} 
          />  
          
        <Text>{count}</Text>
    
        <StatusBar style="auto" />
        <Text>LAB TĂNG MẢNG LÊN 1 </Text>

        <Button
          title="Add to array"
          onPress={() => {
            const newArray = array.map(item => item + 1);
            setArray(newArray); 
              
          }}
        />
        {/* //GÁN MẢNG CŨNG THÀNH MẢNG MỚI */}

        <Text>Array contents: {array.join(", ")}</Text>

        

      <Button title="Go Back to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,

  },
});