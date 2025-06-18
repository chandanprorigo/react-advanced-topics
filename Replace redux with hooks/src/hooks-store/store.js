// Alone context API will not resolve our problem of state mangement 
// We cannot use context API for frequent changing states 
// But we can use in simple global states like locale/themes
// We can build custom hooks instead as below

import { useEffect, useState } from "react"

let globalState = {}
let listeners = []
let actions = {}

export const useStore = () => {

    const setState = useState(globalState)[1];
    const dispatch = (actionIdentifier, payload) => {
        const newState = actions[actionIdentifier](globalState, payload)
        globalState = {...globalState, ...newState}

        for (const listener of listeners){
            listener(globalState)
        }
    }

    useEffect(() => {
        listeners.push(setState);
        return () => {
            listeners = listeners.filter(li => li !== setState)
        }
    },[])
    
    return [globalState, dispatch]
};

export const initStore = (userActions, initialState) => {
    if(initialState) {
        globalState = {...globalState, ...initialState}
    }

    actions = {...actions, ...userActions}
}