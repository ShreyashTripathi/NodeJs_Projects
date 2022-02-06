// import { movieAPI } from "./datasources.js";

export const resolvers = {
  Query:
    {
      // movie: async (_, { id }, { datasource }) => {
      //   return movieAPI.getMovie(id);
      // },
      nowPlayingMovies: async (_, __, { datasource }) => {
        return datasource.movieAPI.getNowPlayingMovies();
      }
    }
};

// export.module =  resolvers;