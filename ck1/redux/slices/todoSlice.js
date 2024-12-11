import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";


const API_URL = 'https://6758130760576a194d0eafd6.mockapi.io/dulich';

const fetchTodos = createAsyncThunk('fetchTodos', async () => {
  const response = await fetch(API_URL); // Gửi yêu cầu GET đến API
  return await response.json(); // Trả về dữ liệu JSON từ API
});


const addTodo = createAsyncThunk('addTodo', async(task)=>{
const response = await fetch(API_URL, {
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body: JSON.stringify(task),
});
return await response.json();
})


// Tạo một slice (một module nhỏ trong Redux store) để quản lý trạng thái của danh sách xe
const todosSlice = createSlice({
  name: 'dulich', // Tên của slice
  initialState: {
      dulich: []
  }, 
  reducers: {}, // reducers trống vì không có các hành động đồng bộ
  extraReducers: (builder) => { // Xử lý các action bất đồng bộ
      builder.addCase(fetchTodos.fulfilled, (state, action) => {
          state.dulich = action.payload;
      });

      builder.addCase(addTodo.fulfilled, (state, action) => {
        state.dulich.push(action.payload);
      }
      );
     

  }
  
});

export {
  fetchTodos,
  addTodo

};

// Xuất reducer để tích hợp vào Redux store
export default todosSlice.reducer;