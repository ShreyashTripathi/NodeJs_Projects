import { ApolloServer } from 'apollo-server';
import { resolvers } from './resolvers.js';
import { typeDefs } from './schema.js';
import { MovieAPI } from './datasources.js'


const server = new ApolloServer({typeDefs,
    resolvers,
    dataSources: () => ({
          movieAPI: new MovieAPI()
        }),    
});
server.listen({port: 9001})
.then(({url}) => console.log(`Server running at ${url}`));