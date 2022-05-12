import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer"

// initial state

const initialState = {
    transactions: [
        {id: 0, text: "Cash", amount: 500,},
        {id: 1, text: "Book", amount: -40,},
        {id: 2, text: "Camera", amount: -200,},
    ]
    }

//create context

export const GlobalContext = createContext(initialState);

// provider components

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState, () => {
        const localData = localStorage.getItem("state")
        return localData ? JSON.parse(localData) : initialState;
    });
    useEffect(() => {
        localStorage.setItem("state", JSON.stringify(state))
    },[state])

    //Actions
    function deleteTransactions(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }

    function addTransactions(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransactions,
        addTransactions
        }}>
        {children}
    </GlobalContext.Provider>)
}