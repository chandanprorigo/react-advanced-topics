# Steps to redux-toolkit

## 1. install npm packages

```cmd
npm install @reduxjs/toolkit
```

```cmd
npm install react-redux
```

## 2. Create store.ts file

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../features/counter/counterSlice";


export const store = configureStore({
    reducer : {
        counter: counterReducer
    }
} )

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

```js
// Use store in root component
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './App/store/store.ts'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
```

## 3. Create slices e.g counterSlice

```js
import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit"

type CounterState = {
    value: number
}

const initialState: CounterState = {
    value: 0
}

// create slice
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => { state.value += 1},
        decrement: (state) => { state.value -= 1},
        incrementByValue: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(incrementAsync.pending, () => {console.log("incrementAsync.pending")})
        .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
            state.value += action.payload
        })
    }
})

// reducer for http requests
export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount:number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return amount;
    }
)

// export reducers
export const {
    increment, 
    decrement, 
    incrementByValue,
} = counterSlice.actions;

export default counterSlice.reducer;
```

```js
// Use reducer in your components
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../App/store/store"
import {
  decrement,
  increment,
  incrementAsync,
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
            <button onClick={() =>dispatch(incrementByValue(2))}>incrementByValue</button>
            <button onClick={() =>dispatch(incrementAsync(20))}>incrementAsync</button>
        </div>
    </div>
  )
}
export default Counter
```
