import {combineReducers} from 'redux'
import {jokesReducer} from './jokesReducer'

export default combineReducers({
    get:jokesReducer
})