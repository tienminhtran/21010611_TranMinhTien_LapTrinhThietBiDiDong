import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";
import { addTask, updateTask } from "../redux/action";
import { useDispatch } from "react-redux";
import GLOBALTYPES from "../redux/globalTypes";
import { postDataApi, putDataApi } from "../utils/fetchData";

export default function TaskScreen({ route, navigation }) {
    const taskData = route.params?.taskData;
    const [taskContent, setTaskContent] = useState(taskData ? taskData.content : "");
    const dispatch = useDispatch();

    const onFinish = async () => {
        if (taskData) {
            // dispatch(updateTask({ taskContent, id: taskData.taskId }));
            const id = taskData.taskId;
            putDataApi(`/tasks/${id}`, { id, content: taskContent })
                .then(() => {
                    dispatch({
                        type: GLOBALTYPES.TODO.UPADTE_TASK,
                        payload: {
                            task: {
                                id,
                                content: taskContent
                            }
                        }
                    });
                })
                .catch(() => {
                    Alert.alert("Cập nhật thất bại");
                });
        } else {
            // dispatch(addTask({ taskContent }));
            postDataApi(`/tasks`, { content: taskContent })
                .then((res) => {
                    dispatch({
                        type: GLOBALTYPES.TODO.ADD_TASK,
                        payload: {
                            task: res.data
                        }
                    });
                })
                .catch(() => {
                    Alert.alert("Thêm task thất bại");
                });
        }
    };

    return (
        <View styles={{ height: "100%" }}>
            <View style={styles.taskContainer}>
                <Text style={styles.title}>{taskData ? `EDIT YOUR TASK` : `ADD YOUR TASK`}</Text>

                <View style={styles.inputWrapper}>
                    <Image source={require("../assets/job_icon.png")} />
                    <TextInput
                        style={styles.input}
                        placeholder="Input yout job"
                        value={taskContent}
                        onChangeText={setTaskContent}
                    />
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={async () => {
                        await onFinish();
                        navigation.navigate("TaskManagement");
                    }}
                >
                    <Text style={{ color: "white" }}>GET FINSH &rarr;</Text>
                </TouchableOpacity>

                <Image source={require("../assets/Image_95.png")} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    taskContainer: {
        marginTop: 20,
        alignItems: "center",
        justifyContent: "space-around",
        height: "100%"
    },

    title: {
        fontWeight: "bold",
        fontSize: 20
    },

    inputWrapper: {
        flexDirection: "row",
        gap: 5,
        width: 334,
        height: 44,
        borderWidth: 1,
        borderStyle: "solid",
        boderColort: "#9095A0",
        alignItems: "center",
        paddingLeft: 10
    },

    input: {
        outline: "none",
        width: "100%",
        height: "100%"
    },

    button: {
        backgroundColor: "#00BDD6",
        width: 180,
        height: 40,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center"
    }
});
