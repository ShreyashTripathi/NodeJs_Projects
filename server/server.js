const { gql,ApolloServer} = require ('apollo-server');

//defined schema
const typeDefs = gql`
  type Query {
    id: Int
    name: String
    marks: Int
  }
`;

//defined resolvers (can be any data source including DB / any other API)
const resolvers = {
    Query:{
      id: () => 69,  
      name: () => 'Scarlett',
      marks: () => 99
    }
};

// server set-up
const server = new ApolloServer({typeDefs,resolvers});
server.listen({port: 9000})
.then(({url}) => console.log(`Server running at ${url}`));