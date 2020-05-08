import {GET_CATEGORIES} from '../actions/types';


const initialState={
    categories:[]
}

const getCategories=function(state=initialState,action){
    
    switch(action.type){

        case GET_CATEGORIES:
            return{
                ...state,
                categories:action.categories
            }
        default:
            return state
    }
}

export default getCategories