import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = 'https://67319a237aaf2a9aff112759.mockapi.io/bike';

const fetchTodos = createAsyncThunk('fetchTodos', async () =>{
    const response = await fetch(API_URL);
    return await response.json();
})

const addTodo = createAsyncThunk('addTodo', async (task) =>{
    const response = await fetch(API_URL, {
        method:'POST',
        headers :{'Content-Type' :'application/json'},
        body: JSON.stringify(task),
    })
    return await response.json();
})


const todosSlice = createSlice({
    name:'bikes',
    initialState: {bikes: []},
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(fetchTodos.fulfilled, (state, action) =>{
            state.bikes = action.payload;
        })
        builder.addCase(addTodo.fulfilled, (state,action) => {
            state.bikes= [...state.bikes, action.payload];
        })
    }
});

export {fetchTodos, addTodo};
export default todosSlice.reducer;