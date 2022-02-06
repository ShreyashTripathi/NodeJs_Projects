import { ApolloServer } from 'apollo-server';
import { resolvers } from './resolvers.js';
import { typeDefs } from './schema.js';
import { MovieAPI } from './datasources.js'

// //defined schema
// const typeDefs = gql`
//   type movie {
//     id: Int
//     title: String
//     overview: String
//   }
//   type Query {
//     nowPlayingMovies: [movie!]
//   }
// `;

//defined resolvers (can be any data source including DB / any other API)
// const resolvers = {
//     Query:{
//       id: () => 69,  
//       name: () => 'Scarlett',
//       marks: () => 99
//     }
// };

// server set-up
const server = new ApolloServer({typeDefs,
    resolvers,
    dataSources: () => {
        return {
          movieAPI: new MovieAPI()
        };
      },    
});
server.listen({port: 9000})
.then(({url}) => console.log(`Server running at ${url}`));