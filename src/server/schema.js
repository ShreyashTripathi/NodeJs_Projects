import { gql} from 'apollo-server';

//defined schema
export const typeDefs = gql`
  type movie {
    id: Int
    title: String
    overview: String
  }
  type Query {
    nowPlayingMovies: [movie!]
  }
`;