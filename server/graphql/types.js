// Imports: GraphQL
import { gql } from 'apollo-server-express';
// GraphQL: TypeDefs
const TYPEDEFS = gql`
type Query {
    test_query: Joke
  }
type Joke {
    categories:[String]
    created_at: String!
    id:ID!
    updated_at:String!
    url:String
    icon_url:String     
    value: String!
  }

  type category{
      name:
  }
`;
// Exports
export default TYPEDEFS;