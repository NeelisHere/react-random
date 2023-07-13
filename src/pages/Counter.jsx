import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, decrementByAmount, reset } from '../slices/counterSlice'

const Counter = () => {
    const { value } = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={()=>{dispatch(increment())}}>+</button>
            <button onClick={()=>{dispatch(decrement())}}>-</button>
            <button onClick={()=>{dispatch(incrementByAmount(10))}}>+10</button>
            <button onClick={()=>{dispatch(decrementByAmount(10))}}>-10</button>
            <button onClick={()=>{dispatch(reset())}}>reset</button>
        </div>
    )
}

export default Counter
