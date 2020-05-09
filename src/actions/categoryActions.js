import { GET_CATEGORIES,ACTIVE_CATEGORY } from '../actions/types';

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import gql from 'graphql-tag';
const cache = new InMemoryCache();
const link = new HttpLink({
    uri: "http://localhost:4000/graphql"
});

const client = new ApolloClient({
    cache,
    link
});

export function fetchCategories() {

    return function(dispatch){

        client.query(
            {
                query: gql`
                {
                    categories
                    }
              `
            }
        ).then((result)=>{
            console.log(result)
            dispatch({
                type:GET_CATEGORIES,
                categories:result
            })
        })
    }

   
}

export function selectCategory(category){

    return function(dispatch){
        dispatch({
            type:ACTIVE_CATEGORY,
            category:category
        })
    }
}