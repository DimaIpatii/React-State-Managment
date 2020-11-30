import React, {useReducer} from 'react';

// *************************************
// Tools:
// *************************************
import { v4 as id } from 'uuid';
import initialState from './initialState';



// *************************************
// Reducer:
// *************************************
const GRUDGE_ADD = 'GRUDGE_ADD';
const GRUDGE_REMOVE = 'GRUDGE_REMOVE';

const reducer = (state, action) => {
  
  if(action.type === GRUDGE_ADD){
    return [action.payload, ...state];
  }

  if(action.type === GRUDGE_REMOVE){
    
     return  state.map(grudge => {
        if (grudge.id !== action.payload.id) return grudge;
        return { ...grudge, forgiven: !grudge.forgiven };
      })
  }
  
  return state;
}

// Create Context:
export const GrudgeContext = React.createContext();

// Provides Context:
export const GrudgeProvider = ({children}) => {
    const [grudges, dispatch] = useReducer(reducer,initialState);

    const addGrudge = ({person,reason}) => {

        return dispatch({
          type : GRUDGE_ADD,
          payload : {
            person,
            reason,
            forgiven : false,
            id : id()
          }
        })
      };

      const toggleForgiveness = id => {

        return dispatch({
          type : GRUDGE_REMOVE,
          payload : {
            forgiven : true,
            id : id
          }
        })
      
    };

    const value = {addGrudge,toggleForgiveness,grudges}
    return (
      <GrudgeContext.Provider value={value}>
        {children}
      </GrudgeContext.Provider>
    );
}

