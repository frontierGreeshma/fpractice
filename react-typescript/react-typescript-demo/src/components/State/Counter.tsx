import { useReducer } from "react"

type CounterState = {
    count: number
}

type CounterAction = {
    type: 'increment' | 'decrement',
    payload: number,
}

const initialState = { count: 10 };

function reducer(state: CounterState , action: CounterAction) {
    switch (action.type) {
        case 'increment': 
            return { count: state.count + action.payload }
        
        case 'decrement':
            return { count: state.count - action.payload }

        default: 
            return state
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Count: {state.count} </h1>
            <button onClick={() => dispatch({ type: "increment", payload: 10 })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>Decrement</button>
        </div>
    )
}