import { deleteDataApi, getDataApi, postDataApi, putDataApi } from "../utils/fetchData";
import GLOBALTYPES from "./globalTypes";

export const getTasks = () => async (dispatch) => {
    try {
        const res = await getDataApi("/tasks");

        dispatch({
            type: GLOBALTYPES.TODO.GET_TASKS,
            payload: {
                tasks: res.data
            }
        });
    } catch (error) {
        console.log(error);
    }
};

export const deleteTasks =
    ({ taskId }) =>
    async (dispatch) => {
        try {
            await deleteDataApi(`/tasks/${taskId}`);

            dispatch({
                type: GLOBALTYPES.TODO.REMOVE_TASK,
                payload: {
                    id: taskId
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

export const addTask =
    ({ taskContent }) =>
    async (dispatch) => {
        try {
            const res = await postDataApi(`/tasks`, { content: taskContent });
            dispatch({
                type: GLOBALTYPES.TODO.ADD_TASK,
                payload: {
                    task: res.data
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

export const updateTask =
    ({ taskContent, id }) =>
    async (dispatch) => {
        try {
            await putDataApi(`/tasks/${id}`, { id, content: taskContent });

            dispatch({
                type: GLOBALTYPES.TODO.UPADTE_TASK,
                payload: {
                    task: {
                        id,
                        content: taskContent
                    }
                }
            });
        } catch (error) {
            console.log(error);
        }
    };
