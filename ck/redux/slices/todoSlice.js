import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";

// Đường dẫn API để làm việc với dữ liệu từ mock server
const API_URL = 'https://6758130760576a194d0eafd6.mockapi.io/bike';

// createAsyncThunk giúp tạo các action xử lý bất đồng bộ (async).
// `fetchTodos`: Lấy danh sách xe từ API
const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    const response = await fetch(API_URL); // Gửi yêu cầu GET đến API
    return await response.json(); // Trả về dữ liệu JSON từ API
});

// `addTodo`: Thêm một mục mới vào danh sách xe bằng cách gửi yêu cầu POST
const addTodo = createAsyncThunk('addTodo', async (task) => {
    const response = await fetch(API_URL, {
        method: 'POST', // Sử dụng phương thức POST để tạo dữ liệu
        headers: {
            'Content-Type': 'application/json'
        }, // Định dạng dữ liệu gửi đi
        body: JSON.stringify(task), // Chuyển đổi đối tượng task thành chuỗi JSON
    });
    return await response.json(); // Trả về dữ liệu đã thêm từ API
});
// deleteTodo
export const deleteTodo = createAsyncThunk('bikes/deleteTodo', async (id) => {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });
    return id; // Chỉ cần trả về id
});
// ** Update bike by ID **
export const updateTodo = createAsyncThunk('updateTodo', async (updatedBike) => {
    const response = await fetch(`${API_URL}/${updatedBike.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedBike),
    });
    return await response.json();
});





// Tạo một slice (một module nhỏ trong Redux store) để quản lý trạng thái của danh sách xe
const todosSlice = createSlice({
    name: 'bikes', // Tên của slice
    initialState: {
        bikes: []
    }, // Trạng thái ban đầu: một mảng trống chứa danh sách xe
    reducers: {}, // reducers trống vì không có các hành động đồng bộ
    extraReducers: (builder) => { // Xử lý các action bất đồng bộ
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.bikes = action.payload;
        });
        builder.addCase(deleteTodo.fulfilled, (state, action) => {
            state.bikes = state.bikes.filter((bike) => bike.id !== action.payload);
        });
        builder.addCase(updateTodo.fulfilled, (state, action) => {
            const index = state.bikes.findIndex((bike) => bike.id === action.payload.id);
            if (index !== -1) {
                state.bikes[index] = action.payload;
            }
        });

    }
});

// Xuất các action bất đồng bộ để sử dụng trong các component
export {
    fetchTodos,
    addTodo
};

// Xuất reducer để tích hợp vào Redux store
export default todosSlice.reducer;