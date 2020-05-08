import {combineReducers} from 'redux'
import getCategories from './categoryReducer'

export default combineReducers({
    getCategories:getCategories
})