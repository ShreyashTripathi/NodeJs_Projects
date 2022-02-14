import { gql} from 'apollo-server';

//defined schema
export const typeDefs = gql`
  type movie {
    id: Int
    title: String
    overview: String
  }
  type Query {
    movie(id: Int!): movie!
    nowPlayingMovies(limit: Int): [movie!]
  }
`;