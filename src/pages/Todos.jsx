import Task from "./Task"
import { useDispatch, useSelector } from "react-redux"
import { addTask, fetchContent } from '../slices/todoSlice'


const Todos = () => {
    const { tasks } = useSelector((state)=>state.todos)
    // console.log(tasks)
    const dispatch = useDispatch()
    const handleClick = () => {
        // const newTask = 'test'
        // dispatch(addTask(newTask))
        dispatch(fetchContent())
    }
    return (
        <div>
            <button onClick={handleClick}>Add</button>
            <div>
                {
                    tasks.map((task, index) => {
                        console.log('>>', task)
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
