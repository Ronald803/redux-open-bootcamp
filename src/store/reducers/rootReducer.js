import { combineReducers } from 'redux'
import { filterReducer } from './filterReducer'
import { todosReducer } from './todosReducer'
import { userReducer } from './userReducer'

export const rootReducer = combineReducers(
    {
        //state name : reducer that will control itr
        todosState : todosReducer,
        filterState: filterReducer,
        //ASYNC Example (LOGIN_USER)
        userState: userReducer
        // ... Add more states and reducers to include them in the store

    }
)

// faltan 29 minutos para terminar la clase 24