import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit"

type CounterState = {
    value: number
}

const initialState: CounterState = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => { state.value += 1},
        decrement: (state) => { state.value -= 1},
        incrementBy5: (state) => { state.value += 5},
        decrementBy5: (state) => { state.value -= 5},
        incrementByValue: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        decrementByValue: (state, action: PayloadAction<number>) => {
            state.value -= action.payload
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

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount:number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return amount;
    }
)

export const {
    increment, 
    decrement, 
    incrementBy5, 
    decrementBy5,
    incrementByValue,
    decrementByValue
} = counterSlice.actions;

export default counterSlice.reducer;