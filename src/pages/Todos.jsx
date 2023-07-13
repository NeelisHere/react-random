import Task from "./Task"
import { useDispatch, useSelector } from "react-redux"
import { addTask } from '../slices/todoSlice'


const Todos = () => {
    const { tasks } = useSelector((state)=>state.todos)
    // console.log(tasks)
    const dispatch = useDispatch()
    const handleClick = () => {
        const newTask = 'test'
        dispatch(addTask(newTask))
    }
    return (
        <div>
            <button onClick={handleClick}>Add</button>
            <div>
                {
                    tasks.map((task, index) => {
                        return(
                            <Task key={index} task={task}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Todos
