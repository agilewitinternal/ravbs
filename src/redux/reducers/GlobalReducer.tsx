import React from 'react';
import { GlobalTypes } from './GlobalTypes';
import { NEW } from "../actionTypes"

const initialState: GlobalTypes = {
    new : ""
}

interface ActionType {
    type: string,
    payload: any
}

const GlobalReducer = (state= initialState, action: ActionType) => {
 switch(action.type){
    case NEW: {
        return {
            ...state,
            new: action.payload
        }
    }
    default: 
    return state
 }
}

export default GlobalReducer;
