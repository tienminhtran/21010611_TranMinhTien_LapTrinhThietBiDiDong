import GLOBALTYPES from "./globalTypes";

const initialState = {
    todoList: []
};

const todoReducer = function (state = initialState, action) {
    switch (action.type) {
        case GLOBALTYPES.TODO.GET_TASKS: {
            return {
                ...state,
                todoList: [...action.payload.tasks]
            };
        }
        case GLOBALTYPES.TODO.ADD_TASK: {
            return {
                todoList: [...state.todoList, action.payload.task]
            };
        }
        case GLOBALTYPES.TODO.UPADTE_TASK: {
            const newList = [...state.todoList];
            const { task } = action.payload;

            for (let i = 0; i < newList.length; i++) {
                if (newList[i].id === task.id) {
                    newList[i] = task;
                }
            }

            return {
                ...state,
                todoList: newList
            };
        }
        case GLOBALTYPES.TODO.REMOVE_TASK: {
            return {
                ...state,
                todoList: [...state.todoList.filter((item) => item.id !== action.payload.id)]
            };
        }

        default:
            return state;
    }
};

export default todoReducer;
