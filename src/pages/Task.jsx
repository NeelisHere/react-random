import { useDispatch } from "react-redux"
import { deleteTask } from "../slices/todoSlice"


const styles = {
    border: '2px solid black',
    margin: '10px',
    padding: '10px'
}

const Task = ({ task }) => {
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }
    return (
        <div style={styles}>
        {task.taskName}
        <button 
            onClick={()=>{
                handleDelete(task.taskId)
            }}
        >
            Delete
        </button>
        </div>
    )
}

export default Task
