import { createSlice } from "@reduxjs/toolkit";
import { v4 } from 'uuid'

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
                return task.taskId !== action.payload
            })
        }
    }
})

export const { addTask, deleteTask } = todoSlice.actions
export default todoSlice.reducer