import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from '../reducers/rootReducer'

export const createAppStore= ()=>{
    let store = createStore(rootReducer,composeWithDevTools())
    
    return store;
}

//falta 12:47 minutos para terminar el video del tempa 23 parte 1