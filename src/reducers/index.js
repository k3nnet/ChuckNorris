import {combineReducers} from 'redux'
import getCategories from './categoryReducer'
import getRandomJoke from './jokesReducer'

export default combineReducers({
    getCategories:getCategories,
    getRandomJoke:getRandomJoke
})