import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../App/store/store"
import {
  decrement,
  decrementBy5,
  decrementByValue,
  increment,
  incrementAsync,
  incrementBy5,
  incrementByValue,
} from "../../features/counter/counterSlice";

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
        <h2>{count}</h2>
        <div>
            <button onClick={() =>dispatch(increment())}>Increment</button>
            <button onClick={() =>dispatch(decrement())}>Decrement</button>
            <button onClick={() =>dispatch(incrementBy5())}>incrementBy5</button>
            <button onClick={() =>dispatch(decrementBy5())}>decrementBy5</button>
            <button onClick={() =>dispatch(incrementByValue(2))}>incrementByValue</button>
            <button onClick={() =>dispatch(decrementByValue(2))}>decrementByValue</button>
            <button onClick={() =>dispatch(incrementAsync(20))}>incrementAsync</button>
        </div>
    </div>
  )
}
export default Counter