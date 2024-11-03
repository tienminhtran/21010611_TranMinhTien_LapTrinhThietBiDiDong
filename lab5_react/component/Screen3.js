import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";

const Screen3 = ({ navigation, route }) => {
  // Khai báo state để lưu trữ nội dung công việc
  const [task, setTask] = useState({
    content: "",
  });

  // Sử dụng useEffect để kiểm tra nếu có tham số "EDIT" và "jobName"
  useEffect(() => {
    if (route.params?.specify === 'EDIT' && route.params?.jobName) {
      setTask({ content: route.params.jobName });
    }
  }, [route.params]);

  // Thiết lập URL API dựa trên tham số "specify"
  const urlAPI = route.params?.specify === 'ADD' 
    ? 'https://645843230c15cb14821a978d.mockapi.io/tieniuhweb/lab7_api_task'
    : `https://645843230c15cb14821a978d.mockapi.io/tieniuhweb/lab7_api_task/${route.params?.taskId}`;

  const methodName = route.params?.specify === 'ADD' ? 'POST' : 'PUT';

  // Hàm xử lý công việc khi nhấn nút
  const handelJob = async () => {
    try {
      const response = await fetch(urlAPI, {
        method: methodName,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      const json = await response.json();
      setTask({ content: "" }); // Xóa nội dung input sau khi gửi
    } catch (e) {
      console.log(e); // In lỗi nếu có
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Hiển thị thông tin điều hướng */}
      <View style={styles.navInfo}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/muiten.png")}
            style={{ resizeMode: "cover", width: 22, height: 22 }}
          />
        </TouchableOpacity>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/userimage.png")}
            style={{ resizeMode: "cover", marginRight: 10 }}
          />
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                fontSize: 20,
                lineHeight: 30,
                color: "#00000",
                fontWeight: "bold",
                paddingLeft: 10,
              }}
            >
              {route.params?.textName}
            </Text>
            <Text style={{ fontSize: 14, lineHeight: 22, color: "#171a1f" }}>
              Have a great day ahead
            </Text>
          </View>
        </View>
      </View>

      {/* Thân của màn hình */}
      <View style={styles.body}>
        <Text style={styles.titleHeader}>{route.params?.specify} YOUR JOB</Text>

        <View style={{ flex: 2 }}>
          <View style={styles.inputEmail}>
            <Image
              source={require("../assets/listicon.png")}
              style={{
                resizeMode: "cover",
                width: 27,
                height: 27,
                marginHorizontal: 10,
              }}
            />
            <TextInput
              placeholder="Input your job"
              style={styles.textInput}
              value={task.content}
              onChangeText={(text) => setTask({ content: text })}
            />
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
                handelJob();
                navigation.navigate({
                  name: 'Screen2',
                  params: { textName: route.params?.textName },
                });
              }
            }
          >
            <Text style={styles.textButton}>FINISH  </Text>
          </TouchableOpacity>
        </View>

        {/* Hiển thị hình ảnh ghi chú */}
        <View style={styles.image}>
          <Image
            source={require("../assets/Image 95.png")}
            style={{ resizeMode: "cover", width: "60%", height: 170 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

// Định nghĩa các kiểu dáng cho component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 40,
  },
  navInfo: {
    flexDirection: "row-reverse",
    margin: 20,
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  body: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    marginTop: 20,
  },
  inputEmail: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    paddingVertical: 10,
    width: 334,
    borderRadius: 10,
    marginTop: 40,
  },
  textInput: {
    fontSize: 14,
    lineHeight: 21,
    width: "85%",
  },
  titleHeader: {
    fontSize: 32,
    lineHeight: 48,
    color: "#171A1F",
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#00bbd6",
    height: 40,
    width: 190,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 5,
    width: 271,
    height: 271,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Screen3;
