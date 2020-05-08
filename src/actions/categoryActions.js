import { GET_CATEGORIES } from '../actions/types';

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import gql from 'graphql-tag';
const cache = new InMemoryCache();
const link = new HttpLink({
    uri: "http://localhost:4000/"
});

const client = new ApolloClient({
    cache,
    link
});

export function fetchCategories() {

    return function (dispatch) {
        client
            .query({
                query: gql`
      query categories
    `
            })
            .then(result => dispatch({
                type:GET_CATEGORIES,
                categories:result
            }));

    }
}