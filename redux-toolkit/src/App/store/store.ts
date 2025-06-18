import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../../features/todo/todoSlice";
import counterReducer from "../../features/counter/counterSlice";


export const store = configureStore({
    reducer : {
        todoReducer,
        counter: counterReducer
    }
} )

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;