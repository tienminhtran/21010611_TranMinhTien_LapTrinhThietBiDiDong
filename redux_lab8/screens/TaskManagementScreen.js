import { View, TextInput, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useState, useEffect } from "react";
import TaskItemComponent from "../components/TaskItemComponent";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../redux/action";
import { getDataApi } from "../utils/fetchData";
import GLOBALTYPES from "../redux/globalTypes";

function TaskManagementScreen({ navigation }) {
    const todoList = useSelector((state) => state?.todoList);
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getTasks());

        getDataApi("/tasks")
            .then((res) => {
                dispatch({
                    type: GLOBALTYPES.TODO.GET_TASKS,
                    payload: {
                        tasks: res.data
                    }
                });
            })
            .catch((error) => {
                Alert.alert("Lấy dữ liệu tasks thất bại");
            });
    }, []);

    return (
        <View>
            <View style={styles.taskContainer}>
                <View style={styles.searchWrapper}>
                    <Image source={require("../assets/search.png")} />
                    <TextInput style={styles.input} placeholder="Search" />
                </View>

                <View style={styles.tasksWrapper}>
                    {todoList &&
                        todoList.length > 0 &&
                        todoList.map((task, index) => (
                            <TaskItemComponent
                                key={index}
                                taskId={task.id}
                                content={task.content}
                                navigation={navigation}
                            />
                        ))}
                </View>

                <TouchableOpacity
                    style={styles.addBtnWrapper}
                    onPress={() => {
                        navigation.navigate("Task");
                    }}
                >
                    <Image style={styles.pointer} source={require("../assets/add.png")} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    taskContainer: {
        marginTop: 20,
        alignItems: "center"
    },
    searchWrapper: {
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
    tasksWrapper: {
        marginTop: 40
    },
    addBtnWrapper: {
        marginTop: 20
    },
    pointer: {
        cursor: "pointer"
    }
});

export default TaskManagementScreen;
