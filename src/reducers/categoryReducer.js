import {GET_CATEGORIES,ACTIVE_CATEGORY} from '../actions/types';


const initialState={
    categories:[],
    activeCategory:"Music"
}

const getCategories=function(state=initialState,action){
    
    switch(action.type){

        case GET_CATEGORIES:
            return{
                ...state,
                categories:action.categories
            }
        case ACTIVE_CATEGORY:
            return{
                ...state,
                activeCategory:action.category
            }
        default:
            return state
    }
}

export default getCategories