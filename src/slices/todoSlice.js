import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 } from 'uuid'
import axios from "axios";

export const fetchContent = createAsyncThunk(
    'content/fetchContent',
    async () => {
        const res = await axios('https://jsonplaceholder.typicode.com/todos')
        const data = await res.data
        return data
    }
)

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        tasks: []
    },
    reducers: {
        addTask: (state, action)=>{
            const newTask = {
                taskId:v4(),
                taskName: action.payload
            }
            state.tasks.push(newTask)
        },
        deleteTask: (state, action)=>{
            state.tasks = state.tasks.filter((task)=>{
                return task.id !== action.payload
            })
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchContent.fulfilled, (state, action) => {
            // console.log('>>', action)
            state.tasks = action.payload
        })
    }
})

export const { addTask, deleteTask } = todoSlice.actions
export default todoSlice.reducer