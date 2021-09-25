import React ,{useContext,useReducer,useState,createContext} from 'react';
import {v4 as uuidv4} from 'uuid'
export const AppReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return{
                ...state,
                expenses:[...state.expenses,action.payload]
            }
        case 'DELETE_EXPENSE':
             return{
                    ...state,
                    expenses:state.expenses.filter((expense)=>expense.id!==action.payload),
                }
     case 'SET_BUDGET':
              return{
                        ...state,
                        budget:action.payload,
                    }
    default:
        return state;
    }
}
const initialState={
    budget:5000,
    expenses:[
        { id: uuidv4(), name: 'movie', cost: 300 },
		{ id: uuidv4(), name: 'food', cost: 200 },
		{ id: uuidv4(), name: 'Transportation', cost: 150 },
		{ id: uuidv4(), name: 'party', cost: 70 },
    ],
}
export const AppContext=createContext();
export const AppProvider=(props)=>{
    const [state,dispatch]=useReducer(AppReducer,initialState)
    return(
        <AppContext.Provider
        value={{expenses:state.expenses,
        budget:state.budget,
        dispatch,
          }}
        >
            {props.children}
            
        </AppContext.Provider>
    )
}
